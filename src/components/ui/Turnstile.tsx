"use client";

import { useEffect, useRef } from "react";

import { siteConfig } from "@/config/site";

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  scriptPromise ??= new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile unavailable")));
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

type TurnstileProps = {
  /** Must match the action the server checks for this form. */
  action: string;
  /** Change this value to reset the widget (tokens are single-use). */
  resetKey?: number;
  onTokenChange?: (token: string | null) => void;
  className?: string;
};

/** Cloudflare Turnstile widget. Adds a hidden `cf-turnstile-response` field to the surrounding form. */
export function Turnstile({ action, resetKey, onTokenChange, className }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  });

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current || widgetIdRef.current) return;
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteConfig.turnstileSiteKey,
          action,
          theme: "auto",
          callback: (token: string) => onTokenChangeRef.current?.(token),
          "expired-callback": () => onTokenChangeRef.current?.(null),
          "error-callback": () => onTokenChangeRef.current?.(null),
        });
      })
      .catch(() => onTokenChangeRef.current?.(null));

    return () => {
      cancelled = true;
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [action]);

  useEffect(() => {
    if (!resetKey || !widgetIdRef.current) return;
    window.turnstile?.reset(widgetIdRef.current);
    onTokenChangeRef.current?.(null);
  }, [resetKey]);

  return <div ref={containerRef} className={className} />;
}

/** Off-screen honeypot input; real visitors never see or fill it. */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

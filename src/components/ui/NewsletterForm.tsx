"use client";

import { startTransition, useActionState, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import { subscribeNewsletter, type FormState } from "@/app/actions/forms";
import { Button } from "@/components/ui/Button";
import { HoneypotField, Turnstile } from "@/components/ui/Turnstile";

const initialState: FormState = { status: "idle", message: "", attempt: 0 };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => formAction(formData));
  };

  if (state.status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 size={18} className="shrink-0" />
        <span>{state.message}</span>
      </div>
    );
  }

  return (
    <form className="relative space-y-3" onSubmit={handleSubmit}>
      <HoneypotField />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email..."
          className="min-h-12 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-background)] px-5 text-sm text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-violet-500/20 shadow-sm"
        />
        <Button type="submit" variant="gradient" size="md" disabled={pending || !token}>
          {pending ? "Subscribing…" : "Subscribe Free"}
        </Button>
      </div>
      <Turnstile action="newsletter" resetKey={state.attempt} onTokenChange={setToken} className="min-h-[65px]" />
      {state.status === "error" ? (
        <p role="alert" className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
          <AlertCircle size={16} className="shrink-0" />
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

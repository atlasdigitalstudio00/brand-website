"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { submitContact, type FormState } from "@/app/actions/forms";
import { Button } from "@/components/ui/Button";
import { HoneypotField, Turnstile } from "@/components/ui/Turnstile";

const initialState: FormState = { status: "idle", message: "", attempt: 0 };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [token, setToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form
      ref={formRef}
      className="relative max-w-2xl space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => formAction(formData));
      }}
    >
      <HoneypotField />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-[var(--color-foreground)]">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ada Lovelace"
            className="mt-2 min-h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] outline-none transition-all focus:border-[var(--color-accent)] focus:ring-2 focus:ring-violet-500/20 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-[var(--color-foreground)]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ada@example.com"
            className="mt-2 min-h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] outline-none transition-all focus:border-[var(--color-accent)] focus:ring-2 focus:ring-violet-500/20 shadow-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-[var(--color-foreground)]">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder="Resource question, feedback, or collaboration..."
          className="mt-2 min-h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] outline-none transition-all focus:border-[var(--color-accent)] focus:ring-2 focus:ring-violet-500/20 shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-[var(--color-foreground)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message here..."
          className="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-card)] p-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] outline-none transition-all focus:border-[var(--color-accent)] focus:ring-2 focus:ring-violet-500/20 shadow-sm resize-none"
        />
      </div>

      <Turnstile action="contact" resetKey={state.attempt} onTokenChange={setToken} className="min-h-[65px]" />

      <div className="pt-2">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          disabled={pending || !token}
          rightIcon={<Send size={16} />}
        >
          {pending ? "Sending…" : "Send Message"}
        </Button>
      </div>

      {state.status === "success" ? (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          <CheckCircle2 size={18} className="shrink-0" />
          <span>{state.message}</span>
        </div>
      ) : state.status === "error" ? (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-medium text-red-600 dark:text-red-400"
        >
          <AlertCircle size={18} className="shrink-0" />
          <span>{state.message}</span>
        </div>
      ) : (
        <p className="text-xs text-[var(--color-muted-foreground)]">
          We respect your privacy and will never share your email address.
        </p>
      )}
    </form>
  );
}

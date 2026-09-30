"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="max-w-2xl space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
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

      <div className="pt-2">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          rightIcon={<Send size={16} />}
        >
          Send Message
        </Button>
      </div>

      {submitted ? (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          <CheckCircle2 size={18} className="shrink-0" />
          <span>Thank you! Your message was recorded. (Frontend demo placeholder mode).</span>
        </div>
      ) : (
        <p className="text-xs text-[var(--color-muted-foreground)]">
          We respect your privacy and will never share your email address.
        </p>
      )}
    </form>
  );
}

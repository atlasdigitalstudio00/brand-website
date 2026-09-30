"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 size={18} className="shrink-0" />
        <span>You're in! Check your inbox for the welcome dispatch.</span>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
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
      <Button type="submit" variant="gradient" size="md">
        Subscribe Free
      </Button>
    </form>
  );
}

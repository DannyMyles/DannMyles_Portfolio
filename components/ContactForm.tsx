"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim() || `New message from ${profile.fullName} portfolio`,
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message ?? "Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/80">
            Your name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground/80">
            Phone (optional)
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Subject
        </label>
        <input id="subject" name="subject" type="text" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </motion.button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-accent">
            Thanks — your message is on its way. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-500">
            Something went wrong. Please fill in the required fields, or email me directly.
          </p>
        )}
        {status === "not-configured" && (
          <p className="text-sm font-medium text-red-500">
            The contact form isn&apos;t wired up yet — please email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

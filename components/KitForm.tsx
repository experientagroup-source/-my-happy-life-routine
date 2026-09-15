"use client";

import { useState, type FormEvent } from "react";

type KitFormProps = {
  buttonLabel: string;
  placeholder?: string;
  emailPlaceholder?: string;
  variant?: "light" | "dark";
  /** Kit form id from the official embed, e.g. "9913602". Omit to leave
   * the form unwired (renders the design only, submits nowhere). */
  kitFormId?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

/**
 * When kitFormId is supplied, this posts directly to Kit's official
 * subscribe endpoint (https://app.kit.com/forms/{id}/subscriptions).
 *
 * This does NOT rely on Kit's own ck.5.js to handle the submit. That
 * script treats a "quarantined" response (Kit's anti-abuse hold, e.g.
 * from rapid repeat test submissions) the same as "success" whenever no
 * reCAPTCHA guard is configured on the form, which is our case — so it
 * shows "thank you" even when no subscriber was actually created. Here we
 * read Kit's real JSON response ourselves and only show success when
 * `status === "success"`; anything else shows an error and logs the full
 * response to the console for diagnosis.
 */
export default function KitForm({
  buttonLabel,
  placeholder = "Your first name",
  emailPlaceholder = "Your email",
  variant = "light",
  kitFormId,
}: KitFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Fields get their own full-width row (or a half row for the name pair)
  // instead of sharing one flex-wrap row — with 4 items (name/name/email/
  // button) squeezed into one row, each field collapsed to a sliver too
  // narrow to read or click into.
  const fieldClass =
    variant === "dark"
      ? "w-full min-w-0 bg-transparent border border-mhr-cream/40 text-mhr-cream px-4 py-3 text-sm placeholder:text-mhr-cream/55 focus:outline-none focus:border-mhr-gold-soft"
      : "w-full min-w-0 bg-transparent border border-mhr-ink/30 text-mhr-ink px-4 py-3 text-sm placeholder:text-mhr-ink-soft/60 focus:outline-none focus:border-mhr-gold";
  const textClass = variant === "dark" ? "text-mhr-cream" : "text-mhr-ink";

  const connected = Boolean(kitFormId);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!connected || !kitFormId) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(`https://app.kit.com/forms/${kitFormId}/subscriptions`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => null);

      // Diagnostic logging: shows Kit's real status/response for every
      // submission, so a "quarantined" or error response is visible in
      // the console during testing instead of being silently swallowed.
      console.log(`[KitForm ${kitFormId}] response`, res.status, data);

      if (res.ok && data?.status === "success") {
        setStatus("success");
      } else if (data?.status === "quarantined") {
        setStatus("error");
        setErrorMessage(
          "Kit is holding this signup for review and hasn't confirmed it yet. Please try again shortly, or email us directly if it keeps happening."
        );
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong and this didn't go through. Please try again.");
      }
    } catch (err) {
      console.error(`[KitForm ${kitFormId}] network error`, err);
      setStatus("error");
      setErrorMessage("Something went wrong and this didn't go through. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`${textClass} text-sm space-y-2`}>
        <p>Your Happy Life Routine is on its way ❤️</p>
        <p>Check your inbox for an email from Natascha Wright.</p>
        <p>
          Can&rsquo;t see it? Please check your Spam/Junk or Promotions
          folder and mark the email as Not Spam.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 w-full max-w-md min-w-0"
      action={connected ? `https://app.kit.com/forms/${kitFormId}/subscriptions` : undefined}
      method={connected ? "post" : undefined}
      onSubmit={connected ? handleSubmit : (e) => e.preventDefault()}
    >
      {status === "error" && (
        <p className="text-xs text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <input type="text" name="fields[first_name]" className="mhr-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input
        type="text"
        name="first_name"
        placeholder={placeholder}
        required
        className={fieldClass}
      />
      <input
        type="email"
        name="email_address"
        placeholder={emailPlaceholder}
        required
        className={fieldClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-display text-xs uppercase tracking-[0.14em] px-6 py-3 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors whitespace-nowrap self-start disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
}

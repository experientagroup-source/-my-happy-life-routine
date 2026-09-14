"use client";

type KitFormProps = {
  buttonLabel: string;
  placeholder?: string;
};

/**
 * Integration point for the Kit inline form "My Happy Life Routine – Free
 * Guide" (already created in Kit, per the project brief). No embed code or
 * form ID was found in the project materials at build time, so this
 * renders the correct visual design without a real Kit account/form ID
 * wired in — it does not submit anywhere yet.
 *
 * To finish: replace the <form> below with Kit's own inline-form embed
 * snippet for "My Happy Life Routine – Free Guide" (Kit dashboard → Grow →
 * Landing Pages & Forms → that form → Embed), or drop in its numeric form
 * ID and uncomment the action URL.
 */
export default function KitForm({ buttonLabel, placeholder = "Your first name" }: KitFormProps) {
  return (
    <form
      className="flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full max-w-md min-w-0"
      // action={`https://app.kit.com/forms/REPLACE_FORM_ID/subscriptions`}
      // method="post"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" name="fields[first_name]" className="mhr-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input
        type="text"
        name="first_name"
        placeholder={placeholder}
        required
        className="flex-1 min-w-0 bg-transparent border border-mhr-ink/30 px-4 py-3 text-sm placeholder:text-mhr-ink-soft/60 focus:outline-none focus:border-mhr-gold"
      />
      <input
        type="email"
        name="email_address"
        placeholder="Your email"
        required
        className="flex-1 min-w-0 bg-transparent border border-mhr-ink/30 px-4 py-3 text-sm placeholder:text-mhr-ink-soft/60 focus:outline-none focus:border-mhr-gold"
      />
      <button
        type="submit"
        className="font-display text-xs uppercase tracking-[0.14em] px-6 py-3 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors whitespace-nowrap"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

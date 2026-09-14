"use client";

type KitFormProps = {
  buttonLabel: string;
  placeholder?: string;
  showLastName?: boolean;
  variant?: "light" | "dark";
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
export default function KitForm({
  buttonLabel,
  placeholder = "Your first name",
  showLastName = false,
  variant = "light",
}: KitFormProps) {
  // Fields get their own full-width row (or a half row for the name pair)
  // instead of sharing one flex-wrap row — with 4 items (name/name/email/
  // button) squeezed into one row, each field collapsed to a sliver too
  // narrow to read or click into.
  const fieldClass =
    variant === "dark"
      ? "w-full min-w-0 bg-transparent border border-mhr-cream/40 text-mhr-cream px-4 py-3 text-sm placeholder:text-mhr-cream/55 focus:outline-none focus:border-mhr-gold-soft"
      : "w-full min-w-0 bg-transparent border border-mhr-ink/30 text-mhr-ink px-4 py-3 text-sm placeholder:text-mhr-ink-soft/60 focus:outline-none focus:border-mhr-gold";

  return (
    <form
      className="flex flex-col gap-3 w-full max-w-md min-w-0"
      // action={`https://app.kit.com/forms/REPLACE_FORM_ID/subscriptions`}
      // method="post"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" name="fields[first_name]" className="mhr-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {showLastName ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="first_name"
            placeholder={placeholder}
            required
            className={fieldClass}
          />
          <input
            type="text"
            name="fields[last_name]"
            placeholder="Your last name"
            required
            className={fieldClass}
          />
        </div>
      ) : (
        <input
          type="text"
          name="first_name"
          placeholder={placeholder}
          required
          className={fieldClass}
        />
      )}
      <input
        type="email"
        name="email_address"
        placeholder="Your email"
        required
        className={fieldClass}
      />
      <button
        type="submit"
        className="font-display text-xs uppercase tracking-[0.14em] px-6 py-3 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors whitespace-nowrap self-start"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

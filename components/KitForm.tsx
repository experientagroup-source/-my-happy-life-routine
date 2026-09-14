"use client";

type KitFormProps = {
  buttonLabel: string;
  placeholder?: string;
  emailPlaceholder?: string;
  variant?: "light" | "dark";
  /** Kit form id from the official embed, e.g. "9913602". Omit to leave
   * the form unwired (renders the design only, submits nowhere). */
  kitFormId?: string;
  /** Kit's data-uid from the official embed, e.g. "ce0b024d2e". */
  kitFormUid?: string;
};

/**
 * When kitFormId is supplied, this posts directly to Kit's official
 * subscribe endpoint (https://app.kit.com/forms/{id}/subscriptions) using
 * the exact action URL, data-sv-form/data-uid, and email_address field
 * name from Kit's own embed snippet. Kit's ck.5.js script (loaded once in
 * app/layout.tsx) progressively enhances any matching form into an inline
 * AJAX submit with success/error messaging; without it (or if kitFormId is
 * omitted), the form still submits as a plain HTML POST.
 */
export default function KitForm({
  buttonLabel,
  placeholder = "Your first name",
  emailPlaceholder = "Your email",
  variant = "light",
  kitFormId,
  kitFormUid,
}: KitFormProps) {
  // Fields get their own full-width row (or a half row for the name pair)
  // instead of sharing one flex-wrap row — with 4 items (name/name/email/
  // button) squeezed into one row, each field collapsed to a sliver too
  // narrow to read or click into.
  const fieldClass =
    variant === "dark"
      ? "w-full min-w-0 bg-transparent border border-mhr-cream/40 text-mhr-cream px-4 py-3 text-sm placeholder:text-mhr-cream/55 focus:outline-none focus:border-mhr-gold-soft"
      : "w-full min-w-0 bg-transparent border border-mhr-ink/30 text-mhr-ink px-4 py-3 text-sm placeholder:text-mhr-ink-soft/60 focus:outline-none focus:border-mhr-gold";

  const connected = Boolean(kitFormId);

  return (
    <form
      className="seva-form formkit-form flex flex-col gap-3 w-full max-w-md min-w-0"
      action={connected ? `https://app.kit.com/forms/${kitFormId}/subscriptions` : undefined}
      method={connected ? "post" : undefined}
      data-sv-form={connected ? kitFormId : undefined}
      data-uid={connected ? kitFormUid : undefined}
      onSubmit={connected ? undefined : (e) => e.preventDefault()}
    >
      <ul className="formkit-alert formkit-alert-error text-xs text-red-600 list-none p-0 m-0" data-element="errors" data-group="alert" />
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
        className="font-display text-xs uppercase tracking-[0.14em] px-6 py-3 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors whitespace-nowrap self-start"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — My Happy Life Routine",
};

export default function PrivacyPage() {
  return (
    <section className="bg-mhr-ivory">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
          Privacy
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-mhr-ink mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-mhr-ink-soft leading-relaxed">
          <p>
            My Happy Life Routine is presented by Natascha Wright and
            operated within {site.companyName} (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;). This policy explains what information this
            website actually collects and how it&rsquo;s used — nothing
            more.
          </p>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              What we collect
            </h2>
            <p className="mb-3">
              If you sign up for the free guide (&ldquo;10 Small Habits I
              Live By&rdquo;) or the Happy Life Letter, we collect the first
              name and email address you provide through our sign-up form.
              We do not collect any other personal data through this site.
            </p>
            <p>
              If you email us directly at{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-mhr-gold hover:text-mhr-ink">
                {site.contactEmail}
              </a>
              , we hold that correspondence in order to reply to you.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              How we use it
            </h2>
            <p>
              Your name and email are used to send you the free guide you
              requested, and — only if you separately opt in — the Happy
              Life Letter and related updates from Natascha. We use Kit
              (kit.com) as our email service provider to store this
              information and send these emails. Every email includes an
              unsubscribe link, and you can opt out at any time.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              Automated email sequences
            </h2>
            <p>
              At the time of writing, this site does not run an automated
              welcome-email sequence — that Kit feature has not yet been
              activated on this account. If and when it is, this policy will
              be updated to describe it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              Cookies &amp; analytics
            </h2>
            <p>
              This site does not currently use analytics or tracking
              cookies. If that changes, this policy will be updated to name
              the specific tool and what it collects, before it goes live.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              Your rights
            </h2>
            <p>
              You can ask us what information we hold about you, ask us to
              correct it, or ask us to delete it, at any time, by emailing{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-mhr-gold hover:text-mhr-ink">
                {site.contactEmail}
              </a>
              . You can also unsubscribe from any email using the link in
              that email.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-mhr-ink mb-3">
              Contact
            </h2>
            <p>
              {site.companyName} — {site.contactEmail}. Further company
              registration details are available on request and will be
              added here once finalised for this project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

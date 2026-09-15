import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Notice for My Happy Life Routine",
};

export default function LegalPage() {
  return (
    <section className="bg-mhr-ivory">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
          Legal
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-mhr-ink mb-10">
          Legal Notice / Imprint
        </h1>

        <div className="space-y-6 text-mhr-ink-soft leading-relaxed">
          <p>My Happy Life Routine is presented by Natascha Wright and operated by:</p>

          <p className="text-mhr-ink font-medium">{site.companyName}</p>

          <p>
            Registered address, company registration number and VAT ID: to
            be added here once confirmed. See this project&rsquo;s
            outstanding items. This site will not display placeholder or
            invented registration details in the meantime.
          </p>

          <p>
            Contact:{" "}
            <a href={`mailto:${site.contactEmail}`} className="text-mhr-gold hover:text-mhr-ink">
              {site.contactEmail}
            </a>
          </p>

          <p>
            Related site:{" "}
            <a href={site.experientaWebsite} className="text-mhr-gold hover:text-mhr-ink">
              {site.experientaWebsite}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

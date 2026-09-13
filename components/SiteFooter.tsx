import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-mhr-charcoal text-mhr-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/signature-gold.png"
              alt="Natascha Wright"
              width={160}
              height={88}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-mhr-cream/70 leading-relaxed max-w-xs">
              My Happy Life Routine is a personal lifestyle world presented by
              Natascha Wright — small habits, real life, no perfection required.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mhr-gold-soft mb-4">
              Stay Connected With Natascha
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={site.nataschaWebsite}
                  className="hover:text-mhr-gold-soft transition-colors"
                >
                  Natascha Wright — Official Website
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="hover:text-mhr-gold-soft transition-colors"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <Link
                  href="/#letter"
                  className="hover:text-mhr-gold-soft transition-colors"
                >
                  Join the Happy Life Letter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mhr-gold-soft mb-4">
              Information
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy/" className="hover:text-mhr-gold-soft transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/" className="hover:text-mhr-gold-soft transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <a
                  href={site.experientaWebsite}
                  className="hover:text-mhr-gold-soft transition-colors"
                >
                  The Experienta Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-mhr-cream/10 text-xs text-mhr-cream/50">
          {site.copyrightLine}
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";
import MobileNav from "@/components/MobileNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-mhr-ivory/95 backdrop-blur-sm border-b border-mhr-line relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/signature-gold.png"
            alt="Natascha Wright"
            width={140}
            height={77}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-mhr-ink-soft hover:text-mhr-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#guide"
            className="hidden sm:inline-block font-display text-xs uppercase tracking-[0.14em] px-5 py-2.5 border border-mhr-gold text-mhr-ink hover:bg-mhr-gold hover:text-mhr-ivory transition-colors whitespace-nowrap"
          >
            Get the Free Guide
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

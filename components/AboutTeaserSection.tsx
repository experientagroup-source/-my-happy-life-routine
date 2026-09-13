import Image from "next/image";
import Link from "next/link";

export default function AboutTeaserSection() {
  return (
    <section className="bg-mhr-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
          <Image
            src="/images/natascha-artist-portrait.jpg"
            alt="Natascha Wright"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            About Natascha
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink mb-6">
            Artist. Woman. Traveller.
          </h2>
          <p className="text-mhr-ink-soft leading-relaxed mb-4 max-w-md">
            Natascha Wright has spent decades as an international performing
            artist — travelling, performing, moving between countries,
            managing businesses and family life on an irregular schedule.
          </p>
          <p className="text-mhr-ink-soft leading-relaxed mb-8 max-w-md">
            My Happy Life Routine grew out of that life: the small,
            maintainable habits that help her feel grounded, happy and more
            like herself, wherever she happens to be.
          </p>
          <Link
            href="/about/"
            className="font-display text-xs uppercase tracking-[0.16em] px-7 py-3.5 border border-mhr-gold text-mhr-ink hover:bg-mhr-gold hover:text-mhr-ivory transition-colors inline-block"
          >
            More About Natascha
          </Link>
        </div>
      </div>
    </section>
  );
}

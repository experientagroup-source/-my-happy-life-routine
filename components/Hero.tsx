import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mhr-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[86vh] md:min-h-[90vh] py-16 md:py-0">
        <div className="order-2 md:order-1 mhr-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            My Happy Life Routine
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4vw] leading-[1.05] text-mhr-ink mb-3">
            10 Small Habits
            <br />
            I Live By
          </h1>
          <p className="font-display italic text-lg text-mhr-ink-soft mb-8">
            by Natascha Wright
          </p>
          <p className="text-base sm:text-lg text-mhr-ink-soft leading-relaxed max-w-md mb-10">
            You don&rsquo;t have to wait for someday to feel good about your
            life.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#guide"
              className="font-display text-xs uppercase tracking-[0.16em] px-7 py-3.5 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors"
            >
              Get My Free Routine
            </a>
            <a
              href="#routine"
              className="font-display text-xs uppercase tracking-[0.16em] px-7 py-3.5 border border-mhr-gold text-mhr-ink hover:bg-mhr-gold hover:text-mhr-ivory transition-colors"
            >
              Discover My Routine
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto md:h-[72vh] mhr-fade-up">
          <Image
            src="/images/natascha-cafe.jpg"
            alt="Natascha Wright"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover object-[center_20%] rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

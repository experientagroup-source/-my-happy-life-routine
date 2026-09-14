import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mhr-ivory">
      <div className="grid md:grid-cols-2 items-center min-h-[86vh] md:min-h-[90vh]">
        <div className="order-2 md:order-1 px-5 sm:px-8 md:pl-8 md:pr-10 lg:pl-16 lg:pr-14 py-16 md:py-0 mhr-fade-up">
          <div className="max-w-md mx-auto md:mx-0">
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
        </div>

        <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto h-[58vh] md:h-[90vh] mhr-fade-up">
          <Image
            src="/images/natascha-natural-portrait.jpg"
            alt="Natascha Wright"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[50%_15%] md:object-[50%_20%]"
          />
        </div>
      </div>
    </section>
  );
}

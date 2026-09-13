import Image from "next/image";
import KitForm from "@/components/KitForm";

export default function FreeGuideSection() {
  return (
    <section id="guide" className="bg-mhr-ivory scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Editorial cover mockup — recreates the PDF's own cover
            typography rather than a screenshot, since the final PDF is
            still being adjusted (brief §10). */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="aspect-[3/4] w-full max-w-sm bg-mhr-ivory-soft border border-mhr-line shadow-[0_30px_60px_-25px_rgba(33,29,24,0.35)] p-8 flex flex-col justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-mhr-ink-soft">
              My Happy Life Routine · Natascha Wright
            </p>
            <div>
              <p className="font-display italic text-lg text-mhr-gold mb-1">
                10 Small Habits
              </p>
              <h3 className="font-display text-4xl sm:text-5xl text-mhr-ink leading-[0.95] mb-4">
                I Live By
              </h3>
              <p className="font-display italic text-sm text-mhr-ink-soft max-w-[220px]">
                Little things that help me feel happier, healthier &amp; a
                little more balanced.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-mhr-ink-soft">
                A free guide
              </p>
              <Image
                src="/images/signature-gold.png"
                alt="Natascha Wright"
                width={110}
                height={60}
                className="h-7 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            My Happy Life Routine · 10 Small Habits I Live By
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink mb-6">
            A little piece of my routine,
            <br />
            from me to you.
          </h2>
          <p className="text-mhr-ink-soft leading-relaxed mb-10 max-w-md">
            The full guide walks through all ten habits, plus the little
            rituals behind them. Enter your name and email and I&rsquo;ll
            send it straight to your inbox.
          </p>
          <KitForm buttonLabel="Send Me the Free Guide" />
          <p className="text-xs text-mhr-ink-soft/70 mt-4 max-w-md">
            No spam — just this guide, and the option to hear from me again
            through the Happy Life Letter.
          </p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Natascha — My Happy Life Routine",
  description:
    "Artist, woman, traveller — the story behind My Happy Life Routine.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-mhr-ivory">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
              About Natascha
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-mhr-ink mb-8">
              An elegant woman
              <br />
              sharing how she
              <br />
              actually lives.
            </h1>
            <div className="space-y-5 text-mhr-ink-soft leading-relaxed max-w-md">
              <p>
                Natascha Wright is an international performing artist who
                has spent decades travelling, performing and living out of
                suitcases — moving between countries, managing businesses,
                family life and irregular schedules.
              </p>
              <p>
                That background is part of why these routines matter. My
                Happy Life Routine isn&rsquo;t a wellness brand or a fitness
                programme. It&rsquo;s the small, real things Natascha does
                to feel grounded, happy, feminine and a little more like
                herself — wherever she happens to be.
              </p>
              <p className="font-display italic text-lg text-mhr-ink">
                &ldquo;I refuse to make my happiness dependent on someday. I
                want some of it now.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <Image
              src="/images/natascha-artist-portrait.jpg"
              alt="Natascha Wright"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-mhr-ivory-soft">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto order-2 md:order-1">
            <Image
              src="/images/family-moment.jpg"
              alt="Natascha Wright with family"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
              Family &amp; Energy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink mb-6">
              Not everything
              <br />
              deserves her energy.
            </h2>
            <p className="text-mhr-ink-soft leading-relaxed max-w-md mb-4">
              As she&rsquo;s gotten a little older, Natascha has become more
              selective about where she spends her energy — staying close
              to family and the people she loves, and choosing positive
              people who bring something good into a room.
            </p>
            <p className="text-mhr-ink-soft leading-relaxed max-w-md">
              That same philosophy — real life, small routines, no
              perfection required — is what My Happy Life Routine shares
              with you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mhr-ivory">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 md:py-24 text-center">
          <p className="text-mhr-ink-soft leading-relaxed max-w-xl mx-auto mb-8">
            Music and performance have been part of Natascha&rsquo;s life
            for decades. My Happy Life Routine is her personal world — the
            wider Natascha Wright artist world lives on her own site.
          </p>
          <Link
            href="https://natascha-wright.com/"
            className="font-display text-xs uppercase tracking-[0.16em] text-mhr-gold hover:text-mhr-ink transition-colors border-b border-mhr-gold pb-1"
          >
            Visit Natascha Wright&rsquo;s Official Website →
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

export default function ClosingNoteSection() {
  return (
    <section className="bg-mhr-ivory">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[9/16]">
          <Image
            src="/images/natascha-cafe.jpg"
            alt="Natascha Wright"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-16 py-16 md:py-0">
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            A Note To Take With You
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink mb-8">
            A happy life isn&rsquo;t
            <br />a perfect life.
          </h2>
          <div className="space-y-4 text-mhr-ink-soft leading-relaxed max-w-md">
            <p>
              There will be busy days. Travel days. Lazy days. Days when the
              routine completely disappears.
            </p>
            <p className="font-display italic text-mhr-ink">
              The goal isn&rsquo;t to create a routine you never break. The
              goal is knowing how to find your way back.
            </p>
            <p>Make ordinary moments feel a little special.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

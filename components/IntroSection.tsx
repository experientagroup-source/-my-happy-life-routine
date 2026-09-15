export default function IntroSection() {
  return (
    <section className="bg-mhr-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            A Little Note From Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink mb-8">
            Feeling good is often
            <br />
            in the small things.
          </h2>
          <div className="space-y-5 text-mhr-ink-soft leading-relaxed">
            <p>
              As a professional artist, I&rsquo;ve spent much of my life
              travelling, performing and living out of suitcases. Along the
              way, I&rsquo;ve discovered simple little routines that help me
              feel grounded, happy and more like myself, wherever I happen
              to be.
            </p>
            <p>
              I don&rsquo;t do everything perfectly. I still sometimes reach
              for my phone when I wake up. I love a cappuccino and a
              croissant when I&rsquo;m travelling. Some days I exercise. Some
              days I don&rsquo;t. And that&rsquo;s okay.
            </p>
            <p className="font-display italic text-lg text-mhr-ink">
              My Happy Life Routine isn&rsquo;t about perfection. It&rsquo;s
              about creating little habits that make life feel better, and
              that you can actually maintain.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-display text-2xl sm:text-3xl leading-snug text-mhr-ink mb-10">
            You don&rsquo;t need a whole new life. Sometimes you just need a
            few better habits.
          </p>
          <div className="mhr-hairline w-24 mb-10" />
          <p className="text-xs uppercase tracking-[0.2em] text-mhr-ink space-y-2 flex flex-col gap-2">
            <span>Small changes.</span>
            <span>Real life.</span>
            <span className="text-mhr-gold">No punishment.</span>
            <span className="text-mhr-gold">No perfection.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

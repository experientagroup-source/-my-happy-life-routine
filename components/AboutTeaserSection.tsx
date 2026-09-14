import Image from "next/image";
import Link from "next/link";

export default function AboutTeaserSection() {
  return (
    <section className="bg-mhr-ivory">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch md:min-h-[720px]">
        <div className="relative w-full h-[64vh] md:h-auto">
          <Image
            src="/images/natascha-artist-portrait.jpg"
            alt="Natascha Wright"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-bottom"
          />
        </div>

        <div className="min-w-0 flex flex-col justify-center px-5 sm:px-8 md:pl-10 md:pr-8 lg:pl-16 lg:pr-20 py-16 md:py-0">
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
            className="font-display text-xs uppercase tracking-[0.16em] px-7 py-3.5 border border-mhr-gold text-mhr-ink hover:bg-mhr-gold hover:text-mhr-ivory transition-colors inline-block w-fit"
          >
            More About Natascha
          </Link>
        </div>
      </div>
    </section>
  );
}

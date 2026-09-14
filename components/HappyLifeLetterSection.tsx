import Image from "next/image";
import KitForm from "@/components/KitForm";

export default function HappyLifeLetterSection() {
  return (
    <section id="letter" className="bg-mhr-charcoal text-mhr-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold-soft mb-6">
            The Happy Life Letter
          </p>
          <h2 className="font-display italic text-3xl sm:text-4xl leading-tight mb-8">
            &ldquo;A little note from my life to yours.&rdquo;
          </h2>
          <p className="text-mhr-cream/70 leading-relaxed mb-10 max-w-md">
            A thought. A song. Something making me happy this week. A place,
            a book, a moment from the road. One little thing to try — and a
            reminder that happiness doesn&rsquo;t have to wait for someday.
          </p>
          <KitForm buttonLabel="Join the Happy Life Letter" />
        </div>

        <div className="relative aspect-square w-full max-w-md mx-auto">
          <Image
            src="/images/sunset-quote-card.jpg"
            alt="Make today a happy day"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

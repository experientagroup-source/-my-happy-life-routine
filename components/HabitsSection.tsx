import { habits } from "@/lib/habits";

// Preview only — the free guide is the reason to give away all ten.
const PREVIEW_NUMBERS = ["01", "02", "05"];
const previewHabits = habits.filter((h) => PREVIEW_NUMBERS.includes(h.number));
const remainingCount = habits.length - previewHabits.length;

export default function HabitsSection() {
  return (
    <section id="routine" className="bg-mhr-ivory-soft scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-mhr-gold mb-6">
            My Routine
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mhr-ink">
            A Few of the Habits I Live By
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {previewHabits.map((habit) => (
            <div key={habit.number} className="flex gap-6">
              <span className="mhr-numeral text-5xl sm:text-6xl leading-none shrink-0">
                {habit.number}
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-mhr-gold mb-2">
                  {habit.category}
                </p>
                <h3 className="font-display text-xl text-mhr-ink mb-2 leading-snug">
                  {habit.title}
                </h3>
                <p className="text-sm text-mhr-ink-soft leading-relaxed italic">
                  {habit.glimpse}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-mhr-line text-center">
          <p className="font-display italic text-lg text-mhr-ink-soft mb-8">
            + {remainingCount} more little habits inside the free guide
          </p>
          <a
            href="#guide"
            className="font-display text-xs uppercase tracking-[0.16em] px-8 py-4 bg-mhr-charcoal text-mhr-cream hover:bg-mhr-ink transition-colors inline-block"
          >
            Get All 10 Habits — Free
          </a>
        </div>
      </div>
    </section>
  );
}

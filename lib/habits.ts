export type Habit = {
  number: string;
  category: string;
  title: string;
  glimpse: string;
};

// Transcribed from "My Happy Life Routine — 10 Small Habits I Live By"
// (V2, Final Revisions) — the approved PDF, the primary visual/content
// source of truth for this site. Homepage shows only a glimpse of each;
// the full text lives in the free guide itself.
export const habits: Habit[] = [
  {
    number: "01",
    category: "Morning",
    title: "Start With Gratitude, Not Your Phone",
    glimpse:
      "Before I let the world into my morning, I try to give myself a few minutes first.",
  },
  {
    number: "02",
    category: "Movement",
    title: "Move for 20 Minutes",
    glimpse: "20 minutes is my goal. Not my rule.",
  },
  {
    number: "03",
    category: "Nourishment",
    title: "Eat Well — and Still Enjoy Your Food",
    glimpse:
      "Make good choices most of the time — and leave a little room for the things you simply enjoy.",
  },
  {
    number: "04",
    category: "Boundaries",
    title: "Protect the Way You Start Your Day",
    glimpse: "Does everything really need your attention the minute you wake up?",
  },
  {
    number: "05",
    category: "Energy & Sound",
    title: "Use Music to Change Your Energy",
    glimpse: "Music can completely change the atmosphere of an ordinary moment.",
  },
  {
    number: "06",
    category: "Self-Care & Home",
    title: "Get Ready — Even When Nobody Is Watching",
    glimpse:
      "I don't only get ready because someone else might see me. I get ready because I see me.",
  },
  {
    number: "07",
    category: "Clarity",
    title: "Get It Out of Your Head",
    glimpse: "Having a plan gives my mind somewhere to put everything.",
  },
  {
    number: "08",
    category: "People & Energy",
    title: "Be Intentional About Who Gets Your Energy",
    glimpse: "Not everything deserves my energy.",
  },
  {
    number: "09",
    category: "Evening",
    title: "Give Your Day a Gentle Ending",
    glimpse: "At some point, I need to tell my mind: we're finished for today.",
  },
  {
    number: "10",
    category: "The Most Important Habit",
    title: "Change the Thought",
    glimpse:
      "I may not control everything around me, but I can become more conscious of what I allow to live in my mind.",
  },
];

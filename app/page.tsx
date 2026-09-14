import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PhilosophySection from "@/components/PhilosophySection";
import HabitsSection from "@/components/HabitsSection";
import FreeGuideSection from "@/components/FreeGuideSection";
import HappyLifeLetterSection from "@/components/HappyLifeLetterSection";
import AboutTeaserSection from "@/components/AboutTeaserSection";
import MusicBridgeSection from "@/components/MusicBridgeSection";
import ClosingNoteSection from "@/components/ClosingNoteSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <PhilosophySection />
      <HabitsSection />
      <FreeGuideSection />
      <HappyLifeLetterSection />
      <AboutTeaserSection />
      <MusicBridgeSection />
      <ClosingNoteSection />
    </>
  );
}

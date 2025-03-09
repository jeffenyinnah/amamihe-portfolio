import AboutSection from "@/components/AboutSection";
import Clients from "@/components/Clients";
import ContactCTA from "@/components/ContactCTA";
import FeaturedProjects from "@/components/FeaturedProjects";
import GithubDisplay from "@/components/GithubDisplay";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    <div className="bg-background">
      <Hero />
      <Clients />
      <AboutSection />
      <Services />
      <FeaturedProjects />
      <GithubDisplay />
      <ContactCTA />
    </div>
  );
}

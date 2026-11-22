import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import VideosSection from "@/components/VideosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <VideosSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

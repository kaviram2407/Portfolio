import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechUniverseSection } from "@/components/sections/TechUniverseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-radial-dark overflow-hidden">
      {/* Dynamic ambient blur background glow nodes */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[85%] left-[20%] w-[450px] h-[450px] bg-rose-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Structured Sections */}
      <HeroSection />
      <AboutSection />
      <TechUniverseSection />
      <ProjectsSection />
      <ArchitectureSection />
      <TimelineSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}

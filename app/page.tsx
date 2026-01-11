"use client";

import AboutContent from "@/components/AboutContent";
import ContactContent from "@/components/ContactContent";
import { HomeContent } from "@/components/HomeContent";
import { Navbar } from "@/components/Navbar";
import ProjectsContent from "@/components/ProjectsContent";
import SkillsContent from "@/components/SkillsContent";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="min-h-screen w-full overflow-hidden bg-cover bg-center"></div>
      <div className="absolute top-0 w-full">
        <Navbar />
        <HomeContent />
      </div>
      <div>
        <AboutContent />
        <SkillsContent />
        <ProjectsContent />
        <ContactContent />
      </div>
    </div>
  );
}

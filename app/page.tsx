"use client";

import AboutContent from "@/components/AboutContent";
import ContactContent from "@/components/ContactContent";
import { HomeContent } from "@/components/HomeContent";
import { Navbar } from "@/components/Navbar";
import ProjectsContent from "@/components/ProjectsContent";
import SkillsContent from "@/components/SkillsContent";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const rootClassName = `${theme} bg-background`;

  return (
    <div className={rootClassName}>
      <div
        className="min-h-screen w-full overflow-hidden bg-cover bg-center"
        // style={{
        //   backgroundImage: "url('/assets/rain.jpg'), #000000",
        //   backgroundSize: "cover",
        // }}
      >
        {/* <div className="absolute top-0 inset-0 bg-black/60" /> */}
      </div>
      <div className="absolute top-0 w-full">
        <Navbar
          theme={theme}
          onThemeClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
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

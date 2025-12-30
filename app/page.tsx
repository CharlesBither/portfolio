import AboutContent from '@/components/AboutContent';
import { HomeContent } from '@/components/HomeContent';
import { Navbar } from '@/components/Navbar';
import ProjectsContent from '@/components/ProjectsContent';
import SkillsContent from '@/components/SkillsContent';

export default function Home() {
  return (
    <div>
      <div
        className="absolute top-0 min-h-screen w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/seattleO.jpg')", zIndex: -1 }}>
        {/* Dark Overlay */}
        <div className="absolute top-0 inset-0 bg-black/60" />
      </div>
      <Navbar />
      <HomeContent />
      <AboutContent />
      <SkillsContent />
      <ProjectsContent />
    </div>
  );
}

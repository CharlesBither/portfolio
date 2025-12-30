import AboutContent from '@/components/AboutContent';
import ContactContent from '@/components/ContactContent';
import { HomeContent } from '@/components/HomeContent';
import { Navbar } from '@/components/Navbar';
import ProjectsContent from '@/components/ProjectsContent';
import SkillsContent from '@/components/SkillsContent';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div
        className="min-h-screen w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/rain.jpg')", backgroundSize: 'cover' }}>
        {/* Dark Overlay */}
        <div className="absolute top-0 inset-0 bg-black/60" />
      </div>
      <div className="absolute top-0 w-full">
        <Navbar />
        <HomeContent />
        <AboutContent />
        <SkillsContent />
        <ProjectsContent />
        <ContactContent />
      </div>
    </div>
  );
}

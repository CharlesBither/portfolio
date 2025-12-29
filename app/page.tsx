import { HomeContent } from '@/components/HomeContent';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div
      className="fixed top-0 min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/seattleO.jpg')" }}>
      <Navbar />
      <HomeContent />
    </div>
  );
}

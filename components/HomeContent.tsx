import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HomeContent() {
  return (
    <section className="relative min-h-screen w-full text-foreground">
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-xl">
          {/* Profile Image */}
          <div className="relative mb-6 h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src="/profile.jpg" alt="Profile picture" fill className="object-cover" />
          </div>

          {/* Text */}
          <h1 className="text-3xl sm:text-4xl font-bold text-background">Charles Bither</h1>

          <p className="mt-3 text-base sm:text-lg text-gray-100">
            Full-Stack Developer • Student @ UW
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline" className="text-foreground">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

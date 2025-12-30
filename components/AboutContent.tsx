import Image from 'next/image';

export default function AboutContent() {
  return (
    <>
      <main className="container mx-auto px-6 py-16 max-w-6xl" id="about">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Computer Science student passionate about building meaningful software.
          </p>
        </section>

        {/* Content */}
        <section className="grid gap-10 md:grid-cols-[1fr_2fr] items-start">
          {/* Profile Image (optional) */}
          <div className="relative h-48 w-48 mx-auto md:mx-0 rounded-xl overflow-hidden">
            <Image src="/profile.jpg" alt="Profile picture" fill className="object-cover" />
          </div>

          {/* Text */}
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              I’m a student at the <span className="font-medium">University of Washington</span>,
              studying <span className="font-medium">Computer Science</span>, and I expect to
              graduate in <span className="font-medium">June 2027</span>.
            </p>

            <p>
              I’m especially interested in <span className="font-medium">software development</span>
              , with a focus on <span className="font-medium">web</span> and
              <span className="font-medium"> mobile development</span>. I enjoy turning ideas into
              well-designed, functional applications and care a lot about clean code, usability, and
              performance.
            </p>

            <p>
              Through coursework and personal projects, I’ve been building experience across the
              full development stack — from designing user interfaces to implementing backend logic
              and APIs. I’m always eager to learn new technologies and improve my skills by building
              real-world projects.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

import Image from 'next/image';

export default function AboutContent() {
  return (
    <>
      <main className="container mx-auto px-6 py-16 max-w-6xl" id="about">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        </section>

        {/* Content */}
        <section className="grid gap-10 md:grid-cols-[1fr_3fr] items-center">
          {/* Profile Image */}
          <div className="relative h-48 w-48 mx-auto md:mx-0 rounded-xl overflow-hidden items-center">
            <Image
              src="/assets/portraits/2022.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              I am a Computer Science student at the University of Washington, with an expected
              graduation date of June 2027.
            </p>

            <p>
              I have a strong interest in software development, particularly in web and mobile
              application development. I enjoy transforming ideas into well-designed, functional
              products and place a high value on clean code, usability, and performance.
            </p>

            <p>
              Through a combination of coursework and personal projects, I have gained experience
              across the full software development stack, from designing intuitive user interfaces
              to implementing backend logic and APIs. I am continuously motivated to expand my
              technical skill set and deepen my understanding by building practical, real-world
              applications.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactContent() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Feel free to reach out if you’d like to connect or learn more about my work.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="space-y-6">
        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <Link href="mailto:cbither@uw.edu" className="text-base hover:underline">
            cbither@uw.edu
          </Link>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <Linkedin className="h-5 w-5 text-muted-foreground" />
          <Link
            href="https://www.linkedin.com/in/charles-bither/"
            target="_blank"
            rel="noreferrer"
            className="text-base hover:underline">
            linkedin.com/in/charles-bither
          </Link>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <Github className="h-5 w-5 text-muted-foreground" />
          <Link
            href="https://github.com/CharlesBither"
            target="_blank"
            rel="noreferrer"
            className="text-base hover:underline">
            github.com/CharlesBither
          </Link>
        </div>
      </section>
    </main>
  );
}

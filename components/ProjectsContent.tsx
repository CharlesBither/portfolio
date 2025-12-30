import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Cornucopia',
    image: '/projects/cornucopia/cover.jpg',
    description:
      'A full-stack mobile application connecting charities and donors. Built end-to-end, from database schema design to frontend UX, with a focus on reducing manual coordination for nonprofit organizations.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'SleepDuo',
    image: '/projects/sleepDuo/cover.jpg',
    description:
      'An Android application that combines sleep diary functionality with advanced sleep tracking. Integrates with major wearable fitness platforms to help users understand how lifestyle choices affect sleep quality.',
    tech: ['React Native', 'Expo', 'PostgreSQL', 'Node.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    image: '/projects/cornucopia/cover.jpg',
    description:
      'A personal portfolio website built with Next.js to showcase projects, skills, and experience. Focuses on performance, accessibility, and responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    github: '#',
    demo: '#',
  },
  {
    title: 'IT Automation Tools',
    image: '/projects/cornucopia/cover.jpg',
    description:
      'A collection of automation scripts and internal tools designed to streamline IT operations, including device provisioning, reporting, and identity management workflows.',
    tech: ['Python', 'PowerShell', 'Azure AD', 'Microsoft Intune'],
    github: '#',
    demo: null,
  },
];

export default function ProjectsContent() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I’ve built through coursework, professional experience, and
          personal exploration.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col h-full">
            {/* Screenshot */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:underline">
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              )}

              {project.demo && (
                <Link
                  href={project.demo}
                  className="flex items-center gap-2 text-sm hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}

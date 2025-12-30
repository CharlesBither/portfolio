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
      'A full-stack mobile application that streamlines donations by allowing charities to post real-time needs and enabling donors to browse and filter those needs. By centralizing communication, Cornucopia reduces logistical barriers while increasing donor confidence that their contributions are received and appreciated.',
    tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/CornucopiaApp/Cornucopia',
    demo: null,
  },
  {
    title: 'SleepDuo',
    image: '/projects/sleepDuo/cover.jpg',
    description:
      'An Android application that combines sleep diary functionality with advanced sleep tracking. Integrates with major wearable fitness platforms to help users understand how lifestyle choices affect sleep quality.',
    tech: ['React Native', 'Expo', 'PostgreSQL', 'Node.js'],
    github: 'https://github.com/CharlesBither/SleepDuo',
    demo: null,
  },
  {
    title: 'Minecraft Server Dashboard ',
    image: '/projects/SG/dashCover.png',
    description:
      'A web application built with Express.js and EJS that allows users to view and explore their in-game statistics through a clean, server-rendered dashboard.',
    tech: ['EJS', 'Node.js', 'Express.js', 'Bootstrap CSS', 'MySQL'],
    github: null,
    demo: 'https://secretgarden.tech/',
  },
  {
    title: 'Minecraft Plugins',
    image: '/projects/SG/pluginsCover.png',
    description:
      'A collection of custom-built Minecraft plugins designed to enhance gameplay and server usability, including an interactive menu system for quick access to common in-game functions, a custom inventory management plugin, and additional quality-of-life features.',
    tech: ['Java', 'Maven', 'Spigot API', 'MySQL'],
    github: 'https://github.com/topics/secret-garden-mc',
    demo: null,
  },
];

export default function ProjectsContent() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-6xl" id="projects">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I’ve built through coursework and personal exploration.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col h-full">
            {/* Screenshot */}
            <div className="relative w-full aspect-video">
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

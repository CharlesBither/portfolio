import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    title: 'TypeScript / JavaScript',
    description:
      'Experience building modern web and application logic using JavaScript and TypeScript, with an emphasis on type safety, maintainability, and clean architecture across frontend and backend codebases.',
  },
  {
    title: 'Java',
    description:
      'Strong foundation in object-oriented programming, data structures, and algorithms, with experience writing structured, efficient, and readable Java applications through academic coursework and projects.',
  },
  {
    title: 'Python',
    description:
      'Used Python for scripting, automation, and data processing tasks, including building tools to improve reporting accuracy and reduce manual operational workflows.',
  },
  {
    title: 'React / React Native',
    description:
      'Developed responsive user interfaces and cross-platform mobile applications using React and React Native, focusing on reusable components, state management, and intuitive user experiences.',
  },
  {
    title: 'Expo',
    description:
      'Built and deployed cross-platform mobile applications with Expo, leveraging its tooling to streamline development, testing, and integration with native device features.',
  },
  {
    title: 'Express.js',
    description:
      'Designed and implemented backend services and RESTful APIs using Express.js, handling application logic, authentication flows, and integration with databases and third-party services.',
  },
  {
    title: 'PostgreSQL',
    description:
      'Designed relational database schemas and wrote efficient SQL queries in PostgreSQL, focusing on data integrity, performance, and scalability for full-stack applications.',
  },
];

export default function SkillsContent() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-6xl" id="skills">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Technologies and tools I’ve worked with through coursework, projects, and hands-on
          experience.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

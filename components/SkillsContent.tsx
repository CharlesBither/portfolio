import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    title: 'TypeScript / JavaScript',
    description:
      '3+ years of hands-on experience using TypeScript and JavaScript to build and maintain web and mobile applications.',
  },
  {
    title: 'Java',
    description:
      '5+ years of experience using Java through academic coursework and the development of custom video game plugins.',
  },
  {
    title: 'Python',
    description:
      'Used Python for scripting, automation, and data processing tasks, including building tools to improve reporting accuracy and reduce manual operational workflows.',
  },
  {
    title: 'React / React Native',
    description:
      'Developed responsive user interfaces and cross-platform web and mobile applications using React and React Native, focusing on reusable components, state management, and intuitive user experiences.',
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

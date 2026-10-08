import { Brain, Terminal, Monitor, FileText, MessageSquare, Puzzle, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  level: number;
  tags: string[];
  color: string;
}

const SKILLS: Skill[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Foundational AI concepts, practical applications, and responsible AI use.',
    level: 88,
    tags: ['AI Concepts', 'AI Tools', 'Responsible AI'],
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: Terminal,
    title: 'Prompt Engineering',
    description: 'Crafting effective prompts to get optimal results from AI models.',
    level: 85,
    tags: ['Prompt Design', 'AI Interaction', 'Optimization'],
    color: 'from-accent-500 to-accent-700',
  },
  {
    icon: Monitor,
    title: 'Digital Literacy',
    description: 'Internet, email, file management, and digital productivity tools.',
    level: 92,
    tags: ['Internet', 'Email', 'File Management'],
    color: 'from-success-500 to-success-700',
  },
  {
    icon: FileText,
    title: 'Microsoft Office',
    description: 'Proficient in Word, Excel, and PowerPoint for document creation.',
    level: 90,
    tags: ['Word', 'Excel', 'PowerPoint'],
    color: 'from-warning-500 to-warning-600',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    description: 'Clear, effective communication developed through Matric and practice.',
    level: 87,
    tags: ['Written', 'Verbal', 'Collaboration'],
    color: 'from-primary-600 to-accent-600',
  },
  {
    icon: Puzzle,
    title: 'Problem-Solving',
    description: 'Analytical thinking and creative approaches to real-world challenges.',
    level: 89,
    tags: ['Analytical', 'Critical Thinking', 'Adaptive'],
    color: 'from-accent-600 to-primary-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink-50 py-24 lg:py-32">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              A Blend of <span className="text-gradient">AI & Digital Skills</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Combining cutting-edge AI knowledge with essential digital and soft skills to
              deliver well-rounded, practical results.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
                {/* Hover gradient bar */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md`}>
                    <skill.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-2xl font-bold text-ink-200 transition-colors group-hover:text-ink-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {skill.description}
                </p>

                {/* Skill bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-ink-400">Proficiency</span>
                    <span className="font-semibold text-ink-700">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

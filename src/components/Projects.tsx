import { ArrowUpRight, Sparkles, Clock, Bot, BarChart3, Users, Wand2, FileSpreadsheet } from 'lucide-react';
import Reveal from './Reveal';

interface Project {
  title: string;
  category: string;
  description: string;
  status: 'completed' | 'ongoing';
  image: string;
  tags: string[];
  icon: typeof Bot;
}

const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Productivity Assistant',
    category: 'AI Application',
    description:
      'Developed a workflow that leverages AI tools and prompt engineering to automate document drafting, summarization, and data organization tasks.',
    status: 'completed',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    tags: ['AI Tools', 'Prompt Engineering', 'Automation'],
    icon: Bot,
  },
  {
    title: 'Digital Skills Training Program',
    category: 'Education & Outreach',
    description:
      'Created a structured training module covering Microsoft Office essentials, digital literacy, and responsible AI use for beginners.',
    status: 'completed',
    image: 'https://images.pexels.com/photos/39853390/pexels-photo-39853390.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    tags: ['ICDL', 'Microsoft Office', 'Training'],
    icon: FileSpreadsheet,
  },
  {
    title: 'Data Insights with AI',
    category: 'Data & Analytics',
    description:
      'A project exploring how AI can assist in analyzing data trends, generating reports, and visualizing information for better decision-making.',
    status: 'ongoing',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    tags: ['Data Analysis', 'AI', 'Visualization'],
    icon: BarChart3,
  },
  {
    title: 'AI for Team Collaboration',
    category: 'Future Project',
    description:
      'Planning an initiative to integrate AI tools into team communication and collaboration workflows to boost productivity and creativity.',
    status: 'ongoing',
    image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    tags: ['Collaboration', 'AI', 'Productivity'],
    icon: Users,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600">
              Projects & Portfolio
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              Work in <span className="text-gradient">AI & Digital Skills</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              A showcase of completed projects and upcoming initiatives that combine AI
              knowledge with digital expertise.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink-900/8">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />

                  {/* Status badge */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur ${
                        project.status === 'completed'
                          ? 'bg-success-500/90 text-white'
                          : 'bg-warning-500/90 text-white'
                      }`}
                    >
                      {project.status === 'completed' ? (
                        <Sparkles className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-primary-600 shadow-lg">
                      <project.icon className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Category */}
                  <span className="absolute bottom-5 left-20 text-sm font-medium text-white/90">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink-900 transition-colors group-hover:text-primary-600">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 to-accent-50 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-md">
                <Wand2 className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-ink-600">
                  Let's collaborate to bring your AI and digital ideas to life.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary-500/25 transition-transform hover:scale-105"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

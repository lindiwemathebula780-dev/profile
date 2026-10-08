import { Award, GraduationCap, MonitorCheck, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Credential {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
  color: string;
  bgColor: string;
}

const CREDENTIALS: Credential[] = [
  {
    icon: Award,
    title: 'Google AI Certificate',
    subtitle: 'Artificial Intelligence Foundations',
    description:
      'Certified in foundational Artificial Intelligence concepts and practical AI applications.',
    highlights: [
      'AI tools and practical applications',
      'Prompt engineering fundamentals',
      'Responsible use of AI technologies',
    ],
    badge: 'AI Certified',
    color: 'text-primary-600',
    bgColor: 'from-primary-500 to-primary-700',
  },
  {
    icon: GraduationCap,
    title: 'Matric — National Senior Certificate',
    subtitle: 'National Senior Certificate',
    description:
      'Completed Matric with a focus on developing key analytical and communication abilities.',
    highlights: [
      'Communication and interpersonal skills',
      'Problem-solving and analytical thinking',
      'Foundation for further studies',
    ],
    badge: 'Completed',
    color: 'text-accent-600',
    bgColor: 'from-accent-500 to-accent-700',
  },
  {
    icon: MonitorCheck,
    title: 'ICDL — International Computer Driving Licence',
    subtitle: 'Digital Literacy Certification',
    description:
      'Proficient in essential computer and digital skills for the modern workplace.',
    highlights: [
      'Microsoft Word, Excel, and PowerPoint',
      'Internet, email, and file management',
      'Digital productivity and collaboration',
    ],
    badge: 'ICDL Certified',
    color: 'text-success-600',
    bgColor: 'from-success-500 to-success-700',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
              Education & Certifications
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              Qualifications &{' '}
              <span className="text-gradient">Achievements</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              A foundation in AI, digital literacy, and essential skills built through
              recognized certifications and education.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary-300 via-accent-300 to-success-300 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12">
            {CREDENTIALS.map((cred, i) => (
              <Reveal key={cred.title} delay={i * 100}>
                <div
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-2 z-10 -translate-x-1/2 lg:left-1/2">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${cred.bgColor} ring-4 ring-white shadow-md`} />
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden lg:block lg:flex-1" />

                  {/* Card */}
                  <div className="ml-12 flex-1 lg:ml-0">
                    <div className="group overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink-900/5 lg:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cred.bgColor} text-white shadow-md`}>
                          <cred.icon className="h-7 w-7" />
                        </span>
                        <span className={`rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold ${cred.color}`}>
                          {cred.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                        {cred.title}
                      </h3>
                      <p className={`mt-1 text-sm font-medium ${cred.color}`}>
                        {cred.subtitle}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-ink-600">
                        {cred.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {cred.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-ink-600">
                            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${cred.bgColor}`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

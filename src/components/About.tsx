import { CheckCircle2, Target, Lightbulb, Users } from 'lucide-react';
import Reveal from './Reveal';

const VALUES = [
  {
    icon: Target,
    title: 'Goal-Driven',
    desc: 'Focused on delivering practical, results-oriented solutions with AI and digital tools.',
  },
  {
    icon: Lightbulb,
    title: 'Curious Learner',
    desc: 'Always exploring new AI technologies and finding smarter ways to work.',
  },
  {
    icon: Users,
    title: 'Clear Communicator',
    desc: 'Strong interpersonal skills that make collaboration effortless and productive.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 opacity-50 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl shadow-ink-900/10">
                <img
                  src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                  alt="Halina Mathebula working at her desk"
                  className="h-[440px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl shadow-ink-900/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink-900">ICDL Certified</p>
                    <p className="text-sm text-ink-500">Digital Literacy</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <Reveal>
              <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
                About Me
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                Bridging AI Knowledge with{' '}
                <span className="text-gradient">Digital Excellence</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">
                I'm Halina Mathebula, a motivated and digitally skilled professional with a
                strong foundation in Artificial Intelligence, computer applications, and
                digital productivity. My Google AI Certificate and ICDL certification have
                equipped me with both cutting-edge AI understanding and essential digital
                skills.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                I believe in the responsible and practical use of AI — using prompt
                engineering, digital tools, and strong communication to solve problems
                efficiently. I'm passionate about continuous learning and building solutions
                that make a real difference.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={200 + i * 80}>
                  <div className="group rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                      <value.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink-900">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

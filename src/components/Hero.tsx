import { ArrowRight, Mail, Sparkles, Brain, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pt-20"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1d6ef0 1px, transparent 1px), linear-gradient(90deg, #1d6ef0 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left content */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Google AI Certified Professional
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Halina Mathebula</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            A digitally skilled professional passionate about{' '}
            <span className="font-semibold text-ink-800">Artificial Intelligence</span>,{' '}
            <span className="font-semibold text-ink-800">prompt engineering</span>, and
            leveraging technology to solve real-world problems.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
            Combining AI knowledge with strong digital literacy and communication skills
            to deliver smart, practical solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex gap-8">
            {[
              { value: '3+', label: 'Certifications' },
              { value: '6+', label: 'Core Skills' },
              { value: 'AI', label: 'Certified' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-ink-900">{stat.value}</p>
                <p className="text-sm text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden animate-fade-in lg:block" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Floating accent cards */}
            <div className="absolute -left-8 top-12 z-20 animate-float rounded-2xl glass p-4 shadow-xl shadow-primary-500/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Brain className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">AI Knowledge</p>
                  <p className="text-xs text-ink-500">Google Certified</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-16 z-20 animate-float rounded-2xl glass p-4 shadow-xl shadow-accent-500/10"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Prompt Engineering</p>
                  <p className="text-xs text-ink-500">Practical & Responsible AI</p>
                </div>
              </div>
            </div>

            {/* Main image */}
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-200 via-accent-100 to-primary-100 opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-ink-900/10">
                <img
                  src="https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Halina Mathebula — Professional portrait"
                  className="h-[520px] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ink-300 p-1.5">
          <span className="h-2 w-1 rounded-full bg-ink-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

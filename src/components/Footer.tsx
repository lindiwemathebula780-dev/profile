import { Sparkles, ArrowUp } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              Halina<span className="text-primary-400">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              AI-certified digital professional passionate about leveraging Artificial
              Intelligence, prompt engineering, and digital skills to solve real-world
              problems.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-ink-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:justify-self-end">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-300">
              Navigate
            </h4>
            <button
              onClick={() => handleClick('#home')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink-300 transition-all hover:border-primary-400/40 hover:text-primary-400"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
            <p className="mt-4 text-sm text-ink-500">
              Open to opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} Halina Mathebula. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">
            Built with passion for AI & digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

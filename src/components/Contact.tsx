import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Twitter, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'halina.mathebula@example.com',
    href: 'mailto:halina.mathebula@example.com',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'South Africa',
    href: null,
    color: 'from-accent-500 to-accent-700',
  },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-[#0077b5]' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:bg-ink-900' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-[#1da1f2]' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Whether you have a project idea, a job opportunity, or just want to say hello,
              I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              {CONTACT_METHODS.map((method) => (
                <a
                  key={method.label}
                  href={method.href ?? undefined}
                  className={`group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-ink-900/5 ${
                    method.href ? 'cursor-pointer hover:border-primary-200' : 'cursor-default'
                  }`}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} text-white shadow-md`}>
                    <method.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink-400">{method.label}</p>
                    <p className="font-semibold text-ink-900">{method.value}</p>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div className="rounded-2xl border border-ink-100 bg-white p-5">
                <p className="mb-4 text-sm font-medium text-ink-400">Professional Links</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-ink-50 text-ink-600 transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-success-50 to-primary-50 p-5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success-500" />
                </span>
                <p className="text-sm font-medium text-ink-700">
                  Available for opportunities and collaborations
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-700">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-200"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-success-500 shadow-success-500/25'
                    : 'bg-gradient-to-r from-primary-600 to-accent-500 shadow-primary-500/25 hover:scale-[1.02] hover:shadow-xl'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-ink-400">
                This is a demo form — replace with your preferred contact method.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

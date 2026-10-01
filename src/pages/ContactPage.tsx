import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { images } from '@/data/images';
import { churchInfo } from '@/data/content';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { SeoHead } from '@/components/SeoHead';
import { pageSeo } from '@/data/seo';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        image={images.churchModernNight}
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question, a prayer request, or just want to say hello ù our team is here to serve you."
        breadcrumb="Contact"
      />

      {/* Contact methods + form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            {/* Left: contact info */}
            <div>
              <SectionHeading
                eyebrow="Reach Us"
                title="Contact Information"
                align="left"
              />

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: 'Visit Us',
                    lines: [churchInfo.address],
                  },
                  {
                    icon: Phone,
                    label: 'Call / WhatsApp',
                    lines: [churchInfo.phone],
                    href: churchInfo.socials.whatsapp,
                    external: true,
                  },
                  {
                    icon: Mail,
                    label: 'Email Us',
                    lines: [churchInfo.email],
                    href: `mailto:${churchInfo.email}`,
                  },
                  {
                    icon: Clock,
                    label: 'Office Hours',
                    lines: ['Monday ù Friday: 9:00 AM ù 5:00 PM', 'Sunday: 8:00 AM ù 2:00 PM'],
                  },
                ].map((item, i) => (
                  <Reveal key={item.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-warm-100 hover:border-gold-300 transition-colors duration-300">
                      <div className="w-11 h-11 rounded-xl bg-crimson-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-crimson-700" />
                      </div>
                      <div>
                        <p className="font-medium text-crimson-900">{item.label}</p>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-sm text-warm-600">
                            {item.href && j === 0 ? (
                              <a
                                href={item.href}
                                {...('external' in item && item.external
                                  ? { target: '_blank', rel: 'noopener noreferrer' }
                                  : {})}
                                className="hover:text-gold-600 transition-colors"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Social */}
              <Reveal delay={3}>
                <div className="mt-8">
                  <p className="text-sm font-medium text-crimson-900 mb-3">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={churchInfo.socials.facebook}
                      className="w-11 h-11 rounded-full bg-surface hover:bg-crimson-800 flex items-center justify-center transition-all duration-300 border border-warm-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-crimson-700 hover:text-white transition-colors" />
                    </a>
                    <a
                      href={churchInfo.socials.instagram}
                      className="w-11 h-11 rounded-full bg-surface hover:bg-crimson-800 flex items-center justify-center transition-all duration-300 border border-warm-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-crimson-700 hover:text-white transition-colors" />
                    </a>
                    <a
                      href={churchInfo.socials.youtube}
                      className="w-11 h-11 rounded-full bg-surface hover:bg-crimson-800 flex items-center justify-center transition-all duration-300 border border-warm-200"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5 text-crimson-700 hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={1}>
              <div className="bg-surface rounded-[2rem] p-8 lg:p-10 border border-warm-100">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-crimson-900">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-warm-600 max-w-md">
                      Thank you for reaching out. Our team will get back to you
                      within 24ù48 hours. We're praying for you.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                      }}
                      className="mt-8 text-sm font-medium text-crimson-700 hover:text-crimson-900 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-semibold text-crimson-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-warm-500 mb-6">
                      Fill out the form below and we'll be in touch shortly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-warm-200 text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-warm-200 text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            placeholder="jane@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-warm-200 text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-2">
                            Subject
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-warm-200 text-sm text-warm-800 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                          >
                            <option>General Inquiry</option>
                            <option>Prayer Request</option>
                            <option>Pastoral Care</option>
                            <option>Membership</option>
                            <option>Volunteering</option>
                            <option>Events</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-warm-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-warm-200 text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 bg-crimson-800 text-white font-medium px-7 py-4 rounded-full text-sm hover:bg-crimson-900 transition-all duration-300 shadow-lg shadow-crimson-900/20 hover:shadow-xl"
                      >
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="pb-24 bg-white">
        <div className="container-iv">
          <Reveal>
            <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-warm-900/10 border border-gold-200/50">
              <GoogleMapEmbed heightClass="h-80" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 bg-surface-soft border-t border-warm-100">
                <div className="flex items-center gap-2 text-sm text-warm-600">
                  <MapPin className="w-4 h-4 text-crimson-700" />
                  {churchInfo.address}
                </div>
                <a
                  href={churchInfo.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-crimson-800 text-white text-sm font-medium px-6 py-2.5 rounded-2xl hover:bg-crimson-900 transition-all duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

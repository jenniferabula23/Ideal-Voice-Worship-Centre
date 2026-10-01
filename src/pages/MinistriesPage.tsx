import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { WeeklyProgramsPoster } from '@/components/WeeklyProgramsPoster';
import { images } from '@/data/images';
import { ministries } from '@/data/content';
import {
  Music,
  Baby,
  Flame,
  HeartHandshake,
  Swords,
  HandHeart,
  Sparkles,
  Home as HomeIcon,
  BookOpen,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ministryIcons: Record<string, typeof Music> = {
  Music,
  Baby,
  Flame,
  HeartHandshake,
  Swords,
  HandHeart,
  Sparkles,
  Home: HomeIcon,
  BookOpen,
};

export function MinistriesPage() {
  return (
    <>
      <PageHero
        image={images.choirSinging}
        title="Programs & Ministries"
        subtitle="Our weekly lineup and ministry teams — find where you belong at Ideal Voice HQ."
        breadcrumb="Ministries"
      />

      <WeeklyProgramsPoster showCta={false} />

      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Get Involved"
            title="Ministry Teams"
            subtitle="Each team is a doorway to connection, growth, and impact. Discover where God is calling you to serve."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {ministries.map((m, i) => {
              const Icon = ministryIcons[m.icon] ?? Music;
              return (
                <Reveal key={m.name} delay={((i % 2) + 1) as 1 | 2}>
                  <div className="group grid sm:grid-cols-[200px_1fr] gap-0 bg-surface overflow-hidden border border-warm-100 hover:shadow-xl hover:shadow-crimson-950/8 hover:border-gold-300/50 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden h-48 sm:h-full">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/40 to-transparent sm:bg-gradient-to-r" />
                    </div>

                    <div className="p-6 lg:p-7 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-crimson-50 group-hover:bg-gold-500 flex items-center justify-center transition-colors duration-300">
                          <Icon className="w-5 h-5 text-crimson-700 group-hover:text-crimson-950 transition-colors" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-crimson-900">
                          {m.name}
                        </h3>
                      </div>
                      <p className="text-sm text-warm-600 leading-relaxed flex-1">
                        {m.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-gold-600 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {m.meets}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.worshipPraise}
            alt=""
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Heavy dim so white/gold text stays readable */}
          <div className="absolute inset-0 bg-crimson-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/95 via-crimson-900/85 to-crimson-950/70" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative container-iv">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-400" />
                <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em]">
                  Serve With Us
                </span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white leading-tight drop-shadow-lg">
                Use Your Gifts to<br />
                <span className="text-gradient-gold">Build the Kingdom</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg text-white/90 leading-relaxed drop-shadow">
                Every volunteer is a voice of God&apos;s love in action. Whether you
                have a heart for children, worship, prayer, or outreach — there
                is a place for you at Ideal Voice.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/contact" variant="gold" size="lg" icon>
                  Sign Up to Serve
                </ButtonLink>
                <ButtonLink
                  to="/visit"
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white bg-white/5 hover:bg-white hover:text-crimson-900"
                >
                  Visit First
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-iv">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Plan a Visit', text: 'Join us this Sunday', link: '/visit' },
              { title: 'Watch Sermons', text: 'Be inspired at home', link: '/sermons' },
              { title: 'Give', text: 'Support the mission', link: '/giving' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  to={item.link}
                  className="group block bg-white p-7 border border-warm-100 hover:shadow-lg hover:border-gold-300 transition-all duration-300"
                >
                  <h3 className="text-lg font-serif font-semibold text-crimson-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-500 mt-1">{item.text}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-gold-600 mt-3 font-medium group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

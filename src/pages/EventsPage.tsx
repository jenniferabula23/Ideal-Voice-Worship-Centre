import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { events } from '@/data/content';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Worship: 'bg-crimson-100 text-crimson-800',
  Conference: 'bg-gold-100 text-gold-800',
  Outreach: 'bg-emerald-100 text-emerald-700',
  Youth: 'bg-blue-100 text-blue-700',
  Special: 'bg-warm-200 text-warm-700',
};

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDateShort(iso: string) {
  const d = new Date(iso);
  return {
    day: d.getDate().toString(),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
  };
}

export function EventsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(events.map((e) => e.category)))];
  const filtered = filter === 'All' ? events : events.filter((e) => e.category === filter);

  return (
    <>
      <PageHero
        image={images.gathering}
        title="Upcoming Events"
        subtitle="Gather with us for worship, conferences, outreach, and special celebrations. There's always something happening at Ideal Voice."
        breadcrumb="Events"
      />

      {/* Events list */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Calendar"
            title="What's Coming Up"
            subtitle="Mark your calendar and invite a friend. We can't wait to see you at our next gathering."
          />

          {/* Filter tabs */}
          <Reveal delay={1}>
            <div className="mt-10 flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-crimson-800 text-white shadow-lg shadow-crimson-900/20'
                      : 'bg-surface text-warm-600 hover:bg-warm-100 border border-warm-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Events */}
          <div className="space-y-6">
            {filtered.map((e, i) => {
              const dateParts = formatDateShort(e.date);
              return (
                <Reveal key={e.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="group grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 bg-white rounded-2xl overflow-hidden border border-warm-100 hover:shadow-2xl hover:shadow-warm-900/8 hover:border-gold-300 transition-all duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden h-52 lg:h-auto">
                      <img
                        src={e.image}
                        alt={e.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/40 to-transparent" />
                      {/* Date badge */}
                      <div className="absolute top-4 left-4 bg-white rounded-xl p-3 text-center shadow-lg min-w-[64px]">
                        <p className="text-2xl font-serif font-bold text-crimson-800 leading-none">
                          {dateParts.day}
                        </p>
                        <p className="text-xs text-gold-600 uppercase tracking-wider font-semibold mt-1">
                          {dateParts.month}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[e.category] || 'bg-warm-100 text-warm-700'}`}>
                            {e.category}
                          </span>
                          <span className="text-xs text-warm-400">
                            {formatDateLong(e.date)}
                          </span>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-crimson-900 group-hover:text-crimson-700 transition-colors">
                          {e.title}
                        </h3>
                        <p className="mt-3 text-warm-600 leading-relaxed">
                          {e.description}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                          <span className="flex items-center gap-2 text-sm text-warm-500">
                            <Clock className="w-4 h-4 text-gold-500" />
                            {e.time}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-warm-500">
                            <MapPin className="w-4 h-4 text-gold-500" />
                            {e.location}
                          </span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <ButtonLink to="/contact" variant="ghost" size="sm" icon>
                          RSVP / Learn More
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="py-24 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Every Week"
            title="Our Regular Rhythm"
            subtitle="Beyond special events, these are the gatherings that anchor our community every single week."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { day: 'Sunday', time: '9:00 AM & 11:30 AM', title: 'Sunday Worship', text: 'Our weekly celebration services with worship and the Word.' },
              { day: 'Wednesday', time: '7:00 PM', title: 'Midweek Prayer & Bible Study', text: 'A midweek reset with prayer, worship, and in-depth Bible teaching.' },
              { day: 'Friday', time: '7:00 PM', title: 'IGNITE Youth', text: 'Youth group for grades 6–12 with worship, games, and real talk.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-white rounded-2xl p-7 border border-warm-100 hover:shadow-lg hover:shadow-warm-900/5 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-gold-500" />
                    <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
                      {item.day} · {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-crimson-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-iv text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-crimson-900">
              Have an Event Question?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-warm-600 max-w-xl mx-auto">
              We're happy to help with details, registration, or transportation
              for any of our events.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="primary" size="lg" icon>
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

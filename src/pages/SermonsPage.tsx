import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { sermons } from '@/data/content';
import { Play, Clock, BookOpen, User, Search, ChevronDown } from 'lucide-react';

export function SermonsPage() {
  const [seriesFilter, setSeriesFilter] = useState('All');
  const [search, setSearch] = useState('');

  const allSeries = ['All', ...Array.from(new Set(sermons.map((s) => s.series)))];
  const filtered = sermons.filter((s) => {
    const matchesSeries = seriesFilter === 'All' || s.series === seriesFilter;
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.speaker.toLowerCase().includes(search.toLowerCase()) ||
      s.scripture.toLowerCase().includes(search.toLowerCase());
    return matchesSeries && matchesSearch;
  });

  return (
    <>
      <PageHero
        image={images.pastorSermon}
        title="Sermons & Messages"
        subtitle="Be inspired, encouraged, and equipped through the teaching of God's Word. Watch, listen, and share anytime, anywhere."
        breadcrumb="Sermons"
      />

      {/* Featured sermon */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video thumbnail */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-warm-900/15 group cursor-pointer">
                <img
                  src={sermons[0].image}
                  alt={sermons[0].title}
                  className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-white group-hover:text-crimson-950 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-crimson-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Latest Message
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-gold-600 text-sm font-semibold uppercase tracking-wider">
                  {sermons[0].series}
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-semibold text-crimson-900 leading-tight">
                  {sermons[0].title}
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-warm-500">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" /> {sermons[0].speaker}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> {sermons[0].scripture}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {sermons[0].duration}
                  </span>
                </div>
                <p className="mt-5 text-warm-600 leading-relaxed">
                  {sermons[0].description}
                </p>
                <div className="mt-7">
                  <ButtonLink href="#" variant="primary" size="lg" icon>
                    <Play className="w-4 h-4" fill="currentColor" /> Watch Now
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sermon library */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Sermon Library"
            title="Browse All Messages"
            subtitle="Search by series, speaker, or scripture to find exactly what you need."
          />

          {/* Filters */}
          <Reveal delay={1}>
            <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
              {/* Search */}
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-400" />
                <input
                  type="text"
                  placeholder="Search sermons..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white rounded-full border border-warm-200 text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                />
              </div>

              {/* Series filter */}
              <div className="flex flex-wrap gap-2">
                {allSeries.map((series) => (
                  <button
                    key={series}
                    onClick={() => setSeriesFilter(series)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      seriesFilter === series
                        ? 'bg-crimson-800 text-white shadow-lg shadow-crimson-900/20'
                        : 'bg-white text-warm-600 hover:bg-crimson-50 border border-warm-200'
                    }`}
                  >
                    {series}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s, i) => (
                <Reveal key={s.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-warm-100 hover:shadow-xl hover:shadow-warm-900/8 transition-all duration-500 h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden aspect-video cursor-pointer">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/50 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-5 h-5 text-crimson-950 ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-crimson-800/85 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {s.series}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                          {s.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs text-gold-600 uppercase tracking-wider font-semibold">
                        {s.date} · {s.scripture}
                      </p>
                      <h3 className="text-lg font-serif font-semibold text-crimson-900 mt-1.5 leading-snug group-hover:text-crimson-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-warm-500 mt-2 flex-1 line-clamp-2">
                        {s.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm text-warm-500">
                        <User className="w-3.5 h-3.5" />
                        {s.speaker}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-warm-400 text-lg">No sermons found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-crimson-950">
        <div className="container-iv text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">
              Never Miss a Message
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-warm-300 max-w-xl mx-auto">
              Subscribe to our YouTube channel and podcast to stay connected
              with the latest sermons from Ideal Voice.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="#" variant="gold" size="lg">
                Subscribe on YouTube
              </ButtonLink>
              <ButtonLink href="#" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-crimson-900">
                Listen on Podcast
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { weeklyPrograms, churchInfo } from '@/data/content';
import { images } from '@/data/images';

interface WeeklyProgramsPosterProps {
  showCta?: boolean;
  className?: string;
}

const tintOverlay: Record<string, string> = {
  crimson: 'from-crimson-950/85 via-crimson-800/70 to-crimson-900/55',
  navy: 'from-[#0a1628]/90 via-[#1a3a5c]/75 to-[#0d2137]/60',
  ember: 'from-[#4a1208]/90 via-[#b53a12]/70 to-[#6b1e0a]/55',
  teal: 'from-[#062a28]/90 via-[#0d6b65]/70 to-[#084440]/55',
  gold: 'from-crimson-950/80 via-[#8a5a10]/65 to-gold-700/50',
  maroon: 'from-[#2a0610]/90 via-[#6b1028]/75 to-[#3a0814]/60',
};

const glowByTint: Record<string, string> = {
  crimson: 'shadow-[0_0_28px_rgba(211,32,39,0.35),0_8px_24px_rgba(0,0,0,0.35)]',
  navy: 'shadow-[0_0_28px_rgba(40,90,160,0.3),0_8px_24px_rgba(0,0,0,0.35)]',
  ember: 'shadow-[0_0_28px_rgba(200,80,30,0.35),0_8px_24px_rgba(0,0,0,0.35)]',
  teal: 'shadow-[0_0_28px_rgba(20,140,130,0.3),0_8px_24px_rgba(0,0,0,0.35)]',
  gold: 'shadow-[0_0_32px_rgba(251,176,52,0.4),0_8px_24px_rgba(0,0,0,0.35)]',
  maroon: 'shadow-[0_0_28px_rgba(140,30,60,0.35),0_8px_24px_rgba(0,0,0,0.35)]',
};

type ImageKey = keyof typeof images;

/**
 * Poster-style weekly programs — flyer-inspired cards with glow + textured backdrop.
 */
export function WeeklyProgramsPoster({
  showCta = true,
  className = '',
}: WeeklyProgramsPosterProps) {
  return (
    <section className={`relative py-20 lg:py-28 overflow-hidden ${className}`}>
      {/* Textured atmosphere (flyer-inspired) */}
      <div className="absolute inset-0 bg-red-glow" />
      <div className="absolute inset-0 bg-poster-mist pointer-events-none" />
      <div className="absolute inset-0 bg-poster-noise opacity-[0.35] pointer-events-none mix-blend-overlay" />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251,176,52,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,176,52,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      {/* Soft cross / light silhouettes */}
      <div className="absolute -left-8 top-1/4 w-48 h-72 opacity-[0.12] pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-[28%] w-[10px] -translate-x-1/2 bg-white blur-[1px] rounded-full" />
        <div className="absolute top-[28%] left-3 right-3 h-[10px] bg-white blur-[1px] rounded-full" />
      </div>
      <div className="absolute top-[12%] right-[8%] w-[40vw] max-w-md h-[38vh] rounded-full bg-gold-400/20 blur-3xl pointer-events-none animate-gold-pulse" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-crimson-950/85 to-transparent pointer-events-none" />

      {/* Thin poster frame */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6 lg:inset-8 border border-white/15 rounded-[1.25rem]" />

      <div className="relative container-iv">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-gold-300/90 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              Ideal Voice HQ · Anwomaso
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-wide drop-shadow-[0_0_24px_rgba(251,176,52,0.25)]">
              Weekly <span className="text-gradient-gold">Programs</span>
            </h2>
            <div className="mt-5 mx-auto h-px w-28 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <p className="mt-5 text-white/75 text-sm sm:text-base max-w-lg mx-auto">
              Join us through the week — worship, Word, prayer, and Miracle Night.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {weeklyPrograms.map((item, i) => {
            const src = images[(item.image as ImageKey) || 'heroWorship'];
            const tint = item.tint || 'crimson';
            return (
              <Reveal key={`${item.day}-${item.program}`} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article
                  className={`group relative flex h-[11.5rem] sm:h-[12.5rem] overflow-hidden rounded-2xl border border-white/35 bg-crimson-950/40 transition-transform duration-500 hover:-translate-y-1 ${glowByTint[tint] || glowByTint.crimson}`}
                >
                  {/* Photo + tint */}
                  <div className="absolute inset-0">
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tintOverlay[tint] || tintOverlay.crimson}`}
                    />
                    <div className="absolute inset-0 bg-poster-noise opacity-40 mix-blend-soft-light" />
                  </div>

                  {/* Soft edge glow */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25 pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.08)] pointer-events-none" />

                  {/* Vertical time bar (flyer style) */}
                  <div className="relative z-10 flex w-11 sm:w-12 shrink-0 items-center justify-center bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                    <span className="text-crimson-900 font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180">
                      {item.time}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="relative z-10 flex flex-1 flex-col justify-end p-4 sm:p-5">
                    <p className="text-white/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] mb-1">
                      {item.day}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-tight drop-shadow-md">
                      {item.program}
                    </h3>
                    <p className="mt-1 text-white/70 text-xs sm:text-sm line-clamp-1">
                      {item.detail}
                    </p>
                    {item.highlight && (
                      <span className="mt-2 inline-flex w-fit text-[10px] uppercase tracking-widest text-gold-300 border border-gold-400/40 px-2 py-0.5 rounded-full bg-gold-500/10">
                        Featured
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-gold-200/70 uppercase tracking-[0.25em]">
            All are welcome · {churchInfo.address}
          </p>
          <p className="mt-1 text-[11px] text-gold-400 tracking-wide">
            <a
              href={churchInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors"
            >
              {churchInfo.phone}
            </a>
          </p>
        </div>

        {showCta && (
          <Reveal delay={2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-crimson-950 font-semibold px-8 py-3.5 text-sm rounded-2xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-[0_0_24px_rgba(251,176,52,0.35)]"
              >
                Plan Your Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ministries"
                className="inline-flex items-center gap-2 text-gold-300 text-sm font-medium hover:text-gold-200 transition-colors"
              >
                Explore Ministries
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

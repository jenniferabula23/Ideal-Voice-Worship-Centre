import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { leadership, churchInfo } from '@/data/content';
import { Quote } from 'lucide-react';

export function LeadershipPage() {
  return (
    <>
      <PageHero
        image={images.pastorJoy}
        title="Our Leadership"
        subtitle="The pastors and leaders God has called to shepherd, equip, and serve the Ideal Voice family with wisdom, integrity, and love."
        breadcrumb="Leadership"
      />

      {/* Senior Pastors - featured */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Senior Leadership"
            title="Our Pastors"
            subtitle="Apostle Dr. Romeo Blankson, World Moderating Apostle (WMA), leads Ideal Voice Worship Centre with a mandate to preach and teach the Word of God without compromise — raising worshippers and ministers in Anwomaso, Ghana."
          />

          {/* Featured leader */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {leadership.slice(0, 2).map((leader, i) => (
              <Reveal key={leader.name} delay={(i + 1) as 1 | 2}>
                <div className="group bg-surface rounded-[2rem] overflow-hidden border border-warm-100 hover:shadow-2xl hover:shadow-warm-900/10 transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-serif font-semibold text-white">
                        {leader.name}
                      </h3>
                      <p className="text-gold-300 text-sm font-medium mt-1">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-sm text-warm-600 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pastoral Team */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Pastoral Team"
            title="Our Ministry Leaders"
            subtitle="Dedicated men and women who lead our ministries with excellence, passion, and a heart to serve."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.slice(2).map((leader, i) => (
              <Reveal key={leader.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-semibold text-crimson-900">
                      {leader.name}
                    </h3>
                    <p className="text-gold-600 text-sm font-medium mt-1 mb-3">
                      {leader.role}
                    </p>
                    <p className="text-sm text-warm-600 leading-relaxed flex-1">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.sunsetCross}
            alt=""
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-crimson-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/85 via-crimson-950/75 to-crimson-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/70 via-crimson-950/40 to-crimson-950/70" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative container-iv text-center">
          <Reveal>
            <Quote className="w-12 h-12 text-gold-400 mx-auto mb-8 drop-shadow-md" />
          </Reveal>
          <Reveal delay={1}>
            <p className="text-2xl sm:text-3xl font-serif text-white max-w-4xl mx-auto leading-relaxed italic drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)]">
              &ldquo;This is a divine platform where the undiluted, undistorted, and
              undeviated Word of God is preached and taught — raising a people
              who walk in anointing and truth.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-gold-300 font-medium drop-shadow-sm">
              — Apostle Dr. Romeo Blankson, World Moderating Apostle (WMA)
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="container-iv text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-crimson-900">
              Want to Connect With Our Team?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-warm-600 max-w-2xl mx-auto">
              Our pastoral team is available for prayer, counsel, and
              conversation. We'd love to get to know you.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="primary" size="lg" icon>
                Reach Out to Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { ourStory, whatWeBelieve, ourMandate, churchInfo } from '@/data/content';
import { Quote, Eye, Target, Compass } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <PageHero
        image={images.worshipCongregation}
        title="About Ideal Voice"
        subtitle="A community where lives are transformed by the love and power of Jesus Christ. Discover our story, our beliefs, and the mandate that drives us forward."
        breadcrumb="About"
      />

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden shadow-2xl shadow-warm-900/15">
                  <img
                    src={images.pastor}
                    alt="Apostle Dr. Romeo Blankson ? Ideal Voice Worship Centre"
                    className="w-full h-[560px] object-cover object-top"
                  />
                </div>
                <div className="absolute -top-5 -left-5 w-28 h-28 border-t-2 border-l-2 border-gold-400" />
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs bg-crimson-950/90 backdrop-blur-sm px-5 py-4 border border-gold-500/40">
                  <p className="text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold">
                    World Moderating Apostle (WMA)
                  </p>
                  <p className="text-white font-serif text-lg font-semibold mt-1">
                    Apostle Dr. Romeo Blankson
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="The Wealthy Church"
                align="left"
              />
              <Reveal delay={1}>
                <p className="mt-6 text-lg text-warm-600 leading-relaxed">
                  Ideal Voice Worship Center (Ideal Voice HQ) is a Spirit-filled
                  church in Anwomaso, Ashanti Region, Ghana ?a divine platform
                  where the undiluted, undistorted, and undeviated Word of God
                  is preached and taught.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-4 text-warm-600 leading-relaxed">
                  Led by Apostle Dr. Romeo Blankson, we gather for powerful
                  Sunday worship and end-of-month Miracle Nights ? raising
                  worshippers and ministers who carry God&apos;s Word with
                  clarity and power.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="mt-4 text-warm-600 leading-relaxed">
                  Whether you are exploring faith for the first time or looking
                  for a church to call home in Anwomaso, you are welcome here.
                  Come as you are ?you belong.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <div className="mt-8">
                  <ButtonLink to="/visit" variant="primary" icon>
                    Plan Your Visit
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Our Identity"
            title="Vision, Mission & Values"
            subtitle="The heartbeat behind everything we do."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Vision',
                text: 'To see every person in our city and beyond encounter the transforming love of Jesus Christ and become a voice of His hope in their world.',
              },
              {
                icon: Target,
                title: 'Mission',
                text: 'To worship God wholeheartedly, make fully devoted followers of Christ, equip them for ministry, and send them to serve their generation.',
              },
              {
                icon: Compass,
                title: 'Values',
                text: 'We are guided by six core values: Presence, Truth, Compassion, Excellence, Community, and Generosity ?in everything we do.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="group h-full bg-white rounded-2xl p-8 shadow-sm border border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 hover:border-gold-300 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-crimson-700 to-crimson-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-gold-300" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-crimson-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-warm-600 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Our Story"
            title="The Journey So Far"
            subtitle="From a living room prayer meeting to a city on a hill ?every chapter has been written by God's faithfulness."
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-crimson-200 to-gold-400 hidden md:block" />

            <div className="space-y-12 md:space-y-20">
              {ourStory.map((item, i) => (
                <Reveal key={item.year}>
                  <div
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      i % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Image side */}
                    <div className={`relative ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="rounded-2xl overflow-hidden shadow-xl shadow-warm-900/10">
                        <img
                          src={[images.gathering2, images.worshipCongregation, images.churchInterior2, images.heroWorship3][i]}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      {/* Year badge */}
                      <div className="absolute top-4 left-4 bg-crimson-800 text-white px-4 py-2 rounded-full text-sm font-serif font-bold shadow-lg">
                        {item.year}
                      </div>
                    </div>

                    {/* Text side */}
                    <div
                      className={`relative ${
                        i % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'
                      }`}
                    >
                      {/* Dot on timeline */}
                      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md"
                        style={{
                          [i % 2 === 0 ? 'left' : 'right']: '-2.5rem',
                        } as React.CSSProperties}
                      />
                      <h3 className="text-2xl font-serif font-semibold text-crimson-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-warm-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 lg:py-32 bg-crimson-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={images.bibleCandle} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-iv relative">
          <SectionHeading
            eyebrow="What We Believe"
            title={<span className="text-white">Our Statement of Faith</span>}
            subtitle="These core doctrines anchor our teaching, our worship, and our life together as a church family."
            light
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBelieve.map((belief, i) => (
              <Reveal key={belief.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-gold-400/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                      <span className="text-gold-300 font-serif font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-white">
                      {belief.title}
                    </h3>
                  </div>
                  <p className="text-sm text-warm-300 leading-relaxed">
                    {belief.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mandate */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Our Mandate"
            title="The Voice We Carry"
            subtitle="Our mandate is more than a mission statement ?it is a divine assignment that shapes everything we do."
          />

          <Reveal delay={1}>
            <div className="mt-12 max-w-4xl mx-auto text-center">
              <div className="relative bg-white rounded-[2rem] p-10 lg:p-14 shadow-lg shadow-warm-900/5 border border-warm-100">
                <Quote className="w-12 h-12 text-gold-400 mx-auto mb-6" />
                <p className="text-xl sm:text-2xl font-serif text-crimson-900 leading-relaxed italic">
                  {ourMandate.statement}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourMandate.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full bg-white rounded-2xl p-7 shadow-sm border border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 hover:border-gold-300 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crimson-700 to-crimson-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gold-300 font-serif font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-crimson-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.worshipBand} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-crimson-950/85" />
        </div>
        <div className="relative container-iv text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white">
              Come Be Part of the Story
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 text-lg text-warm-200 max-w-2xl mx-auto">
              We'd love to meet you. Join us this Sunday and discover your place
              in the Ideal Voice family.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink to="/visit" variant="gold" size="lg" icon>
                Plan Your Visit
              </ButtonLink>
              <ButtonLink to="/leadership" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-crimson-900">
                Meet Our Team
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

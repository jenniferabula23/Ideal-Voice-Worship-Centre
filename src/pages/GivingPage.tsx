import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { churchInfo } from '@/data/content';
import {
  Heart,
  HandHeart,
  Home as HomeIcon,
  Users,
  Globe,
  BookOpen,
  Shield,
  Sparkles,
} from 'lucide-react';

export function GivingPage() {
  return (
    <>
      <PageHero
        image={images.bibleCandle}
        title="Partner With the Mission"
        subtitle="Your generosity fuels worship, outreach, and transformation —every day, in every season. Thank you for investing in eternity."
        breadcrumb="Giving"
      />

      {/* Why Give */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-warm-900/15">
                  <img
                    src={images.outreach}
                    alt="Community outreach"
                    className="w-full h-[520px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[240px] border border-warm-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-gold-600" fill="currentColor" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-crimson-900">
                      $2M+
                    </span>
                  </div>
                  <p className="text-sm text-warm-600">
                    Given back to the community through outreach since 2008
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400 rounded-tl-[2rem]" />
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Why We Give"
                title="Generosity Changes Everything"
                align="left"
              />
              <Reveal delay={1}>
                <p className="mt-6 text-lg text-warm-600 leading-relaxed">
                  Giving is an act of worship —a response to the greatest gift
                  we've ever received: the love and grace of Jesus Christ. When
                  you give to Ideal Voice, you're not just funding a church;
                  you're fueling a movement of hope, healing, and
                  transformation.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-4 text-warm-600 leading-relaxed">
                  Every gift enables us to share the Gospel, serve our
                  community, care for those in need, and build a home where
                  people can encounter God. Thank you for partnering with us.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <ButtonLink href="#" variant="primary" size="lg" icon>
                    Give Now
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Goes */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <SectionHeading
            eyebrow="Impact"
            title="Where Your Gift Goes"
            subtitle="Every dollar is stewarded with integrity and intention. Here's how your giving makes a difference."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Worship & Ministry', text: 'Sustaining weekly services, pastoral care, and the daily operations of the church.', pct: '35%' },
              { icon: HandHeart, title: 'Community Outreach', text: 'Food pantry, tutoring programs, homeless care, and quarterly community impact days.', pct: '25%' },
              { icon: HomeIcon, title: 'Campus & Facilities', text: 'Maintaining and improving our campus to serve as a beacon for the community.', pct: '20%' },
              { icon: Globe, title: 'Missions & Global', text: 'Supporting partner ministries and church plants across the nation and around the world.', pct: '10%' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full bg-white rounded-2xl p-7 border border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 hover:border-gold-300 transition-all duration-500">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crimson-700 to-crimson-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <span className="text-3xl font-serif font-bold text-gold-500">
                      {item.pct}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-crimson-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <p className="mt-8 text-center text-sm text-warm-400">
              The remaining 10% is allocated to leadership development, training, and a contingency fund for emergent needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="How to Give"
            title="Ways to Give"
            subtitle="Choose the method that works best for you. Every gift, no matter the size, makes an eternal impact."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Online',
                text: 'Give securely with a debit or credit card. Set up one-time or recurring gifts in just a few clicks.',
                action: 'Give Online',
                featured: true,
              },
              {
                icon: Shield,
                title: 'Text to Give',
                text: `Call or WhatsApp ${churchInfo.phone} to give or arrange your offering with the church office.`,
                action: 'Call to Give',
                featured: false,
              },
              {
                icon: BookOpen,
                title: 'In Service',
                text: 'Give during Sunday worship or Miracle Night by placing your gift in the offering as led by the Spirit.',
                action: 'Join a Service',
                featured: false,
              },
            ].map((method, i) => (
              <Reveal key={method.title} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`group h-full rounded-2xl p-8 border transition-all duration-500 ${
                    method.featured
                      ? 'bg-crimson-950 border-crimson-800 text-white hover:shadow-2xl hover:shadow-crimson-950/20'
                      : 'bg-surface border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 hover:border-gold-300'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      method.featured
                        ? 'bg-gradient-to-br from-gold-500 to-gold-600'
                        : 'bg-gradient-to-br from-crimson-700 to-crimson-800'
                    }`}
                  >
                    <method.icon className={`w-7 h-7 ${method.featured ? 'text-crimson-950' : 'text-gold-300'}`} />
                  </div>
                  <h3
                    className={`text-2xl font-serif font-semibold mb-3 ${
                      method.featured ? 'text-white' : 'text-crimson-900'
                    }`}
                  >
                    {method.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      method.featured ? 'text-warm-300' : 'text-warm-600'
                    }`}
                  >
                    {method.text}
                  </p>
                  <button
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      method.featured
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-crimson-950 hover:from-gold-400 hover:to-gold-500 shadow-lg shadow-gold-600/20'
                        : 'bg-crimson-800 text-white hover:bg-crimson-900 shadow-lg shadow-crimson-900/20'
                    }`}
                  >
                    {method.action}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring giving banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.sunsetRosary} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/92 to-crimson-950/60" />
        </div>
        <div className="relative container-iv">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-400" />
                <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em]">
                  Sustained Giving
                </span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white leading-tight">
                Become a<br />
                <span className="text-gradient-gold">Vision Partner</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg text-warm-200 leading-relaxed">
                Vision Partners are monthly givers who sustain the mission with
                consistent, faithful support. It's the easiest way to make a
                lasting impact —and it helps us plan for the future with
                confidence.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8">
                <ButtonLink href="#" variant="gold" size="lg" icon>
                  Become a Vision Partner
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-surface">
        <div className="container-iv">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, title: 'Accountable', text: 'We are committed to financial integrity and full transparency in every gift.' },
              { icon: Users, title: 'Member-Led', text: 'Our finance team is overseen by an elected board of church members and elders.' },
              { icon: Heart, title: 'Eternal Impact', text: 'Every gift is an investment in lives changed and a community transformed.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-white rounded-2xl p-7 border border-warm-100">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-crimson-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

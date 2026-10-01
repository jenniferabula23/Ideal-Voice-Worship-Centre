import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/ButtonLink';
import { images } from '@/data/images';
import { churchInfo, faqs } from '@/data/content';
import {
  Clock,
  MapPin,
  Navigation,
  Coffee,
  Shirt,
  Baby,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { SeoHead } from '@/components/SeoHead';
import { pageSeo } from '@/data/seo';

export function VisitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        image={images.heroWorship2}
        title="Plan Your Visit"
        subtitle="We're so glad you're considering joining us. Here's everything you need to know to make your first visit easy and welcoming."
        breadcrumb="Plan Your Visit"
      />

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-iv">
          <SectionHeading
            eyebrow="First Visit"
            title="What to Expect"
            subtitle="From the moment you arrive, you'll be greeted with a warm welcome. No pressure, no expectations —just a community ready to embrace you."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Coffee, title: 'Arrive Early', text: 'Come a little early so our greeting team can welcome you and help you settle before worship begins.' },
              { icon: Shirt, title: 'Dress Comfortably', text: 'Come as you are. We care about your heart, not your wardrobe —dress ready to worship.' },
              { icon: Baby, title: 'Kids Welcome', text: 'Our Next Generation ministry welcomes children and youth with teaching, fellowship, and activities.' },
              { icon: Clock, title: 'Sunday Worship', text: 'Sunday services run from about 8:00 AM to 11:00 AM with praise, the Word, and prayer.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full bg-surface rounded-2xl p-7 border border-warm-100 hover:shadow-xl hover:shadow-warm-900/5 hover:border-gold-300 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crimson-700 to-crimson-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-crimson-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-iv">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service times */}
            <Reveal>
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-warm-900/5 border border-warm-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-gold-500" />
                  <h3 className="text-2xl font-serif font-semibold text-crimson-900">
                    Service Times
                  </h3>
                </div>
                <div className="space-y-5">
                  {churchInfo.serviceTimes.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pb-5 border-b border-warm-100 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-lg font-serif font-semibold text-crimson-800">
                          {s.day}
                        </p>
                        <p className="text-sm text-warm-500">{s.label}</p>
                      </div>
                      <span className="text-lg text-warm-700 font-medium">
                        {s.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={1}>
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-warm-900/5 border border-warm-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-gold-500" />
                  <h3 className="text-2xl font-serif font-semibold text-crimson-900">
                    Our Location
                  </h3>
                </div>
                <p className="text-lg text-warm-700 font-medium">
                  {churchInfo.address}
                </p>
                <p className="text-sm text-warm-500 mt-2">
                  Anwomaso, Ashanti Region (plus code {churchInfo.plusCode}).
                  From Kumasi, pick a car toward Anwomaso and ask for Ideal
                  Voice Worship Centre — locals will point you the right way.
                </p>

                <div className="mt-6">
                  <GoogleMapEmbed />
                </div>

                <div className="mt-6">
                  <a
                    href={churchInfo.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-crimson-800/95 backdrop-blur-md text-white font-medium px-6 py-3 rounded-2xl text-sm hover:bg-crimson-900 transition-all duration-300 shadow-lg shadow-crimson-900/20 border border-white/15"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you might be wondering before your first visit."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="bg-surface rounded-2xl border border-warm-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-lg font-serif font-semibold text-crimson-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ${
                      openFaq === i
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-warm-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-surface">
        <div className="container-iv">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-warm-900/15">
                  <img
                    src={images.children2}
                    alt="Children at church"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Ready When You Are"
                title="Your Visit Checklist"
                align="left"
              />
              <Reveal delay={1}>
                <ul className="mt-8 space-y-4">
                  {[
                    'Plan to arrive 15 minutes early',
                    'Grab a coffee in the lobby',
                    'Stop by the Connect Desk for a welcome gift',
                    'Check in your kids at VOICE Kids',
                    'Sit anywhere you\'d like —every seat is a good seat',
                    'Stay after for conversation and community',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-warm-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-8">
                  <ButtonLink to="/contact" variant="primary" size="lg" icon>
                    Let Us Know You're Coming
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

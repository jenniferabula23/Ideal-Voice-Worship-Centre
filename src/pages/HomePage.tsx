import { Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ButtonLink } from '@/components/ButtonLink';
import { WeeklyProgramsPoster } from '@/components/WeeklyProgramsPoster';
import { images } from '@/data/images';
import { churchInfo } from '@/data/content';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.heroWorship}
          alt="Ideal Voice Worship Center"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/75 via-crimson-950/55 to-crimson-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/70 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] rounded-full bg-gold-400/20 blur-3xl animate-gold-pulse" />
        </div>
      </div>

      <div className="relative container-iv z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-wide">
              Ideal Voice
            </p>
            <p className="mt-2 text-gold-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em]">
              Worship Center ? Anwomaso
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white/95 leading-snug text-balance max-w-2xl">
              Undiluted. Undistorted.{' '}
              <span className="text-gradient-gold">Undeviated.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              A divine platform where the Word of God is preached and taught
              in power ? Sunday worship and Miracle Nights in Anwomaso, Ghana.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink to="/visit" variant="gold" size="lg" icon>
                Plan Your Visit
              </ButtonLink>
              <ButtonLink
                to="/about"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-crimson-900"
              >
                About Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-gold-squares relative overflow-hidden">
      <div className="container-iv relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl shadow-crimson-950/20">
                <img
                  src={images.sanctuaryGathering}
                  alt="Congregation gathered at Ideal Voice Worship Center"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-[42%] max-w-[220px] overflow-hidden shadow-xl shadow-crimson-950/25 border-4 border-white">
                <img
                  src={images.welcomeJoy}
                  alt="Joyful welcome at Ideal Voice HQ"
                  className="w-full h-44 sm:h-52 object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome"
              title={<>A Divine Platform<br />for God&apos;s Word</>}
              align="left"
            />
            <Reveal delay={1}>
              <p className="mt-6 text-lg text-warm-600 leading-relaxed">
                Ideal Voice HQ is a Spirit-filled house in Anwomaso where the
                undiluted, undistorted, and undeviated Word of God is preached
                and taught. Come as you are ? you belong here.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-warm-600 leading-relaxed">
                Explore our story, leadership, ministries, sermons, and events
                on their dedicated pages ? or plan your visit for this Sunday.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/about" variant="primary" icon>
                  Our Story
                </ButtonLink>
                <ButtonLink to="/leadership" variant="ghost" icon>
                  Leadership
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SingingMinistrySection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.singingMinistry}
          alt=""
          className="w-full h-full object-cover object-[center_35%] scale-105"
        />
        <div className="absolute inset-0 bg-crimson-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-950 via-crimson-950/90 to-crimson-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/75 via-transparent to-crimson-950/40" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[35vh] rounded-full bg-gold-400/12 blur-3xl pointer-events-none animate-gold-pulse" />
      </div>

      <div className="relative container-iv">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-400" />
                <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em]">
                  Singing Ministry
                </span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white leading-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                Voices Lifted<br />
                <span className="text-gradient-gold">in Worship</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-lg drop-shadow-sm">
                Our singing ministry leads Ideal Voice HQ in passionate praise ?
                hearts raised, voices united, and the presence of God filling
                the house every service.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8">
                <ButtonLink to="/ministries" variant="gold" icon>
                  Explore Ministries
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/30 shadow-[0_0_40px_rgba(251,176,52,0.22)] ring-1 ring-white/10">
                <img
                  src={images.singingMinistry}
                  alt="Ideal Voice singing ministry leading worship"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-[center_30%]"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-gold-400/80 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container-iv">
        <SectionHeading
          eyebrow="Gather With Us"
          title="Service Times"
          subtitle="Sunday worship every week and Miracle Night on the last day of every month."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {churchInfo.serviceTimes.map((s, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2}>
              <div className="group bg-white p-8 text-center shadow-sm border border-warm-100 hover:shadow-xl hover:border-gold-300 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-full bg-crimson-50 group-hover:bg-crimson-100 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Clock className="w-6 h-6 text-crimson-700" />
                </div>
                <p className="text-xs text-gold-600 uppercase tracking-[0.2em] font-semibold mb-2">
                  {s.label}
                </p>
                <h3 className="text-2xl font-serif font-bold text-crimson-900">
                  {s.day}
                </h3>
                <p className="text-lg text-warm-600 mt-1">{s.time}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink to="/visit" variant="primary" icon>
              Plan Your Visit
            </ButtonLink>
            <div className="flex items-center gap-2 text-warm-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{churchInfo.address}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExplorePages() {
  const pages = [
    { to: '/about', title: 'About', text: 'Our story, beliefs, and mandate' },
    { to: '/ministries', title: 'Programs', text: 'Weekly lineup & ministry teams' },
    { to: '/sermons', title: 'Sermons', text: 'Messages from Ideal Voice HQ' },
    { to: '/events', title: 'Events', text: 'Miracle Nights & gatherings' },
    { to: '/giving', title: 'Giving', text: 'Partner with the mission' },
    { to: '/contact', title: 'Contact', text: 'Reach the church office' },
  ];

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="container-iv">
        <SectionHeading
          eyebrow="Explore"
          title="Every Page Stands Alone"
          subtitle="Go deeper on the page that matters to you ? each one is its own destination."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map((p, i) => (
            <Reveal key={p.to} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link
                to={p.to}
                className="group block h-full px-6 py-7 border border-warm-100 bg-surface hover:bg-white hover:border-gold-400 transition-all duration-300"
              >
                <span className="flex items-start justify-between gap-3">
                  <span>
                    <span className="block font-serif text-xl font-semibold text-crimson-900">
                      {p.title}
                    </span>
                    <span className="block text-sm text-warm-500 mt-1">
                      {p.text}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-600 mt-1 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.welcomeJoy}
          alt=""
          className="w-full h-full object-cover object-[center_20%] scale-105"
        />
        {/* Dim base + left-heavy gradient so copy pops while portrait stays visible */}
        <div className="absolute inset-0 bg-crimson-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-950 via-crimson-950/88 to-crimson-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/70 via-transparent to-crimson-950/35" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative container-iv">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em]">
                You&apos;re Invited
              </span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              Come Experience<br />
              <span className="text-gradient-gold">Ideal Voice</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-sm">
              Join us this Sunday in Anwomaso ? or open any page above for
              programs, sermons, events, and how to connect.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink to="/visit" variant="gold" size="lg" icon>
                Plan Your Visit
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-crimson-900"
              >
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PastorSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-surface opacity-60 pointer-events-none" />
      <div className="container-iv relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-crimson-950/15 border border-gold-200/50">
                <img
                  src={images.pastor}
                  alt="Apostle Dr. Romeo Blankson, World Moderating Apostle"
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 sm:-right-6 w-[48%] max-w-[240px] overflow-hidden rounded-xl shadow-xl shadow-crimson-950/25 border-4 border-white">
                <img
                  src={images.pastorJoy}
                  alt="Apostle Dr. Romeo Blankson during worship at Ideal Voice HQ"
                  className="w-full h-44 sm:h-52 object-cover object-[center_15%]"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.3em]">
                  Our Pastor
                </span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-crimson-900 leading-tight">
                Apostle Dr. Romeo Blankson
              </h2>
              <p className="mt-3 text-gold-600 font-semibold text-sm uppercase tracking-[0.2em]">
                World Moderating Apostle (WMA)
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg text-warm-600 leading-relaxed">
                Under the leadership of the World Moderating Apostle, Ideal Voice
                Worship Centre preaches and teaches the undiluted Word ? raising
                worshippers and ministers across Anwomaso and beyond.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8">
                <ButtonLink to="/leadership" variant="primary" icon>
                  Meet Our Leadership
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Landing only ? other content lives on its own route. */
export function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <SingingMinistrySection />
      <PastorSection />
      <ServicesSection />
      <WeeklyProgramsPoster />
      <ExplorePages />
      <CTASection />
    </>
  );
}

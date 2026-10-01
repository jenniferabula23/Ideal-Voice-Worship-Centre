import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { churchInfo, navLinks } from '@/data/content';
import { BrandLogoLink } from '@/components/BrandLogo';

export function Footer() {
  return (
    <footer className="bg-crimson-950 text-warm-200">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-iv py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-white">
              Ready to join us this Sunday?
            </h3>
            <p className="mt-2 text-warm-300">
              We saved a seat for you. Plan your visit today.
            </p>
          </div>
          <Link
            to="/visit"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-crimson-950 font-semibold px-7 py-3.5 rounded-full text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20"
          >
            Plan Your Visit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-iv py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <BrandLogoLink
                variant="mark"
                onDark
                markClassName="h-14 w-14"
              />
            </div>
            <p className="text-sm leading-relaxed text-warm-300">
              {churchInfo.tagline} A community where lives are transformed by the love and power of Jesus Christ.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={churchInfo.socials.facebook}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-crimson-950 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={churchInfo.socials.instagram}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-crimson-950 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={churchInfo.socials.youtube}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-crimson-950 flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service times */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Service Times
            </h4>
            <ul className="space-y-4">
              {churchInfo.serviceTimes.map((s, i) => (
                <li key={i}>
                  <p className="text-sm font-medium text-white">{s.day}</p>
                  <p className="text-sm text-warm-300">
                    {s.time} ? {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-warm-300">{churchInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href={churchInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-warm-300 hover:text-gold-400 transition-colors"
                >
                  {churchInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${churchInfo.email}`} className="text-sm text-warm-300 hover:text-gold-400 transition-colors">
                  {churchInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-iv py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm-400">
            ? {new Date().getFullYear()} Ideal Voice Worship Center. All rights reserved.
          </p>
          <p className="text-xs text-warm-400">
            A voice of hope. A home of faith.
          </p>
        </div>
      </div>
    </footer>
  );
}

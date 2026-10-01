import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks, churchInfo } from '@/data/content';
import { BrandLogoLink } from '@/components/BrandLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const aboutLinks = navLinks.filter((l) =>
    ['/about', '/leadership'].includes(l.path)
  );
  const homeLink = navLinks.find((l) => l.path === '/');
  const mainLinks = navLinks.filter(
    (l) => !['/', '/about', '/leadership', '/giving'].includes(l.path)
  );

  const linkClass = (path: string) =>
    `px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
      scrolled
        ? 'text-warm-700 hover:text-crimson-800 hover:bg-crimson-50/80'
        : 'text-white/90 hover:text-white hover:bg-white/10'
    } ${
      location.pathname === path
        ? scrolled
          ? 'text-crimson-800 bg-crimson-50/60'
          : 'text-white bg-white/10'
        : ''
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="container-iv">
          <nav
            className={`flex items-center justify-between gap-4 px-4 sm:px-5 py-2.5 rounded-2xl transition-all duration-500 ${
              scrolled
                ? 'glass-nav shadow-glass'
                : 'glass-nav-top'
            }`}
          >
            <BrandLogoLink onDark={!scrolled} variant="auto" />

            <div className="hidden lg:flex items-center gap-0.5">
              {homeLink && (
                <Link to={homeLink.path} className={linkClass(homeLink.path)}>
                  {homeLink.label}
                </Link>
              )}

              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                    scrolled
                      ? 'text-warm-700 hover:text-crimson-800 hover:bg-crimson-50/80'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  About
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                    dropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="glass-strong rounded-2xl p-2 min-w-[220px] shadow-glass-lg">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-warm-700 hover:text-crimson-800 hover:bg-crimson-50/80 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(link.path)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={churchInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-gold-400/50 bg-crimson-800/90 text-gold-200 hover:bg-crimson-900 hover:text-gold-100 transition-all duration-300 shadow-[0_0_16px_rgba(211,32,39,0.35),0_0_12px_rgba(251,176,52,0.25)]"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden>
                  <path d="M16.004 3C9.382 3 4 8.382 4 15.004c0 2.117.553 4.186 1.604 6.01L4 29l8.168-1.57A11.95 11.95 0 0 0 16.004 27C22.626 27 28 21.618 28 15.004 28 8.382 22.626 3 16.004 3zm0 21.867c-1.742 0-3.45-.457-4.95-1.324l-.355-.207-4.844.93.933-4.723-.23-.375A9.82 9.82 0 0 1 6.137 15c0-5.445 4.43-9.875 9.867-9.875S25.87 9.555 25.87 15c0 5.446-4.43 9.867-9.866 9.867zm5.41-7.39c-.297-.148-1.754-.867-2.025-.965-.272-.1-.47-.148-.668.149-.198.296-.767.964-.94 1.163-.173.197-.347.223-.643.075-.297-.149-1.253-.462-2.386-1.473-.882-.787-1.478-1.758-1.652-2.055-.173-.296-.018-.456.13-.603.134-.133.297-.347.445-.52.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.205-.241-.579-.486-.5-.668-.51l-.57-.01c-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.478 0 1.461 1.065 2.873 1.213 3.07.149.198 2.095 3.2 5.077 4.487.71.306 1.263.49 1.695.626.712.226 1.36.194 1.872.118.571-.086 1.754-.717 2.002-1.41.248-.693.248-1.287.173-1.41-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Chat
              </a>
              <Link
                to="/giving"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/95 to-gold-600/95 backdrop-blur-sm text-crimson-950 font-semibold px-5 py-2.5 rounded-xl text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 border border-white/30"
              >
                Give
              </Link>
            </div>

            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-crimson-800 hover:bg-crimson-50'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-crimson-950/50 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm glass-strong shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-crimson-100/60">
            <BrandLogoLink variant="mark" onDark={false} />
            <button
              className="p-2 text-warm-500 hover:text-crimson-800 rounded-xl hover:bg-crimson-50 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-4 py-6 overflow-y-auto h-[calc(100%-73px)]">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                  location.pathname === link.path
                    ? 'bg-crimson-50 text-crimson-800'
                    : 'text-warm-700 hover:bg-white/70 hover:text-crimson-800'
                }`}
                style={{
                  animation: mobileOpen
                    ? `fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s both`
                    : '',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/giving"
              className="mt-6 block text-center bg-gradient-to-r from-gold-500 to-gold-600 text-crimson-950 font-semibold px-6 py-3.5 rounded-xl text-sm border border-white/40"
            >
              Give
            </Link>
            <a
              href={churchInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 text-center bg-crimson-800 text-gold-200 font-semibold px-6 py-3.5 rounded-xl text-sm border border-gold-400/50 shadow-[0_0_18px_rgba(211,32,39,0.35),0_0_12px_rgba(251,176,52,0.25)]"
            >
              Chat on WhatsApp
            </a>
            <div className="mt-8 pt-6 border-t border-crimson-100/60">
              <p className="text-xs text-warm-400 uppercase tracking-wider mb-2">
                Contact
              </p>
              <a
                href={churchInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-600 hover:text-crimson-800 transition-colors"
              >
                {churchInfo.phone}
              </a>
              <p className="text-sm text-warm-600">{churchInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

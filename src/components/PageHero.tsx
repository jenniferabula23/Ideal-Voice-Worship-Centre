import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  image: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHero({ image, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-crimson-950 via-crimson-950/70 to-crimson-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-iv pb-16 pt-32 w-full">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-xs text-gold-300 mb-4 animate-fade-in-up">
            <Link to="/" className="hover:text-gold-200 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{breadcrumb}</span>
          </nav>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight animate-fade-in-up max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-warm-200 max-w-2xl animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600" />
    </section>
  );
}

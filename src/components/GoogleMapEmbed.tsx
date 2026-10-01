import { churchInfo } from '@/data/content';

interface GoogleMapEmbedProps {
  className?: string;
  /** iframe height class, default h-56 */
  heightClass?: string;
  title?: string;
}

/**
 * Live Google Maps embed for Ideal Voice HQ, Anwomaso.
 * Uses public embed URL (no API key required).
 */
export function GoogleMapEmbed({
  className = '',
  heightClass = 'h-56 sm:h-64',
  title = 'Ideal Voice Worship Centre location on Google Maps',
}: GoogleMapEmbedProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gold-200/60 shadow-glass ${heightClass} ${className}`}
    >
      <iframe
        title={title}
        src={churchInfo.mapsEmbedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

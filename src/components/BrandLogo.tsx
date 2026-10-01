import { Link } from 'react-router-dom';

type BrandLogoProps = {
  /** compact = circular mark only; full = lockup with text */
  variant?: 'mark' | 'full' | 'auto';
  /** light text companion for dark backgrounds when using mark */
  onDark?: boolean;
  className?: string;
  markClassName?: string;
  fullClassName?: string;
  showWordmark?: boolean;
};

/**
 * Official Ideal Voice logo — keep emblem colors intact.
 * Never use brightness/invert filters (they wash the seal to a white disc).
 */
export function BrandLogo({
  variant = 'auto',
  onDark = false,
  className = '',
  markClassName = '',
  fullClassName = '',
  showWordmark = true,
}: BrandLogoProps) {
  const mark = (
    <img
      src="/images/logo-mark.png"
      alt="Ideal Voice Worship Centre"
      className={`object-contain drop-shadow-sm ${markClassName || 'h-11 w-11'}`}
      width={88}
      height={88}
      decoding="async"
    />
  );

  const full = (
    <img
      src="/images/logo.png"
      alt="Ideal Voice Worship Centre — The Wealthy Church"
      className={`object-contain ${fullClassName || 'h-12 w-auto max-h-14'}`}
      decoding="async"
    />
  );

  const wordmark = (
    <span className="leading-tight">
      <span
        className={`block font-serif text-base sm:text-lg font-semibold tracking-wide ${
          onDark ? 'text-white' : 'text-crimson-900'
        }`}
      >
        Ideal Voice
      </span>
      <span
        className={`block text-[10px] uppercase tracking-[0.18em] font-medium ${
          onDark ? 'text-gold-300' : 'text-gold-600'
        }`}
      >
        Worship Centre
      </span>
      <span
        className={`block text-[9px] tracking-wide mt-0.5 ${
          onDark ? 'text-white/70' : 'text-warm-500'
        }`}
      >
        The Wealthy Church
      </span>
    </span>
  );

  if (variant === 'full') {
    return (
      <span className={`inline-flex items-center ${className}`}>{full}</span>
    );
  }

  if (variant === 'mark') {
    if (!showWordmark) {
      return <span className={`inline-flex ${className}`}>{mark}</span>;
    }
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        {mark}
        {wordmark}
      </span>
    );
  }

  // auto: colorful mark + wordmark on dark; full lockup on light desktop
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className={`${
          onDark ? 'inline-flex' : 'inline-flex sm:hidden'
        } items-center gap-3`}
      >
        {mark}
        {showWordmark && wordmark}
      </span>
      {!onDark && <span className="hidden sm:inline-flex">{full}</span>}
    </span>
  );
}

export function BrandLogoLink(props: BrandLogoProps) {
  return (
    <Link
      to="/"
      className="group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
    >
      <BrandLogo {...props} />
    </Link>
  );
}

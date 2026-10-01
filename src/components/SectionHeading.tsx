import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold-500" />
        </div>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-crimson-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-warm-200' : 'text-warm-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

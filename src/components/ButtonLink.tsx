import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-crimson-800/95 backdrop-blur-md text-white hover:bg-crimson-900 shadow-lg shadow-crimson-900/20 border border-white/15 hover:shadow-xl',
  gold:
    'bg-gradient-to-r from-gold-500/95 to-gold-600/95 backdrop-blur-md text-crimson-950 hover:from-gold-400 hover:to-gold-500 shadow-lg shadow-gold-600/25 font-semibold border border-white/35',
  outline:
    'border border-white/40 bg-white/10 backdrop-blur-md text-crimson-800 hover:bg-crimson-800 hover:text-white hover:border-crimson-800',
  ghost:
    'text-crimson-800 hover:bg-white/60 backdrop-blur-sm font-semibold',
  dark:
    'bg-warm-900/90 backdrop-blur-md text-white hover:bg-warm-800 shadow-lg border border-white/10',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

export function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon = false,
}: ButtonLinkProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-wide transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  );
}

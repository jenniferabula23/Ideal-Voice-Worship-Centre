import { useReveal } from '@/hooks/useReveal';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({ children, delay, className = '', as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}

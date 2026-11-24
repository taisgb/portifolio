'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Título que "sobe" de uma máscara quando entra na tela (uma vez). */
export function RevealHeading({
  as: Tag = 'h2',
  className,
  children,
}: {
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.dataset.in = 'true';
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = 'true';
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={`mask-heading ${className ?? ''}`}>
      <span className="mask">
        <span className="mask-in">{children}</span>
      </span>
    </Tag>
  );
}

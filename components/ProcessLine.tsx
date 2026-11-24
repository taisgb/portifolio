'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Linha do tempo que se preenche conforme a seção é rolada. */
export default function ProcessLine({ children }: { children: ReactNode }) {
  const root = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) {
      el.style.setProperty('--fill', '1');
      items.forEach((i) => i.classList.add('on'));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.75 - rect.top) / Math.max(rect.height, 1)));
      el.style.setProperty('--fill', p.toFixed(3));
      items.forEach((item, i) => item.classList.toggle('on', p >= i / items.length + 0.02));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol ref={root} className="process">
      {children}
    </ol>
  );
}

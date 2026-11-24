'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Cartões que se empilham ao rolar: cada cartão fica preso no topo e o anterior
 * encolhe e escurece levemente quando o próximo passa por cima.
 * Em "reduzir movimento" nada disso roda.
 */
export default function CardStack({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>('.stack-card'));
    let raf = 0;

    const update = () => {
      raf = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const cardRect = card.getBoundingClientRect();
        const nextTop = next.getBoundingClientRect().top;
        const stick = parseFloat(getComputedStyle(card).top) || 0;
        // 0 = próximo cartão ainda longe; 1 = próximo cartão cobriu este
        const p = Math.min(1, Math.max(0, 1 - (nextTop - stick) / Math.max(cardRect.height, 1)));
        card.style.setProperty('--p', p.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // Medir a altura real, inclusive depois do carregamento das fontes/imagens.
    // Permite que cartões maiores do que o viewport continuem acessíveis no mobile.
    const measure = () => {
      cards.forEach((card) => {
        card.style.setProperty('--card-height', `${card.offsetHeight}px`);
      });
      onScroll();
    };
    const observer = new ResizeObserver(measure);
    cards.forEach((card) => observer.observe(card));

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} className="stack">
      {children}
    </div>
  );
}

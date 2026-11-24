import type { ReactNode } from 'react';
import { dict, type Lang } from '@/content/i18n';

/** Título principal: cada palavra sobe de uma máscara ao carregar a página. */
export function HeroTitle({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="w">
            <span className="wi" style={{ ['--i' as string]: i }}>
              {w}
            </span>
          </span>{' '}
        </span>
      ))}
    </h1>
  );
}

/** Faixa de tecnologias que corre sem parar. A segunda cópia fica escondida para leitores de tela. */
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="group" aria-label="Tecnologias / Technologies">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/** Moldura de navegador. Sem imagem, mostra o espaço reservado. */
export function Browser({ src, alt, lang, label }: { src: string; alt: string; lang: Lang; label: string }) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="browser-img" />
      ) : (
        <div className="browser-empty">{dict[lang].imagePlaceholder}</div>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dict, type Lang } from '@/content/i18n';

export default function Header({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const pathname = usePathname() || `/${lang}/`;
  const swap = (target: Lang) => pathname.replace(/^\/(pt|en)/, `/${target}`);
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <Link href={`/${lang}/`} className="brand" onClick={() => setMenuOpen(false)}>
        Taís Guimarães
      </Link>

      <button
        type="button"
        ref={toggleRef}
        className="menu-toggle"
        aria-label={menuOpen ? t.closeMenu : t.openMenu}
        aria-expanded={menuOpen}
        aria-controls={navId}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span className="menu-toggle-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav id={navId} aria-label={lang === 'pt' ? 'Principal' : 'Main navigation'} className="site-nav" data-open={menuOpen}>
        <Link href={`/${lang}/#projetos`} onClick={() => setMenuOpen(false)}>{t.navProjects}</Link>
        <Link href={`/${lang}/#sobre`} onClick={() => setMenuOpen(false)}>{t.navAbout}</Link>
        <Link href={`/${lang}/#contato`} onClick={() => setMenuOpen(false)}>{t.navContact}</Link>
        <div role="group" aria-label={`${t.language} / Language`} className="lang-switch">
          <Link href={swap('pt')} onClick={() => setMenuOpen(false)} aria-current={lang === 'pt' ? 'true' : undefined} hrefLang="pt-BR" lang="pt-BR">
            PT
          </Link>
          <Link href={swap('en')} onClick={() => setMenuOpen(false)} aria-current={lang === 'en' ? 'true' : undefined} hrefLang="en" lang="en">
            EN
          </Link>
        </div>
      </nav>
    </header>
  );
}

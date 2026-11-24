import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Browser } from '@/components/Bits';
import { RevealHeading } from '@/components/Reveal';
import { dict, isLang, langs } from '@/content/i18n';
import { site } from '@/content/site';
import { projects } from '@/content/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!isLang(lang) || !p) return {};
  return {
    title: `${p.name} | Taís Guimarães`,
    description: p.desc[lang],
    alternates: { canonical: `${site.url}/${lang}/cases/${p.slug}/` },
  };
}

export default async function Case({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const index = projects.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const t = dict[lang];
  const challenge = p.challenge?.[lang]?.trim();
  const result = p.result?.[lang]?.trim();

  return (
    <>
      <section className="case-hero" style={{ ['--bg' as string]: p.color, ['--fg' as string]: p.ink }}>
        <Header lang={lang} />
        <div className="container case-top" id="conteudo">
          <Link href={`/${lang}/#projetos`} className="back">
            {t.back}
          </Link>
          <p className="case-kind">{p.kind[lang]}</p>
          <h1>{p.name}</h1>
          <p className="case-desc">{p.desc[lang]}</p>
          <dl className="case-meta">
            <div>
              <dt>{t.year}</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>{t.role}</dt>
              <dd>{p.role[lang]}</dd>
            </div>
            <div>
              <dt>{t.tech}</dt>
              <dd>{p.tech.join(', ')}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="container case-cover">
        <Browser
          src={p.cover}
          alt={`${p.name}: ${p.headline[lang]}`}
          lang={lang}
          label={p.url ? p.url.replace(/^https?:\/\//, '') : p.name}
        />
        {p.url && (
          <p style={{ marginTop: 24 }}>
            <a href={p.url} className="link-strong" target="_blank" rel="noopener noreferrer">
              {t.visitProject}
            </a>
          </p>
        )}
      </div>

      {challenge && (
        <section className="container case-block" aria-label={t.challengeTitle}>
          <RevealHeading>{t.challengeTitle}</RevealHeading>
          <div className="case-block-body">
            <p style={{ fontSize: 22 }}>{challenge}</p>
          </div>
        </section>
      )}

      {p.did && p.did.length > 0 && (
        <section className="container case-block" aria-label={t.didTitle}>
          <RevealHeading>{t.didTitle}</RevealHeading>
          <div className="case-block-body">
            <ul className="did">
              {p.did.map((d) => (
                <li key={d.title.pt}>
                  <h3>{d.title[lang]}</h3>
                  {d.text?.[lang] && <p>{d.text[lang]}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {result && (
        <section className="container case-block" aria-label={t.resultTitle}>
          <RevealHeading>{t.resultTitle}</RevealHeading>
          <div className="case-block-body">
            <p style={{ fontSize: 22 }}>{result}</p>
          </div>
        </section>
      )}

      {p.gallery.length > 0 && (
        <section className="container case-block" aria-label={t.screensTitle} style={{ display: 'block' }}>
          <RevealHeading className="section-title">{t.screensTitle}</RevealHeading>
          <div className="gallery">
            {p.gallery.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${p.name}, ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </section>
      )}

      <section className="container section">
        <Link
          href={`/${lang}/cases/${next.slug}/`}
          className="next"
          style={{ ['--bg' as string]: next.color, ['--fg' as string]: next.ink }}
        >
          <span>
            <small>{t.nextProject}</small>
            <strong>{next.name}</strong>
          </span>
          <span className="btn">{t.openCase}</span>
        </Link>
      </section>

      <section className="contact" aria-label={t.navContact}>
        <div className="container">
          <RevealHeading>{t.caseContactTitle}</RevealHeading>
          <div className="contact-links" style={{ marginTop: 32 }}>
            <a href={site.whatsapp} className="btn" target="_blank" rel="noopener noreferrer">
              {t.whatsapp}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <p className="footer">{t.footer}</p>
        </div>
      </section>
    </>
  );
}

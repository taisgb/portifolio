import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { HeroTitle, Marquee, Browser } from '@/components/Bits';
import { RevealHeading } from '@/components/Reveal';
import CardStack from '@/components/CardStack';
import ProcessLine from '@/components/ProcessLine';
import { dict, isLang } from '@/content/i18n';
import { site } from '@/content/site';
import { archive, marquee, projects, skills, steps } from '@/content/projects';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];

  return (
    <>
      <section className="hero">
        <Header lang={lang} />
        <div className="container hero-body" id="conteudo">
          <HeroTitle text={t.heroTitle} />
          <div className="hero-foot">
            <p>{t.heroLead}</p>
            <a href="#projetos" className="btn" style={{ ['--shadow' as string]: '#fff' }}>
              {t.ctaProjects}
            </a>
          </div>
        </div>
      </section>

      <Marquee items={marquee} />

      <section id="projetos" className="container section" aria-labelledby="projetos-titulo">
        <RevealHeading className="section-title">
          <span id="projetos-titulo">{t.projectsTitle}</span>
        </RevealHeading>
        <CardStack>
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="card stack-card"
              style={{ ['--bg' as string]: p.color, ['--fg' as string]: p.ink, ['--i' as string]: i }}
            >
              <div>
                <p className="card-kind">
                  {p.kind[lang]}, {p.year}
                </p>
                <h3>{p.name}</h3>
                <p className="card-desc">{p.desc[lang]}</p>
                <dl className="meta">
                  <div>
                    <dt>{t.role}</dt>
                    <dd>{p.role[lang]}</dd>
                  </div>
                  <div>
                    <dt>{t.tech}</dt>
                    <dd>{p.tech.join(', ')}</dd>
                  </div>
                </dl>
                <div className="card-links">
                  <Link href={`/${lang}/cases/${p.slug}/`} className="btn btn-sm">
                    {t.openCase}
                  </Link>
                  {p.url && (
                    <a href={p.url} className="link-strong" target="_blank" rel="noopener noreferrer">
                      {t.visitProject}
                    </a>
                  )}
                </div>
              </div>
              <div className="card-side">
                <Browser
                  src={p.cover}
                  alt={`${p.name}: ${p.headline[lang]}`}
                  lang={lang}
                  label={p.url ? p.url.replace(/^https?:\/\//, '') : p.name}
                />
              </div>
            </article>
          ))}
        </CardStack>
      </section>

      <section className="container section" aria-labelledby="arquivo-titulo">
        <div className="archive">
          <RevealHeading className="section-title">
            <span id="arquivo-titulo">{t.archiveTitle}</span>
          </RevealHeading>
          <div>
            {archive.map((a) => {
              const inner = (
                <>
                  <span className="row-name">{a.name}</span>
                  <span className="row-area">{a.area[lang]}</span>
                  <span className="row-year">{a.year}</span>
                  <span className="row-go">{a.url ? t.visitSite : ''}</span>
                </>
              );
              return a.url ? (
                <a key={a.name} className="row" href={a.url} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={a.name} className="row">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container section" aria-labelledby="skills-titulo">
        <RevealHeading className="section-title">
          <span id="skills-titulo">{t.skillsTitle}</span>
        </RevealHeading>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.title.pt} className="skill">
              <h3>{s.title[lang]}</h3>
              <p>{s.items[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="container section about" aria-label={t.navAbout}>
        <RevealHeading>{t.aboutLead}</RevealHeading>
        <div className="about-body">
          <p>{t.about1}</p>
          <p>{t.about2}</p>
          <div className="about-links">
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {site.github && (
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container section" aria-labelledby="processo-titulo">
        <RevealHeading className="section-title">
          <span id="processo-titulo">{t.processTitle}</span>
        </RevealHeading>
        <ProcessLine>
          {steps.map((s) => (
            <li key={s.title.pt}>
              <h3>{s.title[lang]}</h3>
              <p>{s.text[lang]}</p>
            </li>
          ))}
        </ProcessLine>
      </section>

      <section id="contato" className="contact" aria-label={t.navContact}>
        <div className="container">
          <RevealHeading>{t.contactTitle}</RevealHeading>
          <p className="contact-lead">{t.contactLead}</p>
          <div className="contact-links">
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

import React, { useEffect, useState } from "react"
import altConviteDesktop from "./assets/alt3ntique/convite-desktop.png"
import altConviteMobile from "./assets/alt3ntique/convite-mobile.png"
import altLogo from "./assets/alt3ntique/logo.webp"
import altSiteHome from "./assets/alt3ntique/site-home-desktop.png"
import clinicaImage from "./assets/clinicadindi.png"
import elasImage from "./assets/elasmerecem.png"
import mariImage from "./assets/mari.png"
import oxeImage from "./assets/oxemilhas.png"
import reconcavoImage from "./assets/reconcavo-thumb.png"
import sucesuAgenda from "./assets/sucesu-bahia/agenda-desktop.png"
import sucesuHome from "./assets/sucesu-bahia/institucional-desktop.png"
import sucesuMobile from "./assets/sucesu-bahia/institucional-mobile.png"
import sucesuImage from "./assets/sucesu.png"
import tecnologiaDesktop from "./assets/tecnologia-liga/jogo-desktop.png"
import tecnologiaMobile from "./assets/tecnologia-liga/jogo-mobile.png"
import gpublica from "./assets/Gpublica.png"

type Project = {
  id: string
  number: string
  name: string
  category: string
  year?: string
  description: string
  role: string[]
  stack: string[]
  context: string
  challenge: string
  solution: string
  result: string
  tone: string
  private?: boolean
  externalUrl?: string
  caseRole?: string[]
  process?: string[]
}

const projects: Project[] = [
  {
    id: "tecnologia-liga-destinos",
    number: "01",
    name: "Tecnologia Liga Destinos",
    category: "Interactive Experience · Gamification · Web Development",
    year: "2026",
    description:
      "Experiência web gamificada criada para um evento de tecnologia e cibersegurança.",
    role: ["Game Experience", "Frontend Development", "UX/UI", "Backend Integration"],
    stack: ["JavaScript", "Firebase", "HTML", "CSS"],
    context:
      "Uma ativação digital criada para transformar conteúdo técnico em uma experiência coletiva, acessível diretamente pelo celular.",
    challenge:
      "Criar um jogo rápido de entender, estável durante o evento e capaz de manter participantes e organização sincronizados em tempo real.",
    solution:
      "Uma experiência mobile-first com dinâmica de jogo, ranking ao vivo e painel administrativo para operação da atividade.",
    result:
      "Jogo web mobile-first com mecânicas de interação, persistência de dados, ranking, top 3 diário e painel administrativo para uso durante o evento.",
    tone: "charcoal",
    externalUrl: "https://www.tecnologialigadestinos.com.br/",
  },
  {
    id: "sucesu-bahia",
    number: "02",
    name: "SUCESU Bahia",
    category: "Institutional Website · UX/UI · WordPress Development",
    year: "2025",
    description:
      "Evolução da presença digital institucional da SUCESU Bahia.",
    role: ["WordPress Development", "Elementor", "Information Architecture", "Responsive Design"],
    stack: ["WordPress", "Elementor", "CSS", "JavaScript", "PHP"],
    context:
      "A SUCESU Bahia precisava organizar sua presença institucional digital, apresentando com mais clareza a associação, suas iniciativas, eventos e atuação no ecossistema de tecnologia da Bahia.",
    challenge:
      "Reformular a experiência sem perder a identidade da organização, dando hierarquia a conteúdos institucionais e facilitando o acesso às iniciativas.",
    solution:
      "Reorganização da arquitetura de informação, evolução visual da home, destaque para eventos e iniciativas e adaptação responsiva das páginas.",
    result:
      "Presença institucional reformulada com hierarquia visual mais clara, conteúdo organizado, agenda, páginas internas e experiência adaptada para dispositivos móveis.",
    tone: "sage",
    externalUrl: "https://sucesuba.org.br/",
  },
  {
    id: "congresso-sucesu-2026",
    number: "03",
    name: "Congresso SUCESU BA 2026",
    category: "Event Platform · WordPress Development",
    year: "2026",
    description:
      "Plataforma digital específica para concentrar a programação, os palestrantes e os conteúdos do congresso.",
    role: ["WordPress Development", "Elementor", "Frontend Customization", "Responsive Design"],
    stack: ["WordPress", "Elementor", "JavaScript", "CSS"],
    context:
      "O Congresso SUCESU BA precisava reunir múltiplos conteúdos, palestrantes e atividades em uma experiência organizada e simples para o público.",
    challenge:
      "Dar legibilidade a uma programação extensa, com diferentes períodos e categorias, sem dificultar a atualização das informações ao longo do projeto.",
    solution:
      "Criação de uma plataforma específica para o congresso, com hierarquia de conteúdo, agenda estruturada, filtros e navegação adaptada a diferentes dispositivos.",
    result:
      "Home do congresso, programação dividida por períodos, filtros por categorias, estrutura de palestrantes, páginas internas e experiência responsiva.",
    tone: "sand",
    externalUrl: 'https://sucesuba.org.br/congresso2026/',
  },
  {
    id: "alt3ntique",
    number: "04",
    name: "Alt3ntique",
    category: "Event Technology · Custom System · Data Management",
    year: "2026",
    description:
      "Solução operacional customizada para centralizar convidados, confirmações de presença e feedback de eventos.",
    role: ["Business Rules", "System Architecture", "Development", "Admin Experience", "Data Structure"],
    stack: ["PHP", "WordPress", "SQL", "JavaScript"],
    context:
      "A operação de eventos precisava conectar a experiência do participante à organização dos dados, com fluxos de confirmação, pesquisa e gestão em um único ambiente.",
    challenge:
      "Traduzir regras específicas de identificação, presença e feedback em uma ferramenta simples para convidados e estruturada para a equipe administrativa.",
    solution:
      "Uma solução desenvolvida sobre WordPress que valida convidados por e-mail, registra confirmações e respostas, segmenta informações por cidade e oferece controle administrativo dos dados.",
    result:
      "Fluxos de identificação e confirmação, formulário de convidados, pesquisa de satisfação, dashboard com filtros, detalhamento individual e exportação de dados em CSV.",
    tone: "olive",
    externalUrl: "https://alt3ntique.com/",
    caseRole: [
      "Levantamento e tradução das regras de negócio",
      "Arquitetura da funcionalidade",
      "Desenvolvimento e lógica de validação",
      "Estruturação dos dados",
      "Interface administrativa",
      "Evolução e manutenção",
    ],
    process: [
      "Regras de negócio",
      "Arquitetura",
      "Validação",
      "Estrutura de dados",
      "Desenvolvimento",
      "Operação",
    ],
  },
]

const otherWork = [
  { name: "Elas Merecem", category: "Saúde · Website", year: "2025", image: elasImage, url: "https://psicologiademulheres.com/" },
  { name: "Consultório Ingrid Guimarães", category: "Saúde · Website", year: "2024", image: clinicaImage, url: 'https://www.consultorioingridguimaraes.com.br/' },
  { name: "Recôncavo Engenharia", category: "Engenharia · Website", year: "2024", image: reconcavoImage, url: 'https://www.reconcavoea.com.br/' },
  { name: "Oxe Milhas e Viagens", category: "Turismo · Website", year: "2025", image: oxeImage, url: 'https://www.oxemilhaseviagens.com.br/' },
  { name: "Mariana Virgínio", category: "Saúde · Website", year: "2025", image: mariImage, url: 'https://www.psimarivirginio.com.br/' },
  {
    name: "GPública",
    category: "Corporativo · WordPress Development",
    image: gpublica,
    url: "https://gpublica.com.br/",
    note: "Implementação técnica a partir de design previamente definido",
  },
]

type PrimitiveProps = React.HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "p"
}

function Text({ as = "p", children, ...props }: PrimitiveProps) {
  return React.createElement(as, props, children)
}

function Link({
  href,
  children,
  className,
  onClick,
  ariaLabel,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  ariaLabel?: string
  target?: string
  rel?: string
}) {
  return React.createElement(
    "a",
    { href, className, onClick, target, rel, "aria-label": ariaLabel },
    children,
  )
}

function InterfaceVisual({
  project,
  detail = false,
}: {
  project: Project
  detail?: boolean
}) {

  if (project.id === "tecnologia-liga-destinos") {
    return (
      <div
        className={`visual visual-${project.tone} ${
          detail ? "visual-detail" : ""
        }`}
      >
        <div className="game-showcase">
          <img
            loading="lazy"
            decoding="async"
            className="game-desktop-shot"
            src={tecnologiaDesktop}
            alt="Jogo Tecnologia Liga Destinos em desktop"
          />
          <img
            loading="lazy"
            decoding="async"
            className="game-mobile-shot"
            src={tecnologiaMobile}
            alt="Jogo Tecnologia Liga Destinos em dispositivo móvel"
          />
          <div className="game-shot-label">
            <span>EXPERIÊNCIA AO VIVO</span>
            <b>Jogo · Ranking · Top 3 diário</b>
          </div>
        </div>
      </div>
    )
  }

  if (project.id === "sucesu-bahia") {
    return (
      <div
        className={`visual visual-${project.tone} ${
          detail ? "visual-detail" : ""
        }`}
      >
        <div className="institutional-gallery">
          <img
            loading="lazy"
            decoding="async"
            className="institutional-home"
            src={sucesuHome}
            alt="Página inicial institucional da SUCESU Bahia"
          />
          <img
            loading="lazy"
            decoding="async"
            className="institutional-agenda"
            src={sucesuAgenda}
            alt="Agenda do site institucional da SUCESU Bahia"
          />
          <img
            loading="lazy"
            decoding="async"
            className="institutional-mobile"
            src={sucesuMobile}
            alt="Site institucional da SUCESU Bahia em dispositivo móvel"
          />
          <span>ARQUITETURA · CONTEÚDO · PRESENÇA DIGITAL</span>
        </div>
      </div>
    )
  }

  if (project.id === "congresso-sucesu-2026") {
    return (
      <div
        className={`visual visual-${project.tone} ${
          detail ? "visual-detail" : ""
        }`}
      >
        <div className="event-screen">
          <img loading="lazy" decoding="async" width={1902} height={939} src={sucesuImage} alt="Plataforma do Congresso SUCESU Bahia" />
        </div>
        <div className="event-note">
          <span>CONGRESSO SUCESU BA 2026</span>
          <b>
            Programação, filtros
            <br />e conteúdo dinâmico
          </b>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`visual visual-${project.tone} ${
        detail ? "visual-detail" : ""
      }`}
    >
      <div className="alt-gallery">
        <img
          loading="lazy"
          decoding="async"
          className="alt-photo alt-photo-main"
          src={altSiteHome}
          alt="Página inicial do site Alt3ntique"
        />
        <img
          loading="lazy"
          decoding="async"
          className="alt-photo alt-photo-wide"
          src={altConviteDesktop}
          alt="Página de convite do evento Alt3ntique em desktop"
        />
        <img
          loading="lazy"
          decoding="async"
          className="alt-photo alt-photo-portrait"
          src={altConviteMobile}
          alt="Página de convite do evento Alt3ntique em dispositivo móvel"
        />
        <div className="alt-brand">
          <img loading="lazy" decoding="async" width={249} height={75} src={altLogo} alt="Alt3ntique" />
          <span>EVENT TECHNOLOGY</span>
        </div>
        <span className="alt-gallery-caption">
          CONVITE · PRESENÇA · FEEDBACK · DADOS
        </span>
      </div>
    </div>
  )
}

function Alt3ntiqueOperations({ detail = false }: { detail?: boolean }) {
  return (
    <div
      className={`visual visual-olive ${
        detail ? "visual-detail" : ""
      }`}
    >
      <div className="event-flow">
        <div className="flow-column flow-participant">
          <span className="tiny-label">01 · PARTICIPANTE</span>
          <Text as="h3">Uma entrada simples.</Text>
          <div className="email-check">
            <span>IDENTIFICAÇÃO POR E-MAIL</span>
            <b>Convidado identificado</b>
            <i>CONFIRMAR PRESENÇA →</i>
          </div>
          <div className="flow-tags">
            <span>Dados pessoais</span>
            <span>Instituição</span>
            <span>Cargo</span>
          </div>
        </div>
        <div className="flow-column flow-data">
          <span className="tiny-label">02 · PROCESSAMENTO</span>
          <div className="data-pulse">
            <i />
            <i />
            <i />
          </div>
          <Text as="h3">Dados estruturados por cidade.</Text>
          <span className="database-label">SQL · PERSISTÊNCIA · VALIDAÇÃO</span>
        </div>
        <div className="flow-column flow-admin">
          <span className="tiny-label">03 · OPERAÇÃO</span>
          <Text as="h3">Controle para a equipe.</Text>
          <div className="admin-toolbar">
            <span>Todos</span>
            <span>Confirmados</span>
            <b>EXPORTAR CSV</b>
          </div>
          <div className="response-list">
            <span><i /> Resposta individual <b>Ver detalhes</b></span>
            <span><i /> Pesquisa de satisfação <b>Ver detalhes</b></span>
            <span><i /> Confirmação de presença <b>Ver detalhes</b></span>
          </div>
        </div>
      </div>
      <span className="flow-caption">
        EXPERIÊNCIA → DADOS → OPERAÇÃO
      </span>
    </div>
  )
}

function ArrowLink({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <Link className="arrow-link" href={href} onClick={onClick}>
      {children}
      <span>↗</span>
    </Link>
  )
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean
  onToggle: () => void
}) {
  return React.createElement(
    "button",
    {
      type: "button",
      className: "theme-toggle",
      onClick: onToggle,
      "aria-label": isDark ? "Ativar tema claro" : "Ativar tema escuro",
      title: isDark ? "Tema claro" : "Tema escuro",
    },
    React.createElement("span", { className: "theme-toggle-dot" }),
    isDark ? "LIGHT" : "DARK",
  )
}

function Header({
  isDark,
  onThemeToggle,
}: {
  isDark: boolean
  onThemeToggle: () => void
}) {
  return (
    <header className="site-header">
      <Link href="#top" className="wordmark">
        TAÍS / DEV
      </Link>
      <div className="header-actions">
        <nav aria-label="Navegação principal">
          <Link href="#projetos">Projetos</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#contato">Contato</Link>
        </nav>
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </header>
  )
}

function Home({
  openProject,
  isDark,
  onThemeToggle,
}: {
  openProject: (project: Project) => void
  isDark: boolean
  onThemeToggle: () => void
}) {
  return (
    <>
      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
      <main id="top">
        <section className="hero">
          <div className="hero-kicker">
            <span>DESENVOLVIMENTO</span>
            <span>PRODUTO DIGITAL</span>
          </div>
          <Text as="h1">
            Software, interfaces
            <br />e produtos <em>digitais.</em>
          </Text>
          <div className="hero-foot">
            <Text>
              Desenvolvimento de software, aplicações web, plataformas e experiências
              digitais — da arquitetura à interface.
            </Text>
            <div className="hero-actions">
              <Link className="primary-link" href="#projetos">
                Explorar projetos <span>↓</span>
              </Link>
              <Link className="text-link" href="#contato">
                Entrar em contato
              </Link>
            </div>
          </div>
          <div className="hero-index">
            <span>PORTFÓLIO SELECIONADO</span>
            <span>SALVADOR · BRASIL</span>
            <span>2023 — 2026</span>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="section-heading reveal">
            <span className="eyebrow">01 / TRABALHOS</span>
            <Text as="h2">Projetos em destaque</Text>
            <Text>Projetos digitais com diferentes níveis de atuação — da arquitetura à implementação.</Text>
          </div>

          {projects.map((project) => (
            <article className="project reveal" key={project.id}>
              <div className="project-head">
                <span className="project-number">/{project.number}</span>
                <div>
                  <Text as="h3">{project.name}</Text>
                  <span className="project-category">{project.category}</span>
                </div>
                {project.year && <span className="project-year">{project.year}</span>}
              </div>
              <InterfaceVisual project={project} />
              <div className="project-info">
                <Text>{project.description}</Text>
                <div className="meta-block">
                  <span>MINHA ATUAÇÃO</span>
                  <Text>{project.role.join(" · ")}</Text>
                </div>
                <div className="meta-block">
                  <span>TECNOLOGIAS</span>
                  <Text>{project.stack.join(" · ")}</Text>
                </div>
                {!project.private ? (
                  <div className="project-links">
                    <ArrowLink
                      href={`#case-${project.id}`}
                      onClick={(event) => {
                        event.preventDefault()
                        openProject(project)
                      }}
                    >
                      Explorar case
                    </ArrowLink>
                    {project.externalUrl && (
                      <Link
                        className="live-link"
                        href={project.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visitar projeto ↗
                      </Link>
                    )}
                  </div>
                ) : (
                  <span className="private-label">
                    Projeto privado · Em desenvolvimento
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="other-work">
          <div className="section-heading reveal">
            <span className="eyebrow">02 / ARQUIVO</span>
            <Text as="h2">Outros trabalhos</Text>
          </div>
          <div className="work-grid">
            {otherWork.map((work, index) => (
              <article className="work-item reveal" key={work.name}>
                <div className={`work-image work-image-${index + 1} ${!work.image ? "work-image-brand" : ""}`}>
                  <span>0{index + 1}</span>
                  {work.image ? (
                    <img loading="lazy" decoding="async" src={work.image} alt={`Projeto ${work.name}`} />
                  ) : (
                    <div className="work-brand-placeholder" aria-label={`Projeto ${work.name}`}>
                      <strong>GPÚBLICA</strong>
                      <small>WORDPRESS · FRONTEND</small>
                    </div>
                  )}
                </div>
                <div>
                  <Text as="h3">{work.name}</Text>
                  <span>{work.category}</span>
                  {work.year && <span>{work.year}</span>}
                  {work.note && <span className="work-note">{work.note}</span>}
                  {work.url && (
                    <Link className="work-link" href={work.url} target="_blank" rel="noreferrer">
                      Visitar site ↗
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities">
          <div className="section-heading reveal">
            <span className="eyebrow">03 / CAPABILITIES</span>
            <Text as="h2">
              Entre produto
              <br />e código.
            </Text>
          </div>
          <div className="capability-grid">
            {[
              [
                "01",
                "Product",
                "Product thinking",
                "UX/UI",
                "Prototyping",
                "Design Systems",
              ],
              [
                "02",
                "Frontend",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind",

              ],
              [
                "03",
                "Backend",
                "Node.js",
                "Fastify",
                "REST APIs",
                "PostgreSQL",
                "Authentication",
              ],
              [
                "04",
                "Platforms",
                "WordPress",
                "Supabase",
                "Firebase",
                "Vercel",
              ],
            ].map(([number, title, ...items]) => (
              <div className="capability reveal" key={title}>
                <span>{number}</span>
                <Text as="h3">{title}</Text>
                <Text>{items.join("\n")}</Text>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="about-label reveal">
            <span className="eyebrow">04 / SOBRE</span>
            <span>TAÍS GUIMARÃES</span>
          </div>
          <div className="about-copy reveal">
            <Text as="h2">
              Transformo necessidades de negócio em produtos digitais claros e
              funcionais.
            </Text>
            <Text>
              Sou desenvolvedora de software em Salvador, focada na criação de produtos e
              experiências digitais. Trabalho entre desenvolvimento, interface e produto —
              conectando visão, decisões de design e engenharia.
            </Text>
            <Text>
              Atuo em aplicações web, SaaS, plataformas e projetos em WordPress
              quando essa é a ferramenta certa para o contexto.
            </Text>
            <div className="social-row">
              <Link href="#contato">LinkedIn ↗</Link>
              <Link href="#contato">GitHub ↗</Link>
             
            </div>
          </div>
        </section>

        <section className="process">
          <span className="eyebrow reveal">05 / COMO TRABALHO</span>
          <div className="process-list">
            {[
              ["01", "Entender", "Contexto, pessoas e objetivo."],
              ["02", "Estruturar", "Fluxos, prioridades e arquitetura."],
              ["03", "Projetar", "Interfaces claras e consistentes."],
              ["04", "Construir", "Código robusto e bem cuidado."],
              ["05", "Evoluir", "Aprender, ajustar e escalar."],
            ].map(([number, title, copy]) => (
              <div className="process-row reveal" key={title}>
                <span>{number}</span>
                <Text as="h3">{title}</Text>
                <Text>{copy}</Text>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contato">
          <span className="eyebrow">VAMOS CONVERSAR</span>
          <Text as="h2">
            Tem um projeto
            <br />
            em mente?
          </Text>
          <Text>
            Vamos conversar sobre produto, desenvolvimento ou uma nova ideia.
          </Text>
          <Link
            className="contact-link"
            href="https://wa.me/557131909887?text=Ol%C3%A1%2C%20Ta%C3%ADs!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            ariaLabel="Conversar com Taís pelo WhatsApp"
          >
            Falar pelo WhatsApp <span>↗</span>
          </Link>
          <div className="contact-meta">
            <Link href="mailto:taisfrontend@gmail.com">taisfrontend@gmail.com</Link>
            <Link
              href="https://wa.me/557131909887?text=Ol%C3%A1%2C%20Ta%C3%ADs!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              ariaLabel="WhatsApp de Taís Guimarães"
            >
              +55 71 3190-9887
            </Link>
          </div>
        </section>
      </main>
      <footer>
        <span>TAÍS GUIMARÃES</span>
        <span>SALVADOR — BRASIL</span>
        <span>© 2026</span>
      </footer>
    </>
  )
}

function CasePage({
  project,
  close,
  isDark,
  onThemeToggle,
}: {
  project: Project
  close: () => void
  isDark: boolean
  onThemeToggle: () => void
}) {
  return (
    <main className="case-page">
      <div className="case-nav">
        <Link
          href="#projetos"
          onClick={(event) => {
            event.preventDefault()
            close()
          }}
        >
          ← Voltar aos projetos
        </Link>
        <div className="case-nav-actions">
          <span>TAÍS / DEV</span>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
      <section className="case-hero">
        <span className="eyebrow">{project.category}</span>
        <Text as="h1">{project.name}</Text>
        <div>
          <Text>{project.description}</Text>
          {project.year && <span>{project.year}</span>}
        </div>
      </section>
      <InterfaceVisual project={project} detail />
      <section className="case-context">
        <span className="eyebrow">CONTEXTO</span>
        <Text as="h2">{project.context}</Text>
        <div className="case-role">
          <span>MINHA ATUAÇÃO</span>
                  <Text>{(project.caseRole ?? project.role).join("\n")}</Text>
        </div>
      </section>
      <section className="case-split">
        <div>
          <span className="eyebrow">O DESAFIO</span>
          <Text as="h2">{project.challenge}</Text>
        </div>
        <div>
          <span className="eyebrow">A SOLUÇÃO</span>
          <Text>{project.solution}</Text>
        </div>
      </section>
      {project.process && (
        <section className="case-process">
          <span className="eyebrow">PROCESSO</span>
          <div>
            {project.process.map((item, index) => (
              <span key={item}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                {item}
              </span>
            ))}
          </div>
        </section>
      )}
      <section className="case-interface">
        <div className="section-heading">
          <span className="eyebrow">INTERFACE</span>
          <Text as="h2">
            Decisões que tornam
            <br />o complexo simples.
          </Text>
        </div>
        {project.id === "alt3ntique" ? (
          <Alt3ntiqueOperations detail />
        ) : (
          <InterfaceVisual project={project} detail />
        )}
        <div className="interface-notes">
          <Text>
            Hierarquia direta, fluxos legíveis e consistência para diferentes
            contextos de uso.
          </Text>
          <Text>
            Uma experiência desenhada junto da arquitetura e das restrições
            reais do produto.
          </Text>
        </div>
      </section>
      <section className="case-result">
        <span className="eyebrow">TECNOLOGIA</span>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <span className="eyebrow result-label">RESULTADO</span>
        <Text as="h2">{project.result}</Text>
        {project.externalUrl && (
          <Link
            className="case-live-link"
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
          >
            Acessar experiência ao vivo <span>↗</span>
          </Link>
        )}
      </section>
      <section className="next-project">
        <span>PRÓXIMO PROJETO</span>
        <Link
          href="#projetos"
          onClick={(event) => {
            event.preventDefault()
            close()
          }}
        >
          Ver todos os projetos <b>↗</b>
        </Link>
      </section>
    </main>
  )
}

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem("tais-theme")
    if (savedTheme) return savedTheme === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light"
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
    window.localStorage.setItem("tais-theme", isDark ? "dark" : "light")
  }, [isDark])

  useEffect(() => {
    const baseTitle = "Taís Guimarães | Desenvolvedora de Software e Produtos Digitais"
    const baseDescription =
      "Portfólio de Taís Guimarães, desenvolvedora de software em Salvador. Projetos de aplicações web, produtos digitais, UX/UI, React, TypeScript e WordPress."
    const title = selected ? `${selected.name} | Projeto de Taís Guimarães` : baseTitle
    const description = selected ? selected.description : baseDescription

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute("content", description)
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title)
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description)
  }, [selected])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.08 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [selected])

  const openProject = (project: Project) => {
    setSelected(project)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const closeProject = () => {
    setSelected(null)
    window.setTimeout(
      () => document.querySelector("#projetos")?.scrollIntoView(),
      0,
    )
  }

  const toggleTheme = () => setIsDark((current) => !current)

  return selected ? (
    <CasePage
      project={selected}
      close={closeProject}
      isDark={isDark}
      onThemeToggle={toggleTheme}
    />
  ) : (
    <Home
      openProject={openProject}
      isDark={isDark}
      onThemeToggle={toggleTheme}
    />
  )
}

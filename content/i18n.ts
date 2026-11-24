export type Lang = 'pt' | 'en';
export const langs: Lang[] = ['pt', 'en'];
export type L = { pt: string; en: string };

export const isLang = (v: string): v is Lang => v === 'pt' || v === 'en';

export const dict = {
  pt: {
    metaTitle: 'Taís Guimarães | Desenvolvedora de Software e Produtos Digitais',
    metaDescription:
      'Portfólio de Taís Guimarães, desenvolvedora de software em Salvador: aplicações web, produtos digitais, UX/UI, React, TypeScript e WordPress.',
    skip: 'Ir para o conteúdo',
    navProjects: 'Projetos',
    navAbout: 'Sobre',
    navContact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
    heroTitle: 'Software, interfaces e produtos digitais.',
    heroLead:
      'Desenvolvo aplicações web, plataformas e experiências digitais, da arquitetura à interface. Trabalho de Salvador, Bahia.',
    ctaProjects: 'Ver projetos',
    projectsTitle: 'Projetos em destaque',
    role: 'Minha atuação',
    tech: 'Tecnologias',
    year: 'Ano',
    openCase: 'Ver o case completo',
    visitProject: 'Visitar o projeto',
    archiveTitle: 'Outros trabalhos',
    visitSite: 'Visitar site',
    skillsTitle: 'Entre produto e código',
    aboutLead: 'Transformo necessidades de negócio em produtos digitais claros e funcionais.',
    about1:
      'Sou desenvolvedora de software em Salvador, focada em produtos e experiências digitais. Trabalho entre desenvolvimento, interface e produto, conectando visão, decisões de design e engenharia.',
    about2:
      'Atuo em aplicações web, SaaS, plataformas e projetos em WordPress quando essa é a ferramenta certa para o contexto.',
    processTitle: 'Como trabalho',
    contactTitle: 'Tem um projeto em mente?',
    contactLead: 'Vamos conversar sobre produto, desenvolvimento ou uma nova ideia.',
    whatsapp: 'Falar pelo WhatsApp',
    back: 'Voltar aos projetos',
    challengeTitle: 'O desafio',
    didTitle: 'O que eu fiz',
    resultTitle: 'Resultado',
    screensTitle: 'Telas do projeto',
    nextProject: 'Próximo projeto',
    caseContactTitle: 'Vamos fazer algo parecido?',
    imagePlaceholder: 'Adicione a imagem em content/projects.ts',
    footer: 'Feito em Salvador, Bahia.',
  },
  en: {
    metaTitle: 'Taís Guimarães | Software Developer and Digital Products',
    metaDescription:
      'Portfolio of Taís Guimarães, software developer in Salvador, Brazil: web applications, digital products, UX/UI, React, TypeScript and WordPress.',
    skip: 'Skip to content',
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    heroTitle: 'Software, interfaces and digital products.',
    heroLead:
      'I build web applications, platforms and digital experiences, from architecture to interface. Based in Salvador, Bahia.',
    ctaProjects: 'See projects',
    projectsTitle: 'Featured projects',
    role: 'My role',
    tech: 'Technologies',
    year: 'Year',
    openCase: 'Read the case study',
    visitProject: 'Visit the project',
    archiveTitle: 'Other work',
    visitSite: 'Visit site',
    skillsTitle: 'Between product and code',
    aboutLead: 'I turn business needs into clear, working digital products.',
    about1:
      'I am a software developer in Salvador, focused on digital products and experiences. I work across development, interface and product, connecting vision, design decisions and engineering.',
    about2:
      'I work on web apps, SaaS, platforms and WordPress projects when it is the right tool for the context.',
    processTitle: 'How I work',
    contactTitle: 'Have a project in mind?',
    contactLead: 'Let us talk about product, development or a new idea.',
    whatsapp: 'Message me on WhatsApp',
    back: 'Back to projects',
    challengeTitle: 'The challenge',
    didTitle: 'What I did',
    resultTitle: 'Outcome',
    screensTitle: 'Project screens',
    nextProject: 'Next project',
    caseContactTitle: "Let's build something similar?",
    imagePlaceholder: 'Add the image in content/projects.ts',
    footer: 'Made in Salvador, Bahia.',
  },
} as const;

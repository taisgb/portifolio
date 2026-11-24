import type { L } from './i18n';

/**
 * COMO EDITAR
 * - Imagens: coloque o arquivo em public/projects/ e escreva o caminho, ex.: '/projects/alt3ntique-capa.jpg'.
 *   Deixe '' para mostrar o espaço reservado.
 * - Links: 'url' é o endereço do site publicado. Deixe '' para esconder o botão "Visitar".
 * - Textos do case (challenge, did, result): preencha em português e inglês.
 *   Se estiverem vazios, a seção correspondente não aparece na página do case.
 */

export type Project = {
  slug: string;
  name: string;
  year: string;
  kind: L;
  headline: L;
  desc: L;
  role: L;
  tech: string[];
  url: string;
  color: string; // cor do cartão
  ink: string; // cor do texto sobre o cartão
  cover: string; // imagem principal (capa do cartão e do case)
  gallery: string[]; // outras telas do case
  challenge?: L;
  did?: { title: L; text?: L }[];
  result?: L;
};

export const projects: Project[] = [
  {
    slug: 'tecnologia-liga-destinos',
    name: 'Tecnologia Liga Destinos',
    year: '2026',
    kind: { pt: 'Experiência interativa e gamificação', en: 'Interactive experience and gamification' },
    headline: { pt: 'Jogo, ranking e top 3 diário', en: 'Game, ranking and a daily top 3' },
    desc: {
      pt: 'Experiência web gamificada criada para um evento de tecnologia e cibersegurança.',
      en: 'A gamified web experience created for a technology and cybersecurity event.',
    },
    role: {
      pt: 'Experiência de jogo, desenvolvimento frontend, UX/UI e integração com o backend.',
      en: 'Game experience, frontend development, UX/UI and backend integration.',
    },
    tech: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    url: '',
    color: '#2D5BFF',
    ink: '#FFFFFF',
    cover: '/projects/tecnologia-liga-destinos-capa.png',
    gallery: ['/projects/tecnologia-liga-destinos-game.png'],
  },
  {
    slug: 'sucesu-bahia',
    name: 'SUCESU Bahia',
    year: '2025',
    kind: { pt: 'Site institucional e UX/UI', en: 'Institutional website and UX/UI' },
    headline: {
      pt: 'Arquitetura, conteúdo e presença digital',
      en: 'Architecture, content and digital presence',
    },
    desc: {
      pt: 'Evolução da presença digital institucional da SUCESU Bahia.',
      en: 'An evolution of the institutional digital presence of SUCESU Bahia.',
    },
    role: {
      pt: 'Desenvolvimento em WordPress, Elementor, arquitetura da informação e design responsivo.',
      en: 'WordPress development, Elementor, information architecture and responsive design.',
    },
    tech: ['WordPress', 'Elementor', 'CSS', 'JavaScript', 'PHP'],
    url: 'https://sucesuba.org.br/',
    color: '#FFD23F',
    ink: '#1B1B1B',
    cover: '/projects/institucional-home-desktop.png',
    gallery: [],
  },
  {
    slug: 'congresso-sucesu-ba-2026',
    name: 'Congresso SUCESU BA 2026',
    year: '2026',
    kind: { pt: 'Plataforma para evento', en: 'Event platform' },
    headline: {
      pt: 'Programação, filtros e conteúdo dinâmico',
      en: 'Schedule, filters and dynamic content',
    },
    desc: {
      pt: 'Plataforma digital específica para reunir a programação, os palestrantes e os conteúdos do congresso.',
      en: 'A dedicated digital platform gathering the schedule, speakers and content of the congress.',
    },
    role: {
      pt: 'Desenvolvimento em WordPress, Elementor, personalização do frontend e design responsivo.',
      en: 'WordPress development, Elementor, frontend customization and responsive design.',
    },
    tech: ['WordPress', 'Elementor', 'JavaScript', 'CSS'],
    url: 'https://sucesuba.org.br/congresso2026/',
    color: '#FF8FB8',
    ink: '#1B1B1B',
    cover: '/projects/sucesu-congresso-2026-capa.png',
    gallery: ['/projects/sucesu-congresso-tela2.png', '/projects/sucesu-congresso-tela3.png', '/projects/sucesu-congresso-tela4.png'],
  },
  {
    slug: 'alt3ntique',
    name: 'Alt3ntique',
    year: '2026',
    kind: {
      pt: 'Tecnologia para eventos e sistema sob medida',
      en: 'Event technology and custom system',
    },
    headline: {
      pt: 'Convite, presença, feedback e dados',
      en: 'Invitations, attendance, feedback and data',
    },
    desc: {
      pt: 'Solução operacional sob medida para reunir convidados, confirmações de presença e feedback de eventos.',
      en: 'A custom operational solution to centralize guests, attendance confirmations and event feedback.',
    },
    role: {
      pt: 'Regras de negócio, arquitetura do sistema, desenvolvimento, experiência do administrador e estrutura de dados.',
      en: 'Business rules, system architecture, development, admin experience and data structure.',
    },
    tech: ['PHP', 'WordPress', 'SQL', 'JavaScript'],
    url: '',
    color: '#1FBF75',
    ink: '#1B1B1B',
    cover: '/projects/altentique-capa.png',
    gallery: ['/projects/altentique-tela1.png', '/projects/altentique-tela2.png'],

    challenge: { pt: '', en: '' },
    did: [
      { title: { pt: 'Regras de negócio', en: 'Business rules' } },
      { title: { pt: 'Arquitetura do sistema', en: 'System architecture' } },
      { title: { pt: 'Desenvolvimento', en: 'Development' } },
      { title: { pt: 'Experiência do administrador', en: 'Admin experience' } },
      { title: { pt: 'Estrutura de dados', en: 'Data structure' } },
    ],
    result: { pt: '', en: '' },
  },
];

export type ArchiveItem = { name: string; area: L; year: string; url: string };

export const archive: ArchiveItem[] = [
  { name: 'Elas Merecem', area: { pt: 'Saúde, site', en: 'Health, website' }, year: '2025', url: 'https://psicologiademulheres.com/' },
  { name: 'Consultório Ingrid Guimarães', area: { pt: 'Saúde, site', en: 'Health, website' }, year: '2024', url: 'https://www.consultorioingridguimaraes.com.br/' },
  { name: 'Recôncavo Engenharia', area: { pt: 'Engenharia, site', en: 'Engineering, website' }, year: '2024', url: 'https://www.reconcavoea.com.br/' },
  { name: 'Oxe Milhas e Viagens', area: { pt: 'Turismo, site', en: 'Tourism, website' }, year: '2025', url: 'https://www.oxemilhaseviagens.com.br/' },
  { name: 'Mariana Virgínio', area: { pt: 'Saúde, site', en: 'Health, website' }, year: '2025', url: 'https://www.psimarivirginio.com.br/' },
  {
    name: 'GPública',
    area: {
      pt: 'Corporativo, WordPress. Implementação técnica a partir de um design já definido.',
      en: 'Corporate, WordPress. Technical implementation from an existing design.',
    },
    year: '',
    url: '',
  },
];

export const skills: { title: L; items: L }[] = [
  { title: { pt: 'Produto', en: 'Product' }, items: { pt: 'Visão de produto, UX/UI, prototipação, design systems', en: 'Product thinking, UX/UI, prototyping, design systems' } },
  { title: { pt: 'Frontend', en: 'Frontend' }, items: { pt: 'React, Next.js, TypeScript, JavaScript, Tailwind', en: 'React, Next.js, TypeScript, JavaScript, Tailwind' } },
  { title: { pt: 'Backend', en: 'Backend' }, items: { pt: 'Node.js, Fastify, APIs REST, PostgreSQL, autenticação', en: 'Node.js, Fastify, REST APIs, PostgreSQL, authentication' } },
  { title: { pt: 'Plataformas', en: 'Platforms' }, items: { pt: 'WordPress, Supabase, Firebase, Vercel', en: 'WordPress, Supabase, Firebase, Vercel' } },
];

export const steps: { title: L; text: L }[] = [
  { title: { pt: 'Entender', en: 'Understand' }, text: { pt: 'Contexto, pessoas e objetivo.', en: 'Context, people and goals.' } },
  { title: { pt: 'Estruturar', en: 'Structure' }, text: { pt: 'Fluxos, prioridades e arquitetura.', en: 'Flows, priorities and architecture.' } },
  { title: { pt: 'Projetar', en: 'Design' }, text: { pt: 'Interfaces claras e consistentes.', en: 'Clear, consistent interfaces.' } },
  { title: { pt: 'Construir', en: 'Build' }, text: { pt: 'Código robusto e bem cuidado.', en: 'Robust, carefully written code.' } },
  { title: { pt: 'Evoluir', en: 'Evolve' }, text: { pt: 'Aprender, ajustar e escalar.', en: 'Learn, adjust and scale.' } },
];

// Faixa que corre logo abaixo da abertura
export const marquee = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Firebase', 'Supabase', 'PostgreSQL', 'Tailwind', 'Vercel', 'React Native',
];

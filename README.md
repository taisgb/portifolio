# Portfólio da Taís Guimarães

Site em Next.js (App Router) + TypeScript, exportado como site estático, em português e inglês.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000  (abre em /pt/ ou /en/ conforme o navegador)
npm run build    # gera a pasta out/ pronta para publicar
```

Para publicar: envie a pasta `out/` para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages)
ou conecte o repositório à Vercel (o `output: 'export'` já está configurado em `next.config.mjs`).

## O que você edita à mão

Tudo fica em `content/`:

| Arquivo | O que controla |
| --- | --- |
| `content/projects.ts` | Projetos em destaque, outros trabalhos, habilidades, etapas do processo e a faixa de tecnologias |
| `content/site.ts` | E-mail, telefone, WhatsApp, LinkedIn e GitHub (link vazio = esconde o botão) |
| `content/i18n.ts` | Todos os textos fixos da interface em PT e EN |

### Imagens dos projetos

1. Coloque o arquivo em `public/projects/` (ex.: `public/projects/alt3ntique-capa.jpg`).
2. Em `content/projects.ts`, escreva o caminho no projeto: `cover: '/projects/alt3ntique-capa.jpg'`.
3. Outras telas do case: `gallery: ['/projects/alt3ntique-1.jpg', '/projects/alt3ntique-2.jpg']`.

Tamanho recomendado: 1600 px de largura, proporção 16:10 (a capa é cortada nessa proporção).
Sem imagem, aparece uma moldura de navegador com um aviso no lugar.

### Textos dos cases

Em `content/projects.ts`, cada projeto aceita `challenge` (o desafio), `did` (o que você fez) e `result` (resultado),
sempre em `{ pt: '...', en: '...' }`. Seção vazia não aparece na página.

### Links e novos projetos

- `url` de cada projeto: endereço do site publicado. Vazio = sem botão "Visitar".
- Novo projeto: copie um bloco de `projects`, troque o `slug` (vira `/pt/cases/<slug>/`) e preencha os campos.
- Cores do cartão: `color` (fundo) e `ink` (texto). Use a paleta de `app/globals.css` ou outra com contraste mínimo de 4,5:1.

## Animações

- **Abertura:** cada palavra do título sobe de uma máscara ao carregar.
- **Títulos de seção:** sobem da máscara uma vez, ao entrar na tela.
- **Projetos:** os cartões se empilham ao rolar (o anterior encolhe e escurece). Só em telas grandes.
- **Faixa de tecnologias:** corre sem parar e pausa ao passar o mouse.
- **Como trabalho:** a linha do tempo se preenche conforme você rola.
- **Detalhes:** botões, linhas da lista, cartões de habilidades e moldura do navegador reagem ao mouse.

Quem ativa "reduzir movimento" no sistema vê tudo parado e já visível.
Os efeitos ficam em `app/globals.css` e em `components/` (`CardStack`, `ProcessLine`, `Reveal`).

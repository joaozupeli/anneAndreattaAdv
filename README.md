# Anne Andreatta Advocacia — Demo site

Site demonstrativo personalizado a partir do molde **advocproto** (molde intacto).
Visual cream `#FDFCF9` + trust-blue `#116DFF` / `#166AEA` — advocacia humanizada, foco em mulher e família (São José dos Pinhais/PR).

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Conteúdo

Edite `src/data/firm.js` (nome, WhatsApp, endereço, áreas, equipe, depoimentos).
Tokens de cor em `src/assets/styles/variables.css`.

GSAP / Lenis / motion helpers permanecem idênticos ao molde (`src/lib/*`).

## Deploy

`vercel.json` usa `npm install` + `npm run build` (Vite) com rewrite SPA.

# Estrutura do Projeto — Treinamento Reducer & CreateContext

> Documento de referência da arquitetura, configurações e distribuição de arquivos do repositório.

---

## Visão Geral

O repositório abriga três camadas distintas que coexistem sob o mesmo `git`:

| Camada | Pasta | Tecnologia | Função |
|---|---|---|---|
| App React | `src/` | React 19 + TypeScript + Vite | Aplicação principal com interface de chat para o agente |
| Site de Treinamento | `docs/` | HTML + CSS + JS vanilla | Módulos didáticos estáticos publicados no Vercel |
| Servidor A2A | `server/` | Node.js + Express + TypeScript | Agente de IA rodando localmente via protocolo A2A |

---

## Árvore Completa de Arquivos

```
Treinamento_Reducer_CreateContext/
│
├── src/                              # App React (Vite)
│   ├── main.tsx                      # Entry point — monta AppProviders > App
│   ├── App.tsx                       # Componente raiz — renderiza AgentChat
│   ├── index.css                     # Estilos globais do app
│   ├── App.css                       # Estilos do componente App
│   ├── ThemeContext.tsx              # Context de tema (light/dark) — usado no App
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── AppProviders/
│   │   │   └── AppProviders.tsx      # Composição de todos os Providers (Auth > Theme > Language)
│   │   │
│   │   ├── AuthContext/
│   │   │   └── AuthContext.tsx       # Context de autenticação com useCallback
│   │   │
│   │   ├── Header/
│   │   │   └── Header.tsx            # Componente de cabeçalho (consome ThemeContext)
│   │   │
│   │   ├── LanguageContext/
│   │   │   └── LanguageContext.tsx   # Context de idioma (pt-BR / en-US / es-ES)
│   │   │
│   │   ├── ThemeToggle/
│   │   │   └── themeToggle.tsx       # Botão de alternância de tema
│   │   │
│   │   ├── UserMenu/
│   │   │   └── UserMenu.tsx          # Menu de usuário autenticado (consome AuthContext)
│   │   │
│   │   └── exercicios/               # Pasta reservada para exercícios implementados
│   │
│   ├── features/
│   │   └── agent/
│   │       ├── AgentChat.tsx         # Interface de chat com o agente (UI principal do App)
│   │       ├── agent.types.ts        # Tipos: Message, TaskResponse
│   │       └── useAgent.ts           # Hook — envia perguntas ao servidor A2A via fetch
│   │
│   └── códigos duplicados/           # Rascunhos de implementação (não importados na build)
│       ├── AuthContext.tsx
│       ├── LanguageContext.tsx
│       └── ThemeContext.tsx
│
├── docs/                             # Site de treinamento estático (publicado no Vercel)
│   ├── index.html                    # Hub de navegação — cards dos módulos
│   ├── index.css                     # Estilos do hub
│   ├── useContext.html               # Módulo 01 — useContext & createContext (11 seções)
│   ├── useContext.css                # Estilos do Módulo 01 (layout responsivo + hamburguer)
│   ├── useContext.js                 # Scripts do Módulo 01 (copyCode, toggleSolution, observer)
│   ├── useReducer.html               # Módulo 02 — useReducer (10 seções)
│   ├── useReducer.css                # Estilos do Módulo 02
│   ├── useReducer.js                 # Scripts do Módulo 02
│   ├── css-moderno.html              # Módulo 03 — CSS Moderno 2026
│   └── tailwind.html                 # Módulo 04 — Tailwind CSS
│
├── server/                           # Servidor A2A (Agent-to-Agent Protocol)
│   ├── src/
│   │   ├── index.ts                  # Entry point Express — rotas /.well-known/agent.json e /tasks/send
│   │   ├── agent.ts                  # Lógica do agente — chama Gemini 2.5 Flash com system prompt
│   │   ├── agentCard.ts              # Metadados A2A do agente (skills, capabilities, url)
│   │   ├── extractDocs.ts            # Utilitário — extrai conteúdo dos HTMLs do docs/
│   │   └── trainingContent.ts        # Conteúdo do treinamento injetado no system prompt
│   ├── tsconfig.json                 # TypeScript config do servidor (target ES2022, outDir dist/)
│   ├── package.json                  # Dependências do servidor
│   ├── .env                          # GEMINI_API_KEY (não commitado)
│   └── .gitignore                    # Ignora .env e node_modules
│
├── public/
│   └── vite.svg                      # Favicon padrão do Vite
│
├── package.json                      # Dependências do frontend
├── vite.config.ts                    # Configuração do Vite
├── tsconfig.json                     # TSConfig raiz (referencia app e node)
├── tsconfig.app.json                 # TSConfig para src/ (strict, ES2022, react-jsx)
├── tsconfig.node.json                # TSConfig para vite.config.ts
├── eslint.config.js                  # ESLint flat config (typescript-eslint + react-hooks)
├── vercel.json                       # Configuração de deploy (outputDirectory: dist)
├── .gitignore                        # node_modules, dist, .env*.local, .vercel
├── .env.local                        # Variáveis locais do frontend (não commitado)
├── .vscode/
│   └── settings.json                 # cSpell custom words
├── session-notes.md                  # Notas de sessão com diagnósticos e decisões
├── ESTRUTURA.md                      # Este arquivo
└── README.md                         # README gerado pelo Vite (não atualizado)
```

---

## Configurações Relevantes

### `package.json` (frontend)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "vercel-build": "cp -r docs dist",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-markdown": "10.1.0"
  }
}
```

> O script `vercel-build` copia `docs/` para `dist/` — estratégia de build para o Vercel publicar o site estático sem executar o compilador TypeScript.

---

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

Configuração mínima. Sem aliases de path, sem proxy configurado (o `useAgent.ts` aponta diretamente para `localhost:3333`).

---

### `tsconfig.app.json` (src/)

| Opção | Valor | Impacto |
|---|---|---|
| `target` | `ES2022` | Compatível com browsers modernos |
| `strict` | `true` | Habilita todas as verificações estritas |
| `noUnusedLocals` | `true` | Erro em variáveis declaradas e não usadas |
| `noUnusedParameters` | `true` | Erro em parâmetros não usados (exceto `_` prefixados) |
| `noFallthroughCasesInSwitch` | `true` | Exige `break`/`return` em cada `case` |
| `jsx` | `react-jsx` | Não requer `import React` em cada arquivo |
| `moduleResolution` | `bundler` | Resolução otimizada para bundlers (Vite) |
| `verbatimModuleSyntax` | `true` | `import type` obrigatório para importações de apenas tipos |

---

### `tsconfig.json` (raiz)

Arquivo de projeto composto (`references`). Não tem `compilerOptions` próprias — delega para:
- `tsconfig.app.json` → compila `src/`
- `tsconfig.node.json` → compila `vite.config.ts`

---

### `eslint.config.js`

Flat config (ESLint 9). Regras ativas:

| Plugin | Configuração |
|---|---|
| `@eslint/js` | `recommended` |
| `typescript-eslint` | `recommended` |
| `eslint-plugin-react-hooks` | `flat.recommended` |
| `eslint-plugin-react-refresh` | `vite` |

Regra personalizada adicionada:

```javascript
'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
```

Permite parâmetros prefixados com `_` sem erro — padrão necessário para o `AuthContext` onde `_password` é declarado na assinatura mas não utilizado no mock.

---

### `vercel.json`

```json
{
  "outputDirectory": "dist",
  "framework": null,
  "installCommand": null
}
```

`framework: null` impede o Vercel de detectar automaticamente o Vite e tentar rodar `npm run build` padrão. O `vercel-build` no `package.json` executa `cp -r docs dist` — publica apenas o site estático sem compilação TypeScript.

---

### `server/package.json`

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts"
  },
  "dependencies": {
    "@a2a-js/sdk": "0.3.13",
    "@google/generative-ai": "0.24.1",
    "dotenv": "17.3.1",
    "express": "5.2.1",
    "node-html-parser": "7.1.0"
  }
}
```

| Dependência | Função |
|---|---|
| `@a2a-js/sdk` | Protocolo Agent-to-Agent (A2A) do Google |
| `@google/generative-ai` | SDK oficial do Gemini |
| `express` | Servidor HTTP (versão 5) |
| `node-html-parser` | Extrai conteúdo dos arquivos HTML do `docs/` |
| `tsx` | Executa TypeScript diretamente (sem compilação prévia) |

---

## Fluxo de Dados — App React ↔ Servidor A2A

```
[AgentChat.tsx]
     │
     │ sendQuestion(text)
     ▼
[useAgent.ts]  — POST http://localhost:3333/tasks/send
     │
     ▼
[server/src/index.ts]  — rota /tasks/send
     │
     ▼
[server/src/agent.ts]  — answerQuestion(question)
     │                    system prompt = trainingContent (conteúdo dos docs/)
     ▼
[Gemini 2.5 Flash]  — resposta em português
     │
     ▼
[useAgent.ts]  — atualiza estado messages[]
     │
     ▼
[AgentChat.tsx]  — renderiza a resposta
```

O servidor precisa estar rodando localmente (`cd server && npm run dev`) para o chat funcionar. O Vercel publica apenas o `docs/` — o servidor não está em produção.

---

## Árvore de Providers (src/)

```
<StrictMode>
  <AppProviders>                   ← AppProviders.tsx
    <AuthProvider>                 ← AuthContext.tsx
      <ThemeProvider>              ← ThemeContext.tsx
        <LanguageProvider>         ← LanguageContext.tsx
          <App />                  ← App.tsx
            <AgentChat />          ← features/agent/AgentChat.tsx
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  </AppProviders>
</StrictMode>
```

---

## Site de Treinamento — `docs/`

Quatro módulos independentes em HTML puro, sem dependências de build. Cada módulo carrega `highlight.js` e `Inter`/`JetBrains Mono` via CDN.

| Arquivo | Módulo | Conteúdo |
|---|---|---|
| `index.html` | Hub | Cards de navegação para os 4 módulos |
| `useContext.html` | Módulo 01 | 9 seções + 3 exercícios com soluções ocultáveis |
| `useReducer.html` | Módulo 02 | 10 seções + 3 exercícios com soluções ocultáveis |
| `css-moderno.html` | Módulo 03 | CSS Moderno 2026 (Container Queries, `:has()`, `@layer`, etc.) |
| `tailwind.html` | Módulo 04 | Tailwind CSS (utility-first ao avançado, CVA) |

**Responsividade dos módulos 01 e 02:**

- Desktop (> 900px): sidebar fixa de 280px + conteúdo com `margin-left: 280px`
- Mobile (≤ 900px): sidebar oculta com `transform: translateX(-100%)`, botão `☰ Sumário` para slide-in

---

## `.gitignore` — O Que Não É Versionado

| Padrão | Motivo |
|---|---|
| `node_modules/` | Dependências — restauradas via `npm install` |
| `dist/` | Output de build — gerado sob demanda |
| `.env*.local` | Variáveis de ambiente locais do frontend |
| `server/.env` | `GEMINI_API_KEY` — credencial sensível |
| `.vercel/` | Metadados do CLI Vercel |

---

## Deploy

**Vercel (produção):**
- URL: `https://trainingreducerandcontext.vercel.app`
- Branch: `main`
- Build: `vercel-build` → `cp -r docs dist`
- Deploy automático em cada `git push origin main`

**Desenvolvimento local:**

```bash
# Frontend React
npm run dev              # http://localhost:5173

# Servidor A2A (pasta separada)
cd server
npm run dev              # http://localhost:3333
```

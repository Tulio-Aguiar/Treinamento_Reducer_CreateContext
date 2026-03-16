# Notas da Sessão — 12/03/2026

Projeto: **Treinamento_Reducer_CreateContext**
Branch: `main` | Último commit antes da sessão: `8068bcb Deployment Second`

---

## Problema Relatado

Ao abrir os arquivos `docs/useContext.html` e `docs/useReducer.html` com Live Server,
foram identificados dois problemas:

1. **`useContext.html`** — bloco principal renderizando deslocado para a direita e sem todo o conteúdo visível.
2. **`useReducer.html`** — todo o conteúdo das seções ausente (módulo 02 em branco).

---

## Diagnóstico

### `docs/useContext.html` (1987 linhas antes da correção)

O arquivo continha **dois documentos HTML completos concatenados** no mesmo arquivo:

- **Documento 1 (linhas 1–128):** Estrutura com sidebar e hero, mas o corpo principal substituído por um comentário placeholder `<!-- Conteúdo original do módulo (omitido aqui por brevidade) -->`. Referenciava `useContext.css` externamente e tinha o botão hamburguer mobile. O browser renderizava este documento (o primeiro encontrado) e ignorava o restante.

- **Documento 2 (linhas 129–1987):** Continha todo o conteúdo real do módulo (9 seções + 3 exercícios com soluções), mas usava CSS **inline** em vez do `useContext.css` externo, e o CSS mobile era incorreto (`display: none` na sidebar, sem botão hamburguer, sem slide-in/out).

**Causa do layout quebrado:** O browser processava apenas o primeiro documento, que não tinha conteúdo — apenas hero e nav-footer — resultando num layout quase vazio e aparentemente deslocado.

### `docs/useReducer.html` (828 linhas antes da correção)

O arquivo tinha a estrutura completa (CSS inline correto com suporte mobile hamburguer, sidebar com todos os links de navegação, hero section), mas o corpo principal estava substituído por:

```html
<!-- Conteúdo original do módulo (omitido aqui por brevidade) -->
```

Todas as 10 seções e 3 exercícios do Módulo 02 estavam ausentes.

---

## Decisões Tomadas

| Decisão                                                      | Justificativa                                                                                                                                        |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manter CSS externo (`useContext.css`) para `useContext.html` | O arquivo CSS já estava correto com layout responsivo e hamburguer mobile. Duplicar inline seria redundante e difícil de manter.                     |
| Manter CSS inline para `useReducer.html`                     | O arquivo já tinha o CSS inline correto com hamburguer mobile. Mover para externo exigiria criar/editar `useReducer.css` sem ganho prático imediato. |
| Reescrever `useContext.html` completamente                   | Remover o primeiro documento stub e manter apenas o conteúdo completo, adaptado para usar o CSS externo.                                             |
| Recriar todo o conteúdo de `useReducer.html`                 | O conteúdo estava completamente ausente; foi necessário criar as 10 seções do zero.                                                                  |

---

## Arquivos Modificados

### `docs/useContext.html`

- **Antes:** 1987 linhas — dois HTMLs concatenados, conteúdo real inacessível ao browser.
- **Depois:** 1259 linhas — documento único e limpo.
- **Mudanças:**
  - Removido o documento stub (linhas 1–128 originais).
  - Mantido todo o conteúdo do segundo documento, adaptado para usar `useContext.css` externo.
  - Adicionado botão `☰ Sumário` (hamburguer mobile) que estava ausente no segundo documento.
  - CSS mobile corrigido via `useContext.css` (sidebar com slide-in/out, backdrop, botão hamburguer).
  - Script externo `useContext.js` mantido (já continha `toggleSidebar`, `copyCode`, `toggleSolution`, IntersectionObserver).

**Estrutura do conteúdo (seções):**
| ID | Título |
|---|---|
| `#problema` | O problema que Context resolve |
| `#anatomia` | Anatomia do Context |
| `#passo-a-passo` | Passo a passo com TypeScript (5 passos) |
| `#ex-basico` | Exemplo 1 — Tema claro/escuro |
| `#ex-medio` | Exemplo 2 — Usuário autenticado |
| `#ex-inter` | Exemplo 3 — Context multi-camada |
| `#quando` | Context vs Props vs Estado local |
| `#react19` | Novidades do React 19 |
| `#ex1` | Exercício 1 — Idioma global (básico) |
| `#ex2` | Exercício 2 — Carrinho de compras (médio) |
| `#ex3` | Exercício 3 — Notificações globais (intermediário) |

---

### `docs/useReducer.html`

- **Antes:** 828 linhas — estrutura OK, conteúdo completamente ausente.
- **Depois:** 2488 linhas — estrutura + conteúdo completo de todas as seções.
- **Mudanças:**
  - Substituído o comentário placeholder por 10 seções completas de conteúdo.
  - CSS inline, sidebar, hero e nav-footer mantidos intactos.

**Estrutura do conteúdo (seções):**
| ID | Título |
|---|---|
| `#conceito` | O que é um reducer |
| `#anatomia` | Anatomia completa (anatomy box + flow diagram) |
| `#vs-state` | Reducer vs useState (tabela comparativa + compare-grid) |
| `#passo-a-passo` | Passo a passo com TypeScript (4 passos + discriminated unions) |
| `#ex-basico` | Exemplo 1 — Contador avançado (com bounds min/max/step) |
| `#ex-medio` | Exemplo 2 — Lista de tarefas completa (add/toggle/delete/filter) |
| `#ex-inter` | Exemplo 3 — Formulário com validação multi-campo |
| `#context-reducer` | Context + Reducer (dois contextos separados state/dispatch) |
| `#boas-praticas` | 5 boas práticas (imutabilidade, pureza, default, action creators, testes) |
| `#exercicios` | 3 exercícios com soluções completas |

**Exercícios:**
| ID | Título | Nível |
|---|---|---|
| `#ex1` | Semáforo (máquina de estados com auto-avanço via useEffect) | Básico |
| `#ex2` | Carrinho Redux-like (cupons de desconto, estado derivado via useMemo) | Médio |
| `#ex3` | Wizard de cadastro (3 etapas, validação por step, barra de progresso) | Intermediário |

---

## Arquivos NÃO Modificados

| Arquivo               | Estado                                                                               |
| --------------------- | ------------------------------------------------------------------------------------ |
| `docs/useContext.css` | Intacto — já estava correto com layout responsivo e hamburguer mobile                |
| `docs/useReducer.css` | Intacto — não é usado diretamente (useReducer.html usa CSS inline)                   |
| `docs/useContext.js`  | Intacto — já tinha todas as funções necessárias                                      |
| `docs/useReducer.js`  | Intacto — já tinha todas as funções necessárias                                      |
| `docs/index.html`     | Intacto                                                                              |
| `docs/index.css`      | Intacto                                                                              |
| `src/` (todos)        | Intactos (exceto `DiagramaDeFluxo.tsx` que tinha modificação prévia não relacionada) |

---

## Estado Atual dos Arquivos `docs/`

```
docs/
├── index.html          ✅ OK — página inicial com cards dos dois módulos
├── index.css           ✅ OK
├── useContext.html     ✅ CORRIGIDO — documento único, conteúdo completo, CSS externo
├── useContext.css      ✅ OK — layout responsivo com hamburguer mobile
├── useContext.js       ✅ OK — toggleSidebar, copyCode, toggleSolution, observer
├── useReducer.html     ✅ CORRIGIDO — conteúdo completo das 10 seções
├── useReducer.css      ✅ OK (referenciado mas substituído pelo CSS inline no HTML)
└── useReducer.js       ✅ OK — mesmas funções do useContext.js
```

---

## Responsividade — Como Funciona

**Desktop (> 900px):**

- Sidebar fixa (280px) à esquerda, `position: fixed`
- Conteúdo principal com `margin-left: 280px`, `max-width: 860px`

**Mobile (≤ 900px):**

- Sidebar oculta via `transform: translateX(-100%)` (fora da tela)
- Botão `☰ Sumário` aparece no topo do conteúdo
- Ao clicar, sidebar desliza para dentro via `sidebar.classList.toggle('sidebar-open')`
- Backdrop semitransparente cobre o conteúdo quando sidebar está aberta
- Conteúdo principal ocupa 100% da largura com `margin-left: 0`

---

## O Que Resta a Fazer

- [ ] **Commit das correções** — os arquivos modificados ainda não foram commitados.
- [ ] **Deploy no Vercel** — após o commit, o Vercel precisa fazer redeploy para refletir as correções.
- [ ] **Verificar `useReducer.css`** — o arquivo existe mas `useReducer.html` usa CSS inline. Considerar se faz sentido migrar para CSS externo para manter consistência com `useContext.html`.
- [ ] **`DiagramaDeFluxo.tsx`** — tem uma modificação não commitada (`src/components/diagramaDeFluxo/DiagramaDeFluxo.tsx`) que não foi abordada nesta sessão.
- [ ] **Testes visuais** — abrir os três arquivos HTML no Live Server e verificar layout em viewports mobile (375px) e desktop (1280px+).

---

## Contexto Técnico

- **Stack:** HTML + CSS puro + JavaScript vanilla (sem framework no `docs/`)
- **Syntax highlight:** `highlight.js 11.9.0` via CDN (github-dark theme)
- **Fontes:** Inter + JetBrains Mono via Google Fonts
- **Deploy:** Vercel (branch `main`)
- **Dev local:** Live Server no VS Code

````markdown
## Sessão — AuthContext, Context API e Estilização Condicional

**Protocolo Aruanda · Março 2026**

---

### Episódio 1 — `password` não pertence à interface `User`

Ao construir o `mockUser` dentro do `useCallback`, o TypeScript apontou erro porque o objeto não satisfazia a interface `User`. A solução tentada foi adicionar `password: string` à interface — funcionou, mas criou exposição de credencial no estado React, acessível em React DevTools, logs e qualquer consumidor do contexto.

A solução correta mantém `password` confinado ao escopo da função `login` como argumento de trabalho. O objeto `User` representa a sessão autenticada — o que o servidor devolve após validar as credenciais, sem nenhuma informação de credencial.

**Regra:** credenciais transitam como argumentos de função e não persistem em nenhum objeto de estado.

---

### Episódio 2 — Parâmetro declarado e não utilizado (`_password`)

Com `password` fora da interface, o parâmetro passou a existir na assinatura sem ser usado no corpo da função. O prefixo `_` é a convenção TypeScript para "parâmetro necessário na assinatura mas não utilizado". O TypeScript aceita nativamente. O ESLint requer configuração explícita:

```javascript
'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
```
````

`argsIgnorePattern: '^_'` cobre todos os casos futuros do mesmo padrão no projeto.

---

### Episódio 3 — `AuthProvider` ausente da árvore de componentes

`UserMenu` consumia `useAuth()`, mas o `AuthProvider` não envolvia a aplicação. O hook lançava `useAuth fora do AuthProvider`, quebrando a renderização. Solução: adicionar `AuthProvider` no `main.tsx` envolvendo `App`, aninhado dentro do `ThemeProvider`.

Segundo problema no mesmo episódio: o caminho de import do `AuthContext` continha espaço e caractere acentuado (`códigos duplicados`), causando falha silenciosa no bundler. Caminhos de módulo não admitem espaços nem acentos.

---

### Episódio 4 — Spread operator para composição de estilos inline

Ao tentar aplicar `buttonStyle` junto com propriedades adicionais no botão Sair, o objeto foi passado como propriedade dentro do `style`, o que não funciona:

```typescript
// ❌ incorreto
style={{ buttonStyle, marginLeft: '10px' }}
```

O spread expande as propriedades do objeto dentro do novo objeto de estilo. Propriedades declaradas depois sobrescrevem as do objeto expandido em caso de conflito:

```typescript
// ✅ correto
style={{ ...buttonStyle, marginLeft: '10px' }}
```

---

### Episódio 5 — Herança de tema via `useTheme` em componentes filhos

O `ThemeToggle` calculava cores diretamente a partir do valor de `theme` — sem variáveis CSS, sem Tailwind. Para o `UserMenu` herdar o mesmo comportamento visual, a solução foi importar `useTheme` e declarar `buttonStyle` uma vez, aplicado nos dois botões (`Entrar` e `Sair`). Quando o tema muda, ambos respondem — porque leem o mesmo valor de `theme` vindo do mesmo contexto.

```

```

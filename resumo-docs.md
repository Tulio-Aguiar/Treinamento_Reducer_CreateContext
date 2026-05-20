# resumo-docs

> Gerado em 20/05/2026 às 21:15  
> Raiz do projeto: `C:\Users\tulio.aguiar\Documents\projetos\Treinamento_Reducer_CreateContext`  
> Arquivos encontrados: 21

---

## Índice

### .HTML

- [`docs\css-moderno.html`](#docscss-modernohtml)

- [`docs\index.html`](#docsindexhtml)

- [`docs\tailwind.html`](#docstailwindhtml)

- [`docs\useContext.html`](#docsusecontexthtml)

- [`docs\useReducer.html`](#docsusereducerhtml)

- [`index.html`](#indexhtml)

### .CSS

- [`docs\index.css`](#docsindexcss)

- [`docs\useContext.css`](#docsusecontextcss)

- [`docs\useReducer.css`](#docsusereducercss)

- [`src\App.css`](#srcappcss)

- [`src\components\exercicios-Reducer\styles\advancedCounter.css`](#srccomponentsexercicios-reducerstylesadvancedcountercss)

- [`src\components\exercicios-Reducer\styles\cartReducer.module.css`](#srccomponentsexercicios-reducerstylescartreducermodulecss)

- [`src\components\exercicios-Reducer\styles\registerForm.css`](#srccomponentsexercicios-reducerstylesregisterformcss)

- [`src\components\exercicios-Reducer\styles\registerWizard.css`](#srccomponentsexercicios-reducerstylesregisterwizardcss)

- [`src\components\exercicios-Reducer\styles\StoreDashboard.css`](#srccomponentsexercicios-reducerstylesstoredashboardcss)

- [`src\components\exercicios-Reducer\styles\style.css`](#srccomponentsexercicios-reducerstylesstylecss)

- [`src\components\exercicios-Reducer\styles\trafficLight.css`](#srccomponentsexercicios-reducerstylestrafficlightcss)

- [`src\index.css`](#srcindexcss)

### .JS

- [`docs\useContext.js`](#docsusecontextjs)

- [`docs\useReducer.js`](#docsusereducerjs)

- [`eslint.config.js`](#eslintconfigjs)


---

## Arquivos .HTML

### `docs\css-moderno.html` {#docscss-modernohtml}

> 60,740 bytes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Moderno 2026 — Página de Aprendizado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d1117;
      --bg2: #161b22;
      --bg3: #1c2333;
      --border: #30363d;
      --text: #e6edf3;
      --text2: #8b949e;
      --text3: #c9d1d9;
      --accent: #f97316;
      --accent-dim: rgba(249,115,22,0.1);
      --accent-border: rgba(249,115,22,0.3);
      --react: #61dafb;
      --green: #34d399;
      --yellow: #fbbf24;
      --red: #f87171;
      --sidebar-w: 280px;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      min-height: 100vh;
    }

    /* ── SIDEBAR ── */
    .sidebar {
      width: var(--sidebar-w);
      background: var(--bg2);
      border-right: 1px solid var(--border);
      position: fixed;
      top: 0; left: 0;
      height: 100vh;
      overflow-y: auto;
      padding: 24px 0;
      display: flex;
      flex-direction: column;
      z-index: 100;
    }

    .sidebar-brand {
      padding: 0 20px 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
    }

    .sidebar-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--text2);
      text-decoration: none;
      margin-bottom: 12px;
      transition: color 0.2s;
    }
    .sidebar-back:hover { color: var(--text); }

    .sidebar-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--accent);
    }

    .sidebar-subtitle {
      font-size: 11px;
      color: var(--text2);
      margin-top: 3px;
    }

    .sidebar-section {
      padding: 0 12px;
      margin-bottom: 8px;
    }

    .sidebar-section-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text2);
      padding: 8px 8px 6px;
    }

    .sidebar-link {
      display: block;
      padding: 7px 10px;
      border-radius: 8px;
      font-size: 13px;
      color: var(--text2);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
      line-height: 1.4;
    }

    .sidebar-link:hover { background: var(--bg3); color: var(--text); }
    .sidebar-link.active { background: var(--accent-dim); color: var(--accent); font-weight: 500; }

    .sidebar-link .difficulty {
      float: right;
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 10px;
      font-weight: 600;
    }

    .diff-basic { background: rgba(52,211,153,0.15); color: var(--green); }
    .diff-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .diff-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    /* ── MAIN ── */
    .main {
      margin-left: var(--sidebar-w);
      flex: 1;
      max-width: 860px;
      padding: 60px 48px;
    }

    /* ── MOBILE HEADER ── */
    .mobile-header {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 52px;
      background: var(--bg2);
      border-bottom: 1px solid var(--border);
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 200;
    }

    .mobile-header-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--accent);
    }

    .mobile-menu-btn {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text2);
      cursor: pointer;
      padding: 6px 10px;
      font-size: 16px;
      line-height: 1;
      transition: all 0.15s;
    }

    .mobile-menu-btn:hover { background: var(--bg3); color: var(--text); }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 99;
    }

    .sidebar-overlay.open { display: block; }

    @media (max-width: 900px) {
      .mobile-header { display: flex; }
      .main { margin-left: 0; padding: 72px 20px 30px; }

      .sidebar {
        display: flex;
        transform: translateX(-100%);
        transition: transform 0.25s ease;
        z-index: 100;
      }

      .sidebar.open { transform: translateX(0); }
    }

    /* ── OVERFLOW FIXES MOBILE ── */
    .diagram {
      overflow-x: auto;
    }

    .table-wrapper {
      overflow-x: auto;
      margin: 24px 0;
      border-radius: 12px;
      border: 1px solid var(--border);
    }

    .table-wrapper .compare-table {
      margin: 0;
      border-radius: 0;
      border: none;
      min-width: 500px;
    }

    @media (max-width: 600px) {
      .feature-grid {
        grid-template-columns: 1fr;
      }

      .support-row {
        gap: 8px;
      }

      .section-title {
        font-size: 1.25rem;
      }

      .hero h1 {
        font-size: 1.8rem;
      }
    }

    /* ── HERO ── */
    .hero {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--border);
    }

    .module-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 12px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      border-radius: 20px;
      color: var(--accent);
      margin-bottom: 20px;
    }

    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .hero h1 span { color: var(--accent); }

    .hero p {
      font-size: 1.05rem;
      color: var(--text2);
      line-height: 1.75;
      max-width: 600px;
    }

    /* ── SECTION ── */
    .section {
      margin-bottom: 72px;
      scroll-margin-top: 24px;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
    }

    .section-number {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
    }

    .section-title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    /* ── PROSE ── */
    .prose {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--text3);
    }

    .prose + .prose { margin-top: 16px; }

    .prose strong { color: var(--text); font-weight: 600; }
    .prose code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82em;
      padding: 2px 6px;
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--accent);
    }

    /* ── CALLOUT ── */
    .callout {
      padding: 16px 20px;
      border-radius: 10px;
      margin: 20px 0;
      font-size: 0.9rem;
      line-height: 1.7;
      display: flex;
      gap: 12px;
    }

    .callout-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

    .callout.info {
      background: rgba(97,218,251,0.07);
      border-left: 3px solid var(--react);
      color: #93e8fb;
    }

    .callout.warn {
      background: rgba(251,191,36,0.07);
      border-left: 3px solid var(--yellow);
      color: #fcd34d;
    }

    .callout.tip {
      background: rgba(52,211,153,0.07);
      border-left: 3px solid var(--green);
      color: #6ee7b7;
    }

    .callout.danger {
      background: rgba(248,113,113,0.07);
      border-left: 3px solid var(--red);
      color: #fca5a5;
    }

    /* ── CODE BLOCK ── */
    .code-block {
      margin: 24px 0;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
    }

    .code-filename {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text2);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .code-filename::before {
      content: '';
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.6;
    }

    .copy-btn {
      font-size: 11px;
      font-weight: 500;
      padding: 4px 10px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text2);
      cursor: pointer;
      transition: all 0.15s;
    }
    .copy-btn:hover { background: var(--bg); color: var(--text); }
    .copy-btn.copied { border-color: var(--green); color: var(--green); }

    .code-block pre {
      margin: 0 !important;
      padding: 20px !important;
      background: #0d1117 !important;
      font-size: 0.83rem !important;
      line-height: 1.7 !important;
      overflow-x: auto;
    }

    .code-block code { font-family: 'JetBrains Mono', monospace !important; }

    /* ── ANNOTATION ── */
    .annotation {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 16px 20px;
      margin: -8px 0 20px;
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.6;
    }

    .annotation strong { color: var(--accent); }

    /* ── VISUAL DIAGRAM ── */
    .diagram {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      margin: 24px 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.8;
    }

    .diagram-tree { color: var(--text2); }
    .diagram-highlight { color: var(--react); font-weight: 500; }
    .diagram-pain { color: var(--red); }
    .diagram-ok { color: var(--green); }
    .diagram-accent { color: var(--accent); font-weight: 500; }

    /* ── STEP LIST ── */
    .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 24px 0;
    }

    .step {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .step-content { flex: 1; }

    .step-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 4px;
    }

    .step-desc {
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.65;
    }

    /* ── EXERCISE ── */
    .exercise {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      margin: 28px 0;
    }

    .exercise-header {
      padding: 16px 20px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .exercise-badge {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .badge-basic { background: rgba(52,211,153,0.15); color: var(--green); }
    .badge-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .badge-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    .exercise-title {
      font-size: 0.95rem;
      font-weight: 600;
      flex: 1;
    }

    .exercise-body { padding: 20px; }

    .exercise-desc {
      font-size: 0.9rem;
      color: var(--text2);
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .exercise-tasks {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
    }

    .exercise-tasks li {
      font-size: 0.88rem;
      color: var(--text3);
      display: flex;
      gap: 8px;
      line-height: 1.5;
    }

    .exercise-tasks li::before {
      content: '→';
      color: var(--accent);
      flex-shrink: 0;
    }

    .exercise-workspace {
      background: var(--bg);
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 4px;
    }

    .workspace-label {
      font-size: 11px;
      color: var(--text2);
      padding: 8px 12px 4px;
      font-family: 'JetBrains Mono', monospace;
    }

    .workspace-editor {
      width: 100%;
      min-height: 180px;
      background: transparent;
      border: none;
      padding: 8px 12px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text);
      resize: vertical;
      outline: none;
      line-height: 1.7;
    }

    .solution-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text2);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      margin-top: 12px;
    }

    .solution-toggle:hover { background: var(--bg3); color: var(--text); }

    .solution-block {
      display: none;
      margin-top: 16px;
    }

    .solution-block.open { display: block; }

    /* ── COMPARE TABLE ── */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 0.88rem;
    }

    .compare-table th {
      text-align: left;
      padding: 10px 16px;
      background: var(--bg3);
      color: var(--text2);
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--border);
    }

    .compare-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
      color: var(--text3);
      vertical-align: top;
      line-height: 1.5;
    }

    .compare-table tr:last-child td { border-bottom: none; }
    .compare-table tr:hover td { background: var(--bg2); }

    .compare-table td:first-child {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      font-size: 0.82rem;
      white-space: nowrap;
    }

    .check { color: var(--green); }
    .cross { color: var(--red); }

    /* ── DIVIDER ── */
    .divider {
      border: none;
      border-top: 1px solid var(--border);
      margin: 48px 0;
    }

    /* ── FEATURE GRID ── */
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }

    .feature-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
    }

    .feature-card-icon {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }

    .feature-card-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 6px;
      font-family: 'JetBrains Mono', monospace;
    }

    .feature-card-desc {
      font-size: 0.82rem;
      color: var(--text2);
      line-height: 1.6;
    }

    /* ── SUPPORT BADGE ── */
    .support-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin: 16px 0;
    }

    .support-badge {
      font-size: 11px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      font-family: 'JetBrains Mono', monospace;
    }

    .support-full { background: rgba(52,211,153,0.15); color: var(--green); }
    .support-partial { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .support-none { background: rgba(248,113,113,0.15); color: var(--red); }

    /* ── NAV FOOTER ── */
    .nav-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      margin-top: 48px;
      border-top: 1px solid var(--border);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: var(--text2);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-link:hover { color: var(--accent); }
    .nav-link.next { flex-direction: row-reverse; color: var(--accent); }
  </style>
</head>
<body>

<!-- ════════════════ MOBILE HEADER ════════════════ -->
<div class="mobile-header">
  <span class="mobile-header-title">🎨 CSS Moderno 2026</span>
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Abrir menu">☰</button>
</div>
<div class="sidebar-overlay" id="sidebar-overlay" onclick="closeMobileMenu()"></div>

<!-- ════════════════ SIDEBAR ════════════════ -->
<nav class="sidebar" id="sidebar">
  <div class="sidebar-brand">
    <a href="index.html" class="sidebar-back">← Início</a>
    <div class="sidebar-title">🎨 CSS Moderno 2026</div>
    <div class="sidebar-subtitle">Módulo 03 · Boas práticas atuais</div>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Visão Geral</div>
    <a href="#overview" class="sidebar-link">O que mudou em 2026</a>
    <a href="#custom-props" class="sidebar-link">Custom Properties avançadas</a>
    <a href="#cascade-layers" class="sidebar-link">Cascade Layers (@layer)</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Layout & Seleção</div>
    <a href="#container-queries" class="sidebar-link">Container Queries</a>
    <a href="#has" class="sidebar-link">:has() — o seletor pai</a>
    <a href="#subgrid" class="sidebar-link">Grid Subgrid</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Animações & Escopo</div>
    <a href="#scroll-driven" class="sidebar-link">Scroll-Driven Animations</a>
    <a href="#scope" class="sidebar-link">@scope & encapsulamento</a>
    <a href="#nesting" class="sidebar-link">Nesting nativo</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exercícios</div>
    <a href="#ex1" class="sidebar-link">Ex.1 — Card responsivo <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex2" class="sidebar-link">Ex.2 — Formulário inteligente <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex3" class="sidebar-link">Ex.3 — Progress de leitura <span class="difficulty diff-inter">inter</span></a>
  </div>
</nav>

<!-- ════════════════ MAIN ════════════════ -->
<main class="main">

  <!-- HERO -->
  <div class="hero">
    <div class="module-tag">🎨 Módulo 03</div>
    <h1>CSS <span>Moderno</span> 2026</h1>
    <p>
      O CSS evoluiu drasticamente nos últimos anos. Container Queries, <code>:has()</code>,
      Cascade Layers e Scroll-Driven Animations chegaram ao baseline estável em 2025–2026.
      Este módulo cobre o que realmente importa para produção hoje.
    </p>
  </div>

  <!-- ═══ 01 · OVERVIEW ═══ -->
  <section class="section" id="overview">
    <div class="section-header">
      <div class="section-number">01</div>
      <h2 class="section-title">O que mudou no CSS em 2026</h2>
    </div>

    <p class="prose">
      Em 2026, o CSS possui recursos que há cinco anos exigiriam pré-processadores, JavaScript
      ou frameworks inteiros. O <strong>Interop 2025</strong> (esforço conjunto de Chrome, Firefox
      e Safari) garantiu suporte consistente às funcionalidades mais pedidas pela comunidade.
    </p>

    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📦</div>
        <div class="feature-card-title">Container Queries</div>
        <div class="feature-card-desc">Estilos baseados no tamanho do contêiner pai, não da viewport.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🎯</div>
        <div class="feature-card-title">:has()</div>
        <div class="feature-card-desc">Seleciona um elemento com base nos seus filhos — o "seletor pai".</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🗂️</div>
        <div class="feature-card-title">Cascade Layers</div>
        <div class="feature-card-desc">Organiza especificidade em camadas explícitas e ordenadas.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🎞️</div>
        <div class="feature-card-title">Scroll-Driven Animations</div>
        <div class="feature-card-desc">Animações vinculadas ao scroll sem uma linha de JavaScript.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔤</div>
        <div class="feature-card-title">@property</div>
        <div class="feature-card-desc">Custom properties tipadas, animáveis e com herança controlada.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔲</div>
        <div class="feature-card-title">Nesting nativo</div>
        <div class="feature-card-desc">Nesting de seletores sem Sass, diretamente no CSS.</div>
      </div>
    </div>

    <div class="callout info">
      <span class="callout-icon">ℹ️</span>
      <div>
        <strong>Baseline 2025/2026:</strong> Todos os recursos deste módulo têm suporte em Chrome 115+,
        Firefox 117+ e Safari 17+. Verifique sempre em <code>caniuse.com</code> para os percentuais
        exatos de cobertura global.
      </div>
    </div>

    <p class="prose">
      O CSS também ganhou <strong>nesting nativo</strong>, <strong>@scope</strong> para encapsulamento
      sem BEM, e <strong>subgrid</strong> para alinhamento entre níveis do grid. A combinação desses
      recursos elimina grande parte da necessidade de pré-processadores em projetos novos.
    </p>
  </section>

  <!-- ═══ 02 · CUSTOM PROPERTIES ═══ -->
  <section class="section" id="custom-props">
    <div class="section-header">
      <div class="section-number">02</div>
      <h2 class="section-title">Custom Properties avançadas com <code>@property</code></h2>
    </div>

    <p class="prose">
      A regra <code>@property</code> permite definir custom properties com <strong>tipo</strong>,
      <strong>valor inicial</strong> e controle de <strong>herança</strong>. Isso desbloqueia
      animações de variáveis CSS — algo impossível com <code>--variável: valor</code> comum.
    </p>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        Custom properties normais não são animáveis porque o navegador as trata como strings.
        Com <code>@property</code> você informa o tipo real e o browser pode interpolar os valores.
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tokens.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Sem @property — NÃO é animável */
:root {
  --hue: 220;
}

/* Com @property — é animável! */
@property --hue {
  syntax: '<number>';      /* tipo: número inteiro ou decimal */
  inherits: true;           /* herda do elemento pai */
  initial-value: 220;       /* valor padrão obrigatório */
}

@property --progress {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@property --gradient-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">animacao-hue.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Animação de cor girando o hue — só funciona com @property */
@property --hue {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.botao-magico {
  --hue: 0;
  background: hsl(var(--hue) 80% 60%);
  transition: --hue 0.4s ease;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
}

.botao-magico:hover {
  --hue: 200; /* interpola suavemente de 0 → 200 */
}

/* Animação contínua do gradiente */
@keyframes gira-gradiente {
  to { --gradient-angle: 360deg; }
}

.card-animado {
  background: conic-gradient(
    from var(--gradient-angle),
    oklch(70% 0.2 0),
    oklch(70% 0.2 120),
    oklch(70% 0.2 240),
    oklch(70% 0.2 0)
  );
  animation: gira-gradiente 4s linear infinite;
}</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        Use <code>oklch()</code> ao invés de <code>hsl()</code> em 2026: é perceptualmente uniforme,
        tem gamut maior (P3/Rec2020) e é mais previsível ao interpolar cores.
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">oklch-exemplo.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* oklch(lightness chroma hue) */
:root {
  --cor-primaria: oklch(60% 0.2 270);    /* roxo vibrante */
  --cor-secundaria: oklch(65% 0.18 150); /* verde moderno */
  --cor-texto: oklch(95% 0.01 270);      /* quase branco com toque lilás */

  /* Escala de tons automaticamente derivada */
  --primaria-claro: oklch(from var(--cor-primaria) calc(l + 0.15) c h);
  --primaria-escuro: oklch(from var(--cor-primaria) calc(l - 0.15) c h);
}

/* Relative Color Syntax — deriva tons sem recalcular */
.botao {
  background: var(--cor-primaria);
  border-color: oklch(from var(--cor-primaria) calc(l - 0.1) c h);
}</code></pre>
    </div>
  </section>

  <!-- ═══ 03 · CASCADE LAYERS ═══ -->
  <section class="section" id="cascade-layers">
    <div class="section-header">
      <div class="section-number">03</div>
      <h2 class="section-title">Cascade Layers com <code>@layer</code></h2>
    </div>

    <p class="prose">
      <code>@layer</code> introduz um nível adicional na cascata do CSS — acima dos estilos
      inline e abaixo das regras <code>!important</code>. Com layers, a <strong>ordem de declaração
      das camadas</strong> determina qual estilo vence, independentemente da especificidade dos seletores.
    </p>

    <div class="diagram">
      <div class="diagram-accent">Cascata CSS (da menor para maior prioridade):</div>
      <br>
      <div class="diagram-tree">  1. User-agent styles (reset do browser)</div>
      <div class="diagram-tree">  2. @layer reset      — reset/normalize</div>
      <div class="diagram-tree">  3. @layer base       — estilos globais, tokens</div>
      <div class="diagram-tree">  4. @layer components — componentes reutilizáveis</div>
      <div class="diagram-tree">  5. @layer utilities  — classes utilitárias (.mt-4, .flex)</div>
      <div class="diagram-ok">  6. Estilos não-layered (vence layers!)</div>
      <div class="diagram-highlight">  7. !important (como antes)</div>
    </div>

    <div class="callout info">
      <span class="callout-icon">ℹ️</span>
      <div>
        Estilos <strong>fora de layers</strong> sempre vencem estilos dentro de layers,
        independente de especificidade. Use isso para overrides pontuais sem precisar de
        <code>!important</code>.
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">main.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* 1. Declare a ordem das layers antes de tudo */
@layer reset, base, components, utilities;

/* 2. Reset — especificidade baixa, não vaza para cima */
@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

/* 3. Base — tokens e estilos globais */
@layer base {
  :root {
    --clr-primary: oklch(60% 0.2 270);
    --radius-md: 8px;
  }

  body {
    font-family: system-ui, sans-serif;
    color: oklch(20% 0.01 270);
  }
}

/* 4. Components — mesmo com especificidade alta, layers de componentes
      perdem para a camada utilities */
@layer components {
  .card {
    background: white;
    border-radius: var(--radius-md);
    padding: 24px;
    box-shadow: 0 2px 8px oklch(0% 0 0 / 0.1);
  }

  /* .card.card-dark tem especificidade [0,2,0] mas como está em 'components'
     perde para qualquer coisa em 'utilities' */
  .card.card-dark {
    background: oklch(20% 0.01 270);
    color: white;
  }
}

/* 5. Utilities — vence components independente de especificidade */
@layer utilities {
  .bg-white { background: white !important; /* aqui o !important é seguro */ }
  .p-0 { padding: 0; }
  .hidden { display: none; }
}

/* 6. Estilos fora de layer — vence tudo que está em layers */
.override-especial {
  background: red; /* vence mesmo .card.card-dark em @layer components */
}</code></pre>
    </div>

    <p class="prose">
      Você também pode importar arquivos inteiros dentro de uma layer, o que é especialmente
      útil para isolar bibliotecas de terceiros:
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">imports.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Toda a biblioteca de terceiros fica "abaixo" dos seus estilos */
@import url('alguma-biblioteca.css') layer(bibliotecas);

/* Seus estilos fora de layer vencem automaticamente */
.meu-botao {
  background: var(--clr-primary);
}</code></pre>
    </div>
  </section>

  <!-- ═══ 04 · CONTAINER QUERIES ═══ -->
  <section class="section" id="container-queries">
    <div class="section-header">
      <div class="section-number">04</div>
      <h2 class="section-title">Container Queries</h2>
    </div>

    <p class="prose">
      Container Queries permitem que um componente se adapte ao <strong>tamanho do seu contêiner pai</strong>,
      não da viewport. Isso resolve o problema fundamental de componentes responsivos: um card de produto
      deve se comportar diferente quando está numa sidebar estreita vs. numa grade larga — e isso não
      depende do tamanho da tela, mas do espaço disponível.
    </p>

    <div class="diagram">
      <div class="diagram-accent">Media Query (viewport) vs Container Query (contêiner):</div>
      <br>
      <div class="diagram-pain">  Media Query: "A tela tem mais de 768px?" → layout de 2 colunas</div>
      <div class="diagram-pain">  Problema: o componente pode estar numa sidebar de 300px!</div>
      <br>
      <div class="diagram-ok">  Container Query: "O contêiner do card tem mais de 400px?" → layout horizontal</div>
      <div class="diagram-ok">  Funciona independente de onde o componente é usado!</div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">card.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* 1. Defina o contêiner no elemento pai */
.card-wrapper {
  container-type: inline-size; /* monitora a largura */
  container-name: card;        /* nome opcional, mas boa prática */
}

/* 2. Use @container para estilizar filhos com base no contêiner */
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card img {
  width: 100%;
  border-radius: 8px;
}

/* Quando o contêiner (card-wrapper) tiver 400px ou mais */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;    /* horizontal quando há espaço */
    align-items: center;
  }

  .card img {
    width: 140px;
    flex-shrink: 0;
  }
}

/* Unidades de container */
.card-title {
  /* cqw = 1% da largura do contêiner (não da viewport!) */
  font-size: clamp(1rem, 5cqw, 1.5rem);
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">container-avancado.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Container style queries — estilos baseados em valores de variáveis CSS */
.grid {
  container-type: inline-size;
  --layout: normal;
}

.grid.lista {
  --layout: list;
}

/* Style query: adapta com base em variável CSS do contêiner */
@container style(--layout: list) {
  .grid-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
}

/* Múltiplos contêineres aninhados */
.dashboard { container-type: inline-size; container-name: dashboard; }
.sidebar   { container-type: inline-size; container-name: sidebar; }

@container dashboard (min-width: 1024px) {
  .sidebar { width: 280px; }
}

@container sidebar (max-width: 200px) {
  .sidebar-item span { display: none; } /* só ícone em sidebar estreita */
}</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        Use <code>container-type: size</code> quando precisar monitorar altura <em>e</em> largura.
        Use <code>inline-size</code> (mais comum) quando só a largura importa — é mais eficiente.
      </div>
    </div>
  </section>

  <!-- ═══ 05 · HAS ═══ -->
  <section class="section" id="has">
    <div class="section-header">
      <div class="section-number">05</div>
      <h2 class="section-title"><code>:has()</code> — O seletor pai</h2>
    </div>

    <p class="prose">
      <code>:has()</code> seleciona um elemento com base nos seus <strong>descendentes ou estados de filhos</strong>.
      É o seletor que a comunidade CSS pediu por décadas. Com ele, você consegue estilizar um elemento
      pai com base no que há dentro dele — sem JavaScript.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">has-basico.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Estiliza .card se ele contiver uma imagem */
.card:has(img) {
  padding: 0;          /* remove padding quando há imagem */
}

/* Estiliza .form-group se o input dentro estiver focado */
.form-group:has(input:focus) {
  border-color: oklch(60% 0.2 270);
  box-shadow: 0 0 0 3px oklch(60% 0.2 270 / 0.2);
}

/* Estiliza .form-group se o input for inválido */
.form-group:has(input:invalid:not(:placeholder-shown)) {
  border-color: oklch(60% 0.25 30); /* vermelho */
}

.form-group:has(input:valid:not(:placeholder-shown)) {
  border-color: oklch(60% 0.2 150); /* verde */
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">has-avancado.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Layout condicional: se a lista tiver mais de 3 itens */
.lista:has(li:nth-child(4)) {
  column-count: 2;
}

/* Navbar ativa hambúrguer no mobile — sem JS para toggle de class */
/* (combina com :checked em checkbox hidden) */
.nav:has(.hamburger:checked) .menu {
  display: flex;
  flex-direction: column;
}

/* Dark mode baseado em checkbox — exemplo educacional */
body:has(#dark-toggle:checked) {
  --bg: oklch(15% 0.01 270);
  --text: oklch(95% 0.01 270);
}

/* Estiliza o label do checkbox quando checked */
label:has(input[type="checkbox"]:checked) {
  font-weight: 600;
  color: oklch(60% 0.2 270);
}

/* Tabela: linha com célula .erro fica vermelha */
tr:has(.erro) {
  background: oklch(60% 0.2 30 / 0.1);
}

/* Figura sem legenda: margem diferente */
figure:not(:has(figcaption)) {
  margin-bottom: 8px;
}</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        <code>:has()</code> é um seletor <strong>guloso</strong> em termos de performance: evite
        usá-lo com seletores muito amplos como <code>body:has(*)</code>. Prefira escopo específico:
        <code>.form:has(input:focus)</code>.
      </div>
    </div>

    <div class="table-wrapper">
    <table class="compare-table">
      <thead>
        <tr>
          <th>Antes (JS)</th>
          <th>Depois (:has())</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>input.addEventListener('focus', () => parent.classList.add('focused'))</td>
          <td>.grupo:has(input:focus) { border-color: blue; }</td>
        </tr>
        <tr>
          <td>if (card.querySelector('img')) card.style.padding = '0'</td>
          <td>.card:has(img) { padding: 0; }</td>
        </tr>
        <tr>
          <td>checkbox.addEventListener('change', toggleDarkMode)</td>
          <td>body:has(#dark:checked) { color-scheme: dark; }</td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>

  <!-- ═══ 06 · SCROLL-DRIVEN ═══ -->
  <section class="section" id="scroll-driven">
    <div class="section-header">
      <div class="section-number">06</div>
      <h2 class="section-title">Scroll-Driven Animations</h2>
    </div>

    <p class="prose">
      Scroll-Driven Animations vinculam o progresso de uma animação CSS ao <strong>scroll da página</strong>
      ou à posição de um elemento na viewport — sem JavaScript. Isso substitui
      <code>IntersectionObserver</code> e bibliotecas como AOS para grande parte dos casos de uso.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">animation-timeline: scroll()</div>
          <div class="step-desc">Progresso vinculado ao scroll do scroller (padrão: o documento). 0% = topo, 100% = final.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">animation-timeline: view()</div>
          <div class="step-desc">Progresso vinculado à posição do <em>próprio elemento</em> no viewport. 0% = entrou, 100% = saiu.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">animation-range</div>
          <div class="step-desc">Define qual fatia do scroll (ou da view) dispara a animação.</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">progress-bar.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Barra de progresso de leitura — clássico com JS, agora em CSS puro */
@keyframes cresce-largura {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: oklch(60% 0.2 270);
  transform-origin: left;

  animation: cresce-largura linear;
  animation-timeline: scroll(root block); /* scroll do documento na direção block */
  animation-fill-mode: both;
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">reveal-on-scroll.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Elemento aparece ao entrar na viewport */
@keyframes fade-slide-up {
  from {
    opacity: 0;
    translate: 0 40px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

.reveal {
  animation: fade-slide-up 0.6s ease-out both;
  animation-timeline: view();

  /* Dispara quando o elemento está entre 10% e 40% da viewport */
  animation-range: entry 10% entry 40%;
}

/* Stagger: cada filho anima com atraso crescente usando @keyframes + delay */
.reveal-list li {
  animation: fade-slide-up 0.5s ease-out both;
  animation-timeline: view();
  animation-range: entry 0% entry 60%;
}

.reveal-list li:nth-child(1) { animation-delay: 0s; }
.reveal-list li:nth-child(2) { animation-delay: 0.1s; }
.reveal-list li:nth-child(3) { animation-delay: 0.2s; }</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        Respeite <strong>prefers-reduced-motion</strong>: sempre envolva animações em
        <code>@media (prefers-reduced-motion: no-preference)</code> ou adicione o reset
        <code>* { animation-duration: 0.01ms !important; }</code> para usuários sensíveis.
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">acessibilidade.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Padrão recomendado para animações acessíveis */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    animation: fade-slide-up 0.6s ease-out both;
    animation-timeline: view();
    animation-range: entry 10% entry 40%;
  }

  .reading-progress {
    animation: cresce-largura linear;
    animation-timeline: scroll(root block);
  }
}</code></pre>
    </div>
  </section>

  <!-- ═══ 07 · SCOPE ═══ -->
  <section class="section" id="scope">
    <div class="section-header">
      <div class="section-number">07</div>
      <h2 class="section-title"><code>@scope</code> e encapsulamento</h2>
    </div>

    <p class="prose">
      <code>@scope</code> permite aplicar estilos a um componente sem precisar de BEM, CSS Modules
      ou Shadow DOM. Você define um <strong>escopo de raiz</strong> e, opcionalmente, um
      <strong>limite de saída</strong>: os estilos se aplicam apenas dentro desse intervalo.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">card-component.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* @scope(raiz) to (limite) */
/* Estilos se aplicam dentro de .card mas param antes de .card-footer */
@scope (.card) to (.card-footer) {
  /* ':scope' referencia o elemento raiz (.card) */
  :scope {
    background: white;
    border-radius: 12px;
    padding: 24px;
  }

  /* .title dentro de .card (mas não dentro de .card-footer) */
  .title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  /* Não vaza para .title fora do .card */
  p { color: oklch(40% 0.01 270); }
}

/* O footer fica fora do escopo, tem seus próprios estilos */
@scope (.card-footer) {
  :scope {
    background: oklch(97% 0.01 270);
    padding: 16px 24px;
    border-top: 1px solid oklch(90% 0.01 270);
  }
}</code></pre>
    </div>

    <div class="callout info">
      <span class="callout-icon">ℹ️</span>
      <div>
        Em projetos que já usam CSS Modules ou Shadow DOM, <code>@scope</code> pode não
        ser necessário. Ele brilha em projetos de CSS puro onde o encapsulamento manual era
        feito com prefixos de classe (BEM: <code>.card__title</code>, <code>.card__body</code>).
      </div>
    </div>
  </section>

  <!-- ═══ 08 · SUBGRID ═══ -->
  <section class="section" id="subgrid">
    <div class="section-header">
      <div class="section-number">08</div>
      <h2 class="section-title">Grid Subgrid</h2>
    </div>

    <p class="prose">
      <code>subgrid</code> permite que um item de grid <strong>participe das trilhas (tracks) do grid pai</strong>,
      alinhando elementos aninhados com o grid externo. Resolve o problema clássico de cards em uma grade
      cujos títulos e botões não alinhavam entre si.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">card-grid.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Grid pai define as linhas */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Define linhas nomeadas: imagem, título, descrição, footer */
  grid-template-rows: auto auto 1fr auto;
  gap: 24px;
}

/* Cada card vira um subgrid que herda as linhas do pai */
.card {
  display: grid;
  grid-row: span 4;             /* ocupa as 4 linhas definidas acima */
  grid-template-rows: subgrid;  /* usa as trilhas do pai! */

  background: white;
  border-radius: 12px;
  overflow: hidden;
}

/* Agora cada parte do card se alinha automaticamente entre cards */
.card-image   { grid-row: 1; }     /* linha 1: imagem */
.card-title   { grid-row: 2; padding: 16px; font-weight: 700; }
.card-desc    { grid-row: 3; padding: 0 16px; color: gray; }
.card-footer  { grid-row: 4; padding: 16px; border-top: 1px solid #eee; }

/* Resultado: títulos, descrições e botões alinhados entre cards,
   mesmo quando o conteúdo tem comprimentos diferentes! */</code></pre>
    </div>
  </section>

  <!-- ═══ 09 · NESTING ═══ -->
  <section class="section" id="nesting">
    <div class="section-header">
      <div class="section-number">09</div>
      <h2 class="section-title">Nesting nativo</h2>
    </div>

    <p class="prose">
      CSS agora suporta nesting nativo — sem Sass ou PostCSS. O <code>&</code> referencia o seletor
      pai, assim como no Sass. Há algumas diferenças sutis que valem a pena conhecer.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">nesting.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">/* Nesting básico */
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;

  /* Equivale a: .card .card-title */
  .card-title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  /* Equivale a: .card:hover */
  &:hover {
    box-shadow: 0 4px 20px oklch(0% 0 0 / 0.1);
  }

  /* Equivale a: .card.card--destaque */
  &.card--destaque {
    border: 2px solid oklch(60% 0.2 270);
  }

  /* Media query aninhada */
  @media (max-width: 768px) {
    padding: 16px;

    .card-title { font-size: 1rem; }
  }

  /* Container query aninhada */
  @container (min-width: 400px) {
    display: flex;
    gap: 16px;
  }
}

/* Combinação com :has() e nesting */
.form {
  .form-group {
    border: 1px solid oklch(80% 0.01 270);
    padding: 12px;
    border-radius: 8px;

    &:has(input:focus) {
      border-color: oklch(60% 0.2 270);
    }

    &:has(input:invalid:not(:placeholder-shown)) {
      border-color: oklch(60% 0.2 30);
    }
  }
}</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        <strong>Diferença do Sass:</strong> em CSS nativo, <code>.titulo</code> dentro de <code>.card</code>
        equivale a <code>.card .titulo</code> (descendente), não <code>.card.titulo</code> (mesmo elemento).
        Para estilizar o próprio elemento com outra classe, use <code>&.outra-classe</code>.
      </div>
    </div>
  </section>

  <!-- ═══ 10 · EXERCÍCIOS ═══ -->
  <section class="section" id="exercicios">
    <div class="section-header">
      <div class="section-number">10</div>
      <h2 class="section-title">Exercícios práticos</h2>
    </div>

    <p class="prose">
      Três exercícios de vida real, cobrindo os principais recursos do módulo.
      Escreva o CSS na área de código e verifique a solução quando terminar.
    </p>

    <!-- Exercício 1 -->
    <div class="exercise" id="ex1">
      <div class="exercise-header">
        <span class="exercise-badge badge-basic">Básico</span>
        <span class="exercise-title">Card de produto responsivo com Container Queries</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Crie um card de produto que muda de layout vertical para horizontal automaticamente,
          baseado no tamanho do seu contêiner — sem media queries. O card deve funcionar
          igualmente bem em uma sidebar estreita (250px) e em uma grade larga (500px+).
        </p>
        <ul class="exercise-tasks">
          <li>Defina <code>container-type: inline-size</code> no wrapper do card</li>
          <li>Layout vertical (imagem em cima, texto embaixo) quando o contêiner &lt; 360px</li>
          <li>Layout horizontal (imagem à esquerda, texto à direita) quando o contêiner ≥ 360px</li>
          <li>Use unidades <code>cqw</code> para o font-size do título</li>
          <li>Inclua um botão "Comprar" que ocupa 100% da largura no layout vertical</li>
        </ul>
        <div class="exercise-workspace">
          <div class="workspace-label">/* CSS — escreva sua solução aqui */</div>
          <textarea class="workspace-editor" spellcheck="false" placeholder=".produto-wrapper {
  /* defina o contêiner aqui */
}

.produto-card {
  /* layout base (mobile/estreito) */
}

@container /* ... */ {
  /* layout horizontal */
}"></textarea>
        </div>
        <button class="solution-toggle" onclick="toggleSolution(this)">👁 Ver solução</button>
        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">card-produto.css</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-css">.produto-wrapper {
  container-type: inline-size;
  container-name: produto;
}

.produto-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px oklch(0% 0 0 / 0.08);
}

.produto-card img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
}

.produto-titulo {
  font-size: clamp(1rem, 5cqw, 1.4rem);
  font-weight: 700;
}

.produto-preco {
  font-size: clamp(0.9rem, 4cqw, 1.1rem);
  color: oklch(45% 0.18 150);
  font-weight: 600;
}

.produto-btn {
  width: 100%;
  padding: 12px;
  background: oklch(55% 0.2 270);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

@container produto (min-width: 360px) {
  .produto-card {
    flex-direction: row;
    align-items: center;
  }

  .produto-card img {
    width: 140px;
    aspect-ratio: 1;
    flex-shrink: 0;
  }

  .produto-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .produto-btn {
    width: auto;
    align-self: flex-start;
  }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 2 -->
    <div class="exercise" id="ex2">
      <div class="exercise-header">
        <span class="exercise-badge badge-medium">Médio</span>
        <span class="exercise-title">Formulário inteligente com <code>:has()</code></span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Crie um formulário de cadastro cujos campos se estilizam automaticamente com base no estado dos inputs —
          sem uma linha de JavaScript. O grupo do campo deve mudar visualmente quando o input está focado,
          preenchido corretamente, ou com erro de validação.
        </p>
        <ul class="exercise-tasks">
          <li>Campo focado: borda colorida e label elevado (float label)</li>
          <li>Campo válido: ícone ✓ e borda verde</li>
          <li>Campo inválido (após interação): ícone ✗ e borda vermelha</li>
          <li>Use <code>:has()</code> para todos os estados — nenhum JS permitido</li>
          <li>O botão de submit só fica habilitado visualmente quando o form é válido</li>
        </ul>
        <div class="exercise-workspace">
          <div class="workspace-label">/* CSS — escreva sua solução aqui */</div>
          <textarea class="workspace-editor" spellcheck="false" placeholder=".form-group {
  /* estilos base */
}

.form-group:has(input:focus) {
  /* estado focado */
}

.form-group:has(input:valid:not(:placeholder-shown)) {
  /* estado válido */
}"></textarea>
        </div>
        <button class="solution-toggle" onclick="toggleSolution(this)">👁 Ver solução</button>
        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">formulario.css</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-css">.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: oklch(50% 0.01 270);
  margin-bottom: 6px;
  transition: color 0.2s;
}

.form-group input {
  width: 100%;
  padding: 12px 40px 12px 14px; /* espaço para ícone */
  border: 2px solid oklch(85% 0.01 270);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
}

/* Ícone via pseudo-elemento no .form-group */
.form-group::after {
  position: absolute;
  right: 14px;
  bottom: 14px;
  font-size: 0.9rem;
}

/* Estado: focado */
.form-group:has(input:focus) label {
  color: oklch(55% 0.2 270);
}

.form-group:has(input:focus) input {
  border-color: oklch(55% 0.2 270);
  box-shadow: 0 0 0 3px oklch(55% 0.2 270 / 0.15);
}

/* Estado: válido */
.form-group:has(input:valid:not(:placeholder-shown)) input {
  border-color: oklch(55% 0.2 150);
}

.form-group:has(input:valid:not(:placeholder-shown))::after {
  content: '✓';
  color: oklch(55% 0.2 150);
}

/* Estado: inválido (após preenchimento) */
.form-group:has(input:invalid:not(:placeholder-shown)) input {
  border-color: oklch(55% 0.25 30);
}

.form-group:has(input:invalid:not(:placeholder-shown))::after {
  content: '✗';
  color: oklch(55% 0.25 30);
}

.form-group:has(input:invalid:not(:placeholder-shown)) label {
  color: oklch(55% 0.25 30);
}

/* Botão: visualmente desabilitado se o form tiver campos inválidos */
.form:has(input:invalid) .btn-submit {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 3 -->
    <div class="exercise" id="ex3">
      <div class="exercise-header">
        <span class="exercise-badge badge-inter">Intermediário</span>
        <span class="exercise-title">Barra de progresso de leitura com Scroll-Driven Animations</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Implemente uma barra de progresso de leitura no topo da página usando Scroll-Driven Animations
          e <code>@property</code> para animar a cor da barra conforme o usuário avança no conteúdo.
          Zero JavaScript.
        </p>
        <ul class="exercise-tasks">
          <li>Barra fixa no topo, 4px de altura, largura de 100%</li>
          <li>Cresce da esquerda para a direita conforme o scroll (0% → 100%)</li>
          <li>Cor muda de azul (topo) para laranja (fim) usando <code>@property</code> para animar <code>--hue</code></li>
          <li>Adicione <code>prefers-reduced-motion</code> para acessibilidade</li>
          <li>Bônus: adicione indicadores de seção com <code>view()</code> nos headings</li>
        </ul>
        <div class="exercise-workspace">
          <div class="workspace-label">/* CSS — escreva sua solução aqui */</div>
          <textarea class="workspace-editor" spellcheck="false" placeholder="@property --hue {
  /* defina o tipo e valor inicial */
}

@keyframes /* ... */ {
}

.progress-bar {
  /* posição e animação */
  animation-timeline: scroll(root block);
}"></textarea>
        </div>
        <button class="solution-toggle" onclick="toggleSolution(this)">👁 Ver solução</button>
        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">reading-progress.css</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-css">/* 1. Custom property tipada para animar a cor */
@property --hue {
  syntax: '<number>';
  inherits: false;
  initial-value: 220; /* começa azul */
}

/* 2. Animação: barra cresce e muda de cor */
@keyframes progresso-leitura {
  from {
    transform: scaleX(0);
    --hue: 220; /* azul */
  }
  to {
    transform: scaleX(1);
    --hue: 30;  /* laranja */
  }
}

/* 3. Barra de progresso */
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: oklch(60% 0.22 var(--hue));
  transform-origin: left center;
  z-index: 1000;

  /* Vinculada ao scroll da página */
  animation: progresso-leitura linear both;
  animation-timeline: scroll(root block);
}

/* 4. Bônus: seções revelam ao entrar na viewport */
@keyframes revela-secao {
  from { opacity: 0; translate: 0 30px; }
  to   { opacity: 1; translate: 0 0; }
}

.article-section {
  animation: revela-secao 0.5s ease-out both;
  animation-timeline: view();
  animation-range: entry 0% entry 35%;
}

/* 5. Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .reading-progress {
    animation: none;
    transform: none; /* mostra a barra estática */
    opacity: 0.3;
  }

  .article-section {
    animation: none;
    opacity: 1;
    translate: 0 0;
  }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- NAV FOOTER -->
  <div class="nav-footer">
    <a href="index.html" class="nav-link">← Início</a>
    <a href="tailwind.html" class="nav-link next">Módulo 04: Tailwind CSS →</a>
  </div>

</main>

<script>
  hljs.highlightAll()

  function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar')
    const overlay = document.getElementById('sidebar-overlay')
    sidebar.classList.toggle('open')
    overlay.classList.toggle('open')
  }

  function closeMobileMenu() {
    document.getElementById('sidebar').classList.remove('open')
    document.getElementById('sidebar-overlay').classList.remove('open')
  }

  // Fecha o menu ao clicar em um link da sidebar (mobile)
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeMobileMenu()
    })
  })

  function copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre')
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '✓ Copiado'
      btn.classList.add('copied')
      setTimeout(() => {
        btn.textContent = 'Copiar'
        btn.classList.remove('copied')
      }, 2000)
    })
  }

  function toggleSolution(btn) {
    const block = btn.nextElementSibling
    const isOpen = block.classList.contains('open')
    block.classList.toggle('open')
    btn.textContent = isOpen ? '👁 Ver solução' : '🙈 Ocultar solução'
    if (!isOpen) hljs.highlightAll()
  }

  const links = document.querySelectorAll('.sidebar-link')
  const sections = document.querySelectorAll('.section')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'))
        const id = entry.target.id
        const link = document.querySelector(`.sidebar-link[href="#${id}"]`)
        if (link) link.classList.add('active')
      }
    })
  }, { rootMargin: '-40% 0px -55% 0px' })

  sections.forEach(s => observer.observe(s))
</script>
</body>
</html>
```

### `docs\index.html` {#docsindexhtml}

> 4,204 bytes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React 19 — Treinamento Avançado de Estado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="index.css" />
</head>
<body>

  <div class="logo">React 19 · TypeScript · Vite</div>

  <h1>Dominando <span>Estado</span> em React</h1>

  <p class="subtitle">
    Quatro módulos de treinamento: estado React, CSS moderno e Tailwind.
    Exemplos reais, progressão deliberada, sem atalhos.
  </p>

  <div class="stack-badge">
    <div class="badge"><span class="badge-dot dot-react"></span> React 19</div>
    <div class="badge"><span class="badge-dot dot-ts"></span> TypeScript 5.9</div>
    <div class="badge"><span class="badge-dot dot-vite"></span> Vite 7</div>
  </div>

  <div class="cards">

    <a class="card context" href="useContext.html">
      <div class="card-icon">🔮</div>
      <span class="card-badge">Módulo 01</span>
      <h2>useContext &amp; createContext</h2>
      <p>
        Estado global sem prop drilling. Entenda por que o Context existe,
        como o React 19 o tornou mais limpo, e quando ele é a escolha certa.
      </p>
      <div class="card-topics">
        <span class="topic-tag">createContext</span>
        <span class="topic-tag">Provider</span>
        <span class="topic-tag">useContext</span>
        <span class="topic-tag">TypeScript types</span>
        <span class="topic-tag">use() hook</span>
      </div>
      <div class="card-cta">Entrar no módulo →</div>
    </a>

    <a class="card reducer" href="useReducer.html">
      <div class="card-icon">⚡</div>
      <span class="card-badge">Módulo 02</span>
      <h2>useReducer</h2>
      <p>
        Estado complexo com lógica previsível. O padrão que Redux popularizou,
        nativo no React, sem dependências externas.
      </p>
      <div class="card-topics">
        <span class="topic-tag">reducer function</span>
        <span class="topic-tag">dispatch</span>
        <span class="topic-tag">action types</span>
        <span class="topic-tag">immer pattern</span>
        <span class="topic-tag">context + reducer</span>
      </div>
      <div class="card-cta">Entrar no módulo →</div>
    </a>

    <a class="card css" href="css-moderno.html">
      <div class="card-icon">🎨</div>
      <span class="card-badge">Módulo 03</span>
      <h2>CSS Moderno 2026</h2>
      <p>
        O que realmente mudou no CSS. Container Queries, <code style="font-family:monospace;font-size:0.85em">:has()</code>,
        Cascade Layers, <code style="font-family:monospace;font-size:0.85em">@property</code> e
        Scroll-Driven Animations no baseline estável.
      </p>
      <div class="card-topics">
        <span class="topic-tag">@layer</span>
        <span class="topic-tag">container queries</span>
        <span class="topic-tag">:has()</span>
        <span class="topic-tag">@property</span>
        <span class="topic-tag">scroll-driven</span>
      </div>
      <div class="card-cta">Entrar no módulo →</div>
    </a>

    <a class="card tailwind" href="tailwind.html">
      <div class="card-icon">🌊</div>
      <span class="card-badge">Módulo 04</span>
      <h2>Tailwind CSS</h2>
      <p>
        Do utility-first ao avançado. Responsividade, dark mode, estados,
        <code style="font-family:monospace;font-size:0.85em">@apply</code>, config customizado, CVA e performance.
      </p>
      <div class="card-topics">
        <span class="topic-tag">utility-first</span>
        <span class="topic-tag">responsivo</span>
        <span class="topic-tag">dark mode</span>
        <span class="topic-tag">CVA</span>
        <span class="topic-tag">JIT</span>
      </div>
      <div class="card-cta">Entrar no módulo →</div>
    </a>

  </div>

  <div class="footer">
    Abra os arquivos .html diretamente no navegador · Copie os exemplos para o seu projeto Vite
  </div>

</body>
</html>
```

### `docs\tailwind.html` {#docstailwindhtml}

> 91,194 bytes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind CSS — Do Iniciante ao Avançado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d1117;
      --bg2: #161b22;
      --bg3: #1c2333;
      --border: #30363d;
      --text: #e6edf3;
      --text2: #8b949e;
      --text3: #c9d1d9;
      --accent: #38bdf8;
      --accent-dim: rgba(56,189,248,0.1);
      --accent-border: rgba(56,189,248,0.3);
      --react: #61dafb;
      --green: #34d399;
      --yellow: #fbbf24;
      --red: #f87171;
      --sidebar-w: 280px;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      min-height: 100vh;
    }

    /* ── SIDEBAR ── */
    .sidebar {
      width: var(--sidebar-w);
      background: var(--bg2);
      border-right: 1px solid var(--border);
      position: fixed;
      top: 0; left: 0;
      height: 100vh;
      overflow-y: auto;
      padding: 24px 0;
      display: flex;
      flex-direction: column;
      z-index: 100;
    }

    .sidebar-brand {
      padding: 0 20px 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
    }

    .sidebar-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--text2);
      text-decoration: none;
      margin-bottom: 12px;
      transition: color 0.2s;
    }
    .sidebar-back:hover { color: var(--text); }

    .sidebar-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--accent);
    }

    .sidebar-subtitle {
      font-size: 11px;
      color: var(--text2);
      margin-top: 3px;
    }

    .sidebar-section {
      padding: 0 12px;
      margin-bottom: 8px;
    }

    .sidebar-section-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text2);
      padding: 8px 8px 6px;
    }

    .sidebar-link {
      display: block;
      padding: 7px 10px;
      border-radius: 8px;
      font-size: 13px;
      color: var(--text2);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
      line-height: 1.4;
    }

    .sidebar-link:hover { background: var(--bg3); color: var(--text); }
    .sidebar-link.active { background: var(--accent-dim); color: var(--accent); font-weight: 500; }

    .sidebar-link .difficulty {
      float: right;
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 10px;
      font-weight: 600;
    }

    .diff-basic { background: rgba(52,211,153,0.15); color: var(--green); }
    .diff-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .diff-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    /* ── MAIN ── */
    .main {
      margin-left: var(--sidebar-w);
      flex: 1;
      max-width: 860px;
      padding: 60px 48px;
    }

    /* ── MOBILE HEADER ── */
    .mobile-header {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 52px;
      background: var(--bg2);
      border-bottom: 1px solid var(--border);
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 200;
    }

    .mobile-header-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--accent);
    }

    .mobile-menu-btn {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text2);
      cursor: pointer;
      padding: 6px 10px;
      font-size: 16px;
      line-height: 1;
      transition: all 0.15s;
    }

    .mobile-menu-btn:hover { background: var(--bg3); color: var(--text); }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 99;
    }

    .sidebar-overlay.open { display: block; }

    @media (max-width: 900px) {
      .mobile-header { display: flex; }
      .main { margin-left: 0; padding: 72px 20px 30px; }

      .sidebar {
        display: flex;
        transform: translateX(-100%);
        transition: transform 0.25s ease;
        z-index: 100;
      }

      .sidebar.open { transform: translateX(0); }
    }

    .diagram { overflow-x: auto; }

    .table-wrapper {
      overflow-x: auto;
      margin: 24px 0;
      border-radius: 12px;
      border: 1px solid var(--border);
    }

    .table-wrapper .compare-table {
      margin: 0;
      border-radius: 0;
      border: none;
      min-width: 520px;
    }

    @media (max-width: 600px) {
      .section-title { font-size: 1.25rem; }
      .hero h1 { font-size: 1.8rem; }
    }

    /* ── HERO ── */
    .hero {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--border);
    }

    .module-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 12px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      border-radius: 20px;
      color: var(--accent);
      margin-bottom: 20px;
    }

    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .hero h1 span { color: var(--accent); }

    .hero p {
      font-size: 1.05rem;
      color: var(--text2);
      line-height: 1.75;
      max-width: 600px;
    }

    /* ── SECTION ── */
    .section {
      margin-bottom: 72px;
      scroll-margin-top: 24px;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
    }

    .section-number {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
    }

    .section-title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    /* ── PROSE ── */
    .prose {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--text3);
    }

    .prose + .prose { margin-top: 16px; }

    .prose strong { color: var(--text); font-weight: 600; }
    .prose code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82em;
      padding: 2px 6px;
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--accent);
    }

    /* ── CALLOUT ── */
    .callout {
      padding: 16px 20px;
      border-radius: 10px;
      margin: 20px 0;
      font-size: 0.9rem;
      line-height: 1.7;
      display: flex;
      gap: 12px;
    }

    .callout-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

    .callout.info {
      background: rgba(56,189,248,0.07);
      border-left: 3px solid var(--accent);
      color: #7dd3fc;
    }

    .callout.warn {
      background: rgba(251,191,36,0.07);
      border-left: 3px solid var(--yellow);
      color: #fcd34d;
    }

    .callout.tip {
      background: rgba(52,211,153,0.07);
      border-left: 3px solid var(--green);
      color: #6ee7b7;
    }

    .callout.danger {
      background: rgba(248,113,113,0.07);
      border-left: 3px solid var(--red);
      color: #fca5a5;
    }

    /* ── CODE BLOCK ── */
    .code-block {
      margin: 24px 0;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
    }

    .code-filename {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text2);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .code-filename::before {
      content: '';
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.6;
    }

    .copy-btn {
      font-size: 11px;
      font-weight: 500;
      padding: 4px 10px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text2);
      cursor: pointer;
      transition: all 0.15s;
    }
    .copy-btn:hover { background: var(--bg); color: var(--text); }
    .copy-btn.copied { border-color: var(--green); color: var(--green); }

    .code-block pre {
      margin: 0 !important;
      padding: 20px !important;
      background: #0d1117 !important;
      font-size: 0.83rem !important;
      line-height: 1.7 !important;
      overflow-x: auto;
    }

    .code-block code { font-family: 'JetBrains Mono', monospace !important; }

    /* ── ANNOTATION ── */
    .annotation {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 16px 20px;
      margin: -8px 0 20px;
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.6;
    }

    .annotation strong { color: var(--accent); }

    /* ── VISUAL DIAGRAM ── */
    .diagram {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      margin: 24px 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.8;
    }

    .diagram-tree { color: var(--text2); }
    .diagram-highlight { color: var(--accent); font-weight: 500; }
    .diagram-pain { color: var(--red); }
    .diagram-ok { color: var(--green); }

    /* ── STEP LIST ── */
    .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 24px 0;
    }

    .step {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .step-content { flex: 1; }

    .step-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 4px;
    }

    .step-desc {
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.65;
    }

    /* ── EXERCISE ── */
    .exercise {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      margin: 28px 0;
    }

    .exercise-header {
      padding: 16px 20px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .exercise-badge {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .badge-basic { background: rgba(52,211,153,0.15); color: var(--green); }
    .badge-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .badge-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    .exercise-title {
      font-size: 0.95rem;
      font-weight: 600;
      flex: 1;
    }

    .exercise-body { padding: 20px; }

    .exercise-desc {
      font-size: 0.9rem;
      color: var(--text2);
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .exercise-tasks {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
    }

    .exercise-tasks li {
      font-size: 0.88rem;
      color: var(--text3);
      display: flex;
      gap: 8px;
      line-height: 1.5;
    }

    .exercise-tasks li::before {
      content: '\2192';
      color: var(--accent);
      flex-shrink: 0;
    }

    .exercise-workspace {
      background: var(--bg);
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 4px;
    }

    .workspace-label {
      font-size: 11px;
      color: var(--text2);
      padding: 8px 12px 4px;
      font-family: 'JetBrains Mono', monospace;
    }

    .workspace-editor {
      width: 100%;
      min-height: 180px;
      background: transparent;
      border: none;
      padding: 8px 12px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text);
      resize: vertical;
      outline: none;
      line-height: 1.7;
    }

    .solution-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text2);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      margin-top: 12px;
    }

    .solution-toggle:hover { background: var(--bg3); color: var(--text); }

    .solution-block {
      display: none;
      margin-top: 16px;
    }

    .solution-block.open { display: block; }

    /* ── COMPARISON TABLE ── */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 0.88rem;
    }

    .compare-table th {
      text-align: left;
      padding: 10px 16px;
      background: var(--bg3);
      color: var(--text2);
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--border);
    }

    .compare-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
      color: var(--text3);
      vertical-align: top;
      line-height: 1.5;
    }

    .compare-table tr:last-child td { border-bottom: none; }
    .compare-table tr:hover td { background: var(--bg2); }

    .compare-table td:first-child {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      font-size: 0.82rem;
      white-space: nowrap;
    }

    .check { color: var(--green); }
    .cross { color: var(--red); }

    /* ── DIVIDER ── */
    .divider {
      border: none;
      border-top: 1px solid var(--border);
      margin: 48px 0;
    }

    /* ── PROGRESS ── */
    .progress-bar {
      display: flex;
      gap: 4px;
      margin-bottom: 40px;
    }

    .progress-segment {
      height: 3px;
      border-radius: 2px;
      flex: 1;
      background: var(--border);
    }

    .progress-segment.done { background: var(--accent); }

    /* ── NAV FOOTER ── */
    .nav-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      margin-top: 48px;
      border-top: 1px solid var(--border);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: var(--text2);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-link:hover { color: var(--accent); }
    .nav-link.next { flex-direction: row-reverse; color: var(--accent); }

    /* ── LEVEL BAND ── */
    .level-band {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 4px 14px;
      border-radius: 20px;
      margin-bottom: 32px;
    }

    .level-iniciante { background: rgba(52,211,153,0.12); color: var(--green); border: 1px solid rgba(52,211,153,0.3); }
    .level-medio { background: rgba(251,191,36,0.12); color: var(--yellow); border: 1px solid rgba(251,191,36,0.3); }
    .level-avancado { background: rgba(248,113,113,0.12); color: var(--red); border: 1px solid rgba(248,113,113,0.3); }

    /* ── UTILITY GRID ── */
    .util-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      margin: 20px 0;
    }

    .util-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 16px;
    }

    .util-card-label {
      font-size: 11px;
      color: var(--text2);
      margin-bottom: 8px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .util-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .util-list li {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: var(--accent);
    }

    .util-list li span {
      color: var(--text2);
      font-size: 0.72rem;
    }
  </style>
</head>
<body>

<!-- ════════════════ MOBILE HEADER ════════════════ -->
<div class="mobile-header">
  <span class="mobile-header-title">🌊 Tailwind CSS</span>
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Abrir menu">☰</button>
</div>
<div class="sidebar-overlay" id="sidebar-overlay" onclick="closeMobileMenu()"></div>

<!-- ════════════════ SIDEBAR ════════════════ -->
<nav class="sidebar" id="sidebar">
  <div class="sidebar-brand">
    <a href="index.html" class="sidebar-back">← Início</a>
    <div class="sidebar-title">🌊 Tailwind CSS</div>
    <div class="sidebar-subtitle">Módulo 04 · Do iniciante ao avançado</div>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Iniciante</div>
    <a href="#o-que-e" class="sidebar-link">O que é Tailwind</a>
    <a href="#instalacao" class="sidebar-link">Instalação</a>
    <a href="#fundamentos" class="sidebar-link">Fundamentos</a>
    <a href="#flexbox-grid" class="sidebar-link">Flexbox &amp; Grid</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Médio</div>
    <a href="#responsividade" class="sidebar-link">Responsividade</a>
    <a href="#estados" class="sidebar-link">Estados e variantes</a>
    <a href="#dark-mode" class="sidebar-link">Dark mode</a>
    <a href="#apply" class="sidebar-link">@apply</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Avançado</div>
    <a href="#config-avancado" class="sidebar-link">Config avançado</a>
    <a href="#arbitrary" class="sidebar-link">Arbitrary values</a>
    <a href="#react-cva" class="sidebar-link">React + CVA</a>
    <a href="#performance" class="sidebar-link">Performance</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exercícios</div>
    <a href="#ex1" class="sidebar-link">Ex.1 Navbar <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex2" class="sidebar-link">Ex.2 Card perfil <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex3" class="sidebar-link">Ex.3 Dashboard CVA <span class="difficulty diff-inter">inter</span></a>
  </div>
</nav>

<!-- ════════════════ MAIN ════════════════ -->
<main class="main">

  <div class="hero" id="topo">
    <div class="module-tag">🌊 Módulo 04</div>
    <h1>Tailwind CSS —<br /><span>Do Iniciante ao Avançado</span></h1>
    <p>
      Tailwind CSS é um framework utility-first que muda fundamentalmente
      como você escreve CSS. Em vez de inventar nomes de classes semânticas,
      você compõe estilos diretamente no HTML com classes utilitárias
      atômicas. O resultado é um fluxo de desenvolvimento mais rápido,
      um design system consistente e um bundle final muito menor.
    </p>
  </div>

  <div class="progress-bar">
    <div class="progress-segment done"></div>
    <div class="progress-segment done"></div>
    <div class="progress-segment done"></div>
    <div class="progress-segment done"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
    <div class="progress-segment"></div>
  </div>

  <!-- ════════════ NÍVEL INICIANTE ════════════ -->
  <div class="level-band level-iniciante">● Nível Iniciante</div>

  <!-- ═══ SEÇÃO 01: O QUE É TAILWIND ═══ -->
  <section class="section" id="o-que-e">
    <div class="section-header">
      <div class="section-number">01</div>
      <h2 class="section-title">O que é Tailwind e por que usá-lo</h2>
    </div>

    <p class="prose">
      Tailwind CSS é um framework CSS <strong>utility-first</strong>: em vez de componentes
      prontos como Bootstrap, ele fornece classes de baixo nível — cada uma mapeada
      para uma regra CSS específica — que você combina para construir qualquer design.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Comparação: CSS tradicional vs CSS-in-JS vs Tailwind</h3>

    <div class="table-wrapper">
    <table class="compare-table">
      <thead>
        <tr>
          <th>Abordagem</th>
          <th>Como funciona</th>
          <th>Trade-offs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CSS tradicional</td>
          <td>Arquivos .css separados, classes semânticas (`.card`, `.btn`)</td>
          <td>Naming difícil, conflitos de escopo, crescimento descontrolado</td>
        </tr>
        <tr>
          <td>CSS-in-JS</td>
          <td>Estilos dentro do componente JS (styled-components, Emotion)</td>
          <td>Colocação excelente, mas runtime overhead e sintaxe verbosa</td>
        </tr>
        <tr>
          <td>Tailwind</td>
          <td>Classes utilitárias direto no HTML</td>
          <td>HTML verboso, mas sem conflitos, sem naming, design system embutido</td>
        </tr>
      </tbody>
    </table>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Vantagens reais</h3>

    <div class="steps">
      <div class="step">
        <div class="step-num">✓</div>
        <div class="step-content">
          <div class="step-title">Sem nomear classes</div>
          <div class="step-desc">Acabou o tempo perdido inventando <code>.card-header-wrapper-inner</code>. Você descreve visualmente o que quer, direto no elemento.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">✓</div>
        <div class="step-content">
          <div class="step-title">Colocação de estilos (colocation)</div>
          <div class="step-desc">O estilo vive junto com o markup que ele afeta. Não há mais ida e volta entre arquivos HTML e CSS.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">✓</div>
        <div class="step-content">
          <div class="step-title">Design system embutido</div>
          <div class="step-desc">Escala de espaçamento, paleta de cores, tipografia e breakpoints consistentes por padrão. Sem "magic numbers".</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">✓</div>
        <div class="step-content">
          <div class="step-title">Bundle mínimo em produção</div>
          <div class="step-desc">O JIT engine escaneia seu código e inclui <em>somente</em> as classes que você realmente usa. CSS final de 5–20 KB é comum.</div>
        </div>
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Desvantagens honestas</h3>

    <div class="callout warn">
      <span class="callout-icon">⚠</span>
      <div>
        <strong>HTML verboso:</strong> elementos com muitos estados e variantes podem acumular dezenas de classes.
        Isso é real e incomoda no início. A solução é extração com componentes (React/Vue) ou <code>@apply</code>.
        <br/><br/>
        <strong>Curva de aprendizado:</strong> você precisa memorizar as classes utilitárias. Mas com o plugin
        Tailwind IntelliSense no VSCode, o autocomplete cobre 90% dos casos em 2 semanas.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 02: INSTALAÇÃO ═══ -->
  <section class="section" id="instalacao">
    <div class="section-header">
      <div class="section-number">02</div>
      <h2 class="section-title">Instalação e configuração</h2>
    </div>

    <p class="prose">
      Existem três formas principais de usar Tailwind, com complexidade crescente.
      Escolha a que se adequa ao seu contexto.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Opção 1 — CDN Play (para experimentar)</h3>
    <p class="prose">Ideal para protótipos rápidos e aprendizado. Não use em produção — não há tree-shaking.</p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">index.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Apenas adicione no &lt;head&gt; --&gt;
&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;

&lt;!-- Pronto. Todas as classes ficam disponíveis. --&gt;
&lt;div class="p-4 bg-sky-500 text-white rounded-lg"&gt;
  Hello Tailwind!
&lt;/div&gt;</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Opção 2 — npm + Vite (recomendado)</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">terminal</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto
npm install -D tailwindcss @tailwindcss/vite</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">vite.config.ts</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/index.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">@import "tailwindcss";</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Opção 3 — tailwind.config.js (CLI clássico)</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">terminal</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">npm install -D tailwindcss
npx tailwindcss init</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/input.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        <strong>Instale o plugin VSCode:</strong> "Tailwind CSS IntelliSense" (bradlc.vscode-tailwindcss).
        Você terá autocomplete de classes, preview de valores e warning de conflitos em tempo real.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 03: FUNDAMENTOS ═══ -->
  <section class="section" id="fundamentos">
    <div class="section-header">
      <div class="section-number">03</div>
      <h2 class="section-title">Fundamentos: spacing, sizing, cores</h2>
    </div>

    <p class="prose">
      Tailwind usa um <strong>sistema de escala numérica</strong> onde 1 unidade = 4px.
      Isso cria consistência automática — se você usa <code>p-4</code> aqui e <code>gap-4</code>
      ali, ambos têm 16px. Sem magic numbers.
    </p>

    <div class="diagram">
      <div class="diagram-tree">
<span class="diagram-highlight">Escala de espaçamento (1 unidade = 4px)</span>

  p-0  →  0px        p-1  →  4px        p-2  →  8px
  p-3  →  12px       p-4  →  16px       p-5  →  20px
  p-6  →  24px       p-8  →  32px       p-10 →  40px
  p-12 →  48px       p-16 →  64px       p-20 →  80px
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Spacing — padding e margin</h3>

    <div class="util-grid">
      <div class="util-card">
        <div class="util-card-label">Padding</div>
        <ul class="util-list">
          <li>p-4 <span>→ todos os lados</span></li>
          <li>px-4 <span>→ horizontal</span></li>
          <li>py-4 <span>→ vertical</span></li>
          <li>pt-4 <span>→ top</span></li>
          <li>pb-4 <span>→ bottom</span></li>
          <li>pl-4 <span>→ left</span></li>
          <li>pr-4 <span>→ right</span></li>
        </ul>
      </div>
      <div class="util-card">
        <div class="util-card-label">Margin</div>
        <ul class="util-list">
          <li>m-4 <span>→ todos os lados</span></li>
          <li>mx-4 <span>→ horizontal</span></li>
          <li>my-4 <span>→ vertical</span></li>
          <li>mt-4 <span>→ top</span></li>
          <li>mb-4 <span>→ bottom</span></li>
          <li>ml-4 <span>→ left</span></li>
          <li>mr-4 <span>→ right</span></li>
        </ul>
      </div>
      <div class="util-card">
        <div class="util-card-label">Sizing</div>
        <ul class="util-list">
          <li>w-4 <span>→ 16px</span></li>
          <li>w-full <span>→ 100%</span></li>
          <li>w-screen <span>→ 100vw</span></li>
          <li>w-1/2 <span>→ 50%</span></li>
          <li>max-w-sm <span>→ 384px</span></li>
          <li>max-w-lg <span>→ 512px</span></li>
          <li>h-16 <span>→ 64px</span></li>
        </ul>
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Cores — escala 50 a 950</h3>

    <p class="prose">
      Cada cor tem uma escala de 50 (mais claro) a 950 (mais escuro).
      Use com prefixos <code>bg-</code>, <code>text-</code>, <code>border-</code>.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">cores.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Background --&gt;
&lt;div class="bg-sky-500"&gt;...&lt;/div&gt;
&lt;div class="bg-slate-900"&gt;...&lt;/div&gt;

&lt;!-- Texto --&gt;
&lt;p class="text-gray-700"&gt;texto escuro&lt;/p&gt;
&lt;p class="text-white"&gt;texto branco&lt;/p&gt;

&lt;!-- Borda --&gt;
&lt;div class="border border-sky-300"&gt;...&lt;/div&gt;

&lt;!-- Exemplo: card completo --&gt;
&lt;div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"&gt;
  &lt;h2 class="text-gray-900 text-lg font-semibold mb-2"&gt;Título&lt;/h2&gt;
  &lt;p class="text-gray-500 text-sm"&gt;Descrição do card&lt;/p&gt;
  &lt;button class="mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium"&gt;
    Ação
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="annotation">
      <strong>Paleta de cores incluída:</strong> slate, gray, zinc, neutral, stone, red, orange, amber,
      yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.
      Cada uma com 11 tonalidades (50, 100, 200...900, 950).
    </div>
  </section>

  <!-- ═══ SEÇÃO 04: FLEXBOX E GRID ═══ -->
  <section class="section" id="flexbox-grid">
    <div class="section-header">
      <div class="section-number">04</div>
      <h2 class="section-title">Flexbox e Grid com Tailwind</h2>
    </div>

    <p class="prose">
      Tailwind mapeia todas as propriedades de Flexbox e CSS Grid em classes utilitárias.
      Layouts que antes exigiam 10 linhas de CSS ficam em uma única linha de classes.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Flexbox essencial</h3>

    <div class="util-grid">
      <div class="util-card">
        <div class="util-card-label">Direção</div>
        <ul class="util-list">
          <li>flex <span>→ display: flex</span></li>
          <li>flex-row <span>→ padrão</span></li>
          <li>flex-col <span>→ coluna</span></li>
          <li>flex-wrap <span>→ quebra</span></li>
        </ul>
      </div>
      <div class="util-card">
        <div class="util-card-label">Alinhamento</div>
        <ul class="util-list">
          <li>items-center</li>
          <li>items-start</li>
          <li>items-end</li>
          <li>justify-between</li>
          <li>justify-center</li>
          <li>justify-end</li>
        </ul>
      </div>
      <div class="util-card">
        <div class="util-card-label">Gap</div>
        <ul class="util-list">
          <li>gap-4 <span>→ todos</span></li>
          <li>gap-x-4 <span>→ horizontal</span></li>
          <li>gap-y-4 <span>→ vertical</span></li>
          <li>flex-1 <span>→ flex: 1</span></li>
          <li>flex-none <span>→ não cresce</span></li>
        </ul>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">navbar.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;nav class="flex items-center justify-between px-6 py-4 bg-slate-900"&gt;
  &lt;a href="/" class="text-white font-bold text-lg"&gt;Logo&lt;/a&gt;

  &lt;div class="flex items-center gap-6"&gt;
    &lt;a href="/about" class="text-slate-300 hover:text-white text-sm"&gt;About&lt;/a&gt;
    &lt;a href="/docs"  class="text-slate-300 hover:text-white text-sm"&gt;Docs&lt;/a&gt;
    &lt;button class="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium"&gt;
      Get started
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">CSS Grid</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">cards-grid.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Grid de 3 colunas com gap --&gt;
&lt;div class="grid grid-cols-3 gap-6"&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card 1&lt;/div&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card 2&lt;/div&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card 3&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Card que ocupa 2 colunas --&gt;
&lt;div class="grid grid-cols-3 gap-6"&gt;
  &lt;div class="col-span-2 bg-sky-100 rounded-xl p-6"&gt;Destaque&lt;/div&gt;
  &lt;div class="bg-white rounded-xl p-6"&gt;Lateral&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Layout com sidebar + conteúdo --&gt;
&lt;div class="grid grid-cols-[280px_1fr] gap-8 min-h-screen"&gt;
  &lt;aside class="bg-slate-900 p-6"&gt;Sidebar&lt;/aside&gt;
  &lt;main class="p-8"&gt;Conteúdo principal&lt;/main&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="callout info">
      <span class="callout-icon">ℹ</span>
      <div>
        <strong>grid-cols-[280px_1fr]</strong> é um exemplo de <em>arbitrary value</em> — você pode passar
        qualquer valor CSS entre colchetes. Veremos isso em detalhes na seção 10.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ════════════ NÍVEL MÉDIO ════════════ -->
  <div class="level-band level-medio">● Nível Médio</div>

  <!-- ═══ SEÇÃO 05: RESPONSIVIDADE ═══ -->
  <section class="section" id="responsividade">
    <div class="section-header">
      <div class="section-number">05</div>
      <h2 class="section-title">Responsividade</h2>
    </div>

    <p class="prose">
      Tailwind é <strong>mobile-first</strong>: classes sem prefixo se aplicam a todos os tamanhos.
      Prefixos de breakpoint significam "a partir desse tamanho em diante".
    </p>

    <div class="diagram">
      <div class="diagram-tree">
<span class="diagram-highlight">Breakpoints padrão (mobile-first)</span>

  sm   →  640px    md   →  768px    lg   →  1024px
  xl   →  1280px   2xl  →  1536px

<span class="diagram-highlight">Como ler: "mobile first"</span>

  flex-col           →  coluna em todos os tamanhos
  flex-col md:flex-row  →  coluna no mobile, linha a partir de md
  hidden md:block    →  oculto no mobile, visível a partir de md
  text-sm lg:text-xl →  texto pequeno até lg, grande a partir de lg
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">responsivo.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Layout: coluna no mobile, linha no desktop --&gt;
&lt;div class="flex flex-col md:flex-row gap-6"&gt;
  &lt;aside class="w-full md:w-64 bg-slate-100 p-4 rounded-xl"&gt;
    Sidebar
  &lt;/aside&gt;
  &lt;main class="flex-1 bg-white p-6 rounded-xl"&gt;
    Conteúdo
  &lt;/main&gt;
&lt;/div&gt;

&lt;!-- Grid responsivo: 1 col mobile, 2 cols md, 3 cols lg --&gt;
&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card&lt;/div&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card&lt;/div&gt;
  &lt;div class="bg-white rounded-xl p-6 shadow"&gt;Card&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Hamburger só no mobile --&gt;
&lt;button class="md:hidden p-2"&gt;☰&lt;/button&gt;
&lt;nav class="hidden md:flex gap-6"&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
  &lt;a href="#"&gt;Sobre&lt;/a&gt;
&lt;/nav&gt;

&lt;!-- Container centralizado com padding responsivo --&gt;
&lt;div class="container mx-auto px-4 md:px-6 lg:px-8"&gt;
  &lt;h1 class="text-2xl md:text-3xl lg:text-4xl font-bold"&gt;
    Título responsivo
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠</span>
      <div>
        <strong>Armadilha comum:</strong> <code>sm:something</code> não significa "apenas em telas pequenas".
        Significa "a partir de 640px". Para estilos exclusivos do mobile, use a classe sem prefixo
        e sobrescreva em telas maiores.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 06: ESTADOS E VARIANTES ═══ -->
  <section class="section" id="estados">
    <div class="section-header">
      <div class="section-number">06</div>
      <h2 class="section-title">Estados e variantes</h2>
    </div>

    <p class="prose">
      Tailwind suporta pseudo-classes e pseudo-elementos como prefixos de classe.
      Combinados com <code>group</code> e <code>peer</code>, você consegue interatividade
      sem uma linha de JavaScript.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Estados básicos</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">estados.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- hover, focus, active --&gt;
&lt;button class="bg-sky-500 hover:bg-sky-600 active:bg-sky-700
               text-white px-4 py-2 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
               transition-colors"&gt;
  Clique aqui
&lt;/button&gt;

&lt;!-- disabled --&gt;
&lt;button class="bg-sky-500 text-white px-4 py-2 rounded-lg
               disabled:opacity-50 disabled:cursor-not-allowed"
        disabled&gt;
  Indisponível
&lt;/button&gt;

&lt;!-- checked (checkbox) --&gt;
&lt;input type="checkbox"
       class="w-4 h-4 rounded border-gray-300
              checked:bg-sky-500 checked:border-sky-500
              focus:ring-sky-500" /&gt;</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">group — estilizar filhos quando o pai está em hover</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">group.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Adicione "group" no pai, use "group-hover:" nos filhos --&gt;
&lt;div class="group flex items-center gap-3 p-4 rounded-xl
            bg-white hover:bg-sky-50 cursor-pointer transition-colors"&gt;
  &lt;div class="w-10 h-10 rounded-full bg-sky-100
              group-hover:bg-sky-200 transition-colors"&gt;&lt;/div&gt;
  &lt;div&gt;
    &lt;p class="font-medium text-gray-900"&gt;João Silva&lt;/p&gt;
    &lt;p class="text-sm text-gray-500 group-hover:text-sky-600 transition-colors"&gt;
      Ver perfil →
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">peer — float label pattern sem JS</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">peer-float-label.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- peer no input, peer-placeholder-shown: e peer-focus: no label --&gt;
&lt;div class="relative"&gt;
  &lt;input
    id="email"
    type="email"
    placeholder=" "
    class="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2
           text-gray-900 focus:outline-none focus:border-sky-500"
  /&gt;
  &lt;label
    for="email"
    class="absolute left-4 top-4 text-gray-400 text-sm
           transition-all pointer-events-none
           peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
           peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-sky-500
           peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-xs"
  &gt;
    E-mail
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="annotation">
      <strong>Como funciona:</strong> <code>peer</code> marca o input como "peer". O label então usa
      <code>peer-placeholder-shown:</code> (quando o campo está vazio) e <code>peer-focus:</code>
      (quando focado) para se mover — tudo sem JavaScript.
    </div>
  </section>

  <!-- ═══ SEÇÃO 07: DARK MODE ═══ -->
  <section class="section" id="dark-mode">
    <div class="section-header">
      <div class="section-number">07</div>
      <h2 class="section-title">Dark mode</h2>
    </div>

    <p class="prose">
      Tailwind suporta dark mode nativo com o prefixo <code>dark:</code>. Você configura
      como ele é ativado: via preferência do sistema (<code>media</code>) ou manualmente
      via classe no elemento raiz (<code>class</code>).
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  // 'media' usa prefers-color-scheme do OS
  // 'class' usa a classe .dark no elemento &lt;html&gt;
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">navbar-dark.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;nav class="bg-white dark:bg-slate-900
            border-b border-gray-200 dark:border-slate-700
            px-6 py-4"&gt;
  &lt;div class="flex items-center justify-between"&gt;
    &lt;span class="text-gray-900 dark:text-white font-bold text-lg"&gt;
      MyApp
    &lt;/span&gt;

    &lt;!-- Botão toggle dark mode --&gt;
    &lt;button onclick="toggleDark()"
            class="p-2 rounded-lg text-gray-500 dark:text-slate-400
                   hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"&gt;
      🌙
    &lt;/button&gt;

    &lt;div class="flex gap-4"&gt;
      &lt;a href="#" class="text-gray-600 dark:text-slate-300 hover:text-gray-900
                         dark:hover:text-white text-sm"&gt;Docs&lt;/a&gt;
      &lt;a href="#" class="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2
                         rounded-lg text-sm font-medium transition-colors"&gt;
        Começar
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;

&lt;script&gt;
  function toggleDark() {
    document.documentElement.classList.toggle('dark')
    // Persistir preferência:
    const isDark = document.documentElement.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  // Restaurar ao carregar:
  if (localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &amp;&amp;
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
&lt;/script&gt;</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        Use <strong>darkMode: 'class'</strong> quando você quer dar controle ao usuário.
        Use <strong>'media'</strong> quando você quer seguir automaticamente a preferência do sistema
        sem toggle manual.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 08: @APPLY ═══ -->
  <section class="section" id="apply">
    <div class="section-header">
      <div class="section-number">08</div>
      <h2 class="section-title">Extração com @apply</h2>
    </div>

    <p class="prose">
      <code>@apply</code> permite extrair classes Tailwind em seletores CSS tradicionais.
      Útil para componentes repetidos ou integração com bibliotecas que controlam o HTML.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/styles/components.css</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-css">@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-2
           px-4 py-2 rounded-lg text-sm font-medium
           transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500;
  }

  .btn-secondary {
    @apply bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500;
  }

  .btn-danger {
    @apply bg-red-500 text-white hover:bg-red-600 focus:ring-red-500;
  }

  /* Uso no HTML: */
  /* &lt;button class="btn btn-primary"&gt;Salvar&lt;/button&gt; */
  /* &lt;button class="btn btn-secondary"&gt;Cancelar&lt;/button&gt; */
}</code></pre>
    </div>

    <div class="callout danger">
      <span class="callout-icon">✗</span>
      <div>
        <strong>Quando NÃO usar @apply:</strong><br />
        — Não use para substituir classes utilitárias simples (derrota o propósito)<br />
        — Não é um substituto para Sass/LESS — não tem variáveis, loops, mixins<br />
        — Em projetos React/Vue, prefira componentes JS para reuso: você ganha props, lógica e tipagem
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Alternativa recomendada: componente React</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">Button.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Em vez de @apply, crie um componente tipado
interface ButtonProps extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary:   'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
  danger:    'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    &lt;button
      className={`inline-flex items-center justify-center rounded-lg font-medium
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    /&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ════════════ NÍVEL AVANÇADO ════════════ -->
  <div class="level-band level-avancado">● Nível Avançado</div>

  <!-- ═══ SEÇÃO 09: CONFIG AVANÇADO ═══ -->
  <section class="section" id="config-avancado">
    <div class="section-header">
      <div class="section-number">09</div>
      <h2 class="section-title">tailwind.config.js avançado</h2>
    </div>

    <p class="prose">
      O arquivo de configuração é onde você personaliza o design system do Tailwind.
      A diferença crucial é <strong>extend</strong> (adiciona ao padrão) vs substituição direta
      (sobrescreve tudo).
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js — tokens customizados</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

  theme: {
    // ❌ Isso SUBSTITUI os valores padrão (cuidado!)
    // colors: { brand: '#0ea5e9' }

    extend: {
      // ✅ Isso ADICIONA aos valores padrão
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        // Cor semântica
        'surface': 'hsl(var(--surface) / &lt;alpha-value&gt;)',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      spacing: {
        '18': '4.5rem',   // 72px — não existe no padrão
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'inner-lg': 'inset 0 2px 8px rgba(0,0,0,0.1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),       // Reset e estilo de inputs/selects
    require('@tailwindcss/typography'),  // Prose para conteúdo rich text
  ],
}</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Outras opções úteis</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js — opções extras</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">module.exports = {
  // Prefixo para evitar conflito com outros frameworks
  prefix: 'tw-',
  // tw-flex, tw-grid, tw-p-4...

  // Forçar especificidade com !important
  important: '#app',
  // Ou: important: true (aplica !important em tudo — use com cuidado)

  // Safelist: classes geradas dinamicamente que não aparecem no código
  safelist: [
    'bg-red-500',
    'bg-green-500',
    { pattern: /bg-(red|green|blue)-(100|500|900)/ },
  ],
}</code></pre>
    </div>

    <div class="annotation">
      <strong>@tailwindcss/typography</strong> adiciona a classe <code>prose</code> que aplica
      estilos legíveis a conteúdo HTML arbitrário (markdown renderizado, posts de blog).
      Ideal para CMSs. <code>@tailwindcss/forms</code> normaliza inputs entre browsers.
    </div>
  </section>

  <!-- ═══ SEÇÃO 10: ARBITRARY VALUES ═══ -->
  <section class="section" id="arbitrary">
    <div class="section-header">
      <div class="section-number">10</div>
      <h2 class="section-title">Arbitrary values e variantes</h2>
    </div>

    <p class="prose">
      Às vezes você precisa de um valor único que não vale entrar no config.
      Tailwind permite isso com a sintaxe de colchetes: <code>w-[347px]</code>.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Valores arbitrários</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">arbitrary-values.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Dimensões exatas --&gt;
&lt;div class="w-[347px] h-[200px]"&gt;&lt;/div&gt;

&lt;!-- Cores arbitrárias --&gt;
&lt;div class="bg-[#bada55] text-[#1a1a2e]"&gt;&lt;/div&gt;

&lt;!-- Tipografia --&gt;
&lt;p class="text-[22px] leading-[1.6]"&gt;Texto custom&lt;/p&gt;

&lt;!-- Gradiente com cor arbitrária --&gt;
&lt;div class="bg-gradient-to-r from-[#667eea] to-[#764ba2]"&gt;&lt;/div&gt;

&lt;!-- Grid template personalizado --&gt;
&lt;div class="grid grid-cols-[1fr_2fr_1fr]"&gt;
  &lt;div&gt;25%&lt;/div&gt;
  &lt;div&gt;50%&lt;/div&gt;
  &lt;div&gt;25%&lt;/div&gt;
&lt;/div&gt;

&lt;!-- CSS custom property --&gt;
&lt;div class="bg-[var(--brand-color)]"&gt;&lt;/div&gt;</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Variantes arbitrárias</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">arbitrary-variants.html</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-html">&lt;!-- Estilizar filhos diretos --&gt;
&lt;ul class="[&amp;>li]:mt-2 [&amp;>li]:pl-4 [&amp;>li]:border-l-2 [&amp;>li]:border-sky-500"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- nth-child --&gt;
&lt;div class="[&amp;:nth-child(odd)]:bg-slate-50"&gt;&lt;/div&gt;

&lt;!-- Modificadores de data attributes --&gt;
&lt;div data-state="open"
     class="data-[state=open]:block data-[state=closed]:hidden"&gt;
  Visível apenas quando open
&lt;/div&gt;

&lt;!-- group com classe arbitrária --&gt;
&lt;div class="group is-loading"&gt;
  &lt;button class="group-[.is-loading]:pointer-events-none group-[.is-loading]:opacity-50"&gt;
    Carregar
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠</span>
      <div>
        <strong>Use com moderação:</strong> arbitrary values são válidos para casos únicos.
        Se você usa o mesmo valor em 3+ lugares, adicione ao <code>tailwind.config.js</code>.
        Isso garante consistência e facilita mudanças globais.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 11: REACT + CVA ═══ -->
  <section class="section" id="react-cva">
    <div class="section-header">
      <div class="section-number">11</div>
      <h2 class="section-title">Tailwind com React: CVA e clsx</h2>
    </div>

    <p class="prose">
      À medida que seus componentes crescem, gerenciar classes condicionais com
      template strings vira um pesadelo. CVA (class-variance-authority) e clsx
      resolvem isso com elegância.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">O problema: classes condicionais verbosas</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">Button-sem-cva.tsx (evite isso)</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// ❌ Difícil de manter, sem tipagem de variantes
function Button({ variant, size, disabled, className }) {
  return (
    &lt;button className={`
      px-4 py-2 rounded-lg font-medium transition-colors
      ${variant === 'primary' ? 'bg-sky-500 text-white hover:bg-sky-600' : ''}
      ${variant === 'secondary' ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : ''}
      ${variant === 'danger' ? 'bg-red-500 text-white hover:bg-red-600' : ''}
      ${size === 'sm' ? 'text-xs px-3 py-1.5' : ''}
      ${size === 'lg' ? 'text-base px-6 py-3' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `}&gt;
      ...
    &lt;/button&gt;
  )
}</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Solução 1: função cn() com clsx</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">lib/utils.ts</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn() combina classes e resolve conflitos do Tailwind
// Ex: cn('px-2 py-1', 'px-4') → 'py-1 px-4' (px-4 vence)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Uso:
// cn('text-gray-500', isActive && 'text-sky-500')
// cn('bg-red-500', variant === 'blue' && 'bg-blue-500')
// cn(baseClasses, { 'opacity-50': disabled, 'ring-2': focused })</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">terminal — instalar dependências</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">npm install clsx tailwind-merge
npm install class-variance-authority</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Solução 2: CVA — variantes tipadas</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">components/Button.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Define as variantes com tipos automáticos
const buttonVariants = cva(
  // Classes base (sempre aplicadas)
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium ' +
  'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:     'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        outline:     'border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 focus:ring-gray-500',
        ghost:       'hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
        link:        'text-sky-500 underline-offset-4 hover:underline',
      },
      size: {
        sm:   'px-3 py-1.5 text-xs h-8',
        md:   'px-4 py-2 text-sm h-10',
        lg:   'px-6 py-3 text-base h-12',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

// O tipo ButtonProps herda as variantes automaticamente
export interface ButtonProps
  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
    VariantProps&lt;typeof buttonVariants&gt; {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    &lt;button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    /&gt;
  )
}

// ─── Uso ──────────────────────────────────────────────────
// &lt;Button&gt;Padrão&lt;/Button&gt;
// &lt;Button variant="destructive"&gt;Excluir&lt;/Button&gt;
// &lt;Button variant="outline" size="lg"&gt;Ver mais&lt;/Button&gt;
// &lt;Button variant="ghost" size="sm"&gt;Cancelar&lt;/Button&gt;
// &lt;Button variant="link"&gt;Saiba mais →&lt;/Button&gt;</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        CVA gera os tipos automaticamente a partir das variantes. O TypeScript vai reclamar
        se você tentar <code>variant="inexistente"</code>. É a forma mais elegante de ter
        um sistema de design tipado com Tailwind.
      </div>
    </div>
  </section>

  <!-- ═══ SEÇÃO 12: PERFORMANCE ═══ -->
  <section class="section" id="performance">
    <div class="section-header">
      <div class="section-number">12</div>
      <h2 class="section-title">Performance: JIT e content config</h2>
    </div>

    <p class="prose">
      Tailwind 3+ usa JIT (Just-In-Time) por padrão: em vez de gerar todas as classes
      possíveis (megabytes), ele escaneia seu código em tempo real e gera apenas o que
      você realmente usa. O resultado é um CSS final mínimo.
    </p>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Como JIT funciona</h3>

    <div class="diagram">
      <div class="diagram-tree">
<span class="diagram-highlight">Sem JIT (Tailwind 2):</span>  gera ~3MB de CSS com todas as combinações
<span class="diagram-ok">Com JIT (Tailwind 3+):</span>   escaneia código → inclui só o que existe → ~5-20KB

<span class="diagram-highlight">Processo JIT:</span>
  1. Tailwind lê o array "content" no config
  2. Escaneia cada arquivo procurando strings que parecem classes
  3. Gera CSS apenas para as classes encontradas
  4. Em dev: modo watch, regera ao salvar
  5. Em prod: resultado final é tiny
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js — content correto</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">module.exports = {
  content: [
    // ✅ Inclua TODOS os arquivos que podem conter classes Tailwind
    './src/**/*.{js,ts,jsx,tsx,html}',
    './index.html',

    // Bibliotecas de componentes externas
    './node_modules/@my-lib/components/**/*.{js,ts}',

    // Arquivos de configuração que podem ter classes
    './src/config/variants.ts',
  ],
  // ...
}</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">Safelist — classes dinâmicas</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">tailwind.config.js — safelist</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-javascript">module.exports = {
  safelist: [
    // Classes usadas com dados dinâmicos (ex: da API)
    'bg-red-500', 'bg-green-500', 'bg-yellow-500',

    // Padrão com regex — inclui toda a família
    { pattern: /^(bg|text|border)-(red|green|blue|yellow)-(100|500|900)$/ },

    // Com variantes
    {
      pattern: /^bg-(red|green|blue)-500$/,
      variants: ['hover', 'dark', 'md'],
    },
  ],
}</code></pre>
    </div>

    <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin:24px 0 12px;">O que NÃO fazer</h3>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">perigo.tsx — concatenação dinâmica</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// ❌ ERRADO: Tailwind não consegue detectar essas classes
// O scanner procura strings literais, não expressões dinâmicas
function Badge({ color }: { color: string }) {
  return &lt;span className={`bg-${color}-500`}&gt;...&lt;/span&gt;
  // bg-red-500, bg-blue-500 etc NUNCA serão incluídas no build
}

// ✅ CORRETO: mapeamento de strings completas
const colorMap = {
  red:    'bg-red-500 text-red-50',
  blue:   'bg-blue-500 text-blue-50',
  green:  'bg-green-500 text-green-50',
  yellow: 'bg-yellow-500 text-yellow-50',
} as const

type Color = keyof typeof colorMap

function Badge({ color }: { color: Color }) {
  return &lt;span className={colorMap[color]}&gt;...&lt;/span&gt;
}</code></pre>
    </div>

    <div class="callout danger">
      <span class="callout-icon">⚡</span>
      <div>
        <strong>Regra de ouro:</strong> sempre escreva nomes de classes Tailwind completos no código.
        Nunca construa strings de classe por concatenação. O scanner do JIT procura por strings
        literais completas — ele não executa o JavaScript.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ════════════ EXERCÍCIOS ════════════ -->
  <section class="section" id="exercicios">
    <div class="section-header">
      <div class="section-number">Ex</div>
      <h2 class="section-title">Exercícios práticos</h2>
    </div>

    <p class="prose">
      Os três exercícios seguem progressão deliberada: do uso puro de classes no HTML
      até componentes React com CVA, cn() e tipagem completa de variantes.
    </p>

    <!-- Exercício 1 -->
    <div class="exercise" id="ex1">
      <div class="exercise-header">
        <span class="exercise-badge badge-basic">Básico</span>
        <span class="exercise-title">Exercício 1 — Navbar responsiva</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Crie uma navbar responsiva usando apenas classes Tailwind no HTML.
          No mobile deve exibir um hamburger menu, no desktop os links ficam visíveis.
        </p>
        <ul class="exercise-tasks">
          <li>Logo à esquerda, links à direita no desktop (&gt;= md)</li>
          <li>Hamburger (☰) visível apenas no mobile (&lt; md), links ocultos</li>
          <li>Background escuro (<code>bg-slate-900</code>), texto branco</li>
          <li>Hover nos links com transição de cor suave</li>
          <li>Botão CTA com destaque (bg-sky-500)</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// Seu código aqui — abra no browser com a CDN do Tailwind</div>
          <textarea class="workspace-editor" placeholder="&lt;nav class=&quot;...&quot;&gt;
  &lt;div class=&quot;...&quot;&gt;
    &lt;!-- Logo --&gt;
    &lt;!-- Links (hidden no mobile) --&gt;
    &lt;!-- Hamburger (hidden no desktop) --&gt;
  &lt;/div&gt;
&lt;/nav&gt;"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — navbar-responsiva.html</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
  &lt;title&gt;Navbar Responsiva&lt;/title&gt;
&lt;/head&gt;
&lt;body class="bg-slate-950"&gt;

&lt;nav class="bg-slate-900 border-b border-slate-700"&gt;
  &lt;div class="max-w-6xl mx-auto px-4"&gt;
    &lt;div class="flex items-center justify-between h-16"&gt;

      &lt;!-- Logo --&gt;
      &lt;a href="/" class="text-white font-bold text-xl flex items-center gap-2"&gt;
        &lt;span class="text-sky-400"&gt;◈&lt;/span&gt; MyApp
      &lt;/a&gt;

      &lt;!-- Links — ocultos no mobile, visíveis a partir de md --&gt;
      &lt;div class="hidden md:flex items-center gap-6"&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white text-sm
                           transition-colors duration-150"&gt;Home&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white text-sm
                           transition-colors duration-150"&gt;Produto&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white text-sm
                           transition-colors duration-150"&gt;Preços&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white text-sm
                           transition-colors duration-150"&gt;Docs&lt;/a&gt;
        &lt;a href="#"
           class="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2
                  rounded-lg text-sm font-medium transition-colors"&gt;
          Começar grátis
        &lt;/a&gt;
      &lt;/div&gt;

      &lt;!-- Hamburger — visível só no mobile --&gt;
      &lt;button
        id="menu-btn"
        onclick="toggleMenu()"
        class="md:hidden p-2 text-slate-300 hover:text-white
               hover:bg-slate-800 rounded-lg transition-colors"
        aria-label="Menu"
      &gt;
        &lt;svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"&gt;
          &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" /&gt;
        &lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;

    &lt;!-- Menu mobile — oculto por padrão --&gt;
    &lt;div id="mobile-menu" class="hidden md:hidden pb-4"&gt;
      &lt;div class="flex flex-col gap-1"&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white hover:bg-slate-800
                           px-3 py-2 rounded-lg text-sm transition-colors"&gt;Home&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white hover:bg-slate-800
                           px-3 py-2 rounded-lg text-sm transition-colors"&gt;Produto&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white hover:bg-slate-800
                           px-3 py-2 rounded-lg text-sm transition-colors"&gt;Preços&lt;/a&gt;
        &lt;a href="#" class="text-slate-300 hover:text-white hover:bg-slate-800
                           px-3 py-2 rounded-lg text-sm transition-colors"&gt;Docs&lt;/a&gt;
        &lt;div class="pt-2 border-t border-slate-700 mt-2"&gt;
          &lt;a href="#"
             class="block bg-sky-500 hover:bg-sky-400 text-white px-4 py-2
                    rounded-lg text-sm font-medium text-center transition-colors"&gt;
            Começar grátis
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;

&lt;script&gt;
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu')
    menu.classList.toggle('hidden')
  }
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 2 -->
    <div class="exercise" id="ex2">
      <div class="exercise-header">
        <span class="exercise-badge badge-medium">Médio</span>
        <span class="exercise-title">Exercício 2 — Card de perfil com dark mode</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Crie um card de perfil de usuário com avatar, nome, bio, tags de skills,
          hover elaborado e suporte a dark mode togglável via botão.
        </p>
        <ul class="exercise-tasks">
          <li>Avatar redondo com borda colorida, nome e bio abaixo</li>
          <li>Tags de skills com cores diferentes (skill chips)</li>
          <li>Hover no card: <code>-translate-y-1</code> e sombra aumentada</li>
          <li>Botões "Seguir" e "Mensagem" com estados hover e focus visíveis</li>
          <li>Dark mode togglável com botão — usa classe <code>dark</code> no &lt;html&gt;</li>
          <li>Classes dark: fundo escuro, texto claro, borda ajustada</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// profile-card.html — inclua a CDN do Tailwind</div>
          <textarea class="workspace-editor" placeholder="&lt;div class=&quot;group bg-white dark:bg-slate-800 rounded-2xl p-6
           border border-gray-200 dark:border-slate-700
           hover:-translate-y-1 hover:shadow-xl
           transition-all duration-200&quot;&gt;
  ...
&lt;/div&gt;"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — profile-card.html</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
  &lt;script&gt;tailwind.config = { darkMode: 'class' }&lt;/script&gt;
  &lt;title&gt;Profile Card&lt;/title&gt;
&lt;/head&gt;
&lt;body class="min-h-screen bg-gray-100 dark:bg-slate-950
             flex items-center justify-center p-8 transition-colors"&gt;

  &lt;!-- Botão toggle dark mode --&gt;
  &lt;button
    onclick="document.documentElement.classList.toggle('dark')"
    class="fixed top-4 right-4 p-2 rounded-lg
           bg-white dark:bg-slate-800
           border border-gray-200 dark:border-slate-700
           text-gray-600 dark:text-slate-300
           hover:bg-gray-50 dark:hover:bg-slate-700
           transition-colors text-sm font-medium"
  &gt;
    🌙 Dark mode
  &lt;/button&gt;

  &lt;!-- Card de perfil --&gt;
  &lt;div class="group w-full max-w-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              rounded-2xl p-6 shadow-sm
              hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-900/50
              transition-all duration-200 ease-out cursor-pointer"&gt;

    &lt;!-- Header: avatar + status --&gt;
    &lt;div class="flex items-start justify-between mb-4"&gt;
      &lt;div class="relative"&gt;
        &lt;div class="w-16 h-16 rounded-full
                    bg-gradient-to-br from-sky-400 to-indigo-500
                    flex items-center justify-center text-white text-2xl font-bold
                    ring-4 ring-sky-100 dark:ring-sky-900"&gt;
          JS
        &lt;/div&gt;
        &lt;!-- Indicador online --&gt;
        &lt;span class="absolute -bottom-0.5 -right-0.5
                     w-4 h-4 rounded-full bg-green-400
                     border-2 border-white dark:border-slate-800"&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;span class="text-xs font-medium px-2.5 py-1 rounded-full
                   bg-green-50 dark:bg-green-900/30
                   text-green-700 dark:text-green-400
                   border border-green-200 dark:border-green-800"&gt;
        Disponível
      &lt;/span&gt;
    &lt;/div&gt;

    &lt;!-- Info --&gt;
    &lt;div class="mb-4"&gt;
      &lt;h2 class="text-lg font-semibold text-gray-900 dark:text-white"&gt;
        João Silva
      &lt;/h2&gt;
      &lt;p class="text-sm text-sky-600 dark:text-sky-400 font-medium"&gt;
        Full-stack Developer
      &lt;/p&gt;
      &lt;p class="text-sm text-gray-500 dark:text-slate-400 mt-2 leading-relaxed"&gt;
        Apaixonado por React, TypeScript e boas abstrações.
        Open source enthusiast e mentor de devs juniores.
      &lt;/p&gt;
    &lt;/div&gt;

    &lt;!-- Skills --&gt;
    &lt;div class="flex flex-wrap gap-2 mb-6"&gt;
      &lt;span class="text-xs px-2.5 py-1 rounded-full
                   bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300
                   border border-sky-200 dark:border-sky-800"&gt;React&lt;/span&gt;
      &lt;span class="text-xs px-2.5 py-1 rounded-full
                   bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300
                   border border-violet-200 dark:border-violet-800"&gt;TypeScript&lt;/span&gt;
      &lt;span class="text-xs px-2.5 py-1 rounded-full
                   bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300
                   border border-emerald-200 dark:border-emerald-800"&gt;Node.js&lt;/span&gt;
      &lt;span class="text-xs px-2.5 py-1 rounded-full
                   bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300
                   border border-amber-200 dark:border-amber-800"&gt;Tailwind&lt;/span&gt;
    &lt;/div&gt;

    &lt;!-- Botões --&gt;
    &lt;div class="flex gap-3"&gt;
      &lt;button class="flex-1 bg-sky-500 hover:bg-sky-600 active:bg-sky-700
                     text-white text-sm font-medium py-2 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                     dark:focus:ring-offset-slate-800
                     transition-colors"&gt;
        Seguir
      &lt;/button&gt;
      &lt;button class="flex-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300
                     dark:bg-slate-700 dark:hover:bg-slate-600 dark:active:bg-slate-500
                     text-gray-700 dark:text-slate-200
                     text-sm font-medium py-2 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                     dark:focus:ring-offset-slate-800
                     transition-colors"&gt;
        Mensagem
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 3 -->
    <div class="exercise" id="ex3">
      <div class="exercise-header">
        <span class="exercise-badge badge-inter">Intermediário</span>
        <span class="exercise-title">Exercício 3 — Dashboard de métricas com CVA</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Construa um dashboard de métricas com grid responsivo, componente Button
          com CVA e variantes tipadas, uso de group/peer para interatividade, e função cn().
        </p>
        <ul class="exercise-tasks">
          <li>Grid de 4 cards de métricas: 1 col mobile, 2 cols md, 4 cols xl</li>
          <li>Componente <code>Button</code> com CVA: variants primary, secondary, danger, ghost</li>
          <li>Função <code>cn()</code> com clsx + tailwind-merge</li>
          <li>Componente <code>MetricCard</code> com <code>group-hover</code> para revelar ação</li>
          <li>Toggle de dark mode com <code>peer</code> (checkbox + label)</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// dashboard.tsx — React + TypeScript</div>
          <textarea class="workspace-editor" placeholder="// Comece pelas dependências:
// npm install clsx tailwind-merge class-variance-authority
//
// Depois:
// 1. Função cn() em lib/utils.ts
// 2. buttonVariants com cva()
// 3. MetricCard com group-hover
// 4. Grid responsivo"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — Dashboard.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">// ─── lib/utils.ts ────────────────────────────────────────
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── components/Button.tsx ───────────────────────────────
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium ' +
  'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none text-sm',
  {
    variants: {
      variant: {
        primary:   'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
        secondary: 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-slate-100 ' +
                   'hover:bg-gray-200 dark:hover:bg-slate-600 focus:ring-gray-400',
        danger:    'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        ghost:     'text-gray-600 dark:text-slate-400 hover:bg-gray-100 ' +
                   'dark:hover:bg-slate-800 focus:ring-gray-400',
      },
      size: {
        sm: 'px-3 py-1.5 h-8 text-xs',
        md: 'px-4 py-2 h-10',
        lg: 'px-6 py-3 h-12 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
    VariantProps&lt;typeof buttonVariants&gt; {}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    &lt;button className={cn(buttonVariants({ variant, size }), className)} {...props} /&gt;
  )
}

// ─── components/MetricCard.tsx ───────────────────────────
interface MetricCardProps {
  title: string
  value: string
  change: string
  positive: boolean
  icon: string
}

function MetricCard({ title, value, change, positive, icon }: MetricCardProps) {
  return (
    &lt;div className="group relative bg-white dark:bg-slate-800
                    border border-gray-200 dark:border-slate-700
                    rounded-2xl p-6 shadow-sm
                    hover:shadow-md hover:-translate-y-0.5
                    transition-all duration-200"&gt;
      {/* Ação oculta — aparece no hover via group */}
      &lt;button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100
                         transition-opacity p-1.5 rounded-lg
                         text-gray-400 hover:text-gray-600
                         hover:bg-gray-100 dark:hover:bg-slate-700"&gt;
        ⋯
      &lt;/button&gt;

      &lt;div className="flex items-start justify-between mb-4"&gt;
        &lt;div className="text-2xl"&gt;{icon}&lt;/div&gt;
        &lt;span className={cn(
          'text-xs font-medium px-2 py-1 rounded-full',
          positive
            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
            : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
        )}&gt;
          {positive ? '↑' : '↓'} {change}
        &lt;/span&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;p className="text-sm text-gray-500 dark:text-slate-400 mb-1"&gt;{title}&lt;/p&gt;
        &lt;p className="text-2xl font-bold text-gray-900 dark:text-white"&gt;{value}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

// ─── Dashboard.tsx ───────────────────────────────────────
import { useState } from 'react'

const metrics = [
  { title: 'Receita total',   value: 'R$ 47.2k', change: '12%', positive: true,  icon: '💰' },
  { title: 'Usuários ativos', value: '2.481',    change: '8%',  positive: true,  icon: '👥' },
  { title: 'Taxa conversão',  value: '3.24%',    change: '0.5%',positive: false, icon: '📊' },
  { title: 'Tickets abertos', value: '18',       change: '3',   positive: false, icon: '🎫' },
]

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    setIsDark(prev => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    &lt;div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors p-8"&gt;

      {/* Header */}
      &lt;div className="flex items-center justify-between mb-8"&gt;
        &lt;div&gt;
          &lt;h1 className="text-2xl font-bold text-gray-900 dark:text-white"&gt;Dashboard&lt;/h1&gt;
          &lt;p className="text-sm text-gray-500 dark:text-slate-400"&gt;Visão geral do mês&lt;/p&gt;
        &lt;/div&gt;

        &lt;div className="flex items-center gap-3"&gt;
          {/* Toggle dark mode com peer */}
          &lt;label className="flex items-center gap-2 cursor-pointer"&gt;
            &lt;input
              type="checkbox"
              checked={isDark}
              onChange={toggleDark}
              className="peer sr-only"
            /&gt;
            &lt;div className="relative w-10 h-6 bg-gray-200 dark:bg-slate-600 rounded-full
                            peer-checked:bg-sky-500 transition-colors"&gt;
              &lt;div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full
                              peer-checked:translate-x-4 transition-transform
                              shadow-sm"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;span className="text-sm text-gray-600 dark:text-slate-400"&gt;Dark&lt;/span&gt;
          &lt;/label&gt;

          &lt;Button variant="secondary" size="sm"&gt;Exportar&lt;/Button&gt;
          &lt;Button variant="primary"&gt;+ Novo relatório&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Grid de métricas */}
      &lt;div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"&gt;
        {metrics.map(m =&gt; (
          &lt;MetricCard key={m.title} {...m} /&gt;
        ))}
      &lt;/div&gt;

      {/* Ações de exemplo */}
      &lt;div className="flex flex-wrap gap-3"&gt;
        &lt;Button variant="primary"&gt;Salvar&lt;/Button&gt;
        &lt;Button variant="secondary"&gt;Cancelar&lt;/Button&gt;
        &lt;Button variant="ghost"&gt;Ver detalhes&lt;/Button&gt;
        &lt;Button variant="danger"&gt;Excluir&lt;/Button&gt;
        &lt;Button variant="primary" size="sm"&gt;Sm&lt;/Button&gt;
        &lt;Button variant="primary" size="lg"&gt;Lg&lt;/Button&gt;
        &lt;Button variant="primary" disabled&gt;Desabilitado&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}</code></pre>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- ═══ NAV FOOTER ═══ -->
  <div class="nav-footer">
    <a href="css-moderno.html" class="nav-link">← CSS Moderno</a>
  </div>

</main>

<script>
  hljs.highlightAll()

  function toggleMobileMenu() {
    document.getElementById('sidebar').classList.toggle('open')
    document.getElementById('sidebar-overlay').classList.toggle('open')
  }

  function closeMobileMenu() {
    document.getElementById('sidebar').classList.remove('open')
    document.getElementById('sidebar-overlay').classList.remove('open')
  }

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeMobileMenu()
    })
  })


  function copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre')
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '✓ Copiado'
      btn.classList.add('copied')
      setTimeout(() => {
        btn.textContent = 'Copiar'
        btn.classList.remove('copied')
      }, 2000)
    })
  }

  function toggleSolution(btn) {
    const block = btn.nextElementSibling
    const isOpen = block.classList.contains('open')
    block.classList.toggle('open')
    btn.textContent = isOpen ? '👁 Ver solução' : '🙈 Ocultar solução'
    if (!isOpen) hljs.highlightAll()
  }

  // Destaque do link ativo no sidebar
  const links = document.querySelectorAll('.sidebar-link')
  const sections = document.querySelectorAll('.section')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'))
        const id = entry.target.id
        const link = document.querySelector(`.sidebar-link[href="#${id}"]`)
        if (link) link.classList.add('active')
      }
    })
  }, { rootMargin: '-40% 0px -55% 0px' })

  sections.forEach(s => observer.observe(s))
</script>
</body>
</html>
```

### `docs\useContext.html` {#docsusecontexthtml}

> 46,254 bytes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>useContext &amp; createContext — React 19</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
  <link rel="stylesheet" href="useContext.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js"></script>
</head>
<body>

<!-- ════════════════ SIDEBAR ════════════════ -->
<nav class="sidebar">
  <div class="sidebar-brand">
    <a href="index.html" class="sidebar-back">← Início</a>
    <div class="sidebar-title">🔮 useContext</div>
    <div class="sidebar-subtitle">Módulo 01 · React 19 + TypeScript</div>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Fundamentos</div>
    <a href="#problema" class="sidebar-link">O problema que Context resolve</a>
    <a href="#anatomia" class="sidebar-link">Anatomia do Context</a>
    <a href="#passo-a-passo" class="sidebar-link">Passo a passo com TypeScript</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exemplos</div>
    <a href="#ex-basico" class="sidebar-link">Tema claro/escuro <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex-medio" class="sidebar-link">Usuário autenticado <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex-inter" class="sidebar-link">Context multi-camada <span class="difficulty diff-inter">inter</span></a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Quando usar</div>
    <a href="#quando" class="sidebar-link">Context vs Props vs Estado local</a>
    <a href="#react19" class="sidebar-link">Novidades do React 19</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exercícios</div>
    <a href="#ex1" class="sidebar-link">Ex.1 — Idioma global <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex2" class="sidebar-link">Ex.2 — Carrinho de compras <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex3" class="sidebar-link">Ex.3 — Notificações globais <span class="difficulty diff-inter">inter</span></a>
  </div>
</nav>

<!-- ════════════════ MAIN ════════════════ -->
<main class="main">

  <button class="mobile-menu-button" type="button" onclick="toggleSidebar()">
    <span>☰</span> Sumário
  </button>

  <div class="hero" id="topo">
    <div class="module-tag">🔮 Módulo 01</div>
    <h1>useContext &amp;<br /><span>createContext</span></h1>
    <p>
      Context existe para resolver um problema específico: dados que
      precisam ser acessados em múltiplos pontos da árvore sem serem
      passados manualmente de componente em componente. Entender esse
      problema antes da solução é o que separa o uso correto do uso ansioso.
    </p>
  </div>

  <!-- ═══ SEÇÃO 1: O PROBLEMA ═══ -->
  <section class="section" id="problema">
    <div class="section-header">
      <div class="section-number">01</div>
      <h2 class="section-title">O problema que Context resolve</h2>
    </div>

    <p class="prose">
      React flui dados de pai para filho. Esse modelo é simples, predizível e
      testável — e funciona bem para a maioria dos casos. O problema aparece
      quando um dado precisa atravessar vários níveis da árvore para chegar
      ao componente que realmente o usa.
    </p>

    <p class="prose">
      Esse padrão tem nome: <strong>prop drilling</strong>. O componente intermediário
      recebe uma prop exclusivamente para repassá-la, sem nunca utilizá-la.
      Isso aumenta acoplamento, torna o código frágil e qualquer refatoração
      vira uma cascata de mudanças.
    </p>

    <div class="diagram">
      <div class="diagram-tree">
&lt;App&gt;  <span class="diagram-highlight">← tem o dado: user</span>
  └─ &lt;Layout user={user}&gt;          <span class="diagram-pain">← não usa, só repassa</span>
       └─ &lt;Sidebar user={user}&gt;     <span class="diagram-pain">← não usa, só repassa</span>
            └─ &lt;UserAvatar user={user}&gt;  <span class="diagram-ok">← finalmente usa</span>
      </div>
    </div>

    <p class="prose">
      Context cria um canal direto entre o fornecedor do dado e qualquer
      componente descendente que precise consumi-lo, independente de
      quantos níveis os separam.
    </p>

    <div class="diagram">
      <div class="diagram-tree">
&lt;UserContext.Provider value={user}&gt;   <span class="diagram-highlight">← fornece</span>
  └─ &lt;Layout&gt;                          <span class="diagram-ok">← ignora totalmente</span>
       └─ &lt;Sidebar&gt;                    <span class="diagram-ok">← ignora totalmente</span>
            └─ &lt;UserAvatar&gt;            <span class="diagram-highlight">← consome via useContext</span>
      </div>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        Context não é um substituto para estado local nem para gerenciadores
        como Zustand ou Redux. Ele resolve o problema de <strong>distribuição de dados</strong>
        na árvore, não gerenciamento complexo de estado. A distinção importa.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 2: ANATOMIA ═══ -->
  <section class="section" id="anatomia">
    <div class="section-header">
      <div class="section-number">02</div>
      <h2 class="section-title">Anatomia do Context</h2>
    </div>

    <p class="prose">
      Context tem três peças. Elas sempre aparecem juntas e cada uma tem
      responsabilidade distinta.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">createContext — cria o canal</div>
          <div class="step-desc">
            Define o tipo do dado que vai trafegar pelo contexto e seu valor padrão.
            Retorna um objeto com <code>Provider</code> e o próprio contexto para consumo.
            O valor padrão só é usado quando um componente está fora de qualquer Provider.
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Provider — fornece o dado</div>
          <div class="step-desc">
            Componente que envolve a subárvore que precisa acessar o dado.
            Recebe a prop <code>value</code> com o dado atual. Qualquer descendente
            dentro desse Provider pode acessar esse valor.
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">useContext — consome o dado</div>
          <div class="step-desc">
            Hook que lê o valor do Provider mais próximo na árvore.
            Quando o valor do Provider muda, todos os componentes que
            chamam <code>useContext</code> re-renderizam automaticamente.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">diagrama-de-fluxo.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// 1. CRIA o canal (geralmente em arquivo separado)
const MeuContext = createContext(valorPadrao)

// 2. FORNECE o dado (no componente pai ou em um Provider dedicado)
function App() {
  return (
    &lt;MeuContext.Provider value={dadoAtual}&gt;
      &lt;ComponenteFilho /&gt;
    &lt;/MeuContext.Provider&gt;
  )
}

// 3. CONSOME o dado (em qualquer descendente, qualquer profundidade)
function ComponenteFilho() {
  const dado = useContext(MeuContext)
  return &lt;div&gt;{dado}&lt;/div&gt;
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 3: PASSO A PASSO COM TYPESCRIPT ═══ -->
  <section class="section" id="passo-a-passo">
    <div class="section-header">
      <div class="section-number">03</div>
      <h2 class="section-title">Passo a passo com TypeScript</h2>
    </div>

    <p class="prose">
      TypeScript exige que o tipo do contexto seja declarado explicitamente.
      O padrão mais robusto usa um hook customizado para encapsular o
      acesso ao contexto e garantir que ele seja sempre usado dentro
      de um Provider.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Declare a interface do seu dado</div>
          <div class="step-desc">Antes de criar o contexto, defina o formato do dado que ele vai carregar.</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">ThemeContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// PASSO 1: Declare o tipo do contexto
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Crie o contexto com createContext</div>
          <div class="step-desc">
            O truque do <code>null as unknown as T</code> evita um valor padrão falso
            e permite que o hook customizado detecte uso fora do Provider.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">ThemeContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// PASSO 2: Crie o contexto
// Passamos null como valor inicial — o hook vai proteger contra uso incorreto
const ThemeContext = createContext&lt;ThemeContextType | null&gt;(null)</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Crie o Provider como componente</div>
          <div class="step-desc">
            Um componente dedicado mantém a lógica do contexto isolada e
            facilita reutilização e testes.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">ThemeContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// PASSO 3: Provider como componente dedicado
interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState&lt;'light' | 'dark'&gt;('dark')

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // O objeto value só recria quando theme ou toggleTheme mudam
  const value: ThemeContextType = {
    theme,
    toggleTheme
  }

  return (
    &lt;ThemeContext.Provider value={value}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  )
}</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Crie um hook customizado para consumo</div>
          <div class="step-desc">
            Esse hook encapsula o <code>useContext</code> e lança erro se usado
            fora do Provider — o que torna problemas imediatamente visíveis.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">ThemeContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// PASSO 4: Hook customizado — a interface pública do contexto
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme deve ser usado dentro de &lt;ThemeProvider&gt;')
  }

  return context
}</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
          <div class="step-title">Use nos componentes</div>
          <div class="step-desc">
            Envolva o app no Provider e consuma com o hook em qualquer descendente.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">main.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// main.tsx — Provider envolve o app inteiro
import { ThemeProvider } from './ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  &lt;ThemeProvider&gt;
    &lt;App /&gt;
  &lt;/ThemeProvider&gt;
)</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">Header.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Qualquer componente descendente — sem props intermediárias
import { useTheme } from './ThemeContext'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    &lt;header data-theme={theme}&gt;
      &lt;button onClick={toggleTheme}&gt;
        {theme === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
      &lt;/button&gt;
    &lt;/header&gt;
  )
}</code></pre>
    </div>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        <strong>Padrão de arquivo:</strong> crie um arquivo dedicado por contexto
        (ex: <code>ThemeContext.tsx</code>) que exporta o Provider e o hook.
        Nunca exporte o objeto de contexto diretamente — isso força todo consumo
        a passar pelo hook que faz a verificação.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 4: EXEMPLO BÁSICO ═══ -->
  <section class="section" id="ex-basico">
    <div class="section-header">
      <div class="section-number">04</div>
      <h2 class="section-title">Exemplo 1 — Tema claro/escuro</h2>
    </div>

    <p class="prose">
      O arquivo completo de um contexto de tema, pronto para copiar para
      o seu projeto. Observe a estrutura: interface, contexto, Provider,
      hook — nessa ordem, sempre.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/contexts/ThemeContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { createContext, useContext, useState } from 'react'

// ─── Tipos ───────────────────────────────────────────────
type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// ─── Contexto ────────────────────────────────────────────
const ThemeContext = createContext&lt;ThemeContextType | null&gt;(null)

// ─── Provider ────────────────────────────────────────────
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState&lt;Theme&gt;('dark')

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  )
}

// ─── Hook público ────────────────────────────────────────
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme fora do ThemeProvider')
  return ctx
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/components/ThemeToggle.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useTheme } from '../contexts/ThemeContext'

// Não recebe nenhuma prop — tudo vem do contexto
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    &lt;button
      onClick={toggleTheme}
      style={{
        background: theme === 'dark' ? '#fff' : '#0d1117',
        color: theme === 'dark' ? '#0d1117' : '#fff',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    &gt;
      {theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    &lt;/button&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 5: EXEMPLO MÉDIO ═══ -->
  <section class="section" id="ex-medio">
    <div class="section-header">
      <div class="section-number">05</div>
      <h2 class="section-title">Exemplo 2 — Usuário autenticado</h2>
    </div>

    <p class="prose">
      Um contexto de autenticação é o caso de uso mais comum em
      aplicações reais. O dado do usuário logado precisa estar disponível
      em múltiplos pontos: header, sidebar, perfil, configurações.
      Context é a escolha natural aqui.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/contexts/AuthContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { createContext, useContext, useState, useCallback } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise&lt;void&gt;
  logout: () => void
}

// ─── Contexto ────────────────────────────────────────────
const AuthContext = createContext&lt;AuthContextType | null&gt;(null)

// ─── Provider ────────────────────────────────────────────
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState&lt;User | null&gt;(null)

  // useCallback evita que a função seja recriada a cada render
  // (importante para evitar re-renders desnecessários nos consumidores)
  const login = useCallback(async (email: string, password: string) => {
    // Em produção: chamada real à API
    // Aqui: simulação de autenticação
    const mockUser: User = {
      id: '1',
      name: 'Túlio Aguiar',
      email,
      role: 'admin',
    }
    setUser(mockUser)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  }

  return (
    &lt;AuthContext.Provider value={value}&gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  )
}

// ─── Hook público ────────────────────────────────────────
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth fora do AuthProvider')
  return ctx
}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/components/UserMenu.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useAuth } from '../contexts/AuthContext'

export function UserMenu() {
  const { user, isAuthenticated, login, logout } = useAuth()

  if (!isAuthenticated) {
    return (
      &lt;button onClick={() => login('tulio@dev.com', '123')}&gt;
        Entrar
      &lt;/button&gt;
    )
  }

  return (
    &lt;div&gt;
      &lt;span&gt;Olá, {user?.name}&lt;/span&gt;
      &lt;span&gt; · {user?.role}&lt;/span&gt;
      &lt;button onClick={logout}&gt;Sair&lt;/button&gt;
    &lt;/div&gt;
  )
}</code></pre>
    </div>

    <div class="callout info">
      <span class="callout-icon">🔍</span>
      <div>
        <strong>Por que useCallback aqui?</strong> Funções recriadas a cada render
        causam re-renders em cascata nos componentes que as recebem como
        dependência. <code>useCallback</code> memoiza a referência da função,
        evitando esse problema quando o contexto só tem <code>useState</code> interno.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 6: EXEMPLO INTERMEDIÁRIO ═══ -->
  <section class="section" id="ex-inter">
    <div class="section-header">
      <div class="section-number">06</div>
      <h2 class="section-title">Exemplo 3 — Context multi-camada</h2>
    </div>

    <p class="prose">
      Aplicações reais têm múltiplos contextos sobrepostos. Cada contexto
      tem responsabilidade específica — autenticação, tema, idioma, carrinho.
      O padrão de composição de Providers mantém o código organizado.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/providers/AppProviders.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Um componente dedicado que compõe todos os Providers
// main.tsx só precisa importar este arquivo
import { AuthProvider } from '../contexts/AuthContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'

interface AppProvidersProps {
  children: React.ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    &lt;AuthProvider&gt;
      &lt;ThemeProvider&gt;
        &lt;LanguageProvider&gt;
          {children}
        &lt;/LanguageProvider&gt;
      &lt;/ThemeProvider&gt;
    &lt;/AuthProvider&gt;
  )
}

// main.tsx fica limpo:
// &lt;AppProviders&gt;&lt;App /&gt;&lt;/AppProviders&gt;</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/contexts/LanguageContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { createContext, useContext, useState } from 'react'

type Language = 'pt-BR' | 'en-US' | 'es-ES'

// Dicionário de traduções (simplificado)
const translations = {
  'pt-BR': { hello: 'Olá', logout: 'Sair', welcome: 'Bem-vindo' },
  'en-US': { hello: 'Hello', logout: 'Sign out', welcome: 'Welcome' },
  'es-ES': { hello: 'Hola', logout: 'Salir', welcome: 'Bienvenido' },
} as const

type TranslationKeys = keyof typeof translations['pt-BR']

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext&lt;LanguageContextType | null&gt;(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState&lt;Language&gt;('pt-BR')

  // t() é a função de tradução — comum em libs como i18next
  const t = (key: TranslationKeys): string => {
    return translations[language][key]
  }

  return (
    &lt;LanguageContext.Provider value={{ language, setLanguage, t }}&gt;
      {children}
    &lt;/LanguageContext.Provider&gt;
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage fora do LanguageProvider')
  return ctx
}

// Uso em qualquer componente:
// const { t, setLanguage } = useLanguage()
// &lt;h1&gt;{t('welcome')}&lt;/h1&gt;</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 7: QUANDO USAR ═══ -->
  <section class="section" id="quando">
    <div class="section-header">
      <div class="section-number">07</div>
      <h2 class="section-title">Context vs Props vs Estado local</h2>
    </div>

    <p class="prose">
      A escolha errada do mecanismo certo gera código desnecessariamente
      complexo. Context tem custo real: re-renders em todos os consumidores
      quando o valor muda. Use a ferramenta certa para cada problema.
    </p>

    <table class="compare-table">
      <thead>
        <tr>
          <th>Situação</th>
          <th>Solução</th>
          <th>Razão</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Estado de 1-2 componentes</td>
          <td><span class="check">useState local</span></td>
          <td>Simples, sem overhead</td>
        </tr>
        <tr>
          <td>Dado entre pai e filho direto</td>
          <td><span class="check">Props</span></td>
          <td>Explícito e rastreável</td>
        </tr>
        <tr>
          <td>Dado atravessa 3+ níveis</td>
          <td><span class="check">Context</span></td>
          <td>Evita prop drilling</td>
        </tr>
        <tr>
          <td>Tema, idioma, usuário logado</td>
          <td><span class="check">Context</span></td>
          <td>Dados globais, raramente mudam</td>
        </tr>
        <tr>
          <td>Estado complexo com muitas ações</td>
          <td><span class="check">Context + Reducer</span></td>
          <td>Combina distribuição e lógica</td>
        </tr>
        <tr>
          <td>Estado com alta frequência de update</td>
          <td><span class="cross">Evitar Context</span></td>
          <td>Re-renders excessivos — use Zustand</td>
        </tr>
        <tr>
          <td>Cache de dados do servidor</td>
          <td><span class="cross">Evitar Context</span></td>
          <td>TanStack Query é a ferramenta certa</td>
        </tr>
      </tbody>
    </table>

    <div class="callout tip">
      <span class="callout-icon">💡</span>
      <div>
        <strong>Regra prática:</strong> se o dado muda frequentemente (a cada clique,
        a cada keystroke), Context vai causar re-renders excessivos. Se muda ocasionalmente
        (login/logout, troca de tema), é exatamente o caso de uso para Context.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 8: REACT 19 ═══ -->
  <section class="section" id="react19">
    <div class="section-header">
      <div class="section-number">08</div>
      <h2 class="section-title">Novidades do React 19</h2>
    </div>

    <p class="prose">
      React 19 trouxe uma simplificação relevante no uso de Context:
      o Provider agora pode ser escrito diretamente como
      <code>&lt;ThemeContext&gt;</code> sem precisar de <code>.Provider</code>.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">React 18 vs React 19</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// React 18 (ainda funciona no 19):
&lt;ThemeContext.Provider value={value}&gt;
  {children}
&lt;/ThemeContext.Provider&gt;

// React 19 — sintaxe mais limpa:
&lt;ThemeContext value={value}&gt;
  {children}
&lt;/ThemeContext&gt;</code></pre>
    </div>

    <p class="prose">
      React 19 também introduziu o hook <code>use()</code>, que pode ser chamado
      condicionalmente (diferente de todos os outros hooks). Ele funciona
      com Context e com Promises.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">uso-do-hook-use.tsx — React 19</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { use } from 'react'
import { ThemeContext } from './ThemeContext'

function MeuComponente({ mostrarTema }: { mostrarTema: boolean }) {
  // use() pode ser chamado condicionalmente — useContext não pode
  if (mostrarTema) {
    const { theme } = use(ThemeContext)
    return &lt;div data-theme={theme}&gt;Tema: {theme}&lt;/div&gt;
  }

  return &lt;div&gt;Sem tema&lt;/div&gt;
}</code></pre>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div>
        O hook <code>use()</code> com Context <strong>não substitui</strong> o padrão
        do hook customizado. A verificação de null e o erro descritivo precisam
        ser feitos manualmente quando se usa <code>use()</code> diretamente.
        Para a maioria dos casos, o hook customizado com <code>useContext</code>
        continua sendo o padrão mais seguro.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ EXERCÍCIOS ═══ -->
  <section class="section" id="exercicios">
    <div class="section-header">
      <div class="section-number">09</div>
      <h2 class="section-title">Exercícios</h2>
    </div>

    <p class="prose">
      Os três exercícios seguem progressão deliberada. O primeiro é
      completamente guiado — o código base está fornecido. O segundo exige
      raciocínio sobre estrutura. O terceiro exige decisões arquiteturais.
    </p>

    <!-- Exercício 1 -->
    <div class="exercise" id="ex1">
      <div class="exercise-header">
        <span class="exercise-badge badge-basic">Básico</span>
        <span class="exercise-title">Exercício 1 — Idioma global</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Crie um contexto de idioma simples que permita alternar entre
          Português e Inglês. O estado do idioma atual e a função
          de troca devem estar disponíveis para qualquer componente.
        </p>
        <ul class="exercise-tasks">
          <li>Crie o arquivo <code>LanguageContext.tsx</code> com interface, contexto, Provider e hook</li>
          <li>O Provider deve iniciar com <code>'pt-BR'</code></li>
          <li>Crie um componente <code>LanguageSwitcher</code> que usa <code>useLanguage()</code> para trocar o idioma</li>
          <li>Crie um componente <code>Greeting</code> que exibe "Olá!" em PT ou "Hello!" em EN</li>
          <li>Envolva tudo no Provider e confirme que os dois componentes respondem ao toggle</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// Seu código aqui — copie para o VSCode e trabalhe no projeto Vite</div>
          <textarea class="workspace-editor" placeholder="// Comece pela interface:
// type Language = 'pt-BR' | 'en-US'
// interface LanguageContextType { ... }
//
// Depois o createContext, o Provider, o hook..."></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — LanguageContext.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { createContext, useContext, useState } from 'react'

type Language = 'pt-BR' | 'en-US'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext&lt;LanguageContextType | null&gt;(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState&lt;Language&gt;('pt-BR')

  const toggleLanguage = () =>
    setLanguage(prev => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'))

  return (
    &lt;LanguageContext.Provider value={{ language, toggleLanguage }}&gt;
      {children}
    &lt;/LanguageContext.Provider&gt;
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage fora do LanguageProvider')
  return ctx
}

// ─── LanguageSwitcher.tsx ─────────────────────────
export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()
  return (
    &lt;button onClick={toggleLanguage}&gt;
      {language === 'pt-BR' ? '🇧🇷 PT' : '🇺🇸 EN'}
    &lt;/button&gt;
  )
}

// ─── Greeting.tsx ─────────────────────────────────
export function Greeting() {
  const { language } = useLanguage()
  return &lt;h1&gt;{language === 'pt-BR' ? 'Olá!' : 'Hello!'}&lt;/h1&gt;
}

// ─── main.tsx ─────────────────────────────────────
// &lt;LanguageProvider&gt;
//   &lt;LanguageSwitcher /&gt;
//   &lt;Greeting /&gt;
// &lt;/LanguageProvider&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 2 -->
    <div class="exercise" id="ex2">
      <div class="exercise-header">
        <span class="exercise-badge badge-medium">Médio</span>
        <span class="exercise-title">Exercício 2 — Carrinho de compras</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Um carrinho de compras precisa ser acessível em múltiplos pontos:
          o botão de adicionar nos cards de produto, o ícone de contagem
          no header, e a página de checkout. Este é o padrão clássico de Context.
        </p>
        <ul class="exercise-tasks">
          <li>Defina a interface <code>CartItem</code> com <code>id</code>, <code>name</code>, <code>price</code> e <code>quantity</code></li>
          <li>O contexto deve expor: <code>items</code>, <code>addItem(item)</code>, <code>removeItem(id)</code> e <code>totalItems</code> (contagem total)</li>
          <li>Crie <code>CartProvider</code> com a lógica de adicionar (se já existe, incrementa quantity)</li>
          <li>Crie <code>CartCount</code> — exibe o total de itens (para o header)</li>
          <li>Crie <code>AddToCartButton</code> — recebe um produto por props e chama <code>addItem</code> do contexto</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// CartContext.tsx — comece aqui</div>
          <textarea class="workspace-editor" placeholder="// Dica: a lógica de 'se já existe, incrementa' pode ser feita assim:
// setItems(prev => {
//   const exists = prev.find(i => i.id === newItem.id)
//   if (exists) {
//     return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i)
//   }
//   return [...prev, { ...newItem, quantity: 1 }]
// })"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — CartContext.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { createContext, useContext, useState, useMemo } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: Omit&lt;CartItem, 'quantity'&gt;) => void
  removeItem: (id: string) => void
}

// ─── Contexto ────────────────────────────────────────────
const CartContext = createContext&lt;CartContextType | null&gt;(null)

// ─── Provider ────────────────────────────────────────────
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState&lt;CartItem[]&gt;([])

  const addItem = (newItem: Omit&lt;CartItem, 'quantity'&gt;) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === newItem.id)
      if (exists) {
        return prev.map(i =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  // useMemo evita recalcular em cada render
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  return (
    &lt;CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem }}&gt;
      {children}
    &lt;/CartContext.Provider&gt;
  )
}

// ─── Hook público ────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart fora do CartProvider')
  return ctx
}

// ─── Componentes consumidores ────────────────────────────
export function CartCount() {
  const { totalItems } = useCart()
  return (
    &lt;span&gt;🛒 {totalItems} {totalItems === 1 ? 'item' : 'itens'}&lt;/span&gt;
  )
}

interface Product {
  id: string
  name: string
  price: number
}

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  return (
    &lt;button onClick={() => addItem(product)}&gt;
      Adicionar ao carrinho
    &lt;/button&gt;
  )
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 3 -->
    <div class="exercise" id="ex3">
      <div class="exercise-header">
        <span class="exercise-badge badge-inter">Intermediário</span>
        <span class="exercise-title">Exercício 3 — Sistema de notificações globais</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Notificações (toasts) precisam ser disparadas de qualquer componente
          e renderizadas em um ponto central da UI. Este exercício trabalha o
          padrão de Context onde o dado muda com frequência moderada e a
          estrutura de dados é uma lista com operações de add/remove.
        </p>
        <ul class="exercise-tasks">
          <li>Defina <code>Notification</code> com <code>id</code>, <code>message</code>, <code>type</code> (<code>'success' | 'error' | 'info'</code>) e <code>duration</code> (ms)</li>
          <li>O contexto deve expor <code>notify(message, type, duration?)</code> que gera um <code>id</code> único automaticamente</li>
          <li>Cada notificação deve ser removida automaticamente após <code>duration</code> ms usando <code>setTimeout</code></li>
          <li>Crie <code>NotificationContainer</code> que renderiza todas as notificações ativas (posição: canto superior direito)</li>
          <li><strong>Desafio extra:</strong> adicione uma função <code>dismiss(id)</code> para fechar manualmente</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// NotificationContext.tsx — estratégia sugerida</div>
          <textarea class="workspace-editor" placeholder="// Dica para o auto-dismiss:
// const notify = (message, type, duration = 3000) => {
//   const id = crypto.randomUUID()
//   setNotifications(prev => [...prev, { id, message, type, duration }])
//   setTimeout(() => {
//     setNotifications(prev => prev.filter(n => n.id !== id))
//   }, duration)
// }"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — NotificationContext.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { createContext, useContext, useState, useCallback } from 'react'

// ─── Tipos ───────────────────────────────────────────────
type NotificationType = 'success' | 'error' | 'info'

interface Notification {
  id: string
  message: string
  type: NotificationType
  duration: number
}

interface NotificationContextType {
  notifications: Notification[]
  notify: (message: string, type?: NotificationType, duration?: number) => void
  dismiss: (id: string) => void
}

// ─── Contexto ────────────────────────────────────────────
const NotificationContext = createContext&lt;NotificationContextType | null&gt;(null)

// ─── Provider ────────────────────────────────────────────
export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState&lt;Notification[]&gt;([])

  const dismiss = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])

  const notify = useCallback(
    (message: string, type: NotificationType = 'info', duration = 3000) => {
      const id = crypto.randomUUID()
      const newNotification: Notification = { id, message, type, duration }

      setNotifications(prev => [...prev, newNotification])

      // Auto-dismiss após 'duration' ms
      setTimeout(() => dismiss(id), duration)
    },
    [dismiss]
  )

  return (
    &lt;NotificationContext.Provider value={{ notifications, notify, dismiss }}&gt;
      {children}
      {/* Container renderizado dentro do Provider — acessa o contexto */}
      &lt;NotificationContainer /&gt;
    &lt;/NotificationContext.Provider&gt;
  )
}

// ─── Hook público ────────────────────────────────────────
export function useNotification() {
  const ctx = useContext(NotificationContext)
  if (!ctx) throw new Error('useNotification fora do NotificationProvider')
  return ctx
}

// ─── Container de renderização ───────────────────────────
const colorMap: Record&lt;NotificationType, string&gt; = {
  success: '#34d399',
  error: '#f87171',
  info: '#61dafb',
}

function NotificationContainer() {
  const { notifications, dismiss } = useNotification()

  return (
    &lt;div style={{
      position: 'fixed',
      top: '16px',
      right: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      zIndex: 9999,
    }}&gt;
      {notifications.map(n => (
        &lt;div
          key={n.id}
          style={{
            background: '#1c2333',
            border: `1px solid ${colorMap[n.type]}`,
            borderLeft: `4px solid ${colorMap[n.type]}`,
            borderRadius: '8px',
            padding: '12px 16px',
            color: '#e6edf3',
            fontSize: '14px',
            minWidth: '280px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        &gt;
          &lt;span&gt;{n.message}&lt;/span&gt;
          &lt;button
            onClick={() => dismiss(n.id)}
            style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer' }}
          &gt;
            ✕
          &lt;/button&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  )
}

// ─── Uso em qualquer componente ──────────────────────────
// const { notify } = useNotification()
// notify('Salvo com sucesso!', 'success')
// notify('Erro ao carregar dados', 'error', 5000)</code></pre>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- ═══ NAV FOOTER ═══ -->
  <div class="nav-footer">
    <a href="index.html" class="nav-link">← Início</a>
    <a href="useReducer.html" class="nav-link next">Módulo 02: useReducer →</a>
  </div>

</main>

<script src="useContext.js"></script>
</body>
</html>
```

### `docs\useReducer.html` {#docsusereducerhtml}

> 78,197 bytes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>useReducer — React 19</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
  <link rel="stylesheet" href="useReducer.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d1117;
      --bg2: #161b22;
      --bg3: #1c2333;
      --border: #30363d;
      --text: #e6edf3;
      --text2: #8b949e;
      --text3: #c9d1d9;
      --accent: #34d399;
      --accent-dim: rgba(52,211,153,0.1);
      --accent-border: rgba(52,211,153,0.3);
      --react: #61dafb;
      --purple: #a78bfa;
      --yellow: #fbbf24;
      --red: #f87171;
      --sidebar-w: 280px;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      min-height: 100vh;
    }

    /* ── SIDEBAR ── */
    .sidebar {
      width: var(--sidebar-w);
      background: var(--bg2);
      border-right: 1px solid var(--border);
      position: fixed;
      top: 0; left: 0;
      height: 100vh;
      overflow-y: auto;
      padding: 24px 0;
      display: flex;
      flex-direction: column;
      z-index: 100;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }

    .sidebar-brand {
      padding: 0 20px 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
    }

    .sidebar-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--text2);
      text-decoration: none;
      margin-bottom: 12px;
      transition: color 0.2s;
    }
    .sidebar-back:hover { color: var(--text); }

    .sidebar-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--accent);
    }

    .sidebar-subtitle {
      font-size: 11px;
      color: var(--text2);
      margin-top: 3px;
    }

    .sidebar-section {
      padding: 0 12px;
      margin-bottom: 8px;
    }

    .sidebar-section-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text2);
      padding: 8px 8px 6px;
    }

    .sidebar-link {
      display: block;
      padding: 7px 10px;
      border-radius: 8px;
      font-size: 13px;
      color: var(--text2);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
      line-height: 1.4;
    }

    .sidebar-link:hover { background: var(--bg3); color: var(--text); }
    .sidebar-link.active { background: var(--accent-dim); color: var(--accent); font-weight: 500; }

    .sidebar-link .difficulty {
      float: right;
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 10px;
      font-weight: 600;
    }

    .diff-basic { background: rgba(52,211,153,0.15); color: var(--accent); }
    .diff-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .diff-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    /* ── MAIN ── */
    .main {
      margin-left: var(--sidebar-w);
      flex: 1;
      max-width: 860px;
      padding: 60px 48px;
    }

    /* Botão mobile */
    .mobile-menu-button {
      display: none;
      position: sticky;
      top: 0;
      z-index: 90;
      margin: -16px 0 24px;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(12, 18, 30, 0.95);
      color: var(--text2);
      font-size: 13px;
      font-weight: 500;
      display: none;
      align-items: center;
      gap: 8px;
      backdrop-filter: blur(12px);
    }

    .mobile-menu-button span {
      font-size: 16px;
    }

    @media (max-width: 900px) {
      body {
        flex-direction: column;
      }

      .sidebar {
        transform: translateX(-100%);
        opacity: 0;
        box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
      }

      .sidebar.sidebar-open {
        transform: translateX(0);
        opacity: 1;
      }

      .main {
        margin-left: 0;
        padding: 30px 20px;
      }

      .mobile-menu-button {
        display: inline-flex;
      }
    }

    /* ── HERO ── */
    .hero {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--border);
    }

    .module-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 12px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      border-radius: 20px;
      color: var(--accent);
      margin-bottom: 20px;
    }

    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .hero h1 span { color: var(--accent); }

    .hero p {
      font-size: 1.05rem;
      color: var(--text2);
      line-height: 1.75;
      max-width: 600px;
    }

    /* ── SECTION ── */
    .section {
      margin-bottom: 72px;
      scroll-margin-top: 24px;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
    }

    .section-number {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
    }

    .section-title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    /* ── PROSE ── */
    .prose {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--text3);
    }

    .prose + .prose { margin-top: 16px; }

    .prose strong { color: var(--text); font-weight: 600; }
    .prose code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82em;
      padding: 2px 6px;
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--accent);
    }

    /* ── CALLOUT ── */
    .callout {
      padding: 16px 20px;
      border-radius: 10px;
      margin: 20px 0;
      font-size: 0.9rem;
      line-height: 1.7;
      display: flex;
      gap: 12px;
    }

    .callout-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

    .callout.info {
      background: rgba(97,218,251,0.07);
      border-left: 3px solid var(--react);
      color: #93e8fb;
    }

    .callout.warn {
      background: rgba(251,191,36,0.07);
      border-left: 3px solid var(--yellow);
      color: #fcd34d;
    }

    .callout.tip {
      background: rgba(52,211,153,0.07);
      border-left: 3px solid var(--accent);
      color: #6ee7b7;
    }

    .callout.danger {
      background: rgba(248,113,113,0.07);
      border-left: 3px solid var(--red);
      color: #fca5a5;
    }

    .callout.purple {
      background: rgba(167,139,250,0.07);
      border-left: 3px solid var(--purple);
      color: #c4b5fd;
    }

    /* ── CODE BLOCK ── */
    .code-block {
      margin: 24px 0;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
    }

    .code-filename {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text2);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .code-filename::before {
      content: '';
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.6;
    }

    .copy-btn {
      font-size: 11px;
      font-weight: 500;
      padding: 4px 10px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text2);
      cursor: pointer;
      transition: all 0.15s;
    }
    .copy-btn:hover { background: var(--bg); color: var(--text); }
    .copy-btn.copied { border-color: var(--accent); color: var(--accent); }

    .code-block pre {
      margin: 0 !important;
      padding: 20px !important;
      background: #0d1117 !important;
      font-size: 0.83rem !important;
      line-height: 1.7 !important;
      overflow-x: auto;
    }

    .code-block code { font-family: 'JetBrains Mono', monospace !important; }

    /* ── ANATOMY BOX ── */
    .anatomy {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin: 24px 0;
    }

    .anatomy-header {
      padding: 12px 20px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
      font-size: 12px;
      font-weight: 600;
      color: var(--text2);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .anatomy-row {
      display: grid;
      grid-template-columns: 160px 1fr;
      border-bottom: 1px solid var(--border);
    }

    .anatomy-row:last-child { border-bottom: none; }

    .anatomy-term {
      padding: 14px 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--accent);
      background: rgba(52,211,153,0.04);
      border-right: 1px solid var(--border);
      font-weight: 500;
      display: flex;
      align-items: center;
    }

    .anatomy-def {
      padding: 14px 20px;
      font-size: 0.88rem;
      color: var(--text3);
      line-height: 1.6;
    }

    /* ── FLOW DIAGRAM ── */
    .flow {
      display: flex;
      align-items: center;
      gap: 0;
      margin: 24px 0;
      overflow-x: auto;
      padding: 4px;
    }

    .flow-node {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 18px;
      text-align: center;
      min-width: 110px;
      flex-shrink: 0;
    }

    .flow-node-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .flow-node-desc {
      font-size: 11px;
      color: var(--text2);
    }

    .flow-node.accent { border-color: var(--accent-border); }
    .flow-node.accent .flow-node-label { color: var(--accent); }

    .flow-node.react { border-color: rgba(97,218,251,0.3); }
    .flow-node.react .flow-node-label { color: var(--react); }

    .flow-node.purple { border-color: rgba(167,139,250,0.3); }
    .flow-node.purple .flow-node-label { color: var(--purple); }

    .flow-node.yellow { border-color: rgba(251,191,36,0.3); }
    .flow-node.yellow .flow-node-label { color: var(--yellow); }

    .flow-arrow {
      color: var(--text2);
      font-size: 18px;
      padding: 0 4px;
      flex-shrink: 0;
    }

    /* ── COMPARISON ── */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 24px 0;
    }

    .compare-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
    }

    .compare-card-header {
      padding: 12px 16px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .compare-card-body {
      padding: 14px 16px;
      font-size: 0.85rem;
      color: var(--text3);
      line-height: 1.6;
    }

    .compare-card-body ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .compare-card-body ul li::before {
      margin-right: 8px;
    }

    .use-item::before { content: '✓'; color: var(--accent); }
    .avoid-item::before { content: '→'; color: var(--yellow); }

    /* ── STEP LIST ── */
    .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 24px 0;
    }

    .step {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--accent-dim);
      border: 1px solid var(--accent-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .step-content { flex: 1; }
    .step-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 4px;
    }
    .step-desc {
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.65;
    }

    /* ── EXERCISE ── */
    .exercise {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      margin: 28px 0;
    }

    .exercise-header {
      padding: 16px 20px;
      background: var(--bg3);
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .exercise-badge {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .badge-basic { background: rgba(52,211,153,0.15); color: var(--accent); }
    .badge-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
    .badge-inter { background: rgba(248,113,113,0.15); color: var(--red); }

    .exercise-title {
      font-size: 0.95rem;
      font-weight: 600;
      flex: 1;
    }

    .exercise-body { padding: 20px; }

    .exercise-desc {
      font-size: 0.9rem;
      color: var(--text2);
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .exercise-tasks {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
    }

    .exercise-tasks li {
      font-size: 0.88rem;
      color: var(--text3);
      display: flex;
      gap: 8px;
      line-height: 1.5;
    }

    .exercise-tasks li::before {
      content: '→';
      color: var(--accent);
      flex-shrink: 0;
    }

    .exercise-workspace {
      background: var(--bg);
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 4px;
    }

    .workspace-label {
      font-size: 11px;
      color: var(--text2);
      padding: 8px 12px 4px;
      font-family: 'JetBrains Mono', monospace;
    }

    .workspace-editor {
      width: 100%;
      min-height: 180px;
      background: transparent;
      border: none;
      padding: 8px 12px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text);
      resize: vertical;
      outline: none;
      line-height: 1.7;
    }

    .solution-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text2);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      margin-top: 12px;
    }

    .solution-toggle:hover { background: var(--bg3); color: var(--text); }

    .solution-block { display: none; margin-top: 16px; }
    .solution-block.open { display: block; }

    /* ── COMPARE TABLE ── */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 0.88rem;
    }

    .compare-table th {
      text-align: left;
      padding: 10px 16px;
      background: var(--bg3);
      color: var(--text2);
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--border);
    }

    .compare-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
      color: var(--text3);
      vertical-align: top;
      line-height: 1.5;
    }

    .compare-table tr:last-child td { border-bottom: none; }
    .compare-table tr:hover td { background: var(--bg2); }

    .compare-table td:first-child {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      font-size: 0.82rem;
    }

    .check { color: var(--accent); }
    .cross { color: var(--red); }
    .neutral { color: var(--yellow); }

    /* ── DIVIDER ── */
    .divider {
      border: none;
      border-top: 1px solid var(--border);
      margin: 48px 0;
    }

    /* ── NAV FOOTER ── */
    .nav-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      margin-top: 48px;
      border-top: 1px solid var(--border);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: var(--text2);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-link:hover { color: var(--accent); }
    .nav-link.prev { color: var(--purple); }
  .nav-link.prev:hover { color: var(--purple); opacity: 0.7; }
  </style>
</head>
<body>

<!-- ════════════════ SIDEBAR ════════════════ -->
<nav class="sidebar">
  <div class="sidebar-brand">
    <a href="index.html" class="sidebar-back">← Início</a>
    <div class="sidebar-title">⚡ useReducer</div>
    <div class="sidebar-subtitle">Módulo 02 · React 19 + TypeScript</div>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Fundamentos</div>
    <a href="#conceito" class="sidebar-link">O que é um reducer</a>
    <a href="#anatomia" class="sidebar-link">Anatomia completa</a>
    <a href="#vs-state" class="sidebar-link">Reducer vs useState</a>
    <a href="#passo-a-passo" class="sidebar-link">Passo a passo com TypeScript</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exemplos</div>
    <a href="#ex-basico" class="sidebar-link">Contador avançado <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex-medio" class="sidebar-link">Lista de tarefas <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex-inter" class="sidebar-link">Formulário com validação <span class="difficulty diff-inter">inter</span></a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Avançado</div>
    <a href="#context-reducer" class="sidebar-link">Context + Reducer</a>
    <a href="#boas-praticas" class="sidebar-link">Boas práticas</a>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">Exercícios</div>
    <a href="#ex1" class="sidebar-link">Ex.1 — Semáforo <span class="difficulty diff-basic">básico</span></a>
    <a href="#ex2" class="sidebar-link">Ex.2 — Carrinho Redux-like <span class="difficulty diff-medium">médio</span></a>
    <a href="#ex3" class="sidebar-link">Ex.3 — Wizard de cadastro <span class="difficulty diff-inter">inter</span></a>
  </div>
</nav>

<!-- ════════════════ MAIN ════════════════ -->
<main class="main">

  <button class="mobile-menu-button" type="button" onclick="toggleSidebar()">
    <span>☰</span> Sumário
  </button>

  <div class="hero" id="topo">
    <div class="module-tag">⚡ Módulo 02</div>
    <h1>use<span>Reducer</span></h1>
    <p>
      useReducer resolve um problema diferente do useState: quando a lógica
      de atualização de estado é complexa o suficiente para merecer ser
      isolada, testada e nomeada. O padrão que Redux popularizou, agora
      nativo e sem dependências.
    </p>
  </div>

  <!-- ═══ SEÇÃO 1: O QUE É UM REDUCER ═══ -->
  <section class="section" id="conceito">
    <div class="section-header">
      <div class="section-number">01</div>
      <h2 class="section-title">O que é um reducer</h2>
    </div>

    <p class="prose">
      Um reducer é uma <strong>função pura</strong> que recebe o estado atual e uma ação,
      e retorna o próximo estado. É o mesmo conceito que <code>Array.reduce()</code>:
      dado um acumulador e um valor, retorna um novo acumulador.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">conceito-basico.ts</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// A assinatura de qualquer reducer:
// (estado atual, ação) => próximo estado
function reducer(state: State, action: Action): State {
  // lógica aqui
  return nextState
}

// Comparação com Array.reduce:
// (acumulador, valorAtual) => novoAcumulador
[1, 2, 3].reduce((acc, val) => acc + val, 0) // → 6</code></pre>
    </div>

    <p class="prose">
      O padrão foi popularizado pelo Redux mas é agnóstico de biblioteca.
      React o incorporou nativamente via <code>useReducer</code>, sem dependências externas.
      A vantagem central: a lógica de atualização de estado fica isolada,
      nomeada, testável e previsível.
    </p>

    <div class="callout info">
      <span class="callout-icon">📌</span>
      <div>
        <strong>Função pura</strong> significa: dado o mesmo estado e a mesma ação,
        o reducer <strong>sempre</strong> retorna o mesmo resultado. Sem efeitos colaterais,
        sem chamadas de API, sem mutação direta do estado.
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 2: ANATOMIA COMPLETA ═══ -->
  <section class="section" id="anatomia">
    <div class="section-header">
      <div class="section-number">02</div>
      <h2 class="section-title">Anatomia completa</h2>
    </div>

    <p class="prose">
      <code>useReducer</code> tem quatro peças fundamentais. Entender cada uma
      é entender por que o padrão funciona.
    </p>

    <div class="anatomy">
      <div class="anatomy-header">Partes do useReducer</div>
      <div class="anatomy-row">
        <div class="anatomy-term">state</div>
        <div class="anatomy-def">O estado atual do componente. Pode ser qualquer tipo: número, string, objeto, array. É imutável — nunca modifique diretamente.</div>
      </div>
      <div class="anatomy-row">
        <div class="anatomy-term">dispatch</div>
        <div class="anatomy-def">Função para enviar ações ao reducer. Chamar <code>dispatch(action)</code> agenda uma re-renderização com o novo estado retornado pelo reducer.</div>
      </div>
      <div class="anatomy-row">
        <div class="anatomy-term">reducer</div>
        <div class="anatomy-def">Função pura <code>(state, action) =&gt; newState</code>. Contém toda a lógica de transição de estado. Vive fora do componente.</div>
      </div>
      <div class="anatomy-row">
        <div class="anatomy-term">action</div>
        <div class="anatomy-def">Objeto que descreve o que aconteceu. Convencionalmente tem <code>type</code> (string) e, opcionalmente, <code>payload</code> com os dados adicionais.</div>
      </div>
      <div class="anatomy-row">
        <div class="anatomy-term">initialState</div>
        <div class="anatomy-def">O estado inicial passado como segundo argumento para <code>useReducer</code>. Usado apenas na primeira renderização.</div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">anatomia.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useReducer } from 'react'

// ── Tipos ───────────────────────────────────────────────
interface State {
  count: number
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }

// ── Reducer (fora do componente) ─────────────────────────
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state  // Sempre retorne o state atual para ações desconhecidas
  }
}

// ── Estado inicial ───────────────────────────────────────
const initialState: State = { count: 0 }

// ── Componente ───────────────────────────────────────────
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //     └─ state atual    └─ função para enviar ações

  return (
    &lt;div&gt;
      &lt;p&gt;Contador: {state.count}&lt;/p&gt;
      &lt;button onClick={() => dispatch({ type: 'INCREMENT' })}&gt;+&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'DECREMENT' })}&gt;-&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'RESET' })}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  )
}</code></pre>
    </div>

    <div class="flow">
      <div class="flow-node react">
        <div class="flow-node-label">Componente</div>
        <div class="flow-node-desc">chama dispatch</div>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-node yellow">
        <div class="flow-node-label">Action</div>
        <div class="flow-node-desc">{ type, payload }</div>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-node purple">
        <div class="flow-node-label">Reducer</div>
        <div class="flow-node-desc">função pura</div>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-node accent">
        <div class="flow-node-label">New State</div>
        <div class="flow-node-desc">re-render</div>
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 3: REDUCER VS USESTATE ═══ -->
  <section class="section" id="vs-state">
    <div class="section-header">
      <div class="section-number">03</div>
      <h2 class="section-title">Reducer vs useState</h2>
    </div>

    <p class="prose">
      <code>useReducer</code> não substitui <code>useState</code> — eles resolvem
      problemas diferentes. A escolha errada complica o código sem necessidade.
    </p>

    <table class="compare-table">
      <thead>
        <tr>
          <th>Critério</th>
          <th>useState</th>
          <th>useReducer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Complexidade do estado</td>
          <td><span class="check">Simples</span> — primitivos, objetos pequenos</td>
          <td><span class="check">Complexo</span> — múltiplos campos inter-relacionados</td>
        </tr>
        <tr>
          <td>Número de ações</td>
          <td><span class="check">1-3</span> tipos de update</td>
          <td><span class="check">4+</span> tipos distintos de ação</td>
        </tr>
        <tr>
          <td>Lógica de transição</td>
          <td>Inline no componente</td>
          <td>Isolada, nomeada e testável</td>
        </tr>
        <tr>
          <td>Testabilidade</td>
          <td>Requer renderização</td>
          <td><span class="check">Função pura</span> — teste unitário direto</td>
        </tr>
        <tr>
          <td>Próximo estado depende do anterior</td>
          <td>Usa callback: <code>setX(prev => ...)</code></td>
          <td><span class="check">Sempre</span> tem acesso ao state atual</td>
        </tr>
        <tr>
          <td>Debugging</td>
          <td>Difícil rastrear mudanças</td>
          <td><span class="check">Ações nomeadas</span> facilitam rastreamento</td>
        </tr>
      </tbody>
    </table>

    <div class="compare-grid">
      <div class="compare-card">
        <div class="compare-card-header">✅ Use useReducer quando...</div>
        <div class="compare-card-body">
          <ul>
            <li class="use-item">Estado tem 3+ campos relacionados</li>
            <li class="use-item">Múltiplas ações afetam o mesmo estado</li>
            <li class="use-item">Próximo estado depende de vários campos</li>
            <li class="use-item">Lógica complexa que merece ser testada isolada</li>
            <li class="use-item">Quer histórico de ações (debug)</li>
          </ul>
        </div>
      </div>
      <div class="compare-card">
        <div class="compare-card-header">→ Prefira useState quando...</div>
        <div class="compare-card-body">
          <ul>
            <li class="avoid-item">Estado é um único valor primitivo</li>
            <li class="avoid-item">Apenas 1-2 formas de atualizar</li>
            <li class="avoid-item">Componentes pequenos e isolados</li>
            <li class="avoid-item">Não há lógica condicional nas atualizações</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 4: PASSO A PASSO ═══ -->
  <section class="section" id="passo-a-passo">
    <div class="section-header">
      <div class="section-number">04</div>
      <h2 class="section-title">Passo a passo com TypeScript</h2>
    </div>

    <p class="prose">
      O segredo de um reducer tipado corretamente é usar
      <strong>discriminated unions</strong> para o tipo das ações. TypeScript
      vai inferir automaticamente o tipo do <code>payload</code> dentro de cada
      case do switch.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Defina a interface do estado</div>
          <div class="step-desc">Modele todos os campos que o componente precisa gerenciar.</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">TodoReducer.tsx — Passo 1</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Estado de uma lista de tarefas
interface TodoItem {
  id: string
  text: string
  completed: boolean
}

interface TodoState {
  items: TodoItem[]
  filter: 'all' | 'active' | 'completed'
  loading: boolean
}</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Defina os tipos de ação como discriminated union</div>
          <div class="step-desc">
            Cada tipo de ação é um objeto distinto. TypeScript vai narrowing automático
            dentro do switch — <code>action.payload</code> será tipado corretamente
            em cada case.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">TodoReducer.tsx — Passo 2</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Discriminated union — cada ação tem seu tipo e payload específico
type TodoAction =
  | { type: 'ADD_TODO'; payload: string }           // payload: texto da tarefa
  | { type: 'TOGGLE_TODO'; payload: string }        // payload: id da tarefa
  | { type: 'REMOVE_TODO'; payload: string }        // payload: id da tarefa
  | { type: 'SET_FILTER'; payload: TodoState['filter'] }  // payload: novo filtro
  | { type: 'CLEAR_COMPLETED' }                     // sem payload</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Escreva o reducer com switch/case</div>
          <div class="step-desc">
            Fora do componente. Cada case retorna um novo objeto de estado —
            nunca mute o state atual.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">TodoReducer.tsx — Passo 3</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      const cleaned = action.payload.trim()
      if (!cleaned) return state
      return { ...state, items: [...state.items, { id: crypto.randomUUID(), text: cleaned, completed: false }] }

    case 'TOGGLE_TODO':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload    // TypeScript sabe que payload é string
            ? { ...item, completed: !item.completed }
            : item
        ),
      }

    case 'REMOVE_TODO':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }

    case 'SET_FILTER':
      return { ...state, filter: action.payload }

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        items: state.items.filter(item => !item.completed),
      }

    default:
      return state
  }
}</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Use no componente</div>
          <div class="step-desc">
            <code>useReducer</code> retorna o estado atual e a função dispatch.
            O dispatch é estável — não muda entre renders, pode ser passado sem useMemo.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">TodoReducer.tsx — Passo 4</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useReducer, useRef } from 'react'

const initialState: TodoState = {
  items: [],
  filter: 'all',
  loading: false,
}

export function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const inputRef = useRef&lt;HTMLInputElement&gt;(null)

  const handleAdd = (text: string) => {
    if (!text.trim()) return
    dispatch({ type: 'ADD_TODO', payload: text })
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  const visibleItems = state.items.filter(item => {
    if (state.filter === 'active') return !item.completed
    if (state.filter === 'completed') return item.completed
    return true
  })

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} placeholder="Nova tarefa..." /&gt;
      &lt;button onClick={() => handleAdd(inputRef.current?.value ?? '')}&gt;Adicionar&lt;/button&gt;
      {/* ... restante da UI usando state e dispatch ... */}
    &lt;/div&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 5: EXEMPLO BÁSICO ═══ -->
  <section class="section" id="ex-basico">
    <div class="section-header">
      <div class="section-number">05</div>
      <h2 class="section-title">Exemplo 1 — Contador avançado</h2>
    </div>

    <p class="prose">
      Um contador que vai além do básico: suporta incremento por valor
      customizado, reset para valor específico e bounds (mínimo/máximo).
      Mostra como o reducer lida elegantemente com lógica condicional.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/components/AdvancedCounter.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useReducer } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface CounterState {
  value: number
  min: number
  max: number
  step: number
}

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_VALUE'; payload: number }

// ─── Reducer ─────────────────────────────────────────────
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        // Respeita o limite máximo
        value: Math.min(state.value + state.step, state.max),
      }
    case 'DECREMENT':
      return {
        ...state,
        // Respeita o limite mínimo
        value: Math.max(state.value - state.step, state.min),
      }
    case 'RESET':
      return { ...state, value: 0 }
    case 'SET_STEP':
      return { ...state, step: Math.max(1, action.payload) }
    case 'SET_VALUE':
      return {
        ...state,
        value: Math.min(Math.max(action.payload, state.min), state.max),
      }
    default:
      return state
  }
}

const initialState: CounterState = {
  value: 0,
  min: -10,
  max: 10,
  step: 1,
}

// ─── Componente ───────────────────────────────────────────
export function AdvancedCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const isAtMin = state.value === state.min
  const isAtMax = state.value === state.max

  return (
    &lt;div&gt;
      &lt;p&gt;Valor: {state.value} (step: {state.step})&lt;/p&gt;

      &lt;button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        disabled={isAtMin}
      &gt;
        - {state.step}
      &lt;/button&gt;

      &lt;button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        disabled={isAtMax}
      &gt;
        + {state.step}
      &lt;/button&gt;

      &lt;button onClick={() => dispatch({ type: 'RESET' })}&gt;
        Reset
      &lt;/button&gt;

      &lt;input
        type="number"
        value={state.step}
        min={1}
        onChange={e => dispatch({
          type: 'SET_STEP',
          payload: Number(e.target.value),
        })}
      /&gt;
    &lt;/div&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 6: EXEMPLO MÉDIO ═══ -->
  <section class="section" id="ex-medio">
    <div class="section-header">
      <div class="section-number">06</div>
      <h2 class="section-title">Exemplo 2 — Lista de tarefas</h2>
    </div>

    <p class="prose">
      O exemplo clássico de useReducer em aplicações reais. Um estado com
      múltiplos campos, múltiplas ações e lógica que seria difícil de
      manter com vários <code>useState</code> separados.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/components/TodoList.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useReducer, useRef } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

interface TodoState {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
}

type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'EDIT'; payload: { id: string; text: string } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'SET_FILTER'; payload: TodoState['filter'] }

// ─── Reducer ─────────────────────────────────────────────
function todosReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD':
      if (!action.payload.trim()) return state  // Ignora texto vazio
      return {
        ...state,
        todos: [
          {
            id: crypto.randomUUID(),
            text: action.payload.trim(),
            completed: false,
            createdAt: new Date(),
          },
          ...state.todos,
        ],
      }

    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }

    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }

    case 'EDIT':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      }

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      }

    case 'SET_FILTER':
      return { ...state, filter: action.payload }

    default:
      return state
  }
}

// ─── Componente ───────────────────────────────────────────
export function TodoList() {
  const [state, dispatch] = useReducer(todosReducer, { todos: [], filter: 'all' })
  const inputRef = useRef&lt;HTMLInputElement&gt;(null)

  const handleAdd = () => {
    if (inputRef.current) {
      dispatch({ type: 'ADD', payload: inputRef.current.value })
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  const visibleTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed
    if (state.filter === 'completed') return todo.completed
    return true
  })

  const completedCount = state.todos.filter(t => t.completed).length

  return (
    &lt;div&gt;
      {/* Input de nova tarefa */}
      &lt;div&gt;
        &lt;input ref={inputRef} placeholder="Nova tarefa..." /&gt;
        &lt;button onClick={handleAdd}&gt;Adicionar&lt;/button&gt;
      &lt;/div&gt;

      {/* Filtros */}
      &lt;div&gt;
        {(['all', 'active', 'completed'] as const).map(f => (
          &lt;button
            key={f}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: f })}
            style={{ fontWeight: state.filter === f ? 'bold' : 'normal' }}
          &gt;
            {f}
          &lt;/button&gt;
        ))}
      &lt;/div&gt;

      {/* Lista */}
      &lt;ul&gt;
        {visibleTodos.map(todo => (
          &lt;li key={todo.id}&gt;
            &lt;input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
            /&gt;
            &lt;span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}&gt;
              {todo.text}
            &lt;/span&gt;
            &lt;button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}&gt;
              ✕
            &lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;

      {/* Rodapé */}
      {completedCount &gt; 0 &amp;&amp; (
        &lt;button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}&gt;
          Limpar {completedCount} concluída(s)
        &lt;/button&gt;
      )}
    &lt;/div&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 7: EXEMPLO INTERMEDIÁRIO ═══ -->
  <section class="section" id="ex-inter">
    <div class="section-header">
      <div class="section-number">07</div>
      <h2 class="section-title">Exemplo 3 — Formulário com validação</h2>
    </div>

    <p class="prose">
      Formulários com validação são o caso de uso ideal para useReducer:
      campos inter-relacionados, erros por campo, estados de loading e
      submit. Tentar gerenciar isso com múltiplos <code>useState</code> resulta
      em código frágil e difícil de manter.
    </p>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/components/RegisterForm.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { useReducer } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface FormFields {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type FormErrors = Partial&lt;Record&lt;keyof FormFields, string&gt;&gt;

interface FormState {
  fields: FormFields
  errors: FormErrors
  touched: Partial&lt;Record&lt;keyof FormFields, boolean&gt;&gt;
  submitting: boolean
  submitted: boolean
}

type FormAction =
  | { type: 'CHANGE'; payload: { field: keyof FormFields; value: string } }
  | { type: 'BLUR'; payload: keyof FormFields }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; payload: string }

// ─── Validação (pura, fora do reducer) ───────────────────
function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!fields.name.trim()) {
    errors.name = 'Nome é obrigatório'
  }

  if (!fields.email.includes('@')) {
    errors.email = 'E-mail inválido'
  }

  if (fields.password.length &lt; 8) {
    errors.password = 'Senha deve ter ao menos 8 caracteres'
  }

  if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = 'As senhas não coincidem'
  }

  return errors
}

// ─── Reducer ─────────────────────────────────────────────
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'CHANGE': {
      const updatedFields = {
        ...state.fields,
        [action.payload.field]: action.payload.value,
      }
      return {
        ...state,
        fields: updatedFields,
        // Re-valida somente os campos tocados
        errors: validate(updatedFields),
      }
    }

    case 'BLUR':
      return {
        ...state,
        touched: { ...state.touched, [action.payload]: true },
        errors: validate(state.fields),
      }

    case 'SUBMIT_START':
      return {
        ...state,
        submitting: true,
        // Marca todos os campos como tocados para mostrar todos os erros
        touched: { name: true, email: true, password: true, confirmPassword: true },
        errors: validate(state.fields),
      }

    case 'SUBMIT_SUCCESS':
      return { ...state, submitting: false, submitted: true }

    case 'SUBMIT_ERROR':
      return { ...state, submitting: false }

    default:
      return state
  }
}

// ─── Estado inicial ───────────────────────────────────────
const initialFormState: FormState = {
  fields: { name: '', email: '', password: '', confirmPassword: '' },
  errors: {},
  touched: {},
  submitting: false,
  submitted: false,
}

// ─── Componente ───────────────────────────────────────────
export function RegisterForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({ type: 'SUBMIT_START' })

    const errors = validate(state.fields)
    if (Object.keys(errors).length &gt; 0) return

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simula API
      dispatch({ type: 'SUBMIT_SUCCESS' })
    } catch {
      dispatch({ type: 'SUBMIT_ERROR', payload: 'Erro ao cadastrar' })
    }
  }

  if (state.submitted) {
    return &lt;p&gt;Cadastro realizado com sucesso!&lt;/p&gt;
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      {(['name', 'email', 'password', 'confirmPassword'] as const).map(field => (
        &lt;div key={field}&gt;
          &lt;input
            type={field.includes('assword') ? 'password' : 'text'}
            placeholder={field}
            value={state.fields[field]}
            onChange={e => dispatch({
              type: 'CHANGE',
              payload: { field, value: e.target.value },
            })}
            onBlur={() => dispatch({ type: 'BLUR', payload: field })}
          /&gt;
          {state.touched[field] &amp;&amp; state.errors[field] &amp;&amp; (
            &lt;span style={{ color: 'red' }}&gt;{state.errors[field]}&lt;/span&gt;
          )}
        &lt;/div&gt;
      ))}
      &lt;button type="submit" disabled={state.submitting}&gt;
        {state.submitting ? 'Cadastrando...' : 'Cadastrar'}
      &lt;/button&gt;
    &lt;/form&gt;
  )
}</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 8: CONTEXT + REDUCER ═══ -->
  <section class="section" id="context-reducer">
    <div class="section-header">
      <div class="section-number">08</div>
      <h2 class="section-title">Context + Reducer</h2>
    </div>

    <p class="prose">
      A combinação mais poderosa do ecossistema React nativo: Context distribui
      o estado pela árvore, Reducer centraliza e formaliza a lógica de mutação.
      É o padrão que Redux implementa, agora sem dependências externas.
    </p>

    <div class="callout purple">
      <span class="callout-icon">💡</span>
      <div>
        O pattern: exponha o <strong>state</strong> via um contexto e o <strong>dispatch</strong>
        via outro contexto separado. Assim, componentes que só leem não re-renderizam
        quando o dispatch muda (o que nunca acontece de qualquer forma).
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">src/contexts/StoreContext.tsx</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { createContext, useContext, useReducer } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface AppState {
  user: { name: string; role: string } | null
  theme: 'light' | 'dark'
  notifications: number
}

type AppAction =
  | { type: 'LOGIN'; payload: AppState['user'] }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_NOTIFICATION' }
  | { type: 'CLEAR_NOTIFICATIONS' }

// ─── Reducer ─────────────────────────────────────────────
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: state.notifications + 1 }
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: 0 }
    default:
      return state
  }
}

// ─── Dois contextos separados ─────────────────────────────
// State e dispatch em contextos separados para otimizar re-renders
const StateContext = createContext&lt;AppState | null&gt;(null)
const DispatchContext = createContext&lt;React.Dispatch&lt;AppAction&gt; | null&gt;(null)

// ─── Provider ────────────────────────────────────────────
const initialState: AppState = {
  user: null,
  theme: 'dark',
  notifications: 0,
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    &lt;StateContext.Provider value={state}&gt;
      &lt;DispatchContext.Provider value={dispatch}&gt;
        {children}
      &lt;/DispatchContext.Provider&gt;
    &lt;/StateContext.Provider&gt;
  )
}

// ─── Hooks públicos ───────────────────────────────────────
export function useAppState(): AppState {
  const ctx = useContext(StateContext)
  if (!ctx) throw new Error('useAppState fora do AppStoreProvider')
  return ctx
}

export function useAppDispatch(): React.Dispatch&lt;AppAction&gt; {
  const ctx = useContext(DispatchContext)
  if (!ctx) throw new Error('useAppDispatch fora do AppStoreProvider')
  return ctx
}

// ─── Uso nos componentes ──────────────────────────────────
// const { user, theme } = useAppState()
// const dispatch = useAppDispatch()
// dispatch({ type: 'TOGGLE_THEME' })</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ SEÇÃO 9: BOAS PRÁTICAS ═══ -->
  <section class="section" id="boas-praticas">
    <div class="section-header">
      <div class="section-number">09</div>
      <h2 class="section-title">Boas práticas</h2>
    </div>

    <p class="prose">
      Padrões que separam um reducer robusto de um que vai gerar bugs difíceis
      de rastrear.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Nunca mute o state — sempre retorne um novo objeto</div>
          <div class="step-desc">
            React detecta mudanças por referência. Mutar o state diretamente
            não dispara re-render e cria bugs silenciosos.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">mutação vs imutabilidade</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// ❌ ERRADO — muta o state diretamente
case 'ADD_ITEM':
  state.items.push(action.payload)  // Mutação direta!
  return state                       // Mesma referência — React não detecta mudança

// ✅ CORRETO — retorna novo objeto
case 'ADD_ITEM':
  return {
    ...state,
    items: [...state.items, action.payload],  // Novo array
  }</code></pre>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Mantenha o reducer puro — sem efeitos colaterais</div>
          <div class="step-desc">
            Sem chamadas de API, sem setTimeout, sem console.log no reducer.
            Efeitos colaterais pertencem ao componente (useEffect) ou a middleware.
          </div>
        </div>
      </div>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Sempre inclua o case default</div>
          <div class="step-desc">
            O default deve retornar o state atual. Sem ele, ações desconhecidas
            retornam <code>undefined</code> e quebram o componente.
          </div>
        </div>
      </div>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Use Action Creators para encapsular a construção das ações</div>
          <div class="step-desc">
            Funções que retornam o objeto de ação. Evitam erros de digitação nos types
            e centralizam a construção das ações.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">action-creators.ts</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">// Action Creators — funções que constroem as ações
const todoActions = {
  add: (text: string) => ({ type: 'ADD_TODO' as const, payload: text }),
  toggle: (id: string) => ({ type: 'TOGGLE_TODO' as const, payload: id }),
  remove: (id: string) => ({ type: 'REMOVE_TODO' as const, payload: id }),
  clearCompleted: () => ({ type: 'CLEAR_COMPLETED' as const }),
}
type TodoAction = ReturnType&lt;typeof todoActions[keyof typeof todoActions]&gt;

// Uso no componente — mais legível e refactor-safe:
dispatch(todoActions.add('Nova tarefa'))
dispatch(todoActions.toggle(todo.id))

// Em vez de:
dispatch({ type: 'ADD_TODO', payload: 'Nova tarefa' })  // string literal propensa a typo</code></pre>
    </div>

    <div class="info-box" style="margin-top: 16px;">
      <div class="info-content">
        <code>ReturnType&lt;typeof todoActions[keyof typeof todoActions]&gt;</code> deriva o tipo da union diretamente
        dos próprios creators — o contrato de <code>TodoAction</code> permanece automaticamente sincronizado
        sempre que um creator é adicionado, renomeado ou alterado, sem necessidade de manutenção manual da union.
      </div>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
          <div class="step-title">Teste o reducer diretamente — sem renderização</div>
          <div class="step-desc">
            Por ser uma função pura, o reducer pode ser testado com simples chamadas de função.
            É uma das maiores vantagens do padrão.
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span class="code-filename">todoReducer.test.ts</span>
        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
      </div>
      <pre><code class="language-typescript">import { describe, it, expect } from 'vitest'
import { todoReducer } from './todoReducer'

describe('todoReducer', () => {
  const initial = { todos: [], filter: 'all' as const }

  it('ADD adiciona uma tarefa', () => {
    const result = todoReducer(initial, { type: 'ADD', payload: 'Estudar React' })
    expect(result.todos).toHaveLength(1)
    expect(result.todos[0].text).toBe('Estudar React')
    expect(result.todos[0].completed).toBe(false)
  })

  it('ADD ignora texto vazio', () => {
    const result = todoReducer(initial, { type: 'ADD', payload: '   ' })
    expect(result.todos).toHaveLength(0)
  })

  it('TOGGLE inverte o estado de completed', () => {
    const withTodo = todoReducer(initial, { type: 'ADD', payload: 'Tarefa' })
    const toggled = todoReducer(withTodo, {
      type: 'TOGGLE',
      payload: withTodo.todos[0].id,
    })
    expect(toggled.todos[0].completed).toBe(true)
  })
})
// Sem renderização, sem mocks de React — testes rápidos e precisos</code></pre>
    </div>
  </section>

  <hr class="divider" />

  <!-- ═══ EXERCÍCIOS ═══ -->
  <section class="section" id="exercicios">
    <div class="section-header">
      <div class="section-number">10</div>
      <h2 class="section-title">Exercícios</h2>
    </div>

    <p class="prose">
      Três exercícios com progressão de dificuldade. Foque em modelar bem
      o estado e as ações antes de escrever o reducer.
    </p>

    <!-- Exercício 1 -->
    <div class="exercise" id="ex1">
      <div class="exercise-header">
        <span class="exercise-badge badge-basic">Básico</span>
        <span class="exercise-title">Exercício 1 — Semáforo</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Implemente um semáforo que cicla entre os estados: verde → amarelo → vermelho → verde.
          O único evento é um clique que avança para o próximo estado.
          O desafio é modelar a máquina de estados com useReducer.
        </p>
        <ul class="exercise-tasks">
          <li>O estado deve ser do tipo <code>'green' | 'yellow' | 'red'</code></li>
          <li>A única ação é <code>NEXT</code> — avança para o próximo estado no ciclo</li>
          <li>Exiba o semáforo visualmente (círculos coloridos) e um botão "Avançar"</li>
          <li>Mostre uma mensagem associada a cada estado: "Siga", "Atenção", "Pare"</li>
          <li><strong>Extra:</strong> adicione auto-avanço com <code>useEffect</code> e <code>setTimeout</code></li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// TrafficLight.tsx</div>
          <textarea class="workspace-editor" placeholder="// Dica: modele a transição como uma constante:
// const nextState = { green: 'yellow', yellow: 'red', red: 'green' }
//
// No reducer:
// case 'NEXT': return nextState[state]"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — TrafficLight.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { useReducer, useEffect } from 'react'

type LightColor = 'green' | 'yellow' | 'red'
type LightAction = { type: 'NEXT' }

const nextColor: Record&lt;LightColor, LightColor&gt; = {
  green: 'yellow',
  yellow: 'red',
  red: 'green',
}

const messages: Record&lt;LightColor, string&gt; = {
  green: '✅ Siga',
  yellow: '⚠️ Atenção',
  red: '🛑 Pare',
}

const durations: Record&lt;LightColor, number&gt; = {
  green: 3000,
  yellow: 1000,
  red: 2000,
}

function lightReducer(state: LightColor, action: LightAction): LightColor {
  switch (action.type) {
    case 'NEXT':
      return nextColor[state]
    default:
      return state
  }
}

export function TrafficLight() {
  const [color, dispatch] = useReducer(lightReducer, 'green')

  // Auto-avanço baseado na duração de cada estado
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'NEXT' })
    }, durations[color])

    return () => clearTimeout(timer)
  }, [color])

  return (
    &lt;div style={{ textAlign: 'center' }}&gt;
      {/* Semáforo visual */}
      &lt;div style={{
        background: '#1c2333',
        border: '2px solid #30363d',
        borderRadius: '12px',
        padding: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '12px',
      }}&gt;
        {(['red', 'yellow', 'green'] as const).map(c => (
          &lt;div
            key={c}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: color === c
                ? (c === 'green' ? '#34d399' : c === 'yellow' ? '#fbbf24' : '#f87171')
                : '#2d3748',
              transition: 'background 0.3s',
            }}
          /&gt;
        ))}
      &lt;/div&gt;

      &lt;p style={{ fontSize: '1.2rem', marginTop: '16px' }}&gt;
        {messages[color]}
      &lt;/p&gt;

      &lt;button onClick={() => dispatch({ type: 'NEXT' })}&gt;
        Avançar manualmente
      &lt;/button&gt;
    &lt;/div&gt;
  )
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 2 -->
    <div class="exercise" id="ex2">
      <div class="exercise-header">
        <span class="exercise-badge badge-medium">Médio</span>
        <span class="exercise-title">Exercício 2 — Carrinho Redux-like</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Implemente um carrinho de compras usando useReducer. O estado deve
          controlar os itens, o total calculado e um cupom de desconto.
          Este exercício trabalha a modelagem de estado derivado dentro do reducer.
        </p>
        <ul class="exercise-tasks">
          <li>Estado: <code>items: CartItem[]</code>, <code>coupon: string | null</code>, <code>discount: number</code> (0-1)</li>
          <li>Ações: <code>ADD_ITEM</code>, <code>REMOVE_ITEM</code>, <code>UPDATE_QUANTITY</code>, <code>APPLY_COUPON</code>, <code>CLEAR_CART</code></li>
          <li>Calcule <code>subtotal</code>, <code>discountAmount</code> e <code>total</code> via <code>useMemo</code> no componente (não no state)</li>
          <li><code>APPLY_COUPON</code> deve validar o código: "REACT10" = 10% off, "REACT20" = 20% off</li>
          <li><code>UPDATE_QUANTITY</code> com <code>quantity = 0</code> deve remover o item</li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// CartReducer.tsx</div>
          <textarea class="workspace-editor" placeholder="// Interface sugerida:
// interface CartItem { id: string; name: string; price: number; quantity: number }
// interface CartState { items: CartItem[]; coupon: string | null; discount: number }
//
// Os cupons válidos podem ser uma constante:
// const COUPONS: Record&lt;string, number&gt; = { 'REACT10': 0.1, 'REACT20': 0.2 }"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — CartReducer.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { useReducer, useMemo } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  coupon: string | null
  discount: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit&lt;CartItem, 'quantity'&gt; }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'APPLY_COUPON'; payload: string }
  | { type: 'CLEAR_CART' }

// ─── Cupons válidos ───────────────────────────────────────
const COUPONS: Record&lt;string, number&gt; = {
  'REACT10': 0.1,
  'REACT20': 0.2,
}

// ─── Reducer ─────────────────────────────────────────────
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      if (quantity &lt;= 0) {
        // Quantidade zero remove o item
        return { ...state, items: state.items.filter(i => i.id !== id) }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === id ? { ...i, quantity } : i
        ),
      }
    }

    case 'APPLY_COUPON': {
      const discount = COUPONS[action.payload.toUpperCase()] ?? 0
      return {
        ...state,
        coupon: discount &gt; 0 ? action.payload : null,
        discount,
      }
    }

    case 'CLEAR_CART':
      return { items: [], coupon: null, discount: 0 }

    default:
      return state
  }
}

// ─── Componente ───────────────────────────────────────────
export function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    coupon: null,
    discount: 0,
  })

  // Estado derivado calculado fora do reducer
  const summary = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    )
    const discountAmount = subtotal * state.discount
    return {
      subtotal,
      discountAmount,
      total: subtotal - discountAmount,
    }
  }, [state.items, state.discount])

  return (
    &lt;div&gt;
      {state.items.map(item => (
        &lt;div key={item.id}&gt;
          &lt;span&gt;{item.name}&lt;/span&gt;
          &lt;input
            type="number"
            value={item.quantity}
            min={0}
            onChange={e => dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: Number(e.target.value) },
            })}
          /&gt;
          &lt;span&gt;R$ {(item.price * item.quantity).toFixed(2)}&lt;/span&gt;
        &lt;/div&gt;
      ))}

      &lt;p&gt;Subtotal: R$ {summary.subtotal.toFixed(2)}&lt;/p&gt;
      {state.discount &gt; 0 &amp;&amp; (
        &lt;p&gt;Desconto ({state.discount * 100}%): -R$ {summary.discountAmount.toFixed(2)}&lt;/p&gt;
      )}
      &lt;p&gt;&lt;strong&gt;Total: R$ {summary.total.toFixed(2)}&lt;/strong&gt;&lt;/p&gt;
    &lt;/div&gt;
  )
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Exercício 3 -->
    <div class="exercise" id="ex3">
      <div class="exercise-header">
        <span class="exercise-badge badge-inter">Intermediário</span>
        <span class="exercise-title">Exercício 3 — Wizard de cadastro</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-desc">
          Um wizard multi-step é uma máquina de estados clássica. O estado controla
          o passo atual, os dados de cada etapa e a validação. Este exercício
          trabalha o padrão de estado agregado e navegação entre etapas.
        </p>
        <ul class="exercise-tasks">
          <li>O wizard tem 3 etapas: Dados pessoais → Endereço → Confirmação</li>
          <li>Estado: <code>step: 1 | 2 | 3</code>, <code>data: { personal, address }</code>, <code>completed: boolean</code></li>
          <li>Ações: <code>NEXT</code> (com payload dos dados da etapa atual), <code>BACK</code>, <code>SUBMIT</code></li>
          <li><code>NEXT</code> só avança se os dados da etapa estiverem válidos</li>
          <li>A etapa 3 (Confirmação) exibe um resumo com todos os dados coletados</li>
          <li>Use <code>useRef&lt;HTMLInputElement&gt;</code> para os inputs de cada etapa: leia o valor via <code>inputRef.current?.value</code> no handler de avanço e limpe com <code>inputRef.current.value = ''</code> ao navegar para a próxima etapa</li>
          <li><strong>Extra:</strong> adicione uma barra de progresso visual com base no <code>step</code></li>
        </ul>

        <div class="exercise-workspace">
          <div class="workspace-label">// RegisterWizard.tsx</div>
          <textarea class="workspace-editor" placeholder="// Estado sugerido:
// interface WizardState {
//   step: 1 | 2 | 3
//   data: {
//     personal: { name: string; email: string; phone: string }
//     address: { street: string; city: string; zipCode: string }
//   }
//   completed: boolean
// }
//
// Dica: o NEXT pode receber um payload genérico que será mergeado em data"></textarea>
        </div>

        <button class="solution-toggle" onclick="toggleSolution(this)">
          👁 Ver solução
        </button>

        <div class="solution-block">
          <div class="code-block">
            <div class="code-header">
              <span class="code-filename">Solução — RegisterWizard.tsx</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-typescript">import { useReducer } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface PersonalData {
  name: string
  email: string
  phone: string
}

interface AddressData {
  street: string
  city: string
  zipCode: string
}

interface WizardState {
  step: 1 | 2 | 3
  data: {
    personal: PersonalData
    address: AddressData
  }
  completed: boolean
}

type WizardAction =
  | { type: 'NEXT_PERSONAL'; payload: PersonalData }
  | { type: 'NEXT_ADDRESS'; payload: AddressData }
  | { type: 'BACK' }
  | { type: 'SUBMIT' }

// ─── Validações ───────────────────────────────────────────
function isPersonalValid(data: PersonalData): boolean {
  return data.name.trim().length &gt; 0
    &amp;&amp; data.email.includes('@')
    &amp;&amp; data.phone.replace(/\D/g, '').length &gt;= 10
}

function isAddressValid(data: AddressData): boolean {
  return data.street.trim().length &gt; 0
    &amp;&amp; data.city.trim().length &gt; 0
    &amp;&amp; data.zipCode.replace(/\D/g, '').length === 8
}

// ─── Reducer ─────────────────────────────────────────────
function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'NEXT_PERSONAL':
      if (!isPersonalValid(action.payload)) return state  // Bloqueia se inválido
      return {
        ...state,
        step: 2,
        data: { ...state.data, personal: action.payload },
      }

    case 'NEXT_ADDRESS':
      if (!isAddressValid(action.payload)) return state
      return {
        ...state,
        step: 3,
        data: { ...state.data, address: action.payload },
      }

    case 'BACK':
      return {
        ...state,
        step: state.step &gt; 1 ? ((state.step - 1) as 1 | 2 | 3) : state.step,
      }

    case 'SUBMIT':
      return { ...state, completed: true }

    default:
      return state
  }
}

// ─── Estado inicial ───────────────────────────────────────
const initialWizardState: WizardState = {
  step: 1,
  data: {
    personal: { name: '', email: '', phone: '' },
    address: { street: '', city: '', zipCode: '' },
  },
  completed: false,
}

// ─── Componente ───────────────────────────────────────────
export function RegisterWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialWizardState)

  if (state.completed) {
    return &lt;p&gt;Cadastro concluído! Bem-vindo, {state.data.personal.name}!&lt;/p&gt;
  }

  return (
    &lt;div&gt;
      {/* Barra de progresso */}
      &lt;div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}&gt;
        {[1, 2, 3].map(s => (
          &lt;div key={s} style={{
            flex: 1, height: '4px', borderRadius: '2px',
            background: s &lt;= state.step ? '#34d399' : '#30363d',
          }} /&gt;
        ))}
      &lt;/div&gt;

      {/* Etapa 1: Dados pessoais */}
      {state.step === 1 &amp;&amp; (
        &lt;Step1 onNext={data => dispatch({ type: 'NEXT_PERSONAL', payload: data })} /&gt;
      )}

      {/* Etapa 2: Endereço */}
      {state.step === 2 &amp;&amp; (
        &lt;Step2
          onNext={data => dispatch({ type: 'NEXT_ADDRESS', payload: data })}
          onBack={() => dispatch({ type: 'BACK' })}
        /&gt;
      )}

      {/* Etapa 3: Confirmação */}
      {state.step === 3 &amp;&amp; (
        &lt;div&gt;
          &lt;h3&gt;Confirme seus dados&lt;/h3&gt;
          &lt;p&gt;Nome: {state.data.personal.name}&lt;/p&gt;
          &lt;p&gt;E-mail: {state.data.personal.email}&lt;/p&gt;
          &lt;p&gt;Endereço: {state.data.address.street}, {state.data.address.city}&lt;/p&gt;
          &lt;button onClick={() => dispatch({ type: 'BACK' })}&gt;Voltar&lt;/button&gt;
          &lt;button onClick={() => dispatch({ type: 'SUBMIT' })}&gt;Confirmar&lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  )
}

// (Step1 e Step2 são componentes com seus próprios formulários locais)</code></pre>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- ═══ NAV FOOTER ═══ -->
  <div class="nav-footer">
    <a href="useContext.html" class="nav-link prev">← Módulo 01: useContext</a>
    <a href="index.html" class="nav-link">Início</a>
  </div>

</main>

<script src="useReducer.js"></script>
</body>
</html>
```

### `index.html` {#indexhtml}

> 382 bytes

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>treinamento-reducer-createcontext</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Arquivos .CSS

### `docs\index.css` {#docsindexcss}

> 4,181 bytes

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #1c2333;
  --border: #30363d;
  --text: #e6edf3;
  --text2: #8b949e;
  --react: #61dafb;
  --context: #a78bfa;
  --reducer: #34d399;
  --accent: #f97316;
  --css: #f97316;
  --tailwind: #38bdf8;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.logo {
  font-size: 13px;
  font-weight: 600;
  color: var(--react);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  opacity: 0.8;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
  margin-bottom: 20px;
  max-width: 700px;
}

h1 span { color: var(--react); }

.subtitle {
  font-size: 1.05rem;
  color: var(--text2);
  text-align: center;
  max-width: 540px;
  line-height: 1.7;
  margin-bottom: 60px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
}

.card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

.card.context { border-top: 3px solid var(--context); }
.card.context:hover { border-color: var(--context); box-shadow: 0 20px 60px rgba(167,139,250,0.15); }

.card.reducer { border-top: 3px solid var(--reducer); }
.card.reducer:hover { border-color: var(--reducer); box-shadow: 0 20px 60px rgba(52,211,153,0.15); }

.card.css { border-top: 3px solid var(--css); }
.card.css:hover { border-color: var(--css); box-shadow: 0 20px 60px rgba(249,115,22,0.15); }

.card.tailwind { border-top: 3px solid var(--tailwind); }
.card.tailwind:hover { border-color: var(--tailwind); box-shadow: 0 20px 60px rgba(56,189,248,0.15); }

.card-icon {
  font-size: 2.4rem;
}

.card-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  width: fit-content;
}

.card.context .card-badge { background: rgba(167,139,250,0.15); color: var(--context); }
.card.reducer .card-badge { background: rgba(52,211,153,0.15); color: var(--reducer); }
.card.css .card-badge { background: rgba(249,115,22,0.15); color: var(--css); }
.card.tailwind .card-badge { background: rgba(56,189,248,0.15); color: var(--tailwind); }

.card h2 {
  font-size: 1.4rem;
  font-weight: 700;
}

.card p {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.65;
}

.card-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.topic-tag {
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  padding: 4px 10px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text2);
}

.card-cta {
  margin-top: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.card.context .card-cta { color: var(--context); }
.card.reducer .card-cta { color: var(--reducer); }
.card.css .card-cta { color: var(--css); }
.card.tailwind .card-cta { color: var(--tailwind); }

.footer {
  margin-top: 80px;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text2);
  opacity: 0.6;
}

.stack-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text2);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.dot-react { background: var(--react); }
.dot-ts { background: #3178c6; }
.dot-vite { background: #646cff; }
```

### `docs\useContext.css` {#docsusecontextcss}

> 12,354 bytes

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #1c2333;
  --border: #30363d;
  --text: #e6edf3;
  --text2: #8b949e;
  --text3: #c9d1d9;
  --accent: #a78bfa;
  --accent-dim: rgba(167,139,250,0.1);
  --accent-border: rgba(167,139,250,0.3);
  --react: #61dafb;
  --green: #34d399;
  --yellow: #fbbf24;
  --red: #f87171;
  --sidebar-w: 280px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  display: flex;
  min-height: 100vh;
}

/* ── SIDEBAR ── */
.sidebar {
  width: var(--sidebar-w);
  background: var(--bg2);
  border-right: 1px solid var(--border);
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.sidebar-brand {
  padding: 0 20px 24px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}

.sidebar-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text2);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}
.sidebar-back:hover { color: var(--text); }

.sidebar-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
}

.sidebar-subtitle {
  font-size: 11px;
  color: var(--text2);
  margin-top: 3px;
}

.sidebar-section {
  padding: 0 12px;
  margin-bottom: 8px;
}

.sidebar-section-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text2);
  padding: 8px 8px 6px;
}

.sidebar-link {
  display: block;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 13px;
  color: var(--text2);
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  line-height: 1.4;
}

.sidebar-link:hover { background: var(--bg3); color: var(--text); }
.sidebar-link.active { background: var(--accent-dim); color: var(--accent); font-weight: 500; }

.sidebar-link .difficulty {
  float: right;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 10px;
  font-weight: 600;
}

.diff-basic { background: rgba(52,211,153,0.15); color: var(--green); }
.diff-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
.diff-inter { background: rgba(248,113,113,0.15); color: var(--red); }

/* ── MAIN ── */
.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  max-width: 860px;
  padding: 60px 48px;
}

/* Botão mobile */
.mobile-menu-button {
  display: none;
  position: sticky;
  top: 0;
  z-index: 90;
  margin: -16px 0 24px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(12, 18, 30, 0.95);
  color: var(--text2);
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(12px);
}

.mobile-menu-button span {
  font-size: 16px;
}

@media (max-width: 900px) {
  body {
    flex-direction: column;
  }

  .sidebar {
    transform: translateX(-100%);
    opacity: 0;
    box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
    opacity: 1;
  }

  .main {
    margin-left: 0;
    padding: 30px 20px;
  }

  .mobile-menu-button {
    display: inline-flex;
  }
}

/* ── HERO ── */
.hero {
  margin-bottom: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.module-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  border-radius: 20px;
  color: var(--accent);
  margin-bottom: 20px;
}

.hero h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero h1 span { color: var(--accent); }

.hero p {
  font-size: 1.05rem;
  color: var(--text2);
  line-height: 1.75;
  max-width: 600px;
}

/* ── SECTION ── */
.section {
  margin-bottom: 72px;
  scroll-margin-top: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.section-number {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
}

/* ── PROSE ── */
.prose {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text3);
}

.prose + .prose { margin-top: 16px; }

.prose strong { color: var(--text); font-weight: 600; }
.prose code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82em;
  padding: 2px 6px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--accent);
}

/* ── CALLOUT ── */
.callout {
  padding: 16px 20px;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 0.9rem;
  line-height: 1.7;
  display: flex;
  gap: 12px;
}

.callout-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

.callout.info {
  background: rgba(97,218,251,0.07);
  border-left: 3px solid var(--react);
  color: #93e8fb;
}

.callout.warn {
  background: rgba(251,191,36,0.07);
  border-left: 3px solid var(--yellow);
  color: #fcd34d;
}

.callout.tip {
  background: rgba(52,211,153,0.07);
  border-left: 3px solid var(--green);
  color: #6ee7b7;
}

.callout.danger {
  background: rgba(248,113,113,0.07);
  border-left: 3px solid var(--red);
  color: #fca5a5;
}

/* ── CODE BLOCK ── */
.code-block {
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
}

.code-filename {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text2);
  display: flex;
  align-items: center;
  gap: 8px;
}

.code-filename::before {
  content: '';
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.6;
}

.copy-btn {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text2);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { background: var(--bg); color: var(--text); }
.copy-btn.copied { border-color: var(--green); color: var(--green); }

.code-block pre {
  margin: 0 !important;
  padding: 20px !important;
  background: #0d1117 !important;
  font-size: 0.83rem !important;
  line-height: 1.7 !important;
  overflow-x: auto;
}

.code-block code { font-family: 'JetBrains Mono', monospace !important; }

/* ── ANNOTATION ── */
.annotation {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 20px;
  margin: -8px 0 20px;
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.6;
}

.annotation strong { color: var(--accent); }

/* ── VISUAL DIAGRAM ── */
.diagram {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  overflow-x: auto;
}

.diagram-tree { color: var(--text2); }
.diagram-highlight { color: var(--react); font-weight: 500; }
.diagram-pain { color: var(--red); }
.diagram-ok { color: var(--green); }

/* ── STEP LIST ── */
.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px 0;
}

.step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.step-desc {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.65;
}

/* ── EXERCISE ── */
.exercise {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  margin: 28px 0;
}

.exercise-header {
  padding: 16px 20px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.exercise-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
}

.badge-basic { background: rgba(52,211,153,0.15); color: var(--green); }
.badge-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
.badge-inter { background: rgba(248,113,113,0.15); color: var(--red); }

.exercise-title {
  font-size: 0.95rem;
  font-weight: 600;
  flex: 1;
}

.exercise-body {
  padding: 20px;
}

.exercise-desc {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.7;
  margin-bottom: 16px;
}

.exercise-tasks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.exercise-tasks li {
  font-size: 0.88rem;
  color: var(--text3);
  display: flex;
  gap: 8px;
  line-height: 1.5;
}

.exercise-tasks li::before {
  content: '→';
  color: var(--accent);
  flex-shrink: 0;
}

.exercise-workspace {
  background: var(--bg);
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 4px;
}

.workspace-label {
  font-size: 11px;
  color: var(--text2);
  padding: 8px 12px 4px;
  font-family: 'JetBrains Mono', monospace;
}

.workspace-editor {
  width: 100%;
  min-height: 180px;
  background: transparent;
  border: none;
  padding: 8px 12px 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text);
  resize: vertical;
  outline: none;
  line-height: 1.7;
}

.solution-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 12px;
}

.solution-toggle:hover { background: var(--bg3); color: var(--text); }

.solution-block {
  display: none;
  margin-top: 16px;
}

.solution-block.open { display: block; }

/* ── COMPARISON TABLE ── */
.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.88rem;
}

.compare-table th {
  text-align: left;
  padding: 10px 16px;
  background: var(--bg3);
  color: var(--text2);
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border);
}

.compare-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text3);
  vertical-align: top;
  line-height: 1.5;
}

.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:hover td { background: var(--bg2); }

.compare-table td:first-child {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
  font-size: 0.82rem;
  white-space: nowrap;
}

.check { color: var(--green); }
.cross { color: var(--red); }

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 48px 0;
}

/* ── PROGRESS ── */
.progress-bar {
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
}

.progress-segment {
  height: 3px;
  border-radius: 2px;
  flex: 1;
  background: var(--border);
}

.progress-segment.done { background: var(--accent); }

/* ── NAV FOOTER ── */
.nav-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-top: 48px;
  border-top: 1px solid var(--border);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text2);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover { color: var(--accent); }
.nav-link.next { flex-direction: row-reverse; color: var(--accent); }
```

### `docs\useReducer.css` {#docsusereducercss}

> 14,395 bytes

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #1c2333;
  --border: #30363d;
  --text: #e6edf3;
  --text2: #8b949e;
  --text3: #c9d1d9;
  --accent: #34d399;
  --accent-dim: rgba(52,211,153,0.1);
  --accent-border: rgba(52,211,153,0.3);
  --react: #61dafb;
  --purple: #a78bfa;
  --yellow: #fbbf24;
  --red: #f87171;
  --sidebar-w: 280px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  display: flex;
  min-height: 100vh;
}

/* ── SIDEBAR ── */
.sidebar {
  width: var(--sidebar-w);
  background: var(--bg2);
  border-right: 1px solid var(--border);
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.sidebar-brand {
  padding: 0 20px 24px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}

.sidebar-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text2);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}
.sidebar-back:hover { color: var(--text); }

.sidebar-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
}

.sidebar-subtitle {
  font-size: 11px;
  color: var(--text2);
  margin-top: 3px;
}

.sidebar-section {
  padding: 0 12px;
  margin-bottom: 8px;
}

.sidebar-section-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text2);
  padding: 8px 8px 6px;
}

.sidebar-link {
  display: block;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 13px;
  color: var(--text2);
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  line-height: 1.4;
}

.sidebar-link:hover { background: var(--bg3); color: var(--text); }
.sidebar-link.active { background: var(--accent-dim); color: var(--accent); font-weight: 500; }

.sidebar-link .difficulty {
  float: right;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 10px;
  font-weight: 600;
}

.diff-basic { background: rgba(52,211,153,0.15); color: var(--accent); }
.diff-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
.diff-inter { background: rgba(248,113,113,0.15); color: var(--red); }

/* ── MAIN ── */
.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  max-width: 860px;
  padding: 60px 48px;
}

/* Botão mobile */
.mobile-menu-button {
  display: none;
  position: sticky;
  top: 0;
  z-index: 90;
  margin: -16px 0 24px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(12, 18, 30, 0.95);
  color: var(--text2);
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(12px);
}

.mobile-menu-button span {
  font-size: 16px;
}

@media (max-width: 900px) {
  body {
    flex-direction: column;
  }

  .sidebar {
    transform: translateX(-100%);
    opacity: 0;
    box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
    opacity: 1;
  }

  .main {
    margin-left: 0;
    padding: 30px 20px;
  }

  .mobile-menu-button {
    display: inline-flex;
  }
}

/* ── HERO ── */
.hero {
  margin-bottom: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.module-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  border-radius: 20px;
  color: var(--accent);
  margin-bottom: 20px;
}

.hero h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero h1 span { color: var(--accent); }

.hero p {
  font-size: 1.05rem;
  color: var(--text2);
  line-height: 1.75;
  max-width: 600px;
}

/* ── SECTION ── */
.section {
  margin-bottom: 72px;
  scroll-margin-top: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.section-number {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
}

/* ── PROSE ── */
.prose {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text3);
}

.prose + .prose { margin-top: 16px; }

.prose strong { color: var(--text); font-weight: 600; }
.prose code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82em;
  padding: 2px 6px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--accent);
}

/* ── CALLOUT ── */
.callout {
  padding: 16px 20px;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 0.9rem;
  line-height: 1.7;
  display: flex;
  gap: 12px;
}

.callout-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

.callout.info {
  background: rgba(97,218,251,0.07);
  border-left: 3px solid var(--react);
  color: #93e8fb;
}

.callout.warn {
  background: rgba(251,191,36,0.07);
  border-left: 3px solid var(--yellow);
  color: #fcd34d;
}

.callout.tip {
  background: rgba(52,211,153,0.07);
  border-left: 3px solid var(--accent);
  color: #6ee7b7;
}

.callout.danger {
  background: rgba(248,113,113,0.07);
  border-left: 3px solid var(--red);
  color: #fca5a5;
}

.callout.purple {
  background: rgba(167,139,250,0.07);
  border-left: 3px solid var(--purple);
  color: #c4b5fd;
}

/* ── CODE BLOCK ── */
.code-block {
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
}

.code-filename {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text2);
  display: flex;
  align-items: center;
  gap: 8px;
}

.code-filename::before {
  content: '';
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.6;
}

.copy-btn {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text2);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { background: var(--bg); color: var(--text); }
.copy-btn.copied { border-color: var(--accent); color: var(--accent); }

.code-block pre {
  margin: 0 !important;
  padding: 20px !important;
  background: #0d1117 !important;
  font-size: 0.83rem !important;
  line-height: 1.7 !important;
  overflow-x: auto;
}

.code-block code { font-family: 'JetBrains Mono', monospace !important; }

/* ── ANATOMY BOX ── */
.anatomy {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 24px 0;
}

.anatomy-header {
  padding: 12px 20px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-weight: 600;
  color: var(--text2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.anatomy-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  border-bottom: 1px solid var(--border);
}

.anatomy-row:last-child { border-bottom: none; }

.anatomy-term {
  padding: 14px 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--accent);
  background: rgba(52,211,153,0.04);
  border-right: 1px solid var(--border);
  font-weight: 500;
  display: flex;
  align-items: center;
}

.anatomy-def {
  padding: 14px 20px;
  font-size: 0.88rem;
  color: var(--text3);
  line-height: 1.6;
}

/* ── FLOW DIAGRAM ── */
.flow {
  display: flex;
  align-items: center;
  gap: 0;
  margin: 24px 0;
  overflow-x: auto;
  padding: 4px;
}

.flow-node {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  text-align: center;
  min-width: 110px;
  flex-shrink: 0;
}

.flow-node-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
}

.flow-node-desc {
  font-size: 11px;
  color: var(--text2);
}

.flow-node.accent { border-color: var(--accent-border); }
.flow-node.accent .flow-node-label { color: var(--accent); }

.flow-node.react { border-color: rgba(97,218,251,0.3); }
.flow-node.react .flow-node-label { color: var(--react); }

.flow-node.purple { border-color: rgba(167,139,250,0.3); }
.flow-node.purple .flow-node-label { color: var(--purple); }

.flow-node.yellow { border-color: rgba(251,191,36,0.3); }
.flow-node.yellow .flow-node-label { color: var(--yellow); }

.flow-arrow {
  color: var(--text2);
  font-size: 18px;
  padding: 0 4px;
  flex-shrink: 0;
}

/* ── COMPARISON ── */
.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
}

.compare-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.compare-card-header {
  padding: 12px 16px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.compare-card-body {
  padding: 14px 16px;
  font-size: 0.85rem;
  color: var(--text3);
  line-height: 1.6;
}

.compare-card-body ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.compare-card-body ul li::before {
  margin-right: 8px;
}

.use-item::before { content: '✓'; color: var(--accent); }
.avoid-item::before { content: '→'; color: var(--yellow); }

/* ── STEP LIST ── */
.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px 0;
}

.step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content { flex: 1; }
.step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}
.step-desc {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.65;
}

/* ── EXERCISE ── */
.exercise {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  margin: 28px 0;
}

.exercise-header {
  padding: 16px 20px;
  background: var(--bg3);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.exercise-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
}

.badge-basic { background: rgba(52,211,153,0.15); color: var(--accent); }
.badge-medium { background: rgba(251,191,36,0.15); color: var(--yellow); }
.badge-inter { background: rgba(248,113,113,0.15); color: var(--red); }

.exercise-title {
  font-size: 0.95rem;
  font-weight: 600;
  flex: 1;
}

.exercise-body { padding: 20px; }

.exercise-desc {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.7;
  margin-bottom: 16px;
}

.exercise-tasks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.exercise-tasks li {
  font-size: 0.88rem;
  color: var(--text3);
  display: flex;
  gap: 8px;
  line-height: 1.5;
}

.exercise-tasks li::before {
  content: '→';
  color: var(--accent);
  flex-shrink: 0;
}

.exercise-workspace {
  background: var(--bg);
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 4px;
}

.workspace-label {
  font-size: 11px;
  color: var(--text2);
  padding: 8px 12px 4px;
  font-family: 'JetBrains Mono', monospace;
}

.workspace-editor {
  width: 100%;
  min-height: 180px;
  background: transparent;
  border: none;
  padding: 8px 12px 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text);
  resize: vertical;
  outline: none;
  line-height: 1.7;
}

.solution-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 12px;
}

.solution-toggle:hover { background: var(--bg3); color: var(--text); }

.solution-block { display: none; margin-top: 16px; }
.solution-block.open { display: block; }

/* ── COMPARE TABLE ── */
.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.88rem;
}

.compare-table th {
  text-align: left;
  padding: 10px 16px;
  background: var(--bg3);
  color: var(--text2);
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border);
}

.compare-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text3);
  vertical-align: top;
  line-height: 1.5;
}

.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:hover td { background: var(--bg2); }

.compare-table td:first-child {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
  font-size: 0.82rem;
}

.check { color: var(--accent); }
.cross { color: var(--red); }
.neutral { color: var(--yellow); }

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 48px 0;
}

/* ── NAV FOOTER ── */
.nav-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-top: 48px;
  border-top: 1px solid var(--border);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text2);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover { color: var(--accent); }
.nav-link.prev { color: var(--purple); }
.nav-link.prev:hover { color: var(--purple); opacity: 0.7; }
```

### `src\App.css` {#srcappcss}

> 606 bytes

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

### `src\components\exercicios-Reducer\styles\advancedCounter.css` {#srccomponentsexercicios-reducerstylesadvancedcountercss}

> 3,792 bytes

```css
/* AdvancedCounter.css */

.counter-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: #0f0f13;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
}

.counter-card {
  width: 360px; /* fixo — era max-width */
  max-width: 360px;
  background-color: #1a1a24;
  border: 1px solid #2a2a38;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ── Título ── */

.counter-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #88889a;
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

/* ── Display central ── */

.counter-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.counter-value {
  font-size: 4rem;
  font-weight: 700;
  color: #f0f0f5;
  letter-spacing: -0.04em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  transition: color 0.2s;
  min-width: 120px;
  text-align: center;
}

.counter-range {
  font-size: 0.78rem;
  color: #55556a;
  letter-spacing: 0.02em;
}

/* ── Controles ── */

.counter-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.counter-btn {
  padding: 0.6rem 1.1rem;
  border: 1px solid #2a2a38;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.counter-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.counter-btn--decrement {
  background-color: #12121a;
  color: #c4c4d4;
  flex: 1;
}

.counter-btn--decrement:hover:not(:disabled) {
  border-color: #ef4444;
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.08);
}

.counter-btn--increment {
  background-color: #12121a;
  color: #c4c4d4;
  flex: 1;
}

.counter-btn--increment:hover:not(:disabled) {
  border-color: #6366f1;
  color: #6366f1;
  background-color: rgba(99, 102, 241, 0.08);
}

.counter-btn--reset {
  background-color: transparent;
  color: #55556a;
  border-color: #2a2a38;
  font-size: 0.8rem;
  padding: 0.6rem 0.75rem;
}

.counter-btn--reset:hover {
  color: #c4c4d4;
  border-color: #3a3a50;
}

.counter-btn:active:not(:disabled) {
  transform: scale(0.96);
}

/* ── Step ── */

.counter-step-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #12121a;
  border: 1px solid #2a2a38;
  border-radius: 10px;
}

.counter-step-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: #55556a;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.counter-step-input {
  width: 64px;
  padding: 0.35rem 0.6rem;
  background-color: #1a1a24;
  border: 1px solid #2a2a38;
  border-radius: 8px;
  color: #f0f0f5;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;

  /* Remove setas nativas do input number */
  appearance: textfield;
  -moz-appearance: textfield;
}

.counter-step-input::-webkit-outer-spin-button,
.counter-step-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.counter-step-input:focus {
  border-color: #6366f1;
}

/* ── Barra de progresso ── */

.counter-progress {
  height: 4px;
  background-color: #2a2a38;
  border-radius: 999px;
  overflow: hidden;
}

.counter-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #818cf8);
  border-radius: 999px;
  transition: width 0.2s ease;
  min-width: 4px;
}
```

### `src\components\exercicios-Reducer\styles\cartReducer.module.css` {#srccomponentsexercicios-reducerstylescartreducermodulecss}

> 8,036 bytes

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap");

/* ── Root tokens ── */
.layout {
  --gold: #c9a84c;
  --gold-dim: #9a7a35;
  --gold-glow: rgba(201, 168, 76, 0.12);
  --surface: #0f1117;
  --surface-2: #161b25;
  --surface-3: #1c2230;
  --border: rgba(255, 255, 255, 0.07);
  --border-gold: rgba(201, 168, 76, 0.3);
  --text-1: #f0eee8;
  --text-2: #8a8f9e;
  --text-3: #555b6b;
  --success: #4caf7d;
  --danger: #e05c5c;
  --radius: 14px;
  --radius-sm: 8px;

  font-family: "DM Sans", sans-serif;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2px;
  max-width: 1040px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  align-items: start;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

@media (max-width: 720px) {
  .layout {
    grid-template-columns: 1fr;
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}

/* ── Catálogo ── */

.catalog {
  padding: 2rem 1.75rem;
  border-right: 1px solid var(--border);
}

.sectionLabel {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 0.5rem;
}

.sectionTitle {
  font-family: "Playfair Display", serif;
  font-size: 26px;
  font-weight: 400;
  color: var(--text-1);
  margin: 0 0 1.75rem;
  letter-spacing: -0.01em;
}

.productList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.productCard {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}

.productCard:last-child {
  border-bottom: none;
}

.productIndex {
  font-size: 11px;
  color: var(--text-3);
  font-weight: 300;
  min-width: 18px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.productInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.productName {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.productDescription {
  font-size: 12px;
  color: var(--text-2);
  font-weight: 300;
}

.productPrice {
  font-size: 13px;
  font-weight: 500;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.addButton {
  flex-shrink: 0;
  padding: 6px 16px;
  font-size: 12px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 0.04em;
  border: 1px solid var(--border-gold);
  border-radius: 40px;
  background: transparent;
  color: var(--gold);
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    border-color 0.18s;
  white-space: nowrap;
}

.addButton:hover {
  background: var(--gold-glow);
  border-color: var(--gold);
}

.addButtonActive {
  background: var(--gold-glow);
  color: var(--gold);
  border-color: var(--gold);
}

/* ── Carrinho ── */

.cart {
  padding: 2rem 1.75rem;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  min-height: 480px;
}

.emptyState {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 3rem 0;
}

.emptyIcon {
  font-size: 32px;
  opacity: 0.2;
}

.emptyMessage {
  font-size: 13px;
  color: var(--text-3);
  font-weight: 300;
  margin: 0;
}

.itemList {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.itemRow {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  gap: 10px;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
}

.itemName {
  font-size: 13px;
  color: var(--text-1);
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.quantityWrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--surface-3);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 2px 6px;
}

.qtyBtn {
  background: none;
  border: none;
  color: var(--text-2);
  cursor: pointer;
  font-size: 14px;
  padding: 0 2px;
  line-height: 1;
  transition: color 0.15s;
}

.qtyBtn:hover {
  color: var(--text-1);
}

.quantityInput {
  width: 28px;
  text-align: center;
  font-size: 13px;
  font-family: "DM Sans", sans-serif;
  background: none;
  border: none;
  color: var(--text-1);
  outline: none;
  font-variant-numeric: tabular-nums;

  -moz-appearance: textfield;
  appearance: textfield;
}

.quantityInput::-webkit-outer-spin-button,
.quantityInput::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.itemTotal {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-1);
  font-variant-numeric: tabular-nums;
  min-width: 72px;
  text-align: right;
}

.removeButton {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--text-3);
  padding: 0;
  line-height: 1;
  transition: color 0.15s;
}

.removeButton:hover {
  color: var(--danger);
}

/* ── Cupom ── */

.couponRow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  padding: 10px 14px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: border-color 0.2s;
}

.couponRow:focus-within {
  border-color: var(--border-gold);
}

.couponIcon {
  font-size: 14px;
  opacity: 0.4;
}

.couponInput {
  flex: 1;
  font-size: 13px;
  font-family: "DM Sans", sans-serif;
  background: none;
  border: none;
  color: var(--text-1);
  outline: none;
  letter-spacing: 0.06em;
}

.couponInput::placeholder {
  color: var(--text-3);
  letter-spacing: 0.02em;
}

.couponBadge {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(76, 175, 125, 0.15);
  color: var(--success);
  border: 1px solid rgba(76, 175, 125, 0.25);
  white-space: nowrap;
}

/* ── Resumo ── */

.summary {
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-2);
  font-weight: 300;
}

.discountRow {
  color: var(--success);
}

.totalRow {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: 4px;
}

.totalLabel {
  font-family: "Playfair Display", serif;
  font-size: 16px;
  color: var(--text-1);
}

.totalValue {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  color: var(--gold);
  letter-spacing: -0.02em;
}

/* ── Ações ── */

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkoutButton {
  width: 100%;
  padding: 13px;
  font-size: 13px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-sm);
  background: var(--gold);
  color: #0f1117;
  cursor: pointer;
  transition:
    opacity 0.2s,
    transform 0.15s;
}

.checkoutButton:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.checkoutButton:active:not(:disabled) {
  transform: translateY(0);
}

.checkoutButton:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}

.clearButton {
  width: 100%;
  padding: 9px;
  font-size: 12px;
  font-family: "DM Sans", sans-serif;
  letter-spacing: 0.06em;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: none;
  color: var(--text-3);
  cursor: pointer;
  transition:
    color 0.15s,
    border-color 0.15s;
}

.clearButton:hover:not(:disabled) {
  color: var(--danger);
  border-color: rgba(224, 92, 92, 0.3);
}

.clearButton:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
```

### `src\components\exercicios-Reducer\styles\registerForm.css` {#srccomponentsexercicios-reducerstylesregisterformcss}

> 2,645 bytes

```css
/* RegisterForm.css */

.form-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: #0f0f13;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
}

.form-card {
  width: 100%;
  max-width: 420px;
  background-color: #1a1a24;
  border: 1px solid #2a2a38;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

/* ── Cabeçalho ── */

.form-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #f0f0f5;
  margin: 0 0 0.35rem 0;
  letter-spacing: -0.02em;
}

.form-subtitle {
  font-size: 0.85rem;
  color: #55556a;
  margin: 0 0 1.75rem 0;
}

/* ── Corpo do formulário ── */

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ── Campo individual ── */

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: #88889a;
  letter-spacing: 0.01em;
}

.form-input {
  padding: 0.65rem 1rem;
  background-color: #12121a;
  border: 1px solid #2a2a38;
  border-radius: 10px;
  color: #f0f0f5;
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #3a3a50;
}

.form-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.form-input--error {
  border-color: #ef4444;
}

.form-input--error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

/* ── Mensagem de erro ── */

.form-error {
  font-size: 0.78rem;
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.form-error::before {
  content: "⚠";
  font-size: 0.72rem;
}

/* ── Botão de submit ── */

.form-submit {
  margin-top: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: #6366f1;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s,
    opacity 0.2s;
  width: 100%;
}

.form-submit:hover:not(:disabled) {
  background-color: #4f46e5;
}

.form-submit:active:not(:disabled) {
  transform: scale(0.98);
}

.form-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Sucesso ── */

.form-success {
  text-align: center;
  color: #4ade80;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 0;
}
```

### `src\components\exercicios-Reducer\styles\registerWizard.css` {#srccomponentsexercicios-reducerstylesregisterwizardcss}

> 5,357 bytes

```css
/* ─── Tokens ──────────────────────────────────────────── */
:root {
  --color-bg: #0d1117;
  --color-surface: #161b22;
  --color-surface-alt: #1c2128;
  --color-border: #30363d;
  --color-accent: #34d399;
  --color-accent-dim: #1a3a2e;
  --color-text-primary: #e6edf3;
  --color-text-muted: #8b949e;
  --color-error: #f85149;
  --color-error-dim: #3d1a1a;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  --transition: 150ms ease;
}

/* ─── Wrapper ─────────────────────────────────────────── */
.wizard {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
}

/* ─── Barra de progresso ──────────────────────────────── */
.wizard__progress {
  display: flex;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.wizard__progress-segment {
  flex: 1;
  height: 4px;
  border-radius: var(--radius-sm);
  background: var(--color-border);
  transition: background var(--transition);
}

.wizard__progress-segment--active {
  background: var(--color-accent);
}

/* ─── Título da etapa ─────────────────────────────────── */
.wizard__step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-lg);
}

/* ─── Campos de formulário ────────────────────────────── */
.wizard__field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.wizard__label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.wizard__input {
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  padding: var(--spacing-sm) var(--spacing-md);
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
  width: 100%;
  box-sizing: border-box;
}

.wizard__input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-dim);
}

.wizard__input--error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px var(--color-error-dim);
}

.wizard__error-msg {
  font-size: 0.75rem;
  color: var(--color-error);
}

/* ─── Ações (botões) ──────────────────────────────────── */
.wizard__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.wizard__btn {
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-lg);
  transition:
    opacity var(--transition),
    background var(--transition);
}

.wizard__btn:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.wizard__btn--primary {
  background: var(--color-accent);
  color: #0d1117;
}

.wizard__btn--primary:hover:not(:disabled) {
  opacity: 0.88;
}

.wizard__btn--ghost {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}

.wizard__btn--ghost:hover:not(:disabled) {
  border-color: var(--color-text-muted);
  color: var(--color-text-primary);
}

/* ─── Etapa 3 — confirmação ───────────────────────────── */
.wizard__confirm-block {
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
}

.wizard__confirm-row {
  display: flex;
  gap: var(--spacing-sm);
  font-size: 0.9375rem;
  color: var(--color-text-primary);
}

.wizard__confirm-label {
  color: var(--color-text-muted);
  min-width: 80px;
}

/* ─── Tela de sucesso ─────────────────────────────────── */
.wizard__success {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.wizard__success-icon {
  background: var(--color-accent-dim);
  border-radius: 50%;
  color: var(--color-accent);
  font-size: 1.5rem;
  height: 56px;
  line-height: 56px;
  width: 56px;
}

.wizard__success-title {
  color: var(--color-text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.wizard__success-sub {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin: 0;
}
```

### `src\components\exercicios-Reducer\styles\StoreDashboard.css` {#srccomponentsexercicios-reducerstylesstoredashboardcss}

> 8,873 bytes

```css
/* ─── Tokens ─────────────────────────────────────────────── */
.dark {
  --bg: #0f1117;
  --bg-surface: #1a1d27;
  --bg-raised: #22263a;
  --border: #2e3250;
  --text-primary: #e8eaf6;
  --text-secondary: #7986cb;
  --text-muted: #4a5080;
  --accent: #5c6bc0;
  --accent-hover: #7986cb;
  --accent-text: #ffffff;
  --danger: #ef5350;
  --success: #66bb6a;
  --badge: #ef5350;
  --badge-cart: #5c6bc0;
  --shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.light {
  --bg: #f0f2f5;
  --bg-surface: #ffffff;
  --bg-raised: #f8f9fc;
  --border: #dde1ec;
  --text-primary: #1a1d27;
  --text-secondary: #3949ab;
  --text-muted: #9fa8c4;
  --accent: #3949ab;
  --accent-hover: #5c6bc0;
  --accent-text: #ffffff;
  --danger: #e53935;
  --success: #43a047;
  --badge: #e53935;
  --badge-cart: #3949ab;
  --shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

/* ─── Reset e base ───────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

/* ─── Shell ──────────────────────────────────────────────── */
.shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text-primary);
  font-family: "Inter", system-ui, sans-serif;
  font-size: 14px;
  transition:
    background 0.2s,
    color 0.2s;
}

.shell__body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.shell__main {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
}

/* ─── Header ─────────────────────────────────────────────── */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow);
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__logo {
  font-size: 20px;
  color: var(--accent);
}

.header__name {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: var(--text-primary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 16px;
  transition:
    background 0.15s,
    color 0.15s;
}

.header__icon-btn:hover {
  background: var(--bg-raised);
  color: var(--text-primary);
}

.header__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: var(--badge);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.header__badge--cart {
  background: var(--badge-cart);
}

.header__user {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
}

.header__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-text);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__logout {
  font-size: 13px;
  color: var(--text-muted);
  padding: 4px 8px;
  border-radius: 6px;
  transition:
    background 0.15s,
    color 0.15s;
}

.header__logout:hover {
  background: var(--bg-raised);
  color: var(--danger);
}

.header__login {
  padding: 7px 16px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-text);
  font-size: 13px;
  font-weight: 600;
  transition: background 0.15s;
}

.header__login:hover {
  background: var(--accent-hover);
}

/* ─── Sidebar ────────────────────────────────────────────── */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  background: var(--bg-surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 8px;
}

.sidebar__profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px 20px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 8px;
}

.sidebar__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-text);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sidebar__user-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.sidebar__user-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar__user-role {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar__guest {
  font-size: 13px;
  color: var(--text-muted);
  padding: 4px 0;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 8px;
  flex: 1;
}

.sidebar__nav-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  text-align: left;
  transition:
    background 0.15s,
    color 0.15s;
}

.sidebar__nav-item:hover {
  background: var(--bg-raised);
  color: var(--text-primary);
}

.sidebar__nav-item--active {
  background: var(--bg-raised);
  color: var(--accent);
  font-weight: 600;
}

.sidebar__footer {
  padding: 16px 12px 0;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.sidebar__notify-btn {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px dashed var(--border);
  font-size: 12px;
  color: var(--text-muted);
  transition:
    border-color 0.15s,
    color 0.15s;
}

.sidebar__notify-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ─── Product Grid ───────────────────────────────────────── */
.product-grid__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
}

.product-grid__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.product-grid__count {
  font-size: 13px;
  color: var(--text-muted);
}

.product-grid__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

/* ─── Product Card ───────────────────────────────────────── */
.product-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}

.product-card:hover {
  box-shadow: var(--shadow);
  border-color: var(--accent);
}

.product-card__category {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.product-card__name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.product-card__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;
}

.product-card__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-card__price {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.product-card__stock {
  font-size: 11px;
  font-weight: 500;
}

.product-card__stock--ok {
  color: var(--success);
}

.product-card__stock--low {
  color: var(--danger);
}

.product-card__btn {
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-text);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.15s;
  flex-shrink: 0;
}

.product-card__btn:hover {
  background: var(--accent-hover);
}
```

### `src\components\exercicios-Reducer\styles\style.css` {#srccomponentsexercicios-reducerstylesstylecss}

> 4,044 bytes

```css
/* TodoApp.css */

.todo-wrapper {
  min-height: 50vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 1rem;
  background-color: #fff;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  border-radius: 8px;
}

.todo-card {
  width: 100%;
  max-width: 560px;
  margin: 2rem 2rem 0 2rem;
  background-color: #1a1a24;
  border: 1px solid #2a2a38;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

/* .todo-card:hover {
  background-color: #fff;
  transition: background-color 0.2s ease;
} */

.todo-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f0f0f5;
  margin: 0 0 1.75rem 0;
  letter-spacing: -0.02em;
}

/* ── Input + Botão ── */

.todo-input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.todo-input {
  flex: 1;
  padding: 0.65rem 1rem;
  background-color: #12121a;
  border: 1px solid #2a2a38;
  border-radius: 10px;
  color: #f0f0f5;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input::placeholder {
  color: #55556a;
}

.todo-input:focus {
  border-color: #6366f1;
}

.btn-add {
  padding: 0.65rem 1.25rem;
  background-color: #6366f1;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
  white-space: nowrap;
}

.btn-add:hover {
  background-color: #4f46e5;
}

.btn-add:active {
  transform: scale(0.97);
}

/* ── Filtros ── */

.todo-filters {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.btn-filter {
  padding: 0.4rem 0.9rem;
  background-color: transparent;
  border: 1px solid #2a2a38;
  border-radius: 8px;
  color: #88889a;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-filter:hover {
  border-color: #6366f1;
  color: #c4c4d4;
}

.btn-filter[aria-pressed="true"] {
  background-color: #6366f1;
  border-color: #6366f1;
  color: #fff;
  font-weight: 600;
}

.btn-clear {
  margin-left: auto;
  padding: 0.4rem 0.9rem;
  background-color: transparent;
  border: 1px solid #2a2a38;
  border-radius: 8px;
  color: #88889a;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-clear:hover {
  border-color: #ef4444;
  color: #ef4444;
}

/* ── Lista ── */

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #12121a;
  border: 1px solid #2a2a38;
  border-radius: 10px;
  transition: border-color 0.2s;
}

.todo-item:hover {
  border-color: #3a3a50;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  flex: 1;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #6366f1;
  cursor: pointer;
  flex-shrink: 0;
}

.todo-text {
  font-size: 0.95rem;
  color: #c4c4d4;
  transition: color 0.2s;
}

.todo-text--completed {
  text-decoration: line-through;
  color: #55556a;
}

.btn-remove {
  background: none;
  border: none;
  color: #55556a;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  line-height: 1;
  transition:
    color 0.2s,
    background-color 0.2s;
  flex-shrink: 0;
}

.btn-remove:hover {
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}

/* ── Empty state ── */

.todo-empty {
  text-align: center;
  color: #55556a;
  font-size: 0.9rem;
  padding: 0.75rem 0;
}

/* ── Rodapé ── */

.todo-footer {
  font-size: 0.82rem;
  color: #55556a;
  border-top: 1px solid #2a2a38;
  padding-top: 1rem;
  margin-top: 0.5rem;
}
```

### `src\components\exercicios-Reducer\styles\trafficLight.css` {#srccomponentsexercicios-reducerstylestrafficlightcss}

> 1,787 bytes

```css
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 3.2rem;
  font-family: "DM Mono", "Courier New", monospace;
}

/* Caixa do semáforo */
.housing {
  background: #1c2333;
  border: 2px solid #30363d;
  border-radius: 1.2rem;
  padding: 2rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* Bolha base — estado apagado */
.bulb {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #2d3748;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}

/* Cores base para a bolha apagada — feedback sutil de identidade */
.red {
  background: #3d2d2d;
}
.yellow {
  background: #3d3820;
}
.green {
  background: #1f3530;
}

/* Estado ativo — cada cor com seu glow próprio */
.red.active {
  background: #f87171;
  box-shadow: 0 0 2rem rgba(248, 113, 113, 0.6);
}

.yellow.active {
  background: #fbbf24;
  box-shadow: 0 0 2rem rgba(251, 191, 36, 0.6);
}

.green.active {
  background: #34d399;
  box-shadow: 0 0 2rem rgba(52, 211, 153, 0.6);
}

/* Mensagem de estado */
.message {
  font-size: 1.2rem;
  color: #e2e8f0;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Botão manual */
.button {
  background: transparent;
  border: 1px solid #30363d;
  border-radius: 0.6rem;
  color: #718096;
  font-family: inherit;
  font-size: 0.9rem;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  letter-spacing: 0.04em;
}

.button:hover {
  border-color: #4a5568;
  color: #a0aec0;
}

.button:active {
  background: rgba(255, 255, 255, 0.03);
}
```

### `src\index.css` {#srcindexcss}

> 850 bytes

```css
html,
body,
#root {
  margin: 0;
  padding: 0;
  height: 100%;
}

[data-theme="dark"] {
  background-color: #111827;
  color: #fff;
}

[data-theme="light"] {
  background-color: #ffffff;
  color: #111827;
}

.theme-toggle-button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

[data-theme="dark"] .theme-toggle-button {
  background-color: #ffffff;
  color: #0d1117;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

[data-theme="dark"] .theme-toggle-button:hover {
  background-color: #c1c1c1;
  color: #0d1117;
}

[data-theme="light"] .theme-toggle-button {
  background-color: #0d1117;
  color: #ffffff;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

[data-theme="light"] .theme-toggle-button:hover {
  background-color: #000000;
  color: #c1c1c1;
}
```

## Arquivos .JS

### `docs\useContext.js` {#docsusecontextjs}

> 1,313 bytes

```javascript
hljs.highlightAll()

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '✓ Copiado'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = 'Copiar'
      btn.classList.remove('copied')
    }, 2000)
  })
}

function toggleSolution(btn) {
  const block = btn.nextElementSibling
  const isOpen = block.classList.contains('open')
  block.classList.toggle('open')
  btn.textContent = isOpen ? '👁 Ver solução' : '🙈 Ocultar solução'
  if (!isOpen) hljs.highlightAll()
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('sidebar-open')
}

// Destaque do link ativo no sidebar
const links = document.querySelectorAll('.sidebar-link')
const sections = document.querySelectorAll('.section')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'))
      const id = entry.target.id
      const link = document.querySelector(`.sidebar-link[href="#${id}"]`)
      if (link) link.classList.add('active')
    }
  })
}, { rootMargin: '-40% 0px -55% 0px' })

sections.forEach(s => observer.observe(s))
```

### `docs\useReducer.js` {#docsusereducerjs}

> 1,276 bytes

```javascript
hljs.highlightAll()

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '✓ Copiado'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = 'Copiar'
      btn.classList.remove('copied')
    }, 2000)
  })
}

function toggleSolution(btn) {
  const block = btn.nextElementSibling
  const isOpen = block.classList.contains('open')
  block.classList.toggle('open')
  btn.textContent = isOpen ? '👁 Ver solução' : '🙈 Ocultar solução'
  if (!isOpen) hljs.highlightAll()
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('sidebar-open')
}

const links = document.querySelectorAll('.sidebar-link')
const sections = document.querySelectorAll('.section')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'))
      const id = entry.target.id
      const link = document.querySelector(`.sidebar-link[href="#${id}"]`)
      if (link) link.classList.add('active')
    }
  })
}, { rootMargin: '-40% 0px -55% 0px' })

sections.forEach(s => observer.observe(s))
```

### `eslint.config.js` {#eslintconfigjs}

> 751 bytes

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
```

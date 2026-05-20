# treinamento-reducer-createcontext — PROJECT_LESSON (2026-04-02)

## 1. Stack e decisões de configuração

O stack detectado é deliberadamente mínimo: React 19 + TypeScript + Vite, sem roteamento e com ESM (ver `aruanda-output/PROJECT_CONTEXT.md`). Isso posiciona o projeto mais como um laboratório de estado/arquitetura (Context API, hooks customizados) do que como um produto completo com camadas de infra e páginas.

Vite como bundler (em contraste com Webpack) é menos uma escolha “de performance” e mais uma escolha de ergonomia e fricção baixa para iterar em UI e em arquitetura de estado. Em um projeto cujo foco é treinar reducer/Context e composição, o custo cognitivo de configuração complexa é ruído; Vite reduz esse ruído.

ESM (módulos) reforça uma postura moderna: dependências e imports são tratados como grafo de módulos, e isso amplifica tanto benefícios quanto problemas. Benefício: tree-shaking e análise estática mais previsível. Problema: circular dependencies aparecem mais cedo e de forma mais fatal quando se erra a fronteira de módulos (especialmente entre “context” e “hooks” que importam uns aos outros). A presença explícita de `import type` (ver seção 4 em `aruanda-output/PROJECT_CONTEXT.md`) indica que o projeto já está operando com a consciência de que tipos não devem virar dependências de runtime — isso é uma defesa direta contra ciclos acidentais e contra bloat de bundle.

O ponto mais informativo, no entanto, é o “negativo”: o TypeScript está com strict mode desativado e sem `noUnusedLocals`/`noUnusedParameters` (ver “Configuração TypeScript” em `aruanda-output/PROJECT_CONTEXT.md`). Em 2026, isso é um sinal forte de que o projeto prioriza velocidade de exploração (e redução de atrito para quem está aprendendo) acima de garantias de contrato. Em um treino de Context/Reducer, isso costuma acontecer por dois motivos:

Primeiro: o projeto provavelmente passa por refactors frequentes, e strictness “pune” o aluno por trabalho incompleto, criando fricção. Segundo: existe duplicação/variação de implementações (há uma pasta literal `src/códigos duplicados/…` em `aruanda-output/PROJECT_CONTEXT.md`), e strictness faria o custo de manutenção e de consistência aparecer imediatamente.

A alternativa (strict + `noUnused*` ligados) seria a postura “trabalho em produção”, onde o treinamento já começa com os guardrails. Essa alternativa é melhor quando o objetivo é treinar disciplina de refactor e arquitetura sustentável desde o primeiro commit. O projeto atual, pelo que o contexto revela, parece estar em uma fase anterior: experimentar padrões de Context e comparar implementações (duplicadas) sem que o compilador interrompa o fluxo a cada passo.

ESLint está presente (ver “Qualidade” em `aruanda-output/PROJECT_CONTEXT.md`), mas o contexto não confirma Prettier, Husky ou regras de commit. Isso cria um espaço interessante: lint por si só reduz erros óbvios e inconsistência, mas sem um formatter determinístico e sem hooks de commit, a base fica mais suscetível a drift: cada arquivo pode “ganhar um estilo”. Em um projeto com múltiplos contexts/hook wrappers, o drift de estilo não é cosmético: ele aumenta o custo de leitura (que é onde o bug nasce).

Em resumo, o stack sinaliza uma intenção de aprendizagem prática em estado global leve (Context), com uma configuração de qualidade parcialmente aplicada: há lint, há `import type`, mas a política de tipos ainda não está configurada para impedir regressões arquiteturais.

### Strict mode desativado: o que isso permite e o que isso esconde

Com strict desativado (ver “Configuração TypeScript” em `aruanda-output/PROJECT_CONTEXT.md`), o projeto reduz fricção para experimentar. O custo é que o feedback do compilador deixa de apontar classes de problemas que são comuns justamente em projetos com Context API:

1. Estado inicial “muito largo”. Sem strict, é fácil deixar valores opcionais escaparem para consumidores e só descobrir em runtime.
2. Refactors incompletos. Em um projeto que contém implementações duplicadas (`src/códigos duplicados/…`), strictness é o que transforma drift em erro imediato.

A alternativa de qualidade em 2026 é ligar strict gradualmente por fronteira (não “big bang”), começando pelos domínios com maior risco de invariantes quebradas. Pelo contexto, os candidatos naturais são `src/features/agent/useAgent.ts` e `src/components/AuthContext/AuthContext.tsx`, porque tendem a carregar lógica mais rica do que tema/idioma.

### ESM + `import type`: defesa direta contra ciclos no layout atual

O contexto detecta `import type` e detecta caminhos relativos (ver “Padrões Técnicos” em `aruanda-output/PROJECT_CONTEXT.md`). Em ESM, ciclos aparecem quando features e contexts se importam de forma cruzada. Uma disciplina que funciona com a arquitetura atual é:

- Arquivos de tipo (como `src/features/agent/agent.types.ts`) devem ser consumidos via `import type` sempre que possível.
- Providers (`src/components/*Context/*.tsx`, `src/ThemeContext.tsx`) não devem importar componentes consumidores.
- Consumers (`src/components/Header/Header.tsx`, `src/components/UserMenu/UserMenu.tsx`, `src/features/agent/AgentChat.tsx`) devem importar apenas o hook e, quando necessário, tipos via `import type`.

Essa disciplina não é “boa prática genérica”; ela é a forma mais barata de evitar que a combinação “ESM + múltiplos contexts + features” vire um grafo cíclico.

### ESLint sem gates: por que isso importa para um projeto com comparações

O contexto só garante ESLint (ver “Qualidade” em `aruanda-output/PROJECT_CONTEXT.md`). Se não houver formatter determinístico e hooks de commit (não confirmados no contexto), a base tende a acumular inconsistências pequenas que poluem diffs.

Isso importa mais aqui do que em um CRUD comum, porque o projeto explicitamente mantém versões paralelas de padrões (`src/códigos duplicados/…`). O valor pedagógico dessas versões é comparar decisões. Quando o estilo varia, você compara ruído.

Se a intenção é aprendizado por contraste, ferramentas de qualidade deixam de ser acessório: elas viram infraestrutura para leitura e comparação.

## 2. Arquitetura de pastas

O diagnóstico do contexto é inequívoco: camadas presentes são “types” e “components”; camadas ausentes incluem `pages`, `hooks`, `state`, `utils`, `services`, `data` (ver “Estrutura de Pastas” em `aruanda-output/PROJECT_CONTEXT.md`). Essa ausência, em um projeto que já tem múltiplos contexts e hooks customizados (`useAuth`, `useLanguage`, `useTheme`, `useAgent`), implica que decisões de arquitetura estão sendo resolvidas via “colocação local” (arquivos dentro de `components/` ou na raiz de `src/`) em vez de via taxonomia explícita.

Isso tem um efeito direto: a fronteira entre “renderização” e “estado” tende a ser difusa. Um exemplo já aparece no contexto: há `src/components/AuthContext/AuthContext.tsx` e `src/components/LanguageContext/LanguageContext.tsx` como “components”, mas também existe `src/ThemeContext.tsx` fora de `components/` (ver “Gerenciamento de Estado” e “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Essa inconsistência de localização não é meramente estética; ela determina como a equipe (ou o aluno) busca por responsabilidades.

Uma codebase sem `hooks/` frequentemente coloca hooks customizados ao lado do provider (e isso acontece aqui, porque o contexto detecta `useAuth` dentro de `src/components/AuthContext/AuthContext.tsx` e `useLanguage` dentro de `src/components/LanguageContext/LanguageContext.tsx`). Esse padrão tem um benefício: coesão local máxima. O hook e o provider evoluem juntos. O custo é o acoplamento: o hook passa a ser uma API “privada” daquele arquivo, e sua reutilização fora do “mundo do provider” fica menos óbvia.

Uma alternativa moderna em 2026 para projetos com múltiplos contexts é separar:

- Provider em `src/contexts/XContext.tsx`
- Hook em `src/hooks/useX.ts`
- Tipos em `src/types/x.ts`

Isso reduz cycles e deixa explícito o contrato público. Mas essa alternativa só vale quando o projeto passa a ter várias árvores de consumo e múltiplas features dependentes daquele estado. O contexto do projeto sugere que ele ainda está consolidando o aprendizado de Context e comparando implementações (inclusive duplicadas).

A ausência de `services/` e `data/` não é um problema por si só, porque o contexto não detecta fetch/API em nenhum lugar. Mas ela é uma decisão que vira dívida imediatamente quando o `src/features/agent/…` crescer. O contexto já indica um “feature” (`src/features/agent/AgentChat.tsx` e `src/features/agent/useAgent.ts` são listados em “Componentes” e “Gerenciamento de Estado”). Se esse feature evoluir para chamar uma API, sem `services/` você tende a empurrar fetch para dentro do hook (o que mistura domínio com infraestrutura) ou para dentro de componentes (o que destrói testabilidade). Se esse projeto quiser se tornar um template reutilizável, a ausência de `services/` é o primeiro ponto a endereçar.

Há também um dado estrutural muito relevante: existe uma pasta chamada `src/códigos duplicados/` contendo contextos (`AuthContext.tsx`, `LanguageContext.tsx`, `ThemeContext.tsx`) (ver “Gerenciamento de Estado” e “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso é um artefato didático: o projeto, ao que tudo indica, mantém implementações paralelas do mesmo conceito, talvez para comparar padrões (ex.: Context + `useState` vs Context + `useReducer`; ou API do hook; ou memoização). A alternativa “limpa” seria remover duplicados e manter uma única fonte. O projeto sacrificou “higiene” para ganhar contraste pedagógico.

Se a intenção for manter esse contraste sem pagar em confusão permanente, o custo se controla com uma regra simples: duplicados devem ser isolados em uma área explicitamente marcada como “experimento”, não importada pela aplicação principal, e com naming que encode o padrão (ex.: `ThemeContext.useState.tsx` vs `ThemeContext.reducer.tsx`). O contexto não permite afirmar se isso já acontece em runtime; apenas mostra a existência dos arquivos e que a aplicação existe (`src/App.tsx`, `src/main.tsx` estão listados).

### Ausência de `hooks/`: custo de descoberta e de API pública

O contexto detecta hooks customizados (`useAuth`, `useLanguage`, `useTheme`, `useAgent`) (ver “Gerenciamento de Estado” em `aruanda-output/PROJECT_CONTEXT.md`), mas a estrutura declarada não inclui `hooks/`. Isso não é “faltam hooks”; é “falta um lugar canônico para contrato público”.

Em projetos pequenos, co-localizar hook + provider no mesmo arquivo é coeso. O problema começa quando existem múltiplas implementações do mesmo domínio (ex.: `LanguageContext` existe também em `src/códigos duplicados/LanguageContext.tsx`). Sem uma superfície pública explícita, o aluno aprende que “qualquer import serve”. Em arquitetura, isso é caro: a fonte canônica precisa ser óbvia.

Uma alternativa que mantém o layout atual sem criar uma pasta global é introduzir um `index.ts` por domínio que exporta apenas a API pública. Isso permite esconder variações e impedir imports diretos de arquivos experimentais:

```ts
// src/components/LanguageContext/index.ts (exemplo de intenção)
export { LanguageProvider } from './LanguageContext'
export { useLanguage } from './LanguageContext'
export type { Language } from './LanguageContext'
```

Mesmo que o projeto esteja em treino, esse tipo de “barreira” ensina um conceito essencial: APIs públicas têm portas; implementações internas mudam.

### “Sem pages” + “sem roteamento”: composição concentrada em poucos nós

O contexto afirma “Roteamento: none” e ausência de `pages/` (ver `aruanda-output/PROJECT_CONTEXT.md`). Isso desloca a composição para `src/App.tsx`, para layout (`src/components/Header/Header.tsx`) e para features que se auto-contêm (`src/features/agent/AgentChat.tsx`).

Essa decisão é coerente com a intenção de treino: reduz o espaço de decisão e foca em estado global e composição. A alternativa de introduzir `pages/` faz sentido quando existir mais de um fluxo/tela e quando o `App` começar a acumular decisões de visibilidade, navegação e carregamento.

### “Sem services”: o primeiro lugar onde isso vai estourar é o agent

O contexto não detecta fetch/API, mas o feature `agent` (`src/features/agent/…`) é o candidato natural a integrar com backend/LLM no futuro. Sem uma camada `services/` ou um boundary local, é comum empurrar fetch para dentro de `src/features/agent/useAgent.ts`. Isso mistura infra (HTTP/retries) com domínio (modelagem de mensagens) e com UI (loading/disabled).

Uma alternativa mínima (sem mudar a arquitetura global) é criar um client dentro do próprio feature e fazer o hook depender dele:

```ts
// src/features/agent/agent.client.ts (exemplo de intenção)
export async function sendAgentMessage(/* ... */) {
  // integração/fetch
}
```

Isso preserva testabilidade do hook e impede que o “treino de hooks” vire “treino de mocks de fetch”.

## 3. Contratos de tipo

O contexto detecta tipos com `type` (não `interface`) em `src/features/agent/agent.types.ts` e em contextos de linguagem (`src/components/LanguageContext/LanguageContext.tsx` e `src/códigos duplicados/LanguageContext.tsx`) (ver “Contratos de Tipo” em `aruanda-output/PROJECT_CONTEXT.md`). A escolha por `type` em 2026 é normalmente uma decisão pragmática: `type` compõe melhor (unions, intersections, conditional types) e reduz o incentivo a “herança estrutural” que interfaces, culturalmente, encorajam.

Como o contexto não inclui o shape dos tipos (apenas seus nomes: `Message`, `TaskResponse`, `Language`), a análise precisa focar no que essa distribuição de tipos revela.

### `src/features/agent/agent.types.ts` — `Message` e `TaskResponse`

O fato de existir um arquivo dedicado de tipos dentro de uma feature (`src/features/agent/agent.types.ts`) sugere uma fronteira saudável: o feature “agent” tenta isolar seu domínio. Mesmo sem ver os campos, os nomes já indicam uma arquitetura provável:

- `Message` tende a ser um contrato de UI/conversa (lista, histórico, input do usuário).
- `TaskResponse` tende a ser um contrato de retorno de uma ação do agent (tarefa, status, resultado).

Em 2026, uma decisão crítica aqui é separar “tipo de domínio” de “tipo de transporte”. Se `TaskResponse` representa um payload vindo de uma API/LLM, ele deveria ser tratado como “inseguro” até validação. TypeScript não valida runtime; então, a escolha de `type` é apenas documentação e suporte de autocomplete. A alternativa robusta é acoplar o tipo a uma validação (Zod, Valibot) e exportar tanto o schema quanto o tipo inferido. O contexto não mostra utilitários nem validação runtime, então é plausível que o projeto esteja no estágio “tipagem de superfície” (o que é coerente com strict desativado).

O custo de manter apenas tipos estáticos é que `useAgent` (`src/features/agent/useAgent.ts`, listado em “Gerenciamento de Estado” em `aruanda-output/PROJECT_CONTEXT.md`) vai assumir invariantes sobre `TaskResponse`. Quando o shape muda, bugs viram runtime. A alternativa descartada (schema runtime) é mais verbosa, mas em features que lidam com agentes/LLMs ela é mais correta, porque outputs são inerentemente não confiáveis.

### `Language` em dois lugares

O tipo `Language` aparece tanto em `src/components/LanguageContext/LanguageContext.tsx` quanto em `src/códigos duplicados/LanguageContext.tsx` (ver “Contratos de Tipo” em `aruanda-output/PROJECT_CONTEXT.md`). Isso é uma evidência concreta de duplicação de contrato. Duplicar o tipo em duas implementações paralelas parece trivial (“é só um union”), mas o custo real é drift: uma versão ganha um idioma novo e a outra não. O drift é especialmente perigoso em contextos, porque o tipo também serve de gate para o estado global.

A alternativa moderna é extrair `Language` para um único módulo estável e importar de ambos os contextos. Em um projeto com alias `@/` isso seria `@/types/language`, mas o contexto explicitamente aponta que alias não foi detectado (ver “Padrões Técnicos” em `aruanda-output/PROJECT_CONTEXT.md`). Sem alias, a alternativa vira import relativo (que também é detectado no projeto), o que aumenta o risco de caminhos quebrando em refactors. Isso mostra uma interdependência real: a ausência de alias e a ausência de `types/` central contribuem para a duplicação de contratos.

### `import type` como indicador de disciplina

O contexto afirma “import type em uso: sim” (ver “Contratos de Tipo” em `aruanda-output/PROJECT_CONTEXT.md`). Essa prática evita duas classes de problema:

1. Tipos virarem imports de runtime, ampliando o bundle e mudando ordem de avaliação de módulos.
2. Tipos criarem cycles por acidente (um arquivo importa um tipo, que importa outra coisa, e de repente vira dependência de runtime).

Em um projeto com múltiplos Context Providers e hooks, cycles são uma ameaça real porque providers frequentemente importam tipos de “features” e features importam hooks do provider. `import type` não resolve cycles de runtime por completo, mas reduz a superfície.

### `any` e desconhecido

O contexto diz “any explícito: não detectado” (ver “Contratos de Tipo” em `aruanda-output/PROJECT_CONTEXT.md`). Isso é um bom sinal: ainda que strict esteja desativado, o projeto está evitando o escape hatch mais caro. A alternativa correta quando o shape é incerto é `unknown` + narrowing explícito, especialmente no feature agent.

### Tipos sem shape no contexto: como ainda assim extrair decisões úteis

O `PROJECT_CONTEXT.md` lista nomes e locais, mas não expõe os campos. Isso impõe um padrão de análise mais sênior: falar sobre fronteiras e contratos, não sobre detalhes que você não viu.

No feature `agent`, os tipos vivem em `src/features/agent/agent.types.ts`. Isso sinaliza intenção de encapsular o contrato do domínio junto do código que o usa (`src/features/agent/useAgent.ts`, detectado como hook customizado). A alternativa comum (e pior) é espalhar tipos do feature em contextos globais e criar dependência cruzada sem motivo.

No caso de `Language`, a decisão de manter o tipo dentro do arquivo de contexto (`src/components/LanguageContext/LanguageContext.tsx`) maximiza coesão local, mas enfraquece o contrato público: consumers passam a depender de um detalhe interno, e a duplicação em `src/códigos duplicados/LanguageContext.tsx` torna drift provável.

### `type` como ferramenta de composição (não apenas preferência estética)

Mesmo que o contexto não indique unions ou tipos mapeados, a escolha de `type` é compatível com o tipo de modelagem que Context API tende a exigir: estados discriminados e valores que variam por status. Isso é particularmente relevante para auth e agent, onde estados costumam ter fases (idle/loading/success/error).

Uma alternativa descartada em projetos de treino é modelar estados como múltiplos booleans (“isLoading”, “hasError”). Isso escala mal: combinações inválidas aparecem e o tipo não impede. Em 2026, o design mais robusto é discriminado (union), e `type` é a via natural.

### `import type` e efeitos em bundle/ordem de execução

O ganho mais valioso de `import type` no layout atual não é micro-otimização de bundle; é evitar que imports de tipos mudem a ordem de execução de módulos e introduzam cycles de runtime.

Isso importa especialmente quando:

- Providers importam tipos de features.
- Features importam hooks de providers.

Com `import type`, parte desse grafo deixa de existir em runtime, reduzindo a chance de um ciclo se manifestar como bug difícil.

## 4. Componentes

O contexto lista componentes e, para cada um, indica hooks usados e alguns metadados (props tipadas não detectado; React.FC não). Como regra: a ausência de props tipadas no contexto não significa que o componente não possua props — pode significar que o componente não recebe props ou que o detector não identificou o padrão. Mas, dado o conjunto (muitos são providers), é plausível que vários componentes realmente não tenham props de negócio além de `children`.

O que é possível analisar com segurança é a distribuição de responsabilidades a partir dos hooks usados.

### Providers e Contexts como componentes de infraestrutura

Os arquivos:

- `src/components/AuthContext/AuthContext.tsx`
- `src/components/LanguageContext/LanguageContext.tsx`
- `src/ThemeContext.tsx`

são componentes que carregam estado global (ver “Gerenciamento de Estado” e “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). A escolha de hooks nesses arquivos é informativa:

- `useState` nos providers (`AuthContext`, `LanguageContext`, `ThemeContext`) sugere que o estado global é simples e que transições são diretas, sem uma máquina de estados formal. Isso pode ser correto para auth mock e tema/idioma.
- `useCallback` em `src/components/AuthContext/AuthContext.tsx` indica preocupação (ou treino) com estabilidade de referência — frequentemente para evitar re-renders em consumers, ou para manter uma API de contexto estável.
- `useContext` aparece junto com hooks customizados (`useAuth`, `useLanguage`, `useTheme`), o que é o padrão moderno: o hook encapsula o `useContext` e centraliza invariantes (por exemplo, lançar erro quando provider ausente). O contexto não mostra o conteúdo do hook, mas detecta sua existência.

A alternativa descartada aqui é usar props drilling ou manter estado local em cada componente. Em um app com `Header` e `UserMenu`, onde tema/idioma/auth são consumidos por múltiplos nós, Context API é a escolha correta para evitar passar props por vários níveis.

O tradeoff aceito: Context com `useState` no provider causa re-render de todos os consumers a cada mudança de estado. Se o projeto expandir e o contexto começar a carregar objetos grandes (ex.: auth com tokens, perfil, permissões), a estratégia vira gargalo. A alternativa moderna é:

- Migrar para `useReducer` quando transições ficam complexas e quando você quer centralizar invariantes e logs.
- Ou migrar para um store externo (Zustand/Jotai) quando a granularidade de subscriptions se torna relevante.

### `src/components/AppProviders/AppProviders.tsx`

Esse componente provavelmente é o “composition root” do app: empilhar providers em um lugar (ver lista de componentes em `aruanda-output/PROJECT_CONTEXT.md`). O contexto não mostra hooks, o que é coerente: AppProviders idealmente só compõe e não tem lógica.

Uma decisão aqui é ordem de providers e superfície de dependências. Exemplo: `AuthProvider` pode ser dependência de `UserMenu` e `Header`. Se `ThemeProvider` for usado pelo `Header`, ele precisa envolver o `Header`. Sem um diretório `contexts/`, o arquivo `AppProviders` assume a responsabilidade de documentar essa ordem por código.

Alternativa descartada: colocar providers diretamente em `src/main.tsx`. Isso funciona, mas `AppProviders` melhora composição e testabilidade (você pode renderizar `<AppProviders><Component/></AppProviders>` em testes). Mesmo que o projeto ainda não tenha testes, a estrutura sugere uma intenção de arquitetura.

### `src/components/Header/Header.tsx`

O hook detectado é `useTheme` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso revela que `Header` tem responsabilidade visual e consome estado global de tema. A alternativa seria passar o tema como prop; mas header tende a estar alto na árvore, e tema é transversal. Context é adequado.

O risco arquitetural aparece quando `Header` também começar a consumir auth e linguagem e, em seguida, começar a conter lógica condicional complexa (menus, permissões). O contexto já lista `UserMenu` como um componente separado, que consome `useAuth`, `useLanguage`, `useTheme` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso é um sinal de decomposição correta: `Header` fica mais leve, `UserMenu` concentra o “cross-cutting state”.

### `src/components/ThemeToggle/themeToggle.tsx`

O hook detectado é `useTheme` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). O naming do arquivo (camelCase `themeToggle.tsx` em vez de `ThemeToggle.tsx`) é um ponto técnico/organizacional: em codebases React modernas, arquivos de componentes são PascalCase para alinhar com o símbolo exportado. O contexto não autoriza afirmar o export, mas o path já mostra a inconsistência.

O toggle de tema como componente separado é um padrão de “UI atom” que consome contexto. A alternativa é acoplar toggle ao `Header`. Separar facilita testes e reutilização (ex.: em `UserMenu` ou em settings).

### `src/components/UserMenu/UserMenu.tsx`

Esse componente consome três contexts (`useAuth`, `useLanguage`, `useTheme`) (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso faz dele um “junction”: é onde preocupações transversais se encontram. Há duas leituras:

1. Se o menu é o único lugar onde esses estados se combinam, concentrar aqui é bom: o resto do app não precisa conhecer as três dimensões.
2. Se vários componentes começarem a consumir as três dimensões, o problema é o design do estado: você terá duplicação de lógica de combinação (ex.: textos dependem de idioma e de auth) e re-renders amplos.

A alternativa moderna, quando a combinação vira regra, é criar um hook derivado (ex.: `useUserMenuModel`) que retorna dados prontos para renderização (itens, labels, handlers), e manter `UserMenu` como rendering puro. O projeto não tem `hooks/`, mas poderia definir esse hook co-localizado.

### `src/features/agent/AgentChat.tsx`

Esse componente usa `useState`, `useRef`, `useAgent` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso revela um design comum: state local para UI imediata (texto do input, scroll) e um hook de domínio (`useAgent`) para orquestrar mensagens e tarefas.

`useRef` sugere que há manipulação de DOM/imperativo (scroll to bottom, foco, etc.). Em 2026, isso é aceitável quando encapsulado e quando há fallback para `prefers-reduced-motion` se existirem animações; mas o contexto não fornece detalhes de UI.

A alternativa arquitetural a `useState` local é mover o state do chat para o hook `useAgent` e expor um modelo; isso melhora testabilidade e separação. Mas move complexidade para o hook e pode tornar o componente “burro demais”. Para um treino, manter parte do state local é didaticamente útil: mostra o limite entre estado de UI e estado de domínio.

### `src/App.tsx` e `src/main.tsx`

`src/App.tsx` usa `useTheme` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). Isso normalmente indica que o tema afeta layout global (classe no root, provider de estilos, etc.). Se `App` consome `useTheme`, ele provavelmente precisa reagir a mudanças de tema e aplicar classes no container. A alternativa é o provider aplicar essas classes no `<body>` ou no root do app, eliminando a necessidade de `App` consumir tema. Essa alternativa reduz re-renders do app inteiro quando o tema muda, mas aumenta o “poder” do provider e sua responsabilidade sobre DOM global.

`src/main.tsx` não usa hooks, o que é adequado: ele deveria ser apenas o entrypoint de renderização. Se `main.tsx` começa a acumular providers e lógica, ele vira um “arquivo de infra” difícil de testar. O projeto já tem `AppProviders`, o que sugere que essa alternativa foi evitada.

### Componentes duplicados

O contexto lista também `src/códigos duplicados/AuthContext.tsx`, `src/códigos duplicados/LanguageContext.tsx`, `src/códigos duplicados/ThemeContext.tsx` (ver “Componentes” em `aruanda-output/PROJECT_CONTEXT.md`). A análise importante aqui é de risco: se esses arquivos são importados em runtime ao mesmo tempo que os “não duplicados”, o app pode carregar múltiplos providers para o mesmo conceito e criar bugs difíceis de rastrear (ex.: `useTheme` lendo de um contexto enquanto o provider ativo é outro). A alternativa para manter duplicados com segurança é garantir que apenas uma “implementação” esteja conectada ao app por vez e que o naming deixe essa escolha explícita.

### Contrato de props como mecanismo de arquitetura (mesmo sem `hooks/` e `pages/`)

O contexto indica “Props tipadas: não detectado” para os componentes listados (ver `aruanda-output/PROJECT_CONTEXT.md`). Ainda que alguns desses componentes possam não receber props, o ponto arquitetural é: quando um componente começa a receber variações, o contrato de props vira a forma mais barata de manter a responsabilidade do componente explícita.

Em particular, `src/components/UserMenu/UserMenu.tsx` já é um “junction” de estado global. Se ele também começar a receber flags de UI (variant, alinhamento, modo compacto), existe uma bifurcação:

- Ou você mantém o componente como “smart component” e ele decide tudo consumindo contexts, e então props viram ruído.
- Ou você transforma o componente em “rendering puro” e move decisões para um hook/model, e props viram parte do contrato.

Sem ver o código, a decisão não pode ser tomada aqui; mas a existência dos hooks consumidos (auth + language + theme) torna essa bifurcação inevitável conforme o menu cresce.

### `AppProviders` como boundary de dependências

`src/components/AppProviders/AppProviders.tsx` existe e é listado como componente (ver `aruanda-output/PROJECT_CONTEXT.md`). Esse arquivo, mesmo sem hooks, é onde o projeto decide:

- quais domínios existem,
- qual a ordem de dependência entre eles,
- e qual parte do app é “dentro” vs “fora” de cada contexto.

É comum subestimar esse arquivo e tratá-lo como “boilerplate”. No layout atual, ele é o módulo que impede que providers fiquem espalhados em `src/main.tsx` e que consumers passem a depender do provider diretamente.

Uma alternativa descartada (e pior) é importar providers “onde precisar”. Isso torna o app não determinístico: o estado global muda de acordo com onde o provider foi colocado.

### `AgentChat` e o limite de responsabilidades: sinais dados pelos hooks

O contexto detecta `useState` e `useRef` em `src/features/agent/AgentChat.tsx` e detecta `useAgent` como hook customizado (ver `aruanda-output/PROJECT_CONTEXT.md`). Isso já é uma boa separação: state de UI local e domínio no hook.

O risco aparece quando `useAgent` começa a expor detalhes de UI (por exemplo, refs de scroll) ou quando o componente começa a manipular a lista de mensagens diretamente. A alternativa sustentável é o hook expor apenas:

- dados do domínio (mensagens, status),
- e ações (send, reset),

e o componente gerenciar apenas input e DOM.

Esse limite é a diferença entre um feature que escala e um feature que vira uma “bola de lama” em torno de closures.

## 5. Gerenciamento de estado

O contexto afirma que a estratégia detectada é Context API e que `useReducer` não está em uso (ver “Gerenciamento de Estado” em `aruanda-output/PROJECT_CONTEXT.md`). Também lista todos os arquivos de contexto e hooks customizados detectados:

- `src/components/AuthContext/AuthContext.tsx` (`useAuth`)
- `src/components/LanguageContext/LanguageContext.tsx` (`useLanguage`)
- `src/ThemeContext.tsx` (`useTheme`)
- Duplicados em `src/códigos duplicados/…`
- `src/features/agent/useAgent.ts` (`useAgent`)

Essa combinação descreve uma arquitetura de “micro-stores” por domínio: auth, idioma, tema e um feature específico (agent). Em projetos pequenos e médios, isso é uma escolha excelente: cada provider isola responsabilidade, e a UI consome via hooks. Em 2026, isso é preferível a Redux por padrão quando não há necessidade real de time travel, middleware, devtools ou estado global massivo.

O ponto técnico decisivo é como o provider implementa atualizações. O contexto detecta `useState` nos contextos e `useCallback` pelo menos no auth (`src/components/AuthContext/AuthContext.tsx`). Mesmo sem ver o código, dá para discutir o tradeoff real:

- `useState` com value `{ state, actions }` recria o objeto `value` a cada render. Isso causa re-render em todos os consumers sempre que qualquer parte muda, mesmo que o consumer use apenas um campo.
- `useCallback` estabiliza handlers, mas não estabiliza o `value` do provider se ele for um objeto novo. O “otimizador” natural em Context API é dividir contextos: um contexto para estado, outro para actions; ou usar `useMemo` para memoizar o value.

O contexto (seção “Padrões Técnicos”) diz que `useMemo / useCallback` está em uso (ver `aruanda-output/PROJECT_CONTEXT.md`). Isso sugere que em algum lugar existe memoização. O risco é quando essa memoização vira “incantação” em vez de solução. `useCallback` não é um amuleto: ele só reduz re-renders se consumers compararem referências ou se props forem passadas para children memoizados.

Quando Context API começa a doer neste projeto específico?

1. Quando `UserMenu` (que já consome 3 contexts em `src/components/UserMenu/UserMenu.tsx`) ficar mais pesado. Cada mudança de idioma ou tema pode re-renderizar uma árvore grande se `UserMenu` estiver alto na árvore.
2. Quando o feature `agent` for mais ativo: chat tende a atualizar a cada mensagem; se o provider do agent estiver alto na árvore e não estiver isolado, o app todo pisca.

Por que `useReducer` seria uma alternativa melhor quando transições ficam complexas?

- Centraliza invariantes: ações com payload, transições explícitas.
- Facilita logs e testes: reducer é função pura.
- Reduz o risco de handlers divergirem (múltiplos `setState` espalhados).

Mas `useReducer` tem um custo de modelagem. Para tema e idioma, pode ser overkill; para auth e agent, pode ser justo. O contexto não mostra `useReducer`, o que é coerente com um estágio “intro”.

Uma alternativa de 2026 bastante usada é Zustand/Jotai para granularidade de subscriptions. Mas, para o tamanho aparente do projeto (sem pages, sem services, poucos componentes listados), Context API é adequada, desde que se cuide do “blast radius” de re-render. O documento do contexto não informa se há splitting de contexts; então, a recomendação deve ser condicional: se o projeto sentir stutter quando chat se atualiza, o primeiro ajuste não é trocar biblioteca; é isolar providers (agent) e reduzir o valor instável em providers transversais (theme/language).

Há também um sinal de complexidade didática: existem múltiplas versões de contextos em `src/códigos duplicados/…`. Isso pode indicar que o projeto está estudando abordagens (por exemplo, Context + hooks customizados com checagem de provider, ou com memoização diferente). Se esse for o caso, o aprendizado real aqui é comparar o impacto em re-render e na ergonomia da API do hook.

Uma abordagem técnica robusta para treino, usando apenas Context, é:

- `ThemeContext`: estado pequeno, store simples. Treinar “value memoization”.
- `LanguageContext`: estado pequeno, mas afeta texto/labels. Treinar “derivação de labels” no consumer vs no provider.
- `AuthContext`: estado com ações assíncronas (login/logout). Treinar “API do provider” e “não expor setters crus”.
- `Agent`: estado altamente mutável e com efeitos. Treinar “separar UI state” de “domain state” no hook.

Mesmo sem ver o código, o conjunto de arquivos e hooks detectados já aponta para esse roteiro de decisões.

### Split de Context: a alternativa mais barata antes de trocar biblioteca

Se o projeto começar a sentir re-render excessivo (especialmente no cruzamento `src/components/UserMenu/UserMenu.tsx` e em qualquer UI global em `src/components/Header/Header.tsx`), a alternativa mais barata antes de migrar para Zustand/Jotai é dividir o contexto em duas partes:

- Contexto de estado (lido por muitos).
- Contexto de ações (lido por poucos; ações são estáveis via `useCallback`).

Isso reduz re-renders causados por “value object” instável, sem mudar a estratégia fundamental (Context API). O projeto já usa hooks customizados (`useAuth`, `useLanguage`, `useTheme`), então a mudança pode ser escondida atrás da mesma API do hook.

### Estado derivado: onde colocar a inteligência (provider vs consumer)

No layout atual, há pelo menos dois domínios que tipicamente introduzem estado derivado:

- Idioma (`src/components/LanguageContext/LanguageContext.tsx`): labels e strings.
- Auth (`src/components/AuthContext/AuthContext.tsx`): permissões, “isAuthenticated”.

A decisão não é estética; é sobre repetição e sobre custo de render. Se você derivar no consumer, você espalha regra e duplica trabalho em cada render. Se você derivar no provider, você pode:

- memoizar derivação uma vez;
- e expor um modelo estável.

A alternativa descartada que costuma aparecer em projetos de treino é derivar “no JSX” (condicionais inline). Isso funciona no começo e vira dívida quando `UserMenu` começa a ter múltiplas opções e variações.

### `useAgent` como estado global local ao feature

O contexto lista `useAgent` como hook customizado em `src/features/agent/useAgent.ts` e lista `AgentChat.tsx` como consumidor. Mesmo que o projeto não use um provider para agent, ele já está usando uma fronteira: o hook. Isso é um padrão importante em 2026: nem todo estado compartilhado precisa de Context; às vezes um hook co-localizado e liftado para o topo do feature é suficiente.

O critério para promover `useAgent` para Context/Provider é quando múltiplos componentes fora de `AgentChat` precisarem do estado do agent. Até lá, manter o estado dentro do feature reduz blast radius e reduz acoplamento.

## 6. Utilitários e funções puras

O contexto não detecta uma camada `utils/` (ver “Estrutura de Pastas” em `aruanda-output/PROJECT_CONTEXT.md`) e não lista utilitários explícitos. A consequência não é “não há lógica”; a consequência é “a lógica pura, se existir, tende a viver dentro de componentes/hook files”.

Isso é um ponto importante em um projeto que treina Context/Reducer: o salto de qualidade não vem apenas de trocar `useState` por `useReducer`; ele vem de extrair funções puras que:

- calculam o próximo estado,
- transformam dados de UI,
- geram modelos de renderização.

Se essa lógica ficar inline no JSX, o custo aparece em três dimensões:

1. Testabilidade: você só testa via render, não via função pura.
2. Reuso: regras duplicam entre `UserMenu` e `Header` (especialmente quando idioma muda labels).
3. Debug: regressões viram “perdi o fio” porque o código de regra está espalhado em closures.

Um projeto sem `utils/` ainda pode ser bem arquitetado se co-localizar utilitários ao lado do domínio, por exemplo:

- `src/features/agent/agent.model.ts`
- `src/components/UserMenu/userMenu.model.ts`

O contexto, porém, só lista `src/features/agent/agent.types.ts` (tipos) e `src/features/agent/useAgent.ts` (hook), e nenhum `.model.ts`. Isso sugere que o feature agent está em um estágio inicial de estruturação.

Em 2026, a decisão correta para “funções puras” depende do que você quer treinar:

- Se o objetivo é treinar reducer, você extrai a lógica de transição para um reducer puro.
- Se o objetivo é treinar Context, você extrai a lógica de derivação para uma função pura e mantém o provider simples.
- Se o objetivo é treinar componentes, você extrai “view models” para reduzir condicionais no JSX.

Sem utilitários detectados, a seção 6 vira, neste projeto específico, um diagnóstico de oportunidade: o próximo passo de maturidade do treino é criar pelo menos um “núcleo puro” que seja exercitado por `useAgent` ou por `AuthContext`.

Uma alternativa que frequentemente parece tentadora, mas é pior aqui, é jogar tudo para dentro do hook e chamar isso de “separação”. Hooks podem ficar tão difíceis de testar quanto componentes se misturam efeitos e regras. O critério de “pureza” não é o arquivo; é a função.

Critério operacional: se uma regra pode ser expressa como `(input) => output` sem tocar em DOM, tempo, storage, rede, ela deveria ser extraída. O hook então orquestra chamadas e efeitos.

### Extração orientada a “fronteiras” do projeto (onde a pureza paga mais)

O contexto detecta duas zonas em que regras puras tendem a aparecer mesmo em projetos pequenos:

- Zona de “modelagem de menu” em `src/components/UserMenu/UserMenu.tsx`, por ser junction de múltiplos contexts.
- Zona de “pipeline de mensagem” no feature `agent` (`src/features/agent/useAgent.ts` + `src/features/agent/agent.types.ts`).

Sem um `utils/` central, a extração mais consistente com a arquitetura atual é criar arquivos de modelo no próprio domínio (co-localização), e não “um saco de helpers”. Isso evita que `utils.ts` vire uma camada sem linguagem ubíqua.

### Função pura não é só “sem setState”: exemplos de efeitos colaterais implícitos

Mesmo sem ver os utilitários do projeto (não detectados no contexto), é útil explicitar o que desqualifica uma função de ser considerada pura, porque esse é um erro comum quando se tenta “limpar JSX”:

- Ler `Date.now()` dentro da função.
- Ler/escrever `localStorage` dentro da função.
- Acessar `window`/`document`.
- Ler uma variável global mutável.

Em features como agent, esses efeitos aparecem facilmente (“timestamp da mensagem”, “persistir histórico”). A alternativa robusta é injetar valores como parâmetros (passar `now` ou `timestamp`) e manter a função determinística.

### Pureza como pré-requisito para reducer (mesmo que `useReducer` ainda não esteja em uso)

O contexto afirma que `useReducer` não é usado (ver “Gerenciamento de Estado” em `aruanda-output/PROJECT_CONTEXT.md`). Ainda assim, a disciplina de extrair funções puras prepara o terreno para introduzir reducer quando fizer sentido:

- Primeiro você extrai “como o estado muda”.
- Depois você decide “onde essa mudança mora” (setState vs reducer).

Isso evita a refatoração mais comum e mais cara: trocar para reducer sem ter isolado a lógica, resultando em um reducer que chama funções impuras.

## 7. Pontos de atenção

A seção “Pontos de Atenção” no contexto declara: “Nenhum ponto de atenção detectado” (ver `aruanda-output/PROJECT_CONTEXT.md`). Isso não significa que não exista dívida técnica; significa que o gerador não encontrou heurísticas configuradas para reportar problemas, ou que os sinais detectáveis (via análise superficial) ainda não são críticos.

Mesmo assim, há três sinais “soft” no próprio contexto que, em um code review sênior, seriam mencionados como riscos potenciais:

1. Alias `@/` não detectado e caminhos relativos detectados (ver “Padrões Técnicos” em `aruanda-output/PROJECT_CONTEXT.md`). Impacto: refactors de pastas custam mais e incentivam duplicação de tipos (como `Language`). Correção exata: definir paths no `tsconfig.json` e alinhar o bundler (Vite) para resolver o alias. O contexto não lista `tsconfig`, então o ajuste não pode ser especificado por arquivo aqui.

2. Strict mode desativado (ver “Configuração TypeScript” em `aruanda-output/PROJECT_CONTEXT.md`). Impacto: invariantes de Context (por exemplo, `user` definido vs indefinido) vazam como bugs de runtime. Correção exata: ativar strict gradualmente e adicionar guards em hooks (`useAuth` deve falhar cedo se provider ausente; e o tipo do contexto deve refletir estado inicial com clareza).

3. Duplicação explícita em `src/códigos duplicados/…` (ver “Gerenciamento de Estado” em `aruanda-output/PROJECT_CONTEXT.md`). Impacto: drift de contrato e risco de “usar o provider errado” se imports forem misturados. Correção exata: garantir que duplicados não são usados em runtime simultaneamente e nomear versões pelo padrão que representam.

Esses itens não foram listados como “pontos de atenção” pelo contexto; portanto, eles são apresentados aqui como leitura arquitetural baseada estritamente nos dados detectados (presença/ausência de camadas e padrões).

### Priorização operacional (a partir dos sinais detectados)

#### Alta prioridade: múltiplas versões de Context no mesmo repositório

Arquivos envolvidos (conforme listados no contexto):

- `src/components/AuthContext/AuthContext.tsx` e `src/códigos duplicados/AuthContext.tsx`
- `src/components/LanguageContext/LanguageContext.tsx` e `src/códigos duplicados/LanguageContext.tsx`
- `src/ThemeContext.tsx` e `src/códigos duplicados/ThemeContext.tsx`

Impacto real:

O impacto não é “código duplicado”. O impacto é a possibilidade de o app ter mais de um “universo” de contexto para o mesmo conceito, criando bugs que parecem aleatórios. O erro clássico é importar o hook de uma versão e o provider de outra. Em runtime, isso se manifesta como:

- exceção por provider ausente (se o hook faz guard),
- ou estado que nunca muda (se o consumer lê de um contexto diferente do provider ativo).

Quando vai quebrar:

Assim que alguém fizer um refactor de imports, mover arquivos, ou tentar “limpar” a pasta sem entender qual versão está em uso pela aplicação.

Correção exata (compatível com o layout atual):

Definir uma rota canônica de importação para a aplicação principal e isolar duplicados como experimentos não importáveis por acidente. O lugar natural para essa decisão aparecer é `src/components/AppProviders/AppProviders.tsx`, porque ele centraliza a composição de providers (arquivo listado no contexto).

Uma forma simples de reduzir risco sem reestruturar pastas é criar exports canônicos (um `index.ts`) e garantir que a aplicação importa apenas desses índices, nunca dos arquivos experimentais. O objetivo é transformar “múltiplas versões” em “múltiplos experiments”, não em “múltiplas fontes de verdade”.

#### Média prioridade: ausência de alias `@/` com imports relativos detectados

Sinal no contexto:

- “Path alias (@/): não detectado”
- “Caminhos relativos (../): detectado — avaliar migração para @/”

Impacto real:

Imports relativos não são apenas feios; eles aumentam o custo de mudança estrutural. Neste projeto, a mudança estrutural mais provável é exatamente a que o contexto sugere como ausente: criar `hooks/`, `utils/`, `services/`. Sem alias, cada criação dessas camadas vira churn imediato em imports — e churn é onde erros entram.

Quando vai quebrar:

No primeiro refactor de pastas que tenta “limpar” `src/ThemeContext.tsx` para uma pasta de contexts, ou que tenta consolidar `Language` em um lugar único. O risco aumenta porque já existe duplicação de `Language` em dois arquivos.

Correção exata:

Introduzir alias `@/` e migrar imports gradualmente a partir dos módulos mais centrais (providers e `AppProviders`). O contexto não lista `tsconfig` nem configuração de Vite, então aqui a correção fica descrita como intenção e não como patch em arquivos específicos.

#### Baixa prioridade: naming inconsistente de arquivo em componente

Arquivo envolvido:

- `src/components/ThemeToggle/themeToggle.tsx`

Impacto real:

Em ambientes case-sensitive (Linux), esse tipo de inconsciência vira bug operacional que só aparece “depois”, quando rodar em CI ou em outro sistema. Mesmo que o projeto não declare CI no contexto, a relevância é que bugs operacionais parecem “misteriosos” para quem está aprendendo e consomem tempo sem ensinar arquitetura.

Correção exata:

Alinhar o nome do arquivo com a convenção do repositório (componentes em PascalCase). O valor aqui não é estética; é previsibilidade e portabilidade.

## 8. Exercícios derivados

### Básico

Implemente um novo contexto simples seguindo o padrão já presente no projeto.

Tarefa:

- Crie `src/components/TimeFormatContext/TimeFormatContext.tsx` com um provider e um hook `useTimeFormat`.
- O estado deve suportar pelo menos dois formatos (por exemplo, `"mm:ss"` e `"hh:mm:ss"`).
- Integre o provider no `src/components/AppProviders/AppProviders.tsx`.
- Consuma `useTimeFormat` em `src/components/Header/Header.tsx` ou `src/components/UserMenu/UserMenu.tsx` para exibir o formato atual e permitir alternância.

Critérios de aceitação:

- A aplicação compila sem erros TypeScript.
- O hook `useTimeFormat` lança erro claro se for usado fora do provider.
- A alternância de formato re-renderiza apenas os componentes consumidores (ou seja, não depende de prop drilling).
- O novo arquivo segue o padrão dos contextos existentes em `src/components/AuthContext/AuthContext.tsx` e `src/components/LanguageContext/LanguageContext.tsx` (mesma ergonomia de API: Provider + hook).

Arquivos de referência (padrão existente):

- `src/components/LanguageContext/LanguageContext.tsx`
- `src/components/AuthContext/AuthContext.tsx`
- `src/components/AppProviders/AppProviders.tsx`

### Médio

Consolide um contrato de tipo duplicado e elimine drift.

Tarefa:

- Extraia o tipo `Language` para um único arquivo em `src/features/` ou `src/` (por exemplo, `src/features/i18n/language.types.ts`).
- Atualize ambos os arquivos:
  - `src/components/LanguageContext/LanguageContext.tsx`
  - `src/códigos duplicados/LanguageContext.tsx`
  para importar o mesmo tipo compartilhado.
- Garanta que ambos os arquivos continuem funcionando sem mudar a API pública do hook `useLanguage`.

Decisão arquitetural obrigatória:

- Justifique, no próprio design do código (não em texto), se o tipo compartilhado deve morar em uma área “de domínio” (`src/features/i18n/…`) ou em uma área “base” (`src/types/…`), considerando que o contexto atual não detecta um diretório `types/` central além do feature `agent`.

Critérios de aceitação:

- O tipo `Language` não existe duplicado em mais de um arquivo.
- Os dois contextos usam exatamente a mesma importação do tipo.
- A aplicação compila sem erros TypeScript.
- Nenhum import cria dependência circular de runtime (se necessário, use `import type`).

Arquivos de referência (onde a duplicação existe):

- `src/components/LanguageContext/LanguageContext.tsx`
- `src/códigos duplicados/LanguageContext.tsx`

### Avançado

Reduza o blast radius de re-render em um contexto transversal e documente uma decisão técnica por código.

Tarefa:

- Escolha um dos contextos transversais usados por múltiplos componentes (tema ou idioma) entre:
  - `src/ThemeContext.tsx`
  - `src/components/LanguageContext/LanguageContext.tsx`
- Refatore a implementação para minimizar re-renders desnecessários em consumers, sem trocar a estratégia (continue usando Context API).
- A refatoração deve incluir uma decisão explícita e revisável:
  - separar “state” e “actions” em dois contexts diferentes, ou
  - memoizar o value de forma correta (com `useMemo`) e garantir estabilidade de handlers.

Composição obrigatória:

- Mostre o impacto no ponto de consumo combinatório:
  - `src/components/UserMenu/UserMenu.tsx`
  deve continuar funcionando e deve continuar consumindo o contexto refatorado sem aumentar acoplamento.

Critérios de aceitação:

- A aplicação compila sem erros TypeScript.
- A API pública do hook (por exemplo, `useTheme` ou `useLanguage`) permanece consistente (mesmas propriedades retornadas, ou uma mudança intencional acompanhada por atualização de todos os consumidores).
- O provider não expõe setters crus diretamente quando isso comprometer invariantes (por exemplo, não expor `setTheme` se o domínio exigir validação; exponha uma action nomeada).
- A refatoração reduz re-renders no consumo, demonstrável por instrumentação local (por exemplo, adicionando um contador de render em `UserMenu` durante desenvolvimento e removendo antes de finalizar o exercício).

Arquivos de referência (consumo e junction):

- `src/components/UserMenu/UserMenu.tsx`
- `src/components/Header/Header.tsx`
- `src/components/ThemeToggle/themeToggle.tsx`

Revisão obrigatória (parte do exercício):

- Identifique uma decisão tomada durante a refatoração e registre o porquê no próprio design do código (por exemplo, escolha entre split de context vs `useMemo` no value).
- Liste um risco residual que você aceitou ao manter Context API (por exemplo, consumers ainda re-renderizam quando qualquer parte do value muda) e indique qual seria o próximo passo se o projeto crescer.
- Garanta que o código não depende de “memoização supersticiosa”: cada `useCallback`/`useMemo` deve ter uma razão observável (ou seja, removê-lo deve piorar algo que você consegue medir localmente).

Critério de aceitação adicional:

- Ao alternar tema/idioma rapidamente, o componente `UserMenu` não deve re-renderizar mais do que o necessário para refletir a mudança (meça por contadores temporários e remova-os após concluir).
- O provider refatorado deve permanecer legível: o objetivo é reduzir blast radius sem criar uma abstração que esconda o estado.

Notas de avaliação (o que um revisor sênior vai procurar):

- Se você dividiu contextos, verifique se consumers que só usam ações não re-renderizam quando o estado muda.
- Se você memoizou o value, verifique se dependências do `useMemo` são mínimas e corretas (dependências erradas viram bug, não otimização).
- Se você criou um hook/model intermediário, verifique se ele não virou um “novo lugar” para lógica impura (acesso a DOM, storage ou tempo).
- Se você mexeu em naming/exports, verifique se a rota canônica de importação ficou mais óbvia e se os arquivos em `src/códigos duplicados/…` continuam isolados.

Entrega:

- Um commit local com as mudanças (mesmo que você não publique), para que o diff mostre a decisão e o custo real.


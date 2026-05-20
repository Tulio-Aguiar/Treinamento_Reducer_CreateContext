# PROJECT_CONTEXT — treinamento-reducer-createcontext

> Gerado por aruanda-reader. Use este arquivo como contexto de entrada para o Cursor Agent.
> O agente deve ler este arquivo e produzir `PROJECT_LESSON.md` com a documentação educacional.

---

## 1. Stack

| Campo | Valor |
|---|---|
| Framework | react |
| Linguagem | typescript |
| Bundler | vite |
| Módulos | ESM |
| react | ^19.2.0 |
| typescript | ~5.9.3 |
| vite | ^7.3.1 |
| Roteamento | none |
| Qualidade | eslint |

## 2. Configuração TypeScript

- **Strict mode:** desativado
- **noUnusedLocals:** inativo
- **noUnusedParameters:** inativo
- **Target:** não detectado
- **Path alias (@/):** não detectado no tsconfig

## 3. Estrutura de Pastas

**Camadas presentes:** types, components

**Camadas ausentes:** pages, hooks, state, utils, services, data

**CSS Modules:** não detectado

### types

- `src/features/agent/agent.types.ts`

### components

- `src/components/AppProviders/AppProviders.tsx`
- `src/components/AuthContext/AuthContext.tsx`
- `src/components/Header/Header.tsx`
- `src/components/LanguageContext/LanguageContext.tsx`
- `src/components/ThemeToggle/themeToggle.tsx`
- `src/components/UserMenu/UserMenu.tsx`

## 4. Contratos de Tipo

- **import type em uso:** sim
- **any explícito:** não detectado

### Tipos definidos

**`src/features/agent/agent.types.ts`**
- `Message` (type)
- `TaskResponse` (type)

**`src/components/LanguageContext/LanguageContext.tsx`**
- `Language` (type)

**`src/códigos duplicados/LanguageContext.tsx`**
- `Language` (type)

## 5. Componentes

### `src/App.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useTheme

### `src/components/AppProviders/AppProviders.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não

### `src/components/AuthContext/AuthContext.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useCallback, useAuth

### `src/components/Header/Header.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useTheme

### `src/components/LanguageContext/LanguageContext.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useLanguage

### `src/components/ThemeToggle/themeToggle.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useTheme

### `src/components/UserMenu/UserMenu.tsx`

- **Camada:** components
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useAuth, useLanguage, useTheme

### `src/códigos duplicados/AuthContext.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useCallback, useAuth

### `src/códigos duplicados/LanguageContext.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useLanguage

### `src/códigos duplicados/ThemeContext.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useTheme

### `src/features/agent/AgentChat.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useRef, useAgent

### `src/main.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não

### `src/ThemeContext.tsx`

- **Camada:** other
- **Props tipadas:** não detectado
- **React.FC:** não
- **Hooks:** useState, useContext, useTheme

## 6. Gerenciamento de Estado

- **Estratégia detectada:** context-api
- **Context API:** sim
- **useReducer:** não
- **Arquivos de contexto:**
  - `src/components/AuthContext/AuthContext.tsx`
  - `src/components/LanguageContext/LanguageContext.tsx`
  - `src/códigos duplicados/AuthContext.tsx`
  - `src/códigos duplicados/LanguageContext.tsx`
  - `src/códigos duplicados/ThemeContext.tsx`
  - `src/ThemeContext.tsx`
- **Hooks customizados de estado:**
  - `useAuth` em `src/components/AuthContext/AuthContext.tsx`
  - `useLanguage` em `src/components/LanguageContext/LanguageContext.tsx`
  - `useAuth` em `src/códigos duplicados/AuthContext.tsx`
  - `useLanguage` em `src/códigos duplicados/LanguageContext.tsx`
  - `useTheme` em `src/códigos duplicados/ThemeContext.tsx`
  - `useAgent` em `src/features/agent/useAgent.ts`
  - `useTheme` em `src/ThemeContext.tsx`

## 7. Estilização

- **CSS Modules:** não
- **Tailwind:** não

## 8. Padrões Técnicos

- **import type:** em uso
- **Path alias @/:** não detectado
- **Caminhos relativos (../):** detectado — avaliar migração para @/
- **forwardRef:** não
- **useMemo / useCallback:** em uso
- **Lazy loading:** não
- **Formulários controlados:** sim
- **React Hook Form:** não

## 9. Pontos de Atenção

_Nenhum ponto de atenção detectado._
---

## Instrução para o Cursor Agent

Leia as seções acima e produza `PROJECT_LESSON.md` com a seguinte estrutura:

1. **Stack e decisões de configuração** — o que as escolhas de stack revelam sobre o projeto
2. **Arquitetura de pastas** — o que a estrutura implica sobre separação de responsabilidades
3. **Contratos de tipo** — cada tipo explicado com a lógica por trás da escolha
4. **Componentes** — cada componente como caso de estudo: props, renderização, padrões
5. **Gerenciamento de estado** — estratégia adotada, por que funciona ou não neste projeto
6. **Utilitários e funções puras** — lógica extraída do JSX, testabilidade
7. **Pontos de atenção** — dívida técnica identificada, com explicação do impacto
8. **Exercícios derivados** — três exercícios nos níveis básico, médio e avançado

Use as melhores práticas de React 19 e TypeScript strict mode de 2026 como referência.
O público é um desenvolvedor em formação acelerada. Sem didatização. Densidade técnica.

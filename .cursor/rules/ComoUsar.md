# aruanda-teach — Instruções de Uso

> Protocolo Aruanda · CLI de geração de documentação educacional  
> Versão 0.1.0 · Abril 2026

---

## Instalação

```bash
cd C:/Users/tulio.aguiar/Documents/ferramentas/aruanda-teach
npm install -g .
```

Após a instalação, o comando `aruanda-teach` fica disponível globalmente em qualquer projeto.

---

## Pré-requisitos

- Estar dentro de um projeto com `package.json` na raiz
- O Cursor com `.cursor/rules/aruanda-lesson.mdc` configurado para uso das skills

---

## Função 1 — Gerar aula de um componente

**Comando:**

```bash
aruanda-teach @aula NomeDoArquivo.tsx
```

**O que faz:**

Localiza o arquivo em `src/` (ou recursivamente na raiz do projeto), analisa seus padrões, infere o tipo e a complexidade, e gera um `NomeDoArquivo-LESSON_CONTEXT.md` co-localizado com o componente.

O `LESSON_CONTEXT.md` contém o código-fonte completo, os metadados detectados e a instrução completa para o Cursor Agent produzir a aula no padrão Aula-Modelo.

**Exemplos:**

```bash
aruanda-teach @aula AdvancedCounter.tsx
aruanda-teach @aula useTaskContext.ts
aruanda-teach @aula cartReducer.ts
```

**Saída gerada:**

```
src/components/AdvancedCounter/AdvancedCounter-LESSON_CONTEXT.md
```

**Próximo passo no Cursor:**

Após o CLI terminar, o terminal exibe o prompt exato a usar. Exemplo:

```
"Leia AdvancedCounter-LESSON_CONTEXT.md e produza AdvancedCounter-LESSON.md
seguindo as instruções internas"
```

Ou, com a skill configurada:

```
@aruanda-lesson AdvancedCounter
```

---

## Função 2 — Gerar anatomia do JSX

> ⚠️ Disponível na próxima versão do CLI. O template `JSX.md` já está em `src/templates/`.

**Comando:**

```bash
aruanda-teach @aruanda-jsx NomeDoArquivo.tsx
```

**O que faz:**

Foca exclusivamente no bloco `return` do componente. Gera um `NomeDoArquivo-JSX_CONTEXT.md` com análise da hierarquia de elementos, contrato com o estado, render condicional, renderização de listas, eventos, props e classes CSS.

Diferente da aula completa (`@aula`), a anatomia JSX não cobre o reducer nem os tipos — é um documento dedicado às decisões de estrutura visual e semântica do componente.

**Exemplos:**

```bash
aruanda-teach @aruanda-jsx Cart.tsx
aruanda-teach @aruanda-jsx MainForm.tsx
```

**Saída gerada:**

```
src/components/Cart/Cart-JSX_CONTEXT.md
```

**Próximo passo no Cursor:**

```
@aruanda-jsx Cart
```

---

## Função 3 — Comparar original com cópia escrita de memória

> ⚠️ Disponível na próxima versão do CLI. O template `COMPARE.md` já está em `src/templates/`.

**Comando:**

```bash
aruanda-teach @compare ArquivoOriginal.tsx ArquivoCopia.tsx
```

**O que faz:**

Compara semanticamente o arquivo original com a cópia escrita de memória. Classifica cada divergência em quatro categorias:

- **Erro de lógica** — altera o comportamento do código
- **Omissão** — padrão presente no original e ausente na cópia
- **Variação de sintaxe** — equivalente semântico escrito de forma diferente
- **Melhoria inadvertida** — cópia objetivamente superior ao original

Gera um score de fidelidade por seção (tipos, reducer, componente, JSX) e uma tabela de padrões recorrentes com recomendação de próximo exercício.

**Exemplo:**

```bash
aruanda-teach @compare CartReducer.tsx CartReducer-Copy.tsx
```

**Saída gerada:**

```
src/components/Cart/CartReducer-COMPARE.md
```

**Próximo passo no Cursor:**

```
@aruanda-compare CartReducer
```

---

## Estrutura de templates

Os templates que controlam a produção das aulas vivem em:

```
aruanda-teach/
└── src/
    └── templates/
        ├── TEACH.md      ← padrão das aulas completas (@aula)
        ├── JSX.md        ← padrão da anatomia JSX (@aruanda-jsx)
        └── COMPARE.md    ← padrão da comparação (@compare)
```

Para ajustar as instruções passadas ao Cursor Agent, edite o template correspondente. Não é necessário reinstalar o pacote — os templates são lidos em tempo de execução.

---

## Skills do Cursor

As skills ficam em `.cursor/rules/` na raiz do projeto:

```
.cursor/
└── rules/
    ├── project.mdc          ← idioma e convenções globais do projeto
    ├── aruanda-lesson.mdc   ← skill @aruanda-lesson (aulas)
    ├── aruanda-jsx.mdc      ← skill @aruanda-jsx (anatomia JSX) — próxima versão
    └── aruanda-compare.mdc  ← skill @aruanda-compare (comparação) — próxima versão
```

**Invocação no chat do Cursor Agent:**

| Função        | Comando no terminal                             | Skill no Cursor             |
| ------------- | ----------------------------------------------- | --------------------------- |
| Aula completa | `aruanda-teach @aula Arquivo.tsx`               | `@aruanda-lesson Arquivo`   |
| Anatomia JSX  | `aruanda-teach @aruanda-jsx Arquivo.tsx`        | `@aruanda-jsx Arquivo`      |
| Comparação    | `aruanda-teach @compare Original.tsx Copia.tsx` | `@aruanda-compare Original` |

---

## Fluxo completo de uso

```
1. Terminal → aruanda-teach @aula CartReducer.tsx
      ↓
2. CLI gera CartReducer-LESSON_CONTEXT.md co-localizado com o componente
      ↓
3. Cursor Agent → @aruanda-lesson CartReducer
      ↓
4. Agente lê o LESSON_CONTEXT.md e produz CartReducer-LESSON.md
      ↓
5. Aula disponível na mesma pasta do componente
```

---

## Atualização do CLI

Sempre que os arquivos de `src/` forem modificados:

```bash
cd C:/Users/tulio.aguiar/Documents/ferramentas/aruanda-teach
npm install -g .
```

Modificações apenas nos templates (`src/templates/`) não exigem reinstalação.

---

_Protocolo Aruanda · Abril 2026_

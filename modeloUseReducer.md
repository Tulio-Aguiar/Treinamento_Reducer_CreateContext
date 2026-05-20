← Início
⚡ useReducer
Módulo 02 · React 19 + TypeScript
Fundamentos
O que é um reducer
Anatomia completa
Reducer vs useState
Passo a passo com TypeScript
Exemplos
Contador avançadobásico
Lista de tarefasmédio
Formulário com validaçãointer
Avançado
Context + Reducer
Boas práticas
Exercícios
Ex.1 — Semáforobásico
Ex.2 — Carrinho Redux-likemédio
Ex.3 — Wizard de cadastrointer
⚡ Módulo 02
useReducer
useReducer resolve um problema diferente do useState: quando a lógica de atualização de estado é complexa o suficiente para merecer ser isolada, testada e nomeada. O padrão que Redux popularizou, agora nativo e sem dependências.

01
O que é um reducer
Um reducer é uma função pura que recebe o estado atual e uma ação, e retorna o próximo estado. É o mesmo conceito que Array.reduce(): dado um acumulador e um valor, retorna um novo acumulador.

conceito-basico.ts
Copiar
// A assinatura de qualquer reducer:
// (estado atual, ação) => próximo estado
function reducer(state: State, action: Action): State {
// lógica aqui
return nextState
}

// Comparação com Array.reduce:
// (acumulador, valorAtual) => novoAcumulador
[1, 2, 3].reduce((acc, val) => acc + val, 0) // → 6
O padrão foi popularizado pelo Redux mas é agnóstico de biblioteca. React o incorporou nativamente via useReducer, sem dependências externas. A vantagem central: a lógica de atualização de estado fica isolada, nomeada, testável e previsível.

📌
Função pura significa: dado o mesmo estado e a mesma ação, o reducer sempre retorna o mesmo resultado. Sem efeitos colaterais, sem chamadas de API, sem mutação direta do estado.
02
Anatomia completa
useReducer tem quatro peças fundamentais. Entender cada uma é entender por que o padrão funciona.

Partes do useReducer
state
O estado atual do componente. Pode ser qualquer tipo: número, string, objeto, array. É imutável — nunca modifique diretamente.
dispatch
Função para enviar ações ao reducer. Chamar dispatch(action) agenda uma re-renderização com o novo estado retornado pelo reducer.
reducer
Função pura (state, action) => newState. Contém toda a lógica de transição de estado. Vive fora do componente.
action
Objeto que descreve o que aconteceu. Convencionalmente tem type (string) e, opcionalmente, payload com os dados adicionais.
initialState
O estado inicial passado como segundo argumento para useReducer. Usado apenas na primeira renderização.
anatomia.tsx
Copiar
import { useReducer } from 'react'

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
return state // Sempre retorne o state atual para ações desconhecidas
}
}

// ── Estado inicial ───────────────────────────────────────
const initialState: State = { count: 0 }

// ── Componente ───────────────────────────────────────────
export function Counter() {
const [state, dispatch] = useReducer(reducer, initialState)
// └─ state atual └─ função para enviar ações

return (
<div>
<p>Contador: {state.count}</p>
<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
</div>
)
}
Componente
chama dispatch
→
Action
{ type, payload }
→
Reducer
função pura
→
New State
re-render
03
Reducer vs useState
useReducer não substitui useState — eles resolvem problemas diferentes. A escolha errada complica o código sem necessidade.

Critério useState useReducer
Complexidade do estado Simples — primitivos, objetos pequenos Complexo — múltiplos campos inter-relacionados
Número de ações 1-3 tipos de update 4+ tipos distintos de ação
Lógica de transição Inline no componente Isolada, nomeada e testável
Testabilidade Requer renderização Função pura — teste unitário direto
Próximo estado depende do anterior Usa callback: setX(prev => ...) Sempre tem acesso ao state atual
Debugging Difícil rastrear mudanças Ações nomeadas facilitam rastreamento
✅ Use useReducer quando...
Estado tem 3+ campos relacionados
Múltiplas ações afetam o mesmo estado
Próximo estado depende de vários campos
Lógica complexa que merece ser testada isolada
Quer histórico de ações (debug)
→ Prefira useState quando...
Estado é um único valor primitivo
Apenas 1-2 formas de atualizar
Componentes pequenos e isolados
Não há lógica condicional nas atualizações
04
Passo a passo com TypeScript
O segredo de um reducer tipado corretamente é usar discriminated unions para o tipo das ações. TypeScript vai inferir automaticamente o tipo do payload dentro de cada case do switch.

1
Defina a interface do estado
Modele todos os campos que o componente precisa gerenciar.
TodoReducer.tsx — Passo 1
Copiar
// Estado de uma lista de tarefas
interface TodoItem {
id: string
text: string
completed: boolean
}

interface TodoState {
items: TodoItem[]
filter: 'all' | 'active' | 'completed'
loading: boolean
}
2
Defina os tipos de ação como discriminated union
Cada tipo de ação é um objeto distinto. TypeScript vai narrowing automático dentro do switch — action.payload será tipado corretamente em cada case.
TodoReducer.tsx — Passo 2
Copiar
// Discriminated union — cada ação tem seu tipo e payload específico
type TodoAction =
| { type: 'ADD_TODO'; payload: string } // payload: texto da tarefa
| { type: 'TOGGLE_TODO'; payload: string } // payload: id da tarefa
| { type: 'REMOVE_TODO'; payload: string } // payload: id da tarefa
| { type: 'SET_FILTER'; payload: TodoState['filter'] } // payload: novo filtro
| { type: 'CLEAR_COMPLETED' } // sem payload
3
Escreva o reducer com switch/case
Fora do componente. Cada case retorna um novo objeto de estado — nunca mute o state atual.
TodoReducer.tsx — Passo 3
Copiar
function todoReducer(state: TodoState, action: TodoAction): TodoState {
switch (action.type) {
case 'ADD_TODO':
return {
...state,
items: [
...state.items,
{
id: crypto.randomUUID(),
text: action.payload, // TypeScript sabe que payload é string aqui
completed: false,
},
],
}

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
}
4
Use no componente
useReducer retorna o estado atual e a função dispatch. O dispatch é estável — não muda entre renders, pode ser passado sem useMemo.
TodoReducer.tsx — Passo 4
Copiar
const initialState: TodoState = {
items: [],
filter: 'all',
loading: false,
}

export function TodoApp() {
const [state, dispatch] = useReducer(todoReducer, initialState)

const handleAdd = (text: string) => {
dispatch({ type: 'ADD_TODO', payload: text })
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
<div>
{/_ ... UI usando state e dispatch ... _/}
</div>
)
}
05
Exemplo 1 — Contador avançado
Um contador que vai além do básico: suporta incremento por valor customizado, reset para valor específico e bounds (mínimo/máximo). Mostra como o reducer lida elegantemente com lógica condicional.

src/components/AdvancedCounter.tsx
Copiar
import { useReducer } from 'react'

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
<div>
<p>Valor: {state.value} (step: {state.step})</p>

      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        disabled={isAtMin}
      >
        - {state.step}
      </button>

      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        disabled={isAtMax}
      >
        + {state.step}
      </button>

      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>

      <input
        type="number"
        value={state.step}
        min={1}
        onChange={e => dispatch({
          type: 'SET_STEP',
          payload: Number(e.target.value),
        })}
      />
    </div>

)
}
06
Exemplo 2 — Lista de tarefas
O exemplo clássico de useReducer em aplicações reais. Um estado com múltiplos campos, múltiplas ações e lógica que seria difícil de manter com vários useState separados.

src/components/TodoList.tsx
Copiar
import { useReducer, useRef } from 'react'

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
if (!action.payload.trim()) return state // Ignora texto vazio
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
const inputRef = useRef<HTMLInputElement>(null)

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
<div>
{/_ Input de nova tarefa _/}
<div>
<input ref={inputRef} placeholder="Nova tarefa..." />
<button onClick={handleAdd}>Adicionar</button>
</div>

      {/* Filtros */}
      <div>
        {(['all', 'active', 'completed'] as const).map(f => (
          <button
            key={f}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: f })}
            style={{ fontWeight: state.filter === f ? 'bold' : 'normal' }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lista */}
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      {/* Rodapé */}
      {completedCount > 0 && (
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
          Limpar {completedCount} concluída(s)
        </button>
      )}
    </div>

)
}
07
Exemplo 3 — Formulário com validação
Formulários com validação são o caso de uso ideal para useReducer: campos inter-relacionados, erros por campo, estados de loading e submit. Tentar gerenciar isso com múltiplos useState resulta em código frágil e difícil de manter.

src/components/RegisterForm.tsx
Copiar
import { useReducer } from 'react'

// ─── Tipos ───────────────────────────────────────────────
interface FormFields {
name: string
email: string
password: string
confirmPassword: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

interface FormState {
fields: FormFields
errors: FormErrors
touched: Partial<Record<keyof FormFields, boolean>>
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

if (fields.password.length < 8) {
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
    if (Object.keys(errors).length > 0) return

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simula API
      dispatch({ type: 'SUBMIT_SUCCESS' })
    } catch {
      dispatch({ type: 'SUBMIT_ERROR', payload: 'Erro ao cadastrar' })
    }

}

if (state.submitted) {
return <p>Cadastro realizado com sucesso!</p>
}

return (
<form onSubmit={handleSubmit}>
{(['name', 'email', 'password', 'confirmPassword'] as const).map(field => (
<div key={field}>
<input
type={field.includes('assword') ? 'password' : 'text'}
placeholder={field}
value={state.fields[field]}
onChange={e => dispatch({
type: 'CHANGE',
payload: { field, value: e.target.value },
})}
onBlur={() => dispatch({ type: 'BLUR', payload: field })}
/>
{state.touched[field] && state.errors[field] && (
<span style={{ color: 'red' }}>{state.errors[field]}</span>
)}
</div>
))}
<button type="submit" disabled={state.submitting}>
{state.submitting ? 'Cadastrando...' : 'Cadastrar'}
</button>
</form>
)
}
08
Context + Reducer
A combinação mais poderosa do ecossistema React nativo: Context distribui o estado pela árvore, Reducer centraliza e formaliza a lógica de mutação. É o padrão que Redux implementa, agora sem dependências externas.

💡
O pattern: exponha o state via um contexto e o dispatch via outro contexto separado. Assim, componentes que só leem não re-renderizam quando o dispatch muda (o que nunca acontece de qualquer forma).
src/contexts/StoreContext.tsx
Copiar
import { createContext, useContext, useReducer } from 'react'

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
const StateContext = createContext<AppState | null>(null)
const DispatchContext = createContext<React.Dispatch<AppAction> | null>(null)

// ─── Provider ────────────────────────────────────────────
const initialState: AppState = {
user: null,
theme: 'dark',
notifications: 0,
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
const [state, dispatch] = useReducer(appReducer, initialState)

return (
<StateContext.Provider value={state}>
<DispatchContext.Provider value={dispatch}>
{children}
</DispatchContext.Provider>
</StateContext.Provider>
)
}

// ─── Hooks públicos ───────────────────────────────────────
export function useAppState(): AppState {
const ctx = useContext(StateContext)
if (!ctx) throw new Error('useAppState fora do AppStoreProvider')
return ctx
}

export function useAppDispatch(): React.Dispatch<AppAction> {
const ctx = useContext(DispatchContext)
if (!ctx) throw new Error('useAppDispatch fora do AppStoreProvider')
return ctx
}

// ─── Uso nos componentes ──────────────────────────────────
// const { user, theme } = useAppState()
// const dispatch = useAppDispatch()
// dispatch({ type: 'TOGGLE_THEME' })
09
Boas práticas
Padrões que separam um reducer robusto de um que vai gerar bugs difíceis de rastrear.

1
Nunca mute o state — sempre retorne um novo objeto
React detecta mudanças por referência. Mutar o state diretamente não dispara re-render e cria bugs silenciosos.
mutação vs imutabilidade
Copiar
// ❌ ERRADO — muta o state diretamente
case 'ADD_ITEM':
state.items.push(action.payload) // Mutação direta!
return state // Mesma referência — React não detecta mudança

// ✅ CORRETO — retorna novo objeto
case 'ADD_ITEM':
return {
...state,
items: [...state.items, action.payload], // Novo array
}
2
Mantenha o reducer puro — sem efeitos colaterais
Sem chamadas de API, sem setTimeout, sem console.log no reducer. Efeitos colaterais pertencem ao componente (useEffect) ou a middleware.
3
Sempre inclua o case default
O default deve retornar o state atual. Sem ele, ações desconhecidas retornam undefined e quebram o componente.
4
Use Action Creators para encapsular a construção das ações
Funções que retornam o objeto de ação. Evitam erros de digitação nos types e centralizam a construção das ações.
action-creators.ts
Copiar
// Action Creators — funções que constroem as ações
export const todoActions = {
add: (text: string) => ({ type: 'ADD' as const, payload: text }),
toggle: (id: string) => ({ type: 'TOGGLE' as const, payload: id }),
remove: (id: string) => ({ type: 'DELETE' as const, payload: id }),
clearCompleted: () => ({ type: 'CLEAR_COMPLETED' as const }),
}

// Uso no componente — mais legível e refactor-safe:
dispatch(todoActions.add('Nova tarefa'))
dispatch(todoActions.toggle(todo.id))

// Em vez de:
dispatch({ type: 'ADD', payload: 'Nova tarefa' }) // string literal propensa a typo
5
Teste o reducer diretamente — sem renderização
Por ser uma função pura, o reducer pode ser testado com simples chamadas de função. É uma das maiores vantagens do padrão.
todoReducer.test.ts
Copiar
import { describe, it, expect } from 'vitest'
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
const result = todoReducer(initial, { type: 'ADD', payload: ' ' })
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
// Sem renderização, sem mocks de React — testes rápidos e precisos
10
Exercícios
Três exercícios com progressão de dificuldade. Foque em modelar bem o estado e as ações antes de escrever o reducer.

Básico
Exercício 1 — Semáforo
Implemente um semáforo que cicla entre os estados: verde → amarelo → vermelho → verde. O único evento é um clique que avança para o próximo estado. O desafio é modelar a máquina de estados com useReducer.

O estado deve ser do tipo
'green' | 'yellow' | 'red'
A única ação é
NEXT
— avança para o próximo estado no ciclo
Exiba o semáforo visualmente (círculos coloridos) e um botão "Avançar"
Mostre uma mensagem associada a cada estado: "Siga", "Atenção", "Pare"
Extra:
adicione auto-avanço com
useEffect
e
setTimeout
// TrafficLight.tsx
// Dica: modele a transição como uma constante:
// const nextState = { green: 'yellow', yellow: 'red', red: 'green' }
//
// No reducer:
// case 'NEXT': return nextState[state]
👁 Ver solução
Médio
Exercício 2 — Carrinho Redux-like
Implemente um carrinho de compras usando useReducer. O estado deve controlar os itens, o total calculado e um cupom de desconto. Este exercício trabalha a modelagem de estado derivado dentro do reducer.

Estado:
items: CartItem[]
,
coupon: string | null
,
discount: number
(0-1)
Ações:
ADD_ITEM
,
REMOVE_ITEM
,
UPDATE_QUANTITY
,
APPLY_COUPON
,
CLEAR_CART
Calcule
subtotal
,
discountAmount
e
total
via
useMemo
no componente (não no state)
APPLY_COUPON
deve validar o código: "REACT10" = 10% off, "REACT20" = 20% off
UPDATE_QUANTITY
com
quantity = 0
deve remover o item
// CartReducer.tsx
// Interface sugerida:
// interface CartItem { id: string; name: string; price: number; quantity: number }
// interface CartState { items: CartItem[]; coupon: string | null; discount: number }
//
// Os cupons válidos podem ser uma constante:
// const COUPONS: Record<string, number> = { 'REACT10': 0.1, 'REACT20': 0.2 }
👁 Ver solução
Intermediário
Exercício 3 — Wizard de cadastro
Um wizard multi-step é uma máquina de estados clássica. O estado controla o passo atual, os dados de cada etapa e a validação. Este exercício trabalha o padrão de estado agregado e navegação entre etapas.

O wizard tem 3 etapas: Dados pessoais → Endereço → Confirmação
Estado:
step: 1 | 2 | 3
,
data: { personal, address }
,
completed: boolean
Ações:
NEXT
(com payload dos dados da etapa atual),
BACK
,
SUBMIT
NEXT
só avança se os dados da etapa estiverem válidos
A etapa 3 (Confirmação) exibe um resumo com todos os dados coletados
Extra:
adicione uma barra de progresso visual com base no
step
// RegisterWizard.tsx
// Estado sugerido:
// interface WizardState {
// step: 1 | 2 | 3
// data: {
// personal: { name: string; email: string; phone: string }
// address: { street: string; city: string; zipCode: string }
// }
// completed: boolean
// }
//
// Dica: o NEXT pode receber um payload genérico que será mergeado em data
👁 Ver solução
← Módulo 01: useContext
Início

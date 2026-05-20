import { useReducer, useRef } from "react";
import "./styles/style.css";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: TodoItem[];
  filter: "all" | "active" | "completed";
  loading: boolean;
}

type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: TodoState["filter"] }
  | { type: "CLEAR_COMPLETED"; payload: void };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO": {
      const cleaned = action.payload.trim();
      if (!cleaned) return state;
      return {
        ...state,
        items: [
          ...state.items,
          { id: crypto.randomUUID(), text: cleaned, completed: false },
        ],
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item,
        ),
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        items: state.items.filter((item) => !item.completed),
      };
    }
    default:
      return state;
  }
}

const initialState: TodoState = {
  items: [],
  filter: "all",
  loading: false,
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (text: string) => {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: text });
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleToggle = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleFilter = (filter: TodoState["filter"]) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED", payload: undefined });
  };

  const visibleItems = state.items.filter((item) => {
    if (state.filter === "active") return !item.completed;
    if (state.filter === "completed") return item.completed;
    return true;
  });

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h1 className="todo-title">Tarefas</h1>

        <div className="todo-input-row">
          <input
            ref={inputRef}
            type="text"
            placeholder="Nova tarefa..."
            className="todo-input"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd(inputRef.current?.value ?? "");
            }}
          />
          <button
            className="btn-add"
            onClick={() => handleAdd(inputRef.current?.value ?? "")}
          >
            Adicionar
          </button>
        </div>

        <div className="todo-filters">
          {(["all", "active", "completed"] as const).map((f) => (
            <button
              key={f}
              className="btn-filter"
              onClick={() => handleFilter(f)}
              aria-pressed={state.filter === f}
            >
              {f === "all" ? "Todas" : f === "active" ? "Ativas" : "Concluídas"}
            </button>
          ))}
          <button className="btn-clear" onClick={handleClearCompleted}>
            Limpar concluídas
          </button>
        </div>

        <ul className="todo-list">
          {visibleItems.length === 0 && (
            <p className="todo-empty">Nenhuma tarefa aqui.</p>
          )}
          {visibleItems.map((item) => (
            <li key={item.id} className="todo-item">
              <label className="todo-label">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}
                />
                <span
                  className={`todo-text${item.completed ? " todo-text--completed" : ""}`}
                >
                  {item.text}
                </span>
              </label>
              <button
                className="btn-remove"
                onClick={() => handleRemove(item.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <p className="todo-footer">
          {state.items.filter((i) => !i.completed).length} tarefa(s) pendente(s)
        </p>
      </div>
    </div>
  );
}

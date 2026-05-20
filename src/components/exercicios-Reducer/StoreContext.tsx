import { createContext, useContext, useReducer } from "react";

// ─── Tipos ───────────────────────────────────────────────
interface User {
  name: string;
  role: "admin" | "customer";
  avatar: string;
}

interface AppState {
  user: User | null;
  theme: "light" | "dark";
  notifications: number;
  cartCount: number;
}

type AppAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" }
  | { type: "ADD_NOTIFICATION" }
  | { type: "CLEAR_NOTIFICATIONS" }
  | { type: "ADD_TO_CART" }
  | { type: "CLEAR_CART" };

// ─── Reducer ─────────────────────────────────────────────
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null, cartCount: 0, notifications: 0 };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "ADD_NOTIFICATION":
      return { ...state, notifications: state.notifications + 1 };
    case "CLEAR_NOTIFICATIONS":
      return { ...state, notifications: 0 };
    case "ADD_TO_CART":
      return { ...state, cartCount: state.cartCount + 1 };
    case "CLEAR_CART":
      return { ...state, cartCount: 0 };
    default:
      return state;
  }
}

// ─── Contextos separados ──────────────────────────────────
const StateContext = createContext<AppState | null>(null);
const DispatchContext = createContext<React.Dispatch<AppAction> | null>(null);

// ─── Estado inicial ───────────────────────────────────────
const initialState: AppState = {
  user: null,
  theme: "dark",
  notifications: 0,
  cartCount: 0,
};

// ─── Provider ────────────────────────────────────────────
export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </StateContext>
  );
}

// ─── Hooks públicos ───────────────────────────────────────
// eslint-disable-next-line react-refresh/only-export-components
export function useAppState(): AppState {
  const ctx = useContext(StateContext);
  if (!ctx) throw new Error("useAppState fora do AppStoreProvider");
  return ctx;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppDispatch(): React.Dispatch<AppAction> {
  const ctx = useContext(DispatchContext);
  if (!ctx) throw new Error("useAppDispatch fora do AppStoreProvider");
  return ctx;
}

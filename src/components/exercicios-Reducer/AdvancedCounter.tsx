import { useReducer } from "react";
import "./styles/advancedCounter.css";

// ─── Tipos ───────────────────────────────────────────────
interface CounterState {
  value: number;
  min: number;
  max: number;
  step: number;
}

type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_VALUE"; payload: number };

// ─── Reducer ─────────────────────────────────────────────
function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        // Respeita o limite máximo
        value: Math.min(state.value + state.step, state.max),
      };
    case "DECREMENT":
      return {
        ...state,
        // Respeita o limite mínimo
        value: Math.max(state.value - state.step, state.min),
      };
    case "RESET":
      return { ...state, value: 0 };
    case "SET_STEP":
      return { ...state, step: Math.max(1, action.payload) };
    case "SET_VALUE":
      return {
        ...state,
        value: Math.min(Math.max(action.payload, state.min), state.max),
      };
    default:
      return state;
  }
}

const initialState: CounterState = {
  value: 0,
  min: -10,
  max: 10,
  step: 1,
};

// ─── Componente ───────────────────────────────────────────
export function AdvancedCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const isAtMin = state.value === state.min;
  const isAtMax = state.value === state.max;

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h2 className="counter-title">Contador Avançado</h2>

        <div className="counter-display">
          <span className="counter-value">{state.value}</span>
          <span className="counter-range">
            min {state.min} · max {state.max}
          </span>
        </div>

        <div className="counter-controls">
          <button
            className="counter-btn counter-btn--decrement"
            onClick={() => dispatch({ type: "DECREMENT" })}
            disabled={isAtMin}
          >
            - {state.step}
          </button>

          <button
            className="counter-btn counter-btn--reset"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>

          <button
            className="counter-btn counter-btn--increment"
            onClick={() => dispatch({ type: "INCREMENT" })}
            disabled={isAtMax}
          >
            + {state.step}
          </button>
        </div>

        <div className="counter-step-row">
          <label className="counter-step-label" htmlFor="step-input">
            Step
          </label>
          <input
            id="step-input"
            className="counter-step-input"
            type="number"
            value={state.step}
            min={1}
            onChange={(e) =>
              dispatch({
                type: "SET_STEP",
                payload: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="counter-progress">
          <div
            className="counter-progress-bar"
            style={{
              width: `${((state.value - state.min) / (state.max - state.min)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

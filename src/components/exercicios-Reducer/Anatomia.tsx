//Estudando useReducer
//Primeiro código para entender o useReducer

import { useReducer } from "react";

interface State {
  count: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: (state.count = 0) };
  }
}

const initialState: State = { count: 0 };

export default function Counnter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

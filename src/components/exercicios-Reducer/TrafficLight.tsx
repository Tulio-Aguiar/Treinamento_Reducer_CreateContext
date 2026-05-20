import { useReducer, useEffect } from "react";
import "./styles/trafficLight.css";

type LightColor = "green" | "yellow" | "red";
type LightAction = { type: "NEXT" };

const nextColor: Record<LightColor, LightColor> = {
  green: "yellow",
  yellow: "red",
  red: "green",
};

const messages: Record<LightColor, string> = {
  green: "✅ Siga",
  yellow: "⚠️ Atenção",
  red: "🛑 Pare",
};

const durations: Record<LightColor, number> = {
  green: 3000,
  yellow: 1000,
  red: 2000,
};

function lightReducer(state: LightColor, action: LightAction): LightColor {
  switch (action.type) {
    case "NEXT":
      return nextColor[state];
    default:
      return state;
  }
}

export default function TrafficLight() {
  const [color, dispatch] = useReducer(lightReducer, "green");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, durations[color]);
    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div className="wrapper">
      <div className="housing">
        {(["red", "yellow", "green"] as const).map((c) => (
          <div key={c} className={`bulb ${c} ${color === c ? "active" : ""}`} />
        ))}
      </div>
      <p className="message">{messages[color]}</p>
      <button className="button" onClick={() => dispatch({ type: "NEXT" })}>
        Avançar manualmente
      </button>
    </div>
  );
}

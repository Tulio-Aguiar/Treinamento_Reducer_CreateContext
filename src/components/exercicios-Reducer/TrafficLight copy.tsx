import { useReducer, useEffect } from "react";
import "./styles/trafficLight.css";

type LightColor = "Green" | "Yellow" | "Red";
type LightAction = { type: "NEXT" };

const NextColor: Record<LightColor, LightColor> = {
  Green: "Yellow",
  Yellow: "Red",
  Red: "Green",
};

const messages: Record<LightColor, string> = {
  Green: "✅ Siga",
  Yellow: "⚠️ Atenção",
  Red: "🛑 Pare",
};

const durations: Record<LightColor, number> = {
  Green: 3000,
  Yellow: 1000,
  Red: 2000,
};

function LightReducer(state: LightColor, action: LightAction): LightColor {
  switch (action.type) {
    case "NEXT": {
      return NextColor[state];
    }
    default:
      return state;
  }
}

export default function TrafficLight() {
  const [color, dispatch] = useReducer(LightReducer, "Green");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, durations[color]);
    return () => clearTimeout(timer);
  }, [color]);
  return (
    <div className="wrapper">
      <div className="housing">
        {(["Red", "Yellow", "Green"] as const).map((c) => (
          <div key={c} className={`buld${c} ${color === c ? "active" : ""}`} />
        ))}
      </div>
      <p className="message">{messages[color]}</p>
      <button className="button" onClick={() => dispatch({ type: "NEXT" })}>
        Avançar manualmente
      </button>
    </div>
  );
}

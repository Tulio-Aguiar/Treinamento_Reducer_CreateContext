import { useState } from "react";
import type { Message, TaskResponse } from "./agent.types";

const AGENT_URL = "http://localhost:3333/tasks/send";

export function useAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendQuestion(question: string) {
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);

    try {
      const response = await fetch(AGENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: { parts: [{ text: question }] },
        }),
      });

      const data: TaskResponse = await response.json();
      const answer = data.artifacts?.[0]?.parts?.[0]?.text ?? "Sem resposta.";

      setMessages((prev) => [...prev, { role: "agent", text: answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "agent", text: "Erro ao conectar com o agente." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, loading, sendQuestion };
}

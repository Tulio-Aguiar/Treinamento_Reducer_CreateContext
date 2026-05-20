import express from "express";
import "dotenv/config";
import { agentCard } from "./agentCard.js";
import { answerQuestion } from "./agent.js";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// A2A — Agent Card discovery
app.get("/.well-known/agent.json", (_req, res) => {
  res.json(agentCard);
});

// A2A — endpoint de tarefas
app.post("/tasks/send", async (req, res) => {
  const { message } = req.body as { message?: { parts?: { text?: string }[] } };
  const question = message?.parts?.[0]?.text;

  if (!question) {
    res.status(400).json({ error: "Pergunta não encontrada no payload." });
    return;
  }

  try {
    const answer = await answerQuestion(question);
    res.json({
      id: Date.now().toString(),
      status: { state: "completed" },
      artifacts: [
        {
          parts: [{ type: "text", text: answer }],
        },
      ],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    res.status(500).json({ error: message });
  }
});

app.listen(PORT, () => {
  console.log(`Training Agent rodando em http://localhost:${PORT}`);
  console.log(`Agent Card: http://localhost:${PORT}/.well-known/agent.json`);
});

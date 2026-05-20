import { GoogleGenerativeAI } from "@google/generative-ai";
import { trainingContent } from "./trainingContent.js";

const SYSTEM_PROMPT = `Você é um assistente técnico especializado no seguinte material de treinamento React:

${trainingContent}

---

Responda sempre em português brasileiro. Seja técnico, preciso e direto.
Baseie suas respostas no conteúdo do treinamento acima.
Se a pergunta estiver fora do escopo do material, diga isso claramente.`;

export async function answerQuestion(question: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não definida no .env");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const result = await model.generateContent(question);
  return result.response.text();
}

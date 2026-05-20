export const agentCard = {
  name: "Training Agent",
  description:
    "Responde dúvidas sobre os módulos de useContext, useReducer, CSS Moderno e Tailwind CSS.",
  url: "http://localhost:3333",
  version: "1.0.0",
  capabilities: {
    streaming: false,
  },
  skills: [
    {
      id: "answer-training-questions",
      name: "Responder dúvidas dos módulos",
      description:
        "Recebe uma pergunta sobre React 19, useContext, useReducer, CSS Moderno ou Tailwind e retorna uma explicação técnica.",
      tags: ["react", "typescript", "css", "tailwind"],
    },
  ],
};

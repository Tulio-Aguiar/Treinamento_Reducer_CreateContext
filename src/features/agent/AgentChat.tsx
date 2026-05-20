import { useRef, useState, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import { useAgent } from "./useAgent";

export function AgentChat() {
  const { messages, loading, sendQuestion } = useAgent();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;
    setInput("");
    sendQuestion(question).then(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });
    inputRef.current?.focus();
  }

  return (
    <div style={{ maxWidth: "72rem", width: "100%", padding: "2.4rem" }}>
      <h2 style={{ marginBottom: "1.6rem", color: "var(--primary)" }}>
        Agente de Dúvidas
      </h2>

      <div
        style={{
          minHeight: "32rem",
          maxHeight: "48rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          marginBottom: "1.6rem",
          padding: "1.6rem",
          background: "var(--gray-800)",
          borderRadius: "0.8rem",
        }}
      >
        {messages.length === 0 && (
          <p style={{ color: "var(--text-muted)", textAlign: "center" }}>
            Faça uma pergunta sobre os módulos de treinamento.
          </p>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              background:
                msg.role === "user" ? "var(--primary)" : "var(--gray-700)",
              color:
                msg.role === "user"
                  ? "var(--text-over-primary)"
                  : "var(--text-default)",
              padding: "1rem 1.4rem",
              borderRadius: "0.8rem",
              maxWidth: "80%",
              fontSize: "1.4rem",
              lineHeight: "1.6",
            }}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}

        {loading && (
          <p style={{ color: "var(--text-muted)", fontSize: "1.4rem" }}>
            Agente pensando...
          </p>
        )}

        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "0.8rem", width: "100%" }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua dúvida sobre os módulos..."
          disabled={loading}
          style={{
            flex: 1,
            padding: "0.8rem 1.2rem",
            fontSize: "1.6rem",
            background: "var(--gray-700)",
            color: "var(--text-default)",
            border: "0.2rem solid var(--primary)",
            borderRadius: "0.8rem",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.8rem 2rem",
            fontSize: "1.6rem",
            background: "var(--primary)",
            color: "var(--text-over-primary)",
            border: "none",
            borderRadius: "0.8rem",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

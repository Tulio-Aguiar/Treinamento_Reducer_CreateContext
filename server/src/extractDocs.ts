import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { parse } from "node-html-parser";

const DOCS_PATH = resolve("../docs");
const OUTPUT_PATH = resolve("src/trainingContent.ts");

const modules = [
  { file: "useContext.html", name: "useContext & createContext" },
  { file: "useReducer.html", name: "useReducer" },
  { file: "css-moderno.html", name: "CSS Moderno 2026" },
  { file: "tailwind.html", name: "Tailwind CSS" },
];

function extractText(filePath: string): string {
  const html = readFileSync(filePath, "utf-8");
  const root = parse(html);

  // Remove scripts e estilos
  root.querySelectorAll("script, style").forEach((el) => el.remove());

  return root.structuredText.replace(/\n{3,}/g, "\n\n").trim();
}

const sections = modules.map(({ file, name }) => {
  const filePath = resolve(DOCS_PATH, file);
  const text = extractText(filePath);
  return `## ${name}\n\n${text}`;
});

const content = sections.join("\n\n---\n\n");

writeFileSync(
  OUTPUT_PATH,
  `export const trainingContent = ${JSON.stringify(content)};\n`,
  "utf-8",
);

console.log("trainingContent.ts gerado com sucesso.");

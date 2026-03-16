import { useTheme } from "../../ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <button
        className="theme-toggle-button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Claro" : "Escuro"}
        title={theme === "dark" ? "Claro" : "Escuro"}
      >
        {theme === "dark" ? "☀️ " : "🌙 "}
        {theme === "dark" ? "Claro" : "Escuro"}
      </button>
    </header>
  );
}

import { useLanguage, type Language } from "./LanguageContext";
import { useTheme } from "../../ThemeContext";

export function LanguageSwitcher() {
  const { theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#fff" : "#000",
    color: theme === "dark" ? "#000" : "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };
  const labels: Record<Language, string> = {
    "pt-BR": "en-US",
    "en-US": "de-DE",
    "de-DE": "pt-BR",
  };
  return (
    <button
      onClick={toggleLanguage}
      style={{
        ...buttonStyle,
      }}
    >
      {labels[language]}
    </button>
  );
}

import { createContext, useContext, useState } from "react";

export type Language = "pt-BR" | "en-US" | "de-DE";

const translations = {
  "pt-BR": {
    hello: "Olá",
    logout: "Sair",
    welcome: "Bem-vindo",
    acess: "ao acesso",
  },
  "en-US": {
    hello: "Hello",
    logout: "Sign out",
    welcome: "Welcome",
    acess: "to access",
  },
  "de-DE": {
    hello: "Hallo",
    logout: "Abmelden",
    welcome: "Willkommen",
    acess: "zum Zugang",
  },
};

type TranslationsKeys = keyof (typeof translations)["pt-BR"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationsKeys) => string;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}
const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const t = (key: TranslationsKeys): string => {
    return translations[language][key];
  };
  const value = {
    language,
    setLanguage,
    t,
  };
  return <LanguageContext value={value}>{children}</LanguageContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage fora do LanguageProvider");
  return ctx;
}

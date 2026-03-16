import { createContext, useContext, useState } from "react";

export type Language = "pt-BR" | "en-US" | "de-DE";

const translations = {
  "pt-BR": {
    hello: "Olá",
    logout: "Sair",
    welcome: "Bem-vindo",
    access: "ao acesso",
  },
  "en-US": {
    hello: "Hello",
    logout: "Sign out",
    welcome: "Welcome",
    access: "to access",
  },
  "de-DE": {
    hello: "Hallo",
    logout: "Abmelden",
    welcome: "Willkommen",
    access: "zum Zugang",
  },
};

type TransaltionsKeys = keyof (typeof translations)["pt-BR"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TransaltionsKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = (key: TransaltionsKeys): string => {
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

import { createContext, useContext, useState } from "react";

export type Language = "pt-BR" | "en-US" | "de-DE";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const toggleLanguage = () => {
    setLanguage((prev) => {
      const cycle: Language[] = ["pt-BR", "en-US", "de-DE"];
      const next = (cycle.indexOf(prev) + 1) % cycle.length;
      return cycle[next];
    });
  };

  const value = {
    language,
    toggleLanguage,
  };
  return <LanguageContext value={value}>{children}</LanguageContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error("useLanguage fora do LanguageProvider");
  }
  return ctx;
}

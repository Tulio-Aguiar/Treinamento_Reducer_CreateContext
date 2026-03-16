import { AuthProvider } from "../AuthContext/AuthContext";
import { ThemeProvider } from "../../ThemeContext";
import { LanguageProvider } from "../LanguageContext/LanguageContext";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

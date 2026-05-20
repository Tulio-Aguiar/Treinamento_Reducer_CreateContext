import AuthProvider from "../AuthContext/AuthContext";
import ThemeProvider from "../../ThemeContext";
import LanguageProvider from "../exercicios-ContextAPI/LanguageContext";
import { NotificationProvider } from "../exercicios-ContextAPI/NotificationContext";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

import { createContext, useContext, useState, useCallback } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback(async (email: string, _password: string) => {
    const mockUser: User = {
      id: "1",
      name: "Túlio Aguiar",
      email,
      role: "admin",
    };
    setUser(mockUser);
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const value: AuthContextType = {
    user,
    isAuthenticated: user != null,
    login,
    logout,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth fora do AuthProvider");
  }
  return ctx;
}

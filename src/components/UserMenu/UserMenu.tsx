import { useLanguage, type Language } from "../LanguageContext/LanguageContext";
import { useTheme } from "../../ThemeContext";
import { useAuth } from "../AuthContext/AuthContext";

export function UserMenu() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#fff" : "#000",
    color: theme === "dark" ? "#000" : "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  if (!isAuthenticated) {
    return (
      <button onClick={() => login("tulio@dev.com", "123")} style={buttonStyle}>
        Entrar{" "}
      </button>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <span>
        {t("hello")}, {user?.name}! {""}
      </span>
      <span>
        {" "}
        {t("welcome")} {t("access")} {user?.role}
      </span>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        style={{
          ...buttonStyle,
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
        <option value="de-DE">DE</option>
      </select>

      <button
        onClick={logout}
        style={{
          ...buttonStyle,
          marginLeft: "2px",
          fontSize: "16px",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {t("logout")}
      </button>
    </div>
  );
}

import Header from "./components/Header/Header";
import { UserMenu } from "./components/UserMenu/UserMenu";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div
        data-theme={theme}
        style={{
          minHeight: "100vh",
          transition: "background-color .3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Header />
        <UserMenu />
      </div>
    </>
  );
}

export default App;

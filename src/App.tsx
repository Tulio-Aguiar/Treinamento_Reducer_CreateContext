import { StoreDashboard } from "./components/exercicios-Reducer/StoreDashboard";
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
        <StoreDashboard />
      </div>
    </>
  );
}

export default App;

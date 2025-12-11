import { useContext } from "react";
import { ThemeContext } from "./theme";

const App = () => {
  const [theme, toogleTheme] = useContext(ThemeContext);

  return (
    <div className="app">
      <h1 style={{ background: theme.background, color: theme.foreground }}>
        Theme context
      </h1>

      <button onClick={toogleTheme}>Toggle</button>
    </div>
  );
};

export default App;

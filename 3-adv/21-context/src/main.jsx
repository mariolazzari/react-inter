import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider value="foo">
    <App />
  </ThemeContextProvider>
);

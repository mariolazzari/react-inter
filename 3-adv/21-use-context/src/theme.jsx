import { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");

  const toogleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toogleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

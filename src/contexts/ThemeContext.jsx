import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  const darkTheme = { text: "#FFFFFF", ui: "#0c0119", bg: "#121212" };
  const lightTheme = { text: "#000000", ui: " #d6d6c2", bg: "#FFFFFF" };

  const toggleThemeHandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, darkTheme, lightTheme, toggleThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };

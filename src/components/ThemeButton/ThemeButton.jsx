import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeButton = () => {
  const { toggleThemeHandler, isDark, lightTheme, darkTheme } =
    useContext(ThemeContext);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonText = (e) => {
    setIsDarkMode((prev) => !prev);
    toggleThemeHandler();
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <button
      onClick={handleButtonText}
      style={{ background: theme.ui, color: theme.text }}
    >
      {!isDarkMode ? "Dark mode" : "Light mode"}
    </button>
  );
};

export default ThemeButton;

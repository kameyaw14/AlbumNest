import React, { useContext } from "react";
import "./NavBar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeButton from "../ThemeButton/ThemeButton";

const NavBar = () => {
  const { isDark, darkTheme, lightTheme } = useContext(ThemeContext);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div>
      <nav
        className="navDiv"
        style={{ background: theme.ui, color: theme.text }}
      >
        <h1 className="heading">AlbumList</h1>
      </nav>
      <ThemeButton />
    </div>
  );
};

export default NavBar;

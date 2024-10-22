import React, { useContext } from "react";
import "./AlbumList.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AlbumListContext } from "../../contexts/AlbumListContext";

const AlbumList = () => {
  const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
  const { albums } = useContext(AlbumListContext);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div
      className="container"
      style={{ background: theme.ui, color: theme.text }}
    >
      <ul className="listDiv">
        {albums.map((item) => (
          <li key={item.id}>
            <h2 className="listItem">{item.title}</h2>
            <p className="listItem">{item.artiste}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;

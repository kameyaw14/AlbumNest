import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar/NavBar";
import AlbumList from "./components/AlbumList/AlbumList";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import { AlbumListContextProvider } from "./contexts/AlbumListContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AlbumListContextProvider>
          <div>
            <NavBar />
            <AlbumList />
          </div>
        </AlbumListContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

import { createContext, useState } from "react";

const AlbumListContext = createContext();

const AlbumListContextProvider = (props) => {
  const [albums, SetAlbums] = useState([
    { title: "My Beautiful Dark Tisted Fantasy", artiste: "Kanye West", id: 1 },
    { title: "The Miseduaction of Lauryn Hill", artiste: "Lauryn Hill", id: 2 },
    { title: "4 Your Eyez Only", artiste: "J.Cole", id: 3 },
    { title: "To Pimpp A Butterfly", artiste: "Kendrick Lamar", id: 4 },
  ]);

  return (
    <AlbumListContext.Provider value={{ albums }}>
      {props.children}
    </AlbumListContext.Provider>
  );
};

export { AlbumListContext, AlbumListContextProvider };

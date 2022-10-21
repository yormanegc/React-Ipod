import { useEffect, useState } from "react";

import songse from "./Components/Seeders/songse";
import Audio from "./Components/Audio/Audio";
import Notes from "./Components/Notes/Notes";
import Buttons from "./Components/Buttons/Buttons";
import Footer from "./Components/Footer/Footer";

const App = () => {
  let songslenght = songse?.length;
  const [choice, setChoice] = useState(0);
  const { name, artist, path, image, album, id } = songse[choice];
  const [pather, setPather] = useState(path);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPather(path);
  }, [name]);

  return (
    <div className="app" id="app">
      <div className="ipodContainer">
        <div className="ipod">
          {play === true ? <Notes /> : null}
          <Audio
            name={name}
            image={image}
            pather={pather}
            artist={artist}
            album={album}
            id={id}
            songslenght={songslenght}
            choice={choice}
            setChoice={setChoice}
          />
          <Buttons
            songslenght={songslenght}
            choice={choice}
            setChoice={setChoice}
            setPlay={setPlay}
            play={play}
          />
        </div>
        <div className="ipodlat"></div>
        <div className="ipodShadow"></div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

import { useEffect } from "react";
import {
  TbPlayerTrackNext,
  TbPlayerTrackPrev,
  TbPlayerSkipBack,
  TbPlayerPlay,
  TbPlayerPause,
} from "react-icons/tb";

const Buttons = ({ songslenght, choice, setChoice, setPlay, play }) => {
  let changer = 0;

  const repeatSong = () => {
    let song = document.getElementById("audio");
    song.load();
    setPlay(false);
  };

  const playpause = (setPlay) => {
    let playpause = document.getElementById("audio");

    if (changer === 0) {
      changer = 1;
      playpause.play();
      setPlay(true);
    } else {
      changer = 0;
      playpause.pause();
      setPlay(false);
    }
  };

  useEffect(() => {
    if (play === true) {
      let app = document.getElementById("app");
      app.classList.add("active");
    } else {
      let app = document.getElementById("app");
      app.classList.remove("active");
    }
  }, [play]);

  const changeSong = (term) => {
    switch (term) {
      case "next":
        setChoice(choice + 1);
        break;
      case "back":
        setChoice(choice - 1);
        break;
      case "repeat":
        setChoice(0);
        break;
    }
  };

  return (
    <div className="buttonsContainer">
      <button
        className="buttonsContainer__back"
        onClick={() => changeSong(choice === 0 ? "repeat" : "back")}
      >
        <TbPlayerTrackPrev className="items" />
      </button>
      <button className="buttonsContainer__goback">
        <TbPlayerSkipBack className="items" onClick={() => repeatSong()} />
      </button>
      <button
        className="buttonsContainer__next"
        onClick={() => changeSong(choice < songslenght - 1 ? "next" : "repeat")}
      >
        <TbPlayerTrackNext className="items" />
      </button>
      <button
        className="buttonsContainer__playpause"
        onClick={() => playpause(setPlay)}
      >
        <TbPlayerPlay className="items" />
        <TbPlayerPause className="items" />
      </button>
    </div>
  );
};

export default Buttons;

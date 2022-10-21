import { useEffect, useRef, useState } from "react";
import Volume from "../Volume/Volume";
import Window from "../Window/Window";

const Audio = ({
  name,
  artist,
  image,
  pather,
  album,
  id,
  songslenght,
  choice,
  setChoice,
}) => {
  const [duration, setDuration] = useState();
  const [currentTimeDuration, setCurrentTimeDuration] = useState();
  const audioItem = useRef(0);
  const [currentSong, setCurrentSong] = useState([]);
  const [volume, setVolume] = useState(audioItem.current.volume);
  const volumeRef = useRef();

  const songInformation = () => {
    audioItem.current.onloadedmetadata = function () {
      setDuration(audioItem.current.duration);
    };
    const songCt = audioItem.current.currentTime;
    setCurrentTimeDuration(songCt);

    setCurrentSong({
      progress: (songCt / audioItem.current.duration) * 73,
      duration: audioItem.current.duration,
    });

    if (audioItem.current.ended) {
      if (choice < songslenght - 1) {
        setChoice(choice + 1);
      } else {
        setChoice(0);
      }
    }
  };

  useEffect(() => {
    const songVolume = audioItem.current.volume;
    setVolume(songVolume);
  }, []);

  return (
    <>
      <Window
        setVolume={setVolume}
        audioItem={audioItem}
        volume={volume}
        currentTimeDuration={currentTimeDuration}
        duration={duration}
        currentSong={currentSong}
        image={image}
        artist={artist}
        name={name}
        album={album}
        id={id}
        songslenght={songslenght}
        volumeRef={volumeRef}
      />
      <audio
        id="audio"
        ref={audioItem}
        src={pather}
        onTimeUpdate={songInformation}
        preload="metadata"
        autoPlay
      />
      <Volume
        volume={volume}
        setVolume={setVolume}
        audioItem={audioItem}
        volumeRef={volumeRef}
      />
    </>
  );
};

export default Audio;

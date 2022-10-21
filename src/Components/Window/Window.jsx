import { useRef } from "react";
import { BiVolume, BiVolumeFull } from "react-icons/bi";
const Window = ({
  setVolume,
  audioItem,
  volume,
  currentTimeDuration,
  duration,
  currentSong,
  name,
  id,
  album,
  artist,
  songslenght,
  image,
  volumeRef,
}) => {
  const clickRef = useRef();
  const clickVol = useRef();
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioItem.current.currentTime = (divprogress / 100) * currentSong.duration;
  };

  const checkWidthVol = (e) => {
    let widthVol = clickVol.current.clientWidth;
    const offsetVol = e.nativeEvent.offsetX;

    const volprogress = (offsetVol / widthVol) * 100;
    audioItem.current.volume = (volprogress / 1000) * 10;
    setVolume((volprogress / 1000) * 10);
  };
  return (
    <div className="windowContainer">
      <div className="songDuration">
        <p>{(Math.floor(currentTimeDuration) / 60).toFixed(2)}</p>
        <p>{(Math.floor(duration) / 60).toFixed(2)}</p>
        <div className="durationBar" onClick={checkWidth} ref={clickRef}></div>
        <div
          className="progressBar"
          onClick={checkWidth}
          style={{ width: `${currentSong.progress + "%"}` }}
        ></div>
      </div>
      <div className="windowContainer__imageContainer">
        <img className="windowContainer__imageContainer-img" src={image}></img>
        <img
          className="windowContainer__imageContainer-reflect"
          src={image}
        ></img>
      </div>
      <div className="windowContainer__info">
        <marquee
          behavior="scroll"
          scrolldelay="200"
          direction="left"
          className="windowContainer__info-name"
        >
          {name}
        </marquee>
        <p className="windowContainer__info-artist">{artist}</p>
        <p className="windowContainer__info-album">{album}</p>
        <p className="windowContainer__info-artist">
          {id} de {songslenght}
        </p>
        <div className="volumeContainer" ref={volumeRef}>
          <div
            className="volume__progress"
            style={{ width: `${volume * 32 + "%"}` }}
            onClick={checkWidthVol}
          ></div>
          <div className="volume__bar" ref={clickVol} onClick={checkWidthVol}>
            <BiVolume className="volume__icon-down" />
            <BiVolumeFull className="volume__icon-up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;

import { useState } from "react";

const Volume = ({volume, setVolume, audioItem, volumeRef}) => {
    const [volumeCLick , setVolumeClick] = useState(false);
    const volumeHandler = (term) => {
        volumeRef.current.classList.add('active');
        setVolumeClick(true);
        switch(term){
            case 'up':
            setVolume(volume + 0.01);
            break;
            case 'down':
            setVolume(volume - 0.01)       
        }

        audioItem.current.volume = volume;
        if(volumeCLick === false){
            setTimeout(async function(){
                await volumeRef.current.classList.remove('active');
                setVolumeClick(false);
            },7000);
        }
    }
    return(
        <div className="volume">
            <button className="volume__button" onMouseDown={() => volume <= 0.99 ? volumeHandler('up') : null}></button>
            <button className="volume__button" onMouseDown={() => volume >= 0.01 ? volumeHandler('down') : null}></button>
        </div>
    )
}

export default Volume;
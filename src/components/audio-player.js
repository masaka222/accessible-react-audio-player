import React, {useRef, useState} from 'react';

const AudioPlayer = ({
    src = 'https://res.cloudinary.com/jlengstorf/video/upload/v1604601320/boop-song.mp3',
    transcription = 'PEW PEW PEW PEWWWW'

}) => {
    const ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mediaTime, setMediaTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlaying = (event) => {
        setIsPlaying(!isPlaying);

        const audioPlayer = ref.current;
        isPlaying? audioPlayer.pause() : audioPlayer.play();
    }
return (
    <div>
        <div>
            <button onClick={togglePlaying}>{isPlaying? 'Pause': 'Play'}</button>
            <span>elapsed time {mediaTime}</span>
            <span>total duration {duration}</span>
        </div>
        <audio ref={ref} src={src} controls/>
        <p className='transcription'>{transcription}</p>
    </div>

);
}

export default AudioPlayer;
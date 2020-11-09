import React from 'react';

const AudioPlayer = ({
    src = 'https://res.cloudinary.com/jlengstorf/video/upload/v1604601320/boop-song.mp3',
    transcription = 'PEW PEW PEW PEWWWW'

}) => {
return (
    <div>
        <audio src={src} controls/>
        <p className='transcription'>{transcription}</p>
    </div>

);
}

export default AudioPlayer;
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from './VideoJS';


export const Video = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    muted: true,
    responsive: true,
    fluid: true,
    
    sources: [{
      src: 'videos/promovideo.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      
    </>
  );
}

export default Video;
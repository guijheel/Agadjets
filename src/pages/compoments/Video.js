import React, { useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from './VideoJS';
import './VideoPlayer.css'; 


export const Video = () => {
  const playerRef = React.useRef(null);
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      
      <video autoPlay playsInline muted  width="100%" >
  <source src="videos/intro4K.mp4" type="video/mp4"  height="100%"  className='video'/>
</video>
      
    </>
  );
}

export default Video;
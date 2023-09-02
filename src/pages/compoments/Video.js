import React, { useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from './VideoJS';


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
      
      <video autoPlay playsInline muted  width={viewportSize.width}>
  <source src="videos/promovideo.mp4" type="video/mp4" />
</video>
      
    </>
  );
}

export default Video;
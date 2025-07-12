// src/routes/index.tsx
import { createFileRoute, Link } from '@tanstack/react-router';
import React, { useState, useEffect, useRef } from 'react';
import bgVideo from '../assets/laut.mp4';
import welcomeImage from '../assets/logo1.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTransitionOverlay, setShowTransitionOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleTimeUpdate = () => {
        // Show overlay content (image and button) after 5 seconds
        if (videoElement.currentTime >= 5 && !showOverlay) {
          setShowOverlay(true);
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);

      // Clean up the event listener when the component unmounts
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [showOverlay]);

  const handleStartNowClick = () => {
    setShowTransitionOverlay(true); // Show the full-screen transition overlay
    
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>

      {/* Overlay Content (Image and Button) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        } ${showOverlay ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000 ease-out z-10`}
      >
        {/* Replaced text with an image */}
        <img
          src={welcomeImage}
          alt="Welcome"
          className="max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto mb-8" // Adjust sizing as needed
          style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))' }} // Optional: adds a subtle shadow to the image
        />

        {/* Link for navigation */}
    <Link
      to="/home"
      className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
      onClick={handleStartNowClick}
    >
      <RocketLaunchIcon fontSize="medium" />
      Go
    </Link>
      </div>
      {/* Transition Overlay (Covers the video with a solid color) */}
      <div
        className={`absolute inset-0 bg-blue-800 transition-opacity duration-500 z-20 ${
          showTransitionOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
    </div>
  );
}


"use client"
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoPlayer1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center h-56 bg-white rounded m-4 shadow-md ">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-slate-500 text-white p-2 rounded absolute"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://d2of6bhnpl91ni.cloudfront.net/cms/new-real-estate-listing-video-template-0f2c2d0531.mp4"/>
       
      </div>
  );
}

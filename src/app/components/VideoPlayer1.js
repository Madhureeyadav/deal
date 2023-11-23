

"use client"
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoPlayer1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center  bg-white rounded m-2 shadow-md">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-slate-500 text-white p-2 rounded absolute"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
<<<<<<< HEAD
        src="https://youtu.be/SntTQthl1UQ"
       
      />
=======
        src="https://youtu.be/SntTQthl1UQ?t=91"
       />
>>>>>>> c32e1e69434cff36396c564db1b092a10d35c94b
    </div>
  );
}

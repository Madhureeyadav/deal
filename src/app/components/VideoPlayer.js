
import { useEffect, useRef } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={"https://tunatheme.com/tf/html/quarter-preview/quarter"} className="pt-2 h-60  w-full  p-2 object-cover" />;
}

export default VideoPlayer;


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

  return <video ref={ref} src={"https://d2of6bhnpl91ni.cloudfront.net/cms/new-real-estate-listing-video-template-0f2c2d0531.mp4"} className="pt-2 h-60  w-full  p-2 object-cover" />;
}

export default VideoPlayer;

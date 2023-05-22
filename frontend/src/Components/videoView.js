import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

export default function VideoView(props) {
 
  const [videoData, setVideoData] = useState(null);

  let videoId = props.videoId.url
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
    apiKey: 'AIzaSyD0yk5ZkFCO-kXQhgvzUj_JWqmv1qcB6qc',
  };

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${opts.apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0].snippet);
        }
      })
      .catch(error => console.error(error));
  }, [videoId, opts.apiKey]);





  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{videoData.title}</h2>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

      
   

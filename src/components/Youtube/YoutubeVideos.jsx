import React, { useState, useEffect } from "react";
import "./YouTube.css";

const YoutubeVideos = () => {
  // State to hold YouTube videos
  const [videos, setVideos] = useState([]);
  
  // Your YouTube API key (Replace 'YOUR_API_KEY' with your actual key)
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const MAX_RESULTS = 9;
  const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple’s official YouTube channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        // console.log(data)
        
        if (data.items) {
          setVideos(data.items);
        //   console.log("Fetched Videos:", data.items); // Debugging: Check fetched videos
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="youtube-container">
      <h2>Latest Apple Videos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </a>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description.substring(0, 100)}...</p>
            <small>Published on: {new Date(video.snippet.publishedAt).toDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;




















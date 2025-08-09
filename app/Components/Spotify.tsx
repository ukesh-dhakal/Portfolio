"use client"
import React, { useState, useEffect } from "react";

const SpotifyNowPlaying = () => {
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (

  <img
    src={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=317dtavgsxwwm5jvkviexkhityay&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false&_=${timestamp}`}
    alt="Now Playing on Spotify"

  />


  );
};

export default SpotifyNowPlaying;

"use client"; // for Next.js 13+ if using app directory

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "videojs-contrib-ads";
import "videojs-ima";

const VideoPlayer = ({ videoSrc, vastTagUrl, poster }: any) => {
  const videoRef = useRef<any | null>(null);
  const playerRef = useRef<any | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const player: any = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
        width: 640,
        height: 360,
        poster: poster,
        sources: [{ src: videoSrc, type: "video/mp4" }],
      });

      player.ima({
        adTagUrl: vastTagUrl,
      });

      player.ready(() => {
        player.ima.initializeAdDisplayContainer();
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoSrc, vastTagUrl]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;

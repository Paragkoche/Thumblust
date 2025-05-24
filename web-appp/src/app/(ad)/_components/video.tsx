"use client";

import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./style.css";

type VideoPlayerProps = {
  url?: string;
  poster?: string;
};

const VideoPlayer = ({ poster, url }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<ReturnType<typeof videojs> | null>(null);
  const [videoPlayOrPause, setVideoPlayOrPause] = React.useState(false);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
        poster: poster || "",
        response: true,
        fluid: true, // Makes player responsive
        controlBar: {
          fullscreenToggle: true, // Ensures fullscreen button is included
        },
        sources: [
          {
            src:
              url ||
              "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [url, poster]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("Key pressed:", e.code, e.code === "Space");

      if (e.code === "Space") {
        e.preventDefault(); // Prevent scrolling
        if (playerRef.current) {
          console.log(playerRef.current.paused());

          setVideoPlayOrPause(playerRef.current.paused());
        }
        return;
      }
      if (e.code === "KeyF") {
        e.preventDefault(); // Prevent default fullscreen behavior
        if (playerRef.current) {
          if (playerRef.current.isFullscreen()) {
            playerRef.current.exitFullscreen();
          } else {
            playerRef.current.requestFullscreen();
          }
        }
        return;
      }
      if (e.code === "KeyM") {
        e.preventDefault(); // Prevent default mute behavior
        if (playerRef.current) {
          const isMuted = playerRef.current.muted();
          playerRef.current.muted(!isMuted);
        }
        return;
      }
      if (e.code === "KeyR") {
        e.preventDefault(); // Prevent default reload behavior
        if (playerRef.current) {
          playerRef.current.currentTime(0); // Reset video to start
          playerRef.current.play();
        }
        return;
      }
      if (e.code === "KeyS") {
        e.preventDefault(); // Prevent default stop behavior
        if (playerRef.current) {
          playerRef.current.pause();
          playerRef.current.currentTime(0); // Reset video to start
        }
        return;
      }
      if (e.code == "ArrowLeft" || e.code == "ArrowRight") {
        e.preventDefault(); // Prevent default seek behavior
        if (playerRef.current) {
          const currentTime = playerRef.current.currentTime();
          const newTime =
            e.code === "ArrowLeft"
              ? (currentTime ?? 0) - 10
              : (currentTime ?? 0) + 10;
          playerRef.current.currentTime(Math.max(0, newTime)); // Ensure time doesn't go negative
        }
        return;
      }
    };
    let lastTap = 0;
    let tapTimeout: ReturnType<typeof setTimeout> | null = null;
    // @typescript-eslint/no-unused-vars
    let touchStartX = 0;
    console.log(touchStartX);

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const screenWidth = window.innerWidth;
      const now = new Date().getTime();

      // Double Tap Detection
      if (now - lastTap < 300) {
        clearTimeout(tapTimeout!);
        const tappedZone = touchEndX < screenWidth / 2 ? "left" : "right";

        if (playerRef.current) {
          const currentTime = playerRef.current.currentTime();
          if (tappedZone === "left") {
            playerRef.current.currentTime(Math.max(0, (currentTime ?? 0) - 10));
          } else {
            playerRef.current.currentTime((currentTime ?? 0) + 10);
          }
        }
      } else {
        tapTimeout = setTimeout(() => {
          // Single tap (Play/Pause)
          if (playerRef.current) {
            if (playerRef.current.paused()) {
              playerRef.current.play();
            } else {
              playerRef.current.pause();
            }
          }
        }, 300);
      }

      lastTap = now;
    };

    window.addEventListener("keydown", handleKeyDown);
    videoRef.current!.addEventListener("touchstart", handleTouchStart);
    videoRef.current!.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      videoRef.current!.removeEventListener("touchstart", handleTouchStart);
      videoRef.current!.removeEventListener("touchend", handleTouchEnd);
    };
  }, [playerRef.current, videoRef.current]);
  useEffect(() => {
    if (playerRef.current) {
      if (videoPlayOrPause) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [videoPlayOrPause]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" playsInline />
    </div>
  );
};

export default VideoPlayer;

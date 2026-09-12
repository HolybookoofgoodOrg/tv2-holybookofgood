"use client";

import React, { useRef, useState, useEffect } from "react";
import { VideoItem, ensureHttps } from "@/data/mediaArchive";
import {
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Radio,
  Share2,
  Sparkles,
  Check,
} from "lucide-react";

interface HeroPlayerProps {
  currentVideo: VideoItem;
  onNextTrack: () => void;
  currentIndex: number;
  totalVideos: number;
}

export const HeroPlayer: React.FC<HeroPlayerProps> = ({
  currentVideo,
  onNextTrack,
  currentIndex,
  totalVideos,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [copied, setCopied] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const formatSeconds = (sec: number) => {
    if (isNaN(sec) || sec <= 0) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay might be blocked by browser policy without mute
            setIsPlaying(false);
          });
      }
    }
  }, [currentVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(formatSeconds(current));
    if (!isNaN(total) && total > 0) {
      setProgress((current / total) * 100);
      setDuration(formatSeconds(total));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    if (!isNaN(videoRef.current.duration)) {
      videoRef.current.currentTime = clickPos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full mb-10">
      {/* Ambient Neon Glow behind Player */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-amber-500/25 rounded-3xl blur-2xl opacity-60 ambient-glow pointer-events-none -z-10" />

      <div className="bg-neutral-900/40 border border-neutral-800/90 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
        {/* Main Video Screen Container */}
        <div
          ref={containerRef}
          className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800/80 shadow-inner flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={ensureHttps(currentVideo.videoUrl)}
            className="w-full h-full object-contain cursor-pointer"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onEnded={onNextTrack}
            onClick={togglePlay}
            playsInline
            crossOrigin="anonymous"
          />

          {/* Buffering Indicator */}
          {isBuffering && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Top Overlay Badge & Rating */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <span className="bg-black/70 backdrop-blur-md text-pink-400 border border-pink-500/30 text-[11px] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <Radio className="w-3 h-3 text-pink-400 animate-pulse" />
                LIVE STREAM • TR {String(currentIndex + 1).padStart(2, "0")}/{totalVideos}
              </span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              {/* DVD Rating 15+ */}
              <div
                className="dvd-rating-15 cursor-help"
                title="Mature Content 15+"
              >
                15+
              </div>
            </div>
          </div>

          {/* Bottom Player Overlay Bar (Hover Controls) */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex flex-col gap-2 pointer-events-auto">
            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-neutral-700/60 hover:h-2.5 rounded-full cursor-pointer transition-all duration-150 relative overflow-hidden group/bar"
            >
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs font-mono pt-1">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-2 hover:bg-neutral-800/80 rounded-lg text-white transition hover:text-pink-400"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current" />
                  )}
                </button>

                <button
                  onClick={onNextTrack}
                  className="p-2 hover:bg-neutral-800/80 rounded-lg text-neutral-300 hover:text-pink-400 transition"
                  title="Next Track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-neutral-800/80 rounded-lg text-neutral-300 hover:text-pink-400 transition"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-red-400" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>

                <div className="text-[11px] text-neutral-400 font-mono tracking-wider select-none">
                  <span className="text-white">{currentTime}</span> / {duration}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 hover:bg-neutral-800/80 rounded-lg text-neutral-300 hover:text-white transition"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info Header & Action Bar */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30">
                {currentVideo.category}
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                • Views: {currentVideo.views || "18.4K"}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
              {currentVideo.title}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-4xl">
              {currentVideo.desc}
            </p>
          </div>

          {/* Action Buttons Right Side */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
            <button
              onClick={handleShare}
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-3.5 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition"
              title="Share Link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onNextTrack}
              className="bg-gradient-to-r from-neutral-900 to-neutral-850 hover:from-purple-950/40 hover:to-pink-950/40 border border-neutral-800 hover:border-pink-500/50 text-neutral-200 hover:text-pink-300 px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold font-mono tracking-wider transition-all duration-200 shadow-md group"
            >
              <span>NEXT TRACK</span>
              <SkipForward className="w-3.5 h-3.5 text-pink-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { VideoItem } from "@/data/mediaArchive";
import { Play, Flame, Disc, Radio, Eye } from "lucide-react";

interface ContentGridProps {
  videos: VideoItem[];
  currentVideoId: string;
  onSelectVideo: (video: VideoItem) => void;
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  videos,
  currentVideoId,
  onSelectVideo,
}) => {
  if (videos.length === 0) {
    return (
      <div className="w-full text-center py-16 bg-neutral-900/30 rounded-3xl border border-neutral-800/60">
        <p className="text-neutral-400 font-mono text-sm">
          No frequency broadcasts found in this category.
        </p>
      </div>
    );
  }

  return (
    <section id="channels" className="w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Disc className="w-6 h-6 text-pink-500 animate-spin-slow" />
            <span>Cosmic Video Archive & Channels</span>
          </h2>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            24/7 synchronized frequency streams across the autonomous network
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800">
          {videos.length} Tracks On Air
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {videos.map((video, idx) => {
          const isActive = video.id === currentVideoId;
          const trackNumber = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className={`group relative rounded-2xl p-3 sm:p-3.5 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                isActive
                  ? "bg-neutral-900/90 border-pink-500 shadow-xl shadow-pink-950/30 ring-1 ring-pink-500/50 scale-[1.02]"
                  : "bg-neutral-900/40 hover:bg-neutral-900/80 border-neutral-800/80 hover:border-purple-500/40 hover:-translate-y-1 shadow-md hover:shadow-purple-950/20"
              }`}
            >
              {/* Media Thumbnail Container with Gradient Placeholder / Video preview */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 flex items-center justify-center mb-3">
                {/* Background Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/60 via-neutral-950 to-pink-950/40 opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Cosmic Graphic Elements */}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? "bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50"
                        : "bg-neutral-900/90 border border-neutral-700/60 text-pink-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600"
                    }`}
                  >
                    <Play
                      className={`w-5 h-5 fill-current ml-0.5 ${
                        isActive ? "animate-pulse" : ""
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold group-hover:text-white transition">
                    FREQUENCY {trackNumber}
                  </span>
                </div>

                {/* Track Badge */}
                <div className="absolute top-2 left-2 z-20">
                  <span className="bg-black/80 backdrop-blur-md border border-neutral-800 text-[9px] font-mono font-black px-2 py-0.5 rounded text-neutral-300 flex items-center gap-1">
                    <span className="text-pink-400">TR</span> {trackNumber}
                  </span>
                </div>

                {/* Active Indicator or Pinned Badge */}
                <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
                  {isActive ? (
                    <span className="bg-pink-600 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full text-white flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      NOW PLAYING
                    </span>
                  ) : video.isPinned ? (
                    <span className="bg-purple-950/80 border border-purple-500/40 text-[9px] font-mono font-bold px-2 py-0.5 rounded text-purple-300">
                      FEATURED
                    </span>
                  ) : null}
                </div>

                {/* Views & Duration strip */}
                <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between text-[10px] font-mono text-neutral-400 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-neutral-400" />
                    {video.views || "12.4K"}
                  </span>
                  <span className="text-pink-400/80">AUTONOMOUS STREAM</span>
                </div>
              </div>

              {/* Title & Category Info */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-400/90 truncate max-w-[80%]">
                    {video.category}
                  </span>
                </div>

                <h3
                  className={`text-sm font-bold leading-snug line-clamp-2 transition-colors ${
                    isActive
                      ? "text-pink-400"
                      : "text-neutral-100 group-hover:text-purple-300"
                  }`}
                >
                  {video.title}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {video.desc}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-4 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between">
                <button
                  className={`text-[11px] font-mono font-bold flex items-center gap-1.5 transition ${
                    isActive
                      ? "text-pink-400"
                      : "text-neutral-400 group-hover:text-white"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isActive ? "In Main Player" : "Watch Now"}</span>
                </button>

                <span className="text-[10px] font-mono text-neutral-500">
                  G.G.G. TV
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

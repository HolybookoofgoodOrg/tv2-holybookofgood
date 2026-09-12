"use client";

import React, { useRef, useState, useEffect } from "react";
import { SHORTS_ARSIFI, ShortItem, ensureHttps } from "@/data/mediaArchive";
import { X, ChevronLeft, ChevronRight, Flame, Sparkles } from "lucide-react";

interface ShortsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortsModal: React.FC<ShortsModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentShort: ShortItem = SHORTS_ARSIFI[currentIndex] || SHORTS_ARSIFI[0];

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.src = ensureHttps(currentShort.url);
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay may need user gesture
      });
    }
  }, [isOpen, currentIndex, currentShort]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHORTS_ARSIFI.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SHORTS_ARSIFI.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-sm sm:max-w-md h-[86vh] flex flex-col overflow-hidden relative shadow-2xl shadow-purple-950/50">
        {/* Modal Header */}
        <div className="p-4 border-b border-neutral-800/80 bg-neutral-900/60 flex items-center justify-between">
          <div className="flex flex-col max-w-[75%]">
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span className="text-xs font-mono font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
                SHORTS DIMENSION
              </span>
            </div>
            <span className="text-[11px] text-neutral-300 font-mono truncate mt-0.5 font-semibold">
              {currentShort.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 p-2 rounded-xl text-xs transition active:scale-95"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Screen */}
        <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            controls
            autoPlay
            crossOrigin="anonymous"
            onEnded={handleNext}
          />

          {/* Quick Frequency Pill */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90">
            FREQ {currentIndex + 1} / {SHORTS_ARSIFI.length}
          </div>
        </div>

        {/* Modal Controls */}
        <div className="p-3.5 border-t border-neutral-800/80 bg-neutral-900/60 grid grid-cols-2 gap-3">
          <button
            onClick={handlePrev}
            className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-purple-500/50 text-neutral-200 hover:text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition flex items-center justify-center gap-1.5 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>&lt; PREV FREQ</span>
          </button>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border border-pink-500/40 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-purple-950/30"
          >
            <span>NEXT FREQ &gt;</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState, useMemo, useEffect } from "react";
import { VIDEO_ARSIFI, VideoItem } from "@/data/mediaArchive";
import { Navbar } from "@/components/Navbar";
import { HeroPlayer } from "@/components/HeroPlayer";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ContentGrid } from "@/components/ContentGrid";
import { TransmissionFeed } from "@/components/TransmissionFeed";
import { ShortsModal } from "@/components/ShortsModal";
import { PartnersAndFooter } from "@/components/PartnersAndFooter";

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isShortsOpen, setIsShortsOpen] = useState<boolean>(false);

  // Read URL param on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const videoId = params.get("v");
      if (videoId) {
        const found = VIDEO_ARSIFI.findIndex((v) => v.id === videoId);
        if (found !== -1) {
          setCurrentVideoIndex(found);
        }
      }
    }
  }, []);

  const currentVideo = VIDEO_ARSIFI[currentVideoIndex] || VIDEO_ARSIFI[0];

  // Video category counts
  const videoCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    VIDEO_ARSIFI.forEach((v) => {
      counts[v.category] = (counts[v.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered videos
  const filteredVideos = useMemo(() => {
    if (selectedCategory === "All") {
      return VIDEO_ARSIFI;
    }
    return VIDEO_ARSIFI.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  const handleNextTrack = () => {
    const nextIdx = (currentVideoIndex + 1) % VIDEO_ARSIFI.length;
    setCurrentVideoIndex(nextIdx);
    updateUrlParam(VIDEO_ARSIFI[nextIdx].id);
  };

  const handleSelectVideo = (video: VideoItem) => {
    const idx = VIDEO_ARSIFI.findIndex((v) => v.id === video.id);
    if (idx !== -1) {
      setCurrentVideoIndex(idx);
      updateUrlParam(video.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const updateUrlParam = (id: string) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("v", id);
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#08080a] text-neutral-100 selection:bg-pink-500/30 selection:text-pink-200">
      {/* Top Navigation */}
      <Navbar
        onOpenShorts={() => setIsShortsOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Central Hero Video Player */}
        <HeroPlayer 
          key={currentVideo.id}
          currentVideo={currentVideo}
          onNextTrack={handleNextTrack}
          currentIndex={currentVideoIndex}
          totalVideos={VIDEO_ARSIFI.length}
        />

        {/* Category & Channel Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          videoCounts={videoCounts}
        />

        {/* Dynamic Content Grid */}
        <ContentGrid
          videos={filteredVideos}
          currentVideoId={currentVideo.id}
          onSelectVideo={handleSelectVideo}
        />

        {/* Transmission Comments Feed */}
        <TransmissionFeed videoId={currentVideo.id} />
      </div>

      {/* Strategic Partners, Live Traffic & Footer */}
      <PartnersAndFooter />

      {/* Shorts Dimension Modal */}
      <ShortsModal
        isOpen={isShortsOpen}
        onClose={() => setIsShortsOpen(false)}
      />
    </main>
  );
}

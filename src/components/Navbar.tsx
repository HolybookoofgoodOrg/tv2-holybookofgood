"use client";

import React, { useState } from "react";
import {
  Tv,
  Radio,
  Info,
  LogIn,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Flame,
} from "lucide-react";

interface NavbarProps {
  onOpenShorts: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShorts, onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Autonomous Network Live Badge */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="#"
              className="group flex items-center space-x-2 transition-transform duration-200 active:scale-95"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 neon-glow select-none">
                HolyBookOfGood.Org T.V.
              </span>
              <span className="text-xs font-black px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 border border-pink-500/30">
                2.0
              </span>
            </a>

            <div className="hidden sm:flex items-center">
              <span className="tv-badge-pulse bg-red-600/90 hover:bg-red-600 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full text-white tracking-widest flex items-center gap-1.5 border border-red-500/50 shadow-sm shadow-red-900/50 select-none">
                <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white animate-ping"></span>
                AUTONOMOUS NETWORK
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-medium text-neutral-300">
            <a
              href="#channels"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900/80 transition"
            >
              <Tv className="w-4 h-4 text-purple-400" />
              <span>Channels</span>
            </a>

            <a
              href="#feed"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900/80 transition"
            >
              <Radio className="w-4 h-4 text-pink-400" />
              <span>Transmission</span>
            </a>

            <a
              href="#about"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900/80 transition"
            >
              <Info className="w-4 h-4 text-amber-400" />
              <span>About</span>
            </a>

            {/* Ecosystem dropdown/links */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:text-white hover:bg-neutral-900/80 transition text-neutral-400 group-hover:text-neutral-200">
                <span>Ecosystem</span>
                <span className="text-[10px] opacity-60">▼</span>
              </button>
              <div className="absolute top-full right-0 mt-1 w-52 bg-neutral-900/95 border border-neutral-800 rounded-xl p-2 shadow-2xl backdrop-blur-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <a
                  href="https://holybookofgood.org/chapter-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-xs rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-pink-400 transition"
                >
                  <span>HolyBookOfGood.Org</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://long-acknowledge-776425.framer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-xs rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-pink-400 transition"
                >
                  <span>FutureGoodPortal.Org</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://www.cosmicnudevibe.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-xs rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-pink-400 transition"
                >
                  <span>CosmicNudeVibe.Org</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </nav>

          {/* Action Buttons: Shorts & Login */}
          <div className="flex items-center space-x-3">
            {/* Shorts Dimension Button */}
            <button
              onClick={onOpenShorts}
              className="relative group overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-mono font-bold text-xs tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 shadow-lg shadow-purple-950/40 border border-purple-400/30 active:scale-95 select-none"
            >
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span className="truncate">SHORTS DIMENSION</span>
            </button>

            {/* Login Button */}
            <button
              onClick={() => alert("Autonomous Gateway: Login protocol initializing soon.")}
              className="hidden sm:flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-pink-500/50 text-neutral-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all duration-200 shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5 text-pink-400" />
              <span>LOGIN</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800/80 space-y-2">
            <div className="sm:hidden pb-3">
              <span className="tv-badge-pulse bg-red-600/90 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full text-white tracking-widest inline-flex items-center gap-1.5 border border-red-500/50">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                AUTONOMOUS NETWORK
              </span>
            </div>

            <a
              href="#channels"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-900 text-neutral-200"
            >
              <Tv className="w-4 h-4 text-purple-400" />
              <span>Channels & Broadcasts</span>
            </a>
            <a
              href="#feed"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-900 text-neutral-200"
            >
              <Radio className="w-4 h-4 text-pink-400" />
              <span>Transmission Stream</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-900 text-neutral-200"
            >
              <Info className="w-4 h-4 text-amber-400" />
              <span>About & Philosophy</span>
            </a>

            <div className="pt-2 border-t border-neutral-900 space-y-1">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 px-3 py-1">
                Ecosystem Networks
              </div>
              <a
                href="https://holybookofgood.org/chapter-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-neutral-900 text-neutral-300"
              >
                <span>HolyBookOfGood.Org</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="https://long-acknowledge-776425.framer.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-neutral-900 text-neutral-300"
              >
                <span>FutureGoodPortal.Org</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="https://www.cosmicnudevibe.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-neutral-900 text-neutral-300"
              >
                <span>CosmicNudeVibe.Org</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert("Autonomous Gateway: Login protocol initializing soon.");
                }}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 text-white py-2.5 rounded-xl text-xs font-mono font-bold"
              >
                <LogIn className="w-4 h-4 text-pink-400" />
                <span>LOG IN</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

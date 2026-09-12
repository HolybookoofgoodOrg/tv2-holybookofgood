"use client";

import React from "react";
import { Globe, Shield, Zap, ExternalLink, Activity } from "lucide-react";

export const PartnersAndFooter: React.FC = () => {
  return (
    <footer id="about" className="w-full mt-16 border-t border-neutral-900 bg-neutral-950/80 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Proposed Strategic Alliances / Partner Hub */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Autonomous Ecosystem Partner Hub</span>
            </h3>
            <span className="text-[10px] font-mono text-neutral-600 uppercase">
              Protocol v2.0
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-neutral-800/80 hover:border-purple-500/60 bg-neutral-900/30 hover:bg-neutral-900/50 p-5 rounded-2xl flex flex-col justify-between transition group shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black font-mono text-purple-400 tracking-wider">
                  GOOGLE PARTNERSHIPS
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-500/60 group-hover:animate-ping"></span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed mt-2">
                [Proposed Area] Subject to approval. Designed to integrate sovereign cloud infrastructure and autonomous scaling models.
              </p>
            </div>

            <div className="border border-neutral-800/80 hover:border-pink-500/60 bg-neutral-900/30 hover:bg-neutral-900/50 p-5 rounded-2xl flex flex-col justify-between transition group shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black font-mono text-pink-400 tracking-wider">
                  XAI GROK LABS
                </span>
                <span className="w-2 h-2 rounded-full bg-pink-500/60 group-hover:animate-ping"></span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed mt-2">
                [Proposed Area] Open for Ecosystem Grants. Aiming to align decentralized real-time cultural data frameworks.
              </p>
            </div>

            <div className="border border-neutral-800/80 hover:border-amber-500/60 bg-neutral-900/30 hover:bg-neutral-900/50 p-5 rounded-2xl flex flex-col justify-between transition group shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black font-mono text-amber-400 tracking-wider">
                  META CULTURE NETWORK
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500/60 group-hover:animate-ping"></span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed mt-2">
                [Proposed Area] Pending developer relations. Intended for immersive syndicates mapping human connection.
              </p>
            </div>
          </div>
        </div>

        {/* Traffic & Autonomous TV Network Stats */}
        <div className="border border-neutral-900 bg-neutral-900/20 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-pink-400">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                Network Traffic & Dynamics
              </div>
              <div className="text-xs font-semibold text-pink-400/90 mt-0.5">
                HolyBookOfGood Autonomous TV Visitors & Node Distribution
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-black/70 px-4 py-2 rounded-xl border border-neutral-800 font-mono text-xs text-neutral-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NODE STATUS: ACTIVE</span>
            </div>
            <div className="bg-black/70 px-3 py-1.5 rounded-xl border border-neutral-800">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=10214451&style=0005&nbdigits=6&type=page&initCount=0"
                alt="Visitor Counter"
                className="opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Links & Manifesto */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-900 text-xs text-neutral-500 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-neutral-400">
              HolyBookOfGood.Org T.V. 2.0
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Autonomous Media Network & Global Ecosystem</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://holybookofgood.org/chapter-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              Philosophy
            </a>
            <a
              href="https://long-acknowledge-776425.framer.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              Future Portal
            </a>
            <a
              href="https://www.cosmicnudevibe.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              Cosmic Vibe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

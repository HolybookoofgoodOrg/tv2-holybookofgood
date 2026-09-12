"use client";

import React from "react";
import { CATEGORIES } from "@/data/mediaArchive";
import { Sparkles } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  videoCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  videoCounts,
}) => {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar pb-3 mb-8">
      <div className="flex items-center space-x-2 min-w-max">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = videoCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 border select-none ${
                isSelected
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-pink-400 shadow-lg shadow-purple-950/40 scale-105"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850"
              }`}
            >
              {isSelected && <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />}
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {cat === "All" ? Object.values(videoCounts).reduce((a, b) => a + b, 0) : count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

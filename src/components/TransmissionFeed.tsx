"use client";

import React, { useState, useEffect } from "react";
import { Send, MessageSquare, Sparkles, User, Clock } from "lucide-react";

interface Comment {
  author: string;
  text: string;
  time: string;
}

interface TransmissionFeedProps {
  videoId: string;
}

export const TransmissionFeed: React.FC<TransmissionFeedProps> = ({ videoId }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("hbg_tv_comments");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[videoId] && Array.isArray(parsed[videoId])) {
          setComments(parsed[videoId]);
          return;
        }
      }
      // Initial cosmic default transmissions if empty
      setComments([
        {
          author: "Cosmic Voyager",
          text: "Frequencies synchronized perfectly. Pure geometric alignment.",
          time: "14:20",
        },
        {
          author: "Goalogique Core",
          text: "Autonomous stream active across all sovereign distributed nodes.",
          time: "15:05",
        },
      ]);
    } catch {
      // Fallback
    }
  }, [videoId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const finalAuthor = author.trim() || "Anonymous Frequency";
    const now = new Date();
    const timeString = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    const newComment: Comment = {
      author: finalAuthor,
      text: text.trim(),
      time: timeString,
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    setText("");

    try {
      const stored = localStorage.getItem("hbg_tv_comments");
      const allComments = stored ? JSON.parse(stored) : {};
      if (!allComments[videoId]) {
        allComments[videoId] = [];
      }
      allComments[videoId].unshift(newComment);
      localStorage.setItem("hbg_tv_comments", JSON.stringify(allComments));
    } catch (err) {
      console.error("Could not save transmission:", err);
    }
  };

  return (
    <section id="feed" className="w-full mb-12">
      <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-5 sm:p-7 backdrop-blur-xl shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-neutral-800/80 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span>Cosmic Transmission Feed</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Broadcast your frequency anonymously or with your name. Let your thoughts echo through the network.
            </p>
          </div>
          <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 border border-purple-500/30 px-3 py-1 rounded-full w-fit">
            LIVE BROADCAST CHAT
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your Name (or Anonymous)"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none transition"
              />
            </div>

            <div className="md:col-span-2 relative">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Transmit your frequency comment here..."
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-mono font-bold text-xs tracking-wider px-5 py-2.5 rounded-xl transition shadow-lg shadow-purple-950/30 flex items-center gap-2 group active:scale-95 uppercase"
            >
              <span>TRANSMIT COMMENT</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </form>

        {/* Comments Feed List */}
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1.5 custom-scrollbar">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-neutral-950/70 border border-neutral-800/90 rounded-2xl p-3.5 hover:border-neutral-700 transition space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="font-bold text-purple-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  {comment.author}
                </span>
                <span className="text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {comment.time}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed pl-1">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

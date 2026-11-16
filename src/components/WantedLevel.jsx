import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Star, ShieldAlert, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WantedLevel({ currentWanted, onWantedChange }) {
  const { techWantedLevel } = portfolioData;

  const handleStarClick = (stars) => {
    soundManager.playWantedStar(stars);
    onWantedChange(stars);
  };

  const activeLevelData = techWantedLevel.find((w) => w.stars === currentWanted) || techWantedLevel[4];

  return (
    <section id="wanted" className="relative py-20 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-yellow-400/80 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
              <ShieldAlert size={14} />
              <span>ORIGINAL CREATIVE INTERACTION SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              TECH WANTED LEVEL
            </h2>
          </div>
          <div className="font-mono text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1.5 rounded self-start md:self-auto">
            STATUS: 5-STAR TECH ENTHUSIAST
          </div>
        </div>

        {/* Wanted Stars Interactive Controller */}
        <div className="bg-[#0F1523] border-2 border-yellow-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                SELECT WANTED LEVEL TO INSPECT COMPETENCY:
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-mono text-yellow-400 uppercase">
                {currentWanted} STAR {activeLevelData.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-gray-300">
                {activeLevelData.tagline}
              </p>
            </div>

            {/* Large Interactive Star Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-black/60 p-3 sm:p-4 rounded-xl border border-yellow-400/30 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className="transform hover:scale-125 transition-all p-1 focus:outline-none"
                  title={`Set wanted level to ${star}`}
                >
                  <Star
                    size={32}
                    className={
                      star <= currentWanted
                        ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_#FFD700] animate-pulse"
                        : "text-gray-700 hover:text-gray-500"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Level Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 font-mono">
            {techWantedLevel.map((lvl) => {
              const isSelected = lvl.stars === currentWanted;
              return (
                <button
                  key={lvl.stars}
                  onClick={() => handleStarClick(lvl.stars)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? "bg-yellow-400/15 border-yellow-400 text-white shadow-[0_0_15px_rgba(255,215,0,0.25)] scale-102"
                      : "bg-[#090D18] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-yellow-400">
                        LEVEL {lvl.stars}
                      </span>
                      <div className="flex">
                        {Array.from({ length: lvl.stars }).map((_, i) => (
                          <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-black text-white uppercase">
                      {lvl.name}
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    {lvl.desc}
                  </p>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

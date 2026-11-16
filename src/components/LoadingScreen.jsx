import React, { useState, useEffect } from 'react';
import { soundManager } from '../sound/audioEffects';

export default function LoadingScreen({ onComplete }) {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const phases = [
    { text: "LOADING PLAYER PROFILE...", sub: "INITIALIZING GAME ENGINE // OPEN-WORLD" },
    { text: "PRATIK KUMAR", sub: "CSE (ARTIFICIAL INTELLIGENCE) • ABESIT" },
    { text: "MISSION DATABASE INITIALIZED", sub: "SYNCING REPOSITORIES & EXPERIENCE" },
    { text: "LOS SANTOS / DELHI NCR", sub: "ENTERING DIGITAL WORLD ENVIRONMENT" }
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setPhaseIndex(1), 900);
    const t2 = setTimeout(() => setPhaseIndex(2), 1900);
    const t3 = setTimeout(() => setPhaseIndex(3), 2900);
    const t4 = setTimeout(() => {
      soundManager.playMissionPassed();
      try { sessionStorage.setItem('hasCompletedGTAIntro', 'true'); } catch(e){}
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundManager.playMenuClick();
    try { sessionStorage.setItem('hasCompletedGTAIntro', 'true'); } catch(e){}
    onComplete();
  };

  const currentPhase = phases[phaseIndex];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-6 sm:p-12 text-white select-none overflow-hidden font-mono">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 crt-overlay" />

      <div className="relative z-10 flex items-center justify-between border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            GTA OPEN-WORLD BOOT // BUILD 5.4.0
          </span>
        </div>

        <button 
          onClick={handleSkip}
          className="px-4 py-1.5 bg-amber-500/20 hover:bg-amber-400 hover:text-black border border-amber-400/40 text-amber-400 text-xs font-bold tracking-wider rounded transition-all shadow-[0_0_10px_rgba(253,184,19,0.3)]"
        >
          SKIP INTRO [ESC]
        </button>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto my-auto text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full border-4 border-gray-800 border-t-amber-400 animate-spin" />

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-[0_0_25px_rgba(253,184,19,0.4)]">
            {currentPhase.text}
          </h1>

          <p className="text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
            {currentPhase.sub}
          </p>
        </div>
      </div>

      <div className="relative z-10 space-y-2 max-w-xl mx-auto w-full">
        <div className="flex justify-between items-center text-[10px] text-gray-400">
          <span className="text-amber-400 font-bold uppercase">
            STAGE {phaseIndex + 1} OF 4
          </span>
          <span>{Math.round(((phaseIndex + 1) / 4) * 100)}%</span>
        </div>

        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-700 shadow-[0_0_10px_#FDB813]"
            style={{ width: `${((phaseIndex + 1) / 4) * 100}%` }}
          />
        </div>

        <div className="text-center text-[9px] text-gray-500">
          PRESS ESC OR CLICK SKIP TO ENTER IMMEDIATELY
        </div>
      </div>
    </div>
  );
}

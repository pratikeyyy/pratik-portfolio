import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Award, ShieldCheck, Heart, DollarSign } from 'lucide-react';

export default function FinalGTA5Hud() {
  const { hero } = portfolioData;

  return (
    <footer className="relative py-16 px-4 sm:px-6 bg-[#04060A] text-white border-t-4 border-amber-400 overflow-hidden font-mono select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Mission Complete Stamp Banner */}
        <div className="inline-block p-4 sm:p-6 bg-[#0E1526] border-2 border-amber-400 rounded-2xl shadow-[0_0_40px_rgba(253,184,19,0.3)]">
          <div className="text-3xl sm:text-6xl font-black tracking-tight uppercase text-amber-400 drop-shadow-[0_0_15px_#FDB813]">
            MISSION COMPLETE
          </div>
          <div className="text-xs sm:text-sm font-bold text-gray-300 mt-2 tracking-widest uppercase">
            100% PORTFOLIO SYNCHRONIZATION ACHIEVED
          </div>
        </div>

        {/* Player Final Telemetry */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
            {hero.name}
          </h3>
          <p className="text-sm sm:text-base text-cyan-400 font-bold uppercase">
            {hero.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400 pt-2">
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">SOFTWARE</span>
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">ARTIFICIAL INTELLIGENCE</span>
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">COMPUTER VISION</span>
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">FULL STACK</span>
          </div>
        </div>

        {/* Final Copyright & Ethics Notice */}
        <div className="pt-6 border-t border-gray-900 text-[11px] text-gray-500 space-y-1">
          <p>
            ORIGINAL DESIGN INSPIRED BY OPEN-WORLD GAMING ERA EVOLUTION (GTA 1 → GTA V).
          </p>
          <p>
            PRATIK KUMAR • B.TECH CSE (AI) • ABESIT (AKTU) // 2024 – 2028
          </p>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Play, FolderKanban, MapPin, Radio, ShieldCheck, Terminal, Star, Sparkles, Cpu, Layers } from 'lucide-react';

export default function HeroSection({ onNotify }) {
  const { hero } = portfolioData;

  const handleStartGame = () => {
    soundManager.playMissionPassed();
    if (onNotify) {
      onNotify({ title: "GAME COMMENCED", message: "EXPLORING PLAYER PROFILE & ATTRIBUTES" });
    }
    const target = document.getElementById('profile');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewMissions = () => {
    soundManager.playMissionAccepted();
    if (onNotify) {
      onNotify({ title: "NEW MISSION AVAILABLE", message: "SELECT A CAMPAIGN DOSSIER" });
    }
    const target = document.getElementById('missions');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden font-mono">
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8">
        
        {/* Top Open-World Dashboard Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0F1523]/90 border-2 border-gray-800 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="text-xs font-bold text-green-400 tracking-wider">
              {hero.status}
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center space-x-1.5 text-cyan-300">
              <MapPin size={13} className="text-cyan-400" />
              <span>{hero.location}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 text-amber-300">
              <Radio size={13} className="text-amber-400 animate-pulse" />
              <span>{hero.radioStation}</span>
            </div>
          </div>
        </div>

        {/* Main Grand Hero Display */}
        <div className="text-center space-y-6 pt-4">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/15 via-pink-500/15 to-cyan-500/15 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-300 uppercase tracking-widest shadow-[0_0_20px_rgba(253,184,19,0.2)]">
            <Sparkles size={14} className="text-amber-400 animate-spin" />
            <span>GRAND THEFT AUTO UNIVERSE // ERA EVOLUTION</span>
          </div>

          {/* Hero Name with Multi-Era Neon Glow */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white select-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400 drop-shadow-[0_0_35px_rgba(253,184,19,0.35)]">
              {hero.name}
            </span>
          </h1>

          {/* Subtitle & Core Domains */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-black text-cyan-400 tracking-tight">
              {hero.title}
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 tracking-wide">
              {hero.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed pt-2">
              {hero.bio}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={handleStartGame}
              onMouseEnter={() => soundManager.playHover()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-base uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(253,184,19,0.5)] transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3"
            >
              <Play size={20} className="fill-black" />
              <span>START GAME</span>
            </button>

            <button
              onClick={handleViewMissions}
              onMouseEnter={() => soundManager.playHover()}
              className="w-full sm:w-auto px-8 py-4 bg-[#0F1523] hover:bg-[#162035] border-2 border-cyan-400/60 hover:border-cyan-400 text-cyan-300 font-bold text-base uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.2)] transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3"
            >
              <FolderKanban size={20} className="text-cyan-400" />
              <span>VIEW MISSIONS</span>
            </button>
          </div>
        </div>

        {/* Bottom Hero Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8">
          <div className="bg-[#0D1322]/90 border border-gray-800 p-3 sm:p-4 rounded-xl">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
              <ShieldCheck size={12} className="text-green-400" />
              <span>INSTITUTION</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1 truncate">
              ABESIT (AKTU)
            </div>
            <div className="text-[10px] text-green-400 mt-0.5">CGPA 7.49 • 2024-2028</div>
          </div>

          <div className="bg-[#0D1322]/90 border border-gray-800 p-3 sm:p-4 rounded-xl">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
              <Cpu size={12} className="text-cyan-400" />
              <span>AI & VISION</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">
              Gemini AI • YOLOv8
            </div>
            <div className="text-[10px] text-cyan-400 mt-0.5">ByteTrack & OpenCV</div>
          </div>

          <div className="bg-[#0D1322]/90 border border-gray-800 p-3 sm:p-4 rounded-xl">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
              <Layers size={12} className="text-pink-400" />
              <span>FULL STACK</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">
              Node • MongoDB
            </div>
            <div className="text-[10px] text-pink-400 mt-0.5">WebSockets & REST</div>
          </div>

          <div className="bg-[#0D1322]/90 border border-gray-800 p-3 sm:p-4 rounded-xl">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
              <Star size={12} className="text-amber-400" />
              <span>WANTED LEVEL</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-400 mt-1">
              5-STAR TECH
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">AI / Vision Master</div>
          </div>
        </div>

      </div>
    </section>
  );
}

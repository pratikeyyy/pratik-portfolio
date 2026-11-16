import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { Volume2, VolumeX, Shield, Heart, DollarSign, Star, Menu, X, Compass, Award, FolderKanban, User, Cpu, Radio, Play, Pause, SkipForward } from 'lucide-react';

export default function TopHUD({ currentWanted, onWantedChange, onNotify }) {
  const [isMuted, setIsMuted] = useState(false);
  const [radioActive, setRadioActive] = useState(false);
  const [currentStation, setCurrentStation] = useState(soundManager.getCurrentStation());
  const [radioVolume, setRadioVolume] = useState(25);
  const [showRadioPanel, setShowRadioPanel] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMuteSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) soundManager.playTone(880, 'sine', 0.1);
  };

  const handleToggleRadio = () => {
    const active = soundManager.toggleRadio();
    setRadioActive(active);
    if (active && onNotify) {
      onNotify({ title: "RADIO TUNED", message: `${currentStation.name} (${currentStation.genre})` });
    }
  };

  const handleNextStation = () => {
    const station = soundManager.nextStation();
    setCurrentStation(station);
    if (onNotify) {
      onNotify({ title: "STATION SWITCHED", message: `${station.name} (${station.genre})` });
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value);
    setRadioVolume(val);
    soundManager.setRadioVolume(val / 100);
  };

  const navItems = [
    { label: "HERO", href: "#hero", icon: Compass },
    { label: "PROFILE", href: "#profile", icon: User },
    { label: "EVOLUTION", href: "#evolution", icon: Cpu },
    { label: "MISSIONS", href: "#missions", icon: FolderKanban },
    { label: "LOADOUT", href: "#abilities", icon: Shield },
    { label: "WANTED", href: "#wanted", icon: Star },
    { label: "EXPERIENCE", href: "#experience", icon: Award },
    { label: "ACHIEVEMENTS", href: "#achievements", icon: Award },
    { label: "PROGRESS", href: "#progress", icon: Award },
    { label: "MAP", href: "#city-map", icon: Compass },
    { label: "SAFEHOUSE", href: "#safehouse", icon: DollarSign }
  ];

  const handleNavClick = (href, label) => {
    soundManager.playMenuClick();
    setMobileMenuOpen(false);
    if (onNotify) {
      onNotify({ title: "ENTERING DISTRICT", message: `${label} DISTRICT` });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#070A12]/95 backdrop-blur-md border-b-2 border-gray-800 text-white font-mono select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between">
        
        {/* Left: Player Identity & Mini Wanted Stars */}
        <div className="flex items-center space-x-3">
          <a 
            href="#hero" 
            onClick={() => handleNavClick("#hero", "CENTRAL COMMAND")} 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center font-black text-black text-sm shadow-[0_0_10px_rgba(253,184,19,0.5)] group-hover:scale-105 transition-transform">
              PK
            </div>
            <div>
              <div className="font-black text-xs sm:text-sm tracking-tight text-white flex items-center space-x-1.5">
                <span>PRATIK KUMAR</span>
                <span className="text-[9px] bg-amber-400/20 text-amber-300 border border-amber-400/40 px-1 py-0.2 rounded">
                  CSE AI
                </span>
              </div>
              <div className="text-[9px] text-gray-400 hidden sm:block">
                ABESIT • CGPA 7.49
              </div>
            </div>
          </a>

          {/* Interactive Wanted Stars Mini HUD */}
          <div className="flex items-center space-x-0.5 bg-black/60 px-2 py-1 rounded border border-gray-800">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => {
                  soundManager.playWantedStar(star);
                  onWantedChange(star);
                  if (onNotify) onNotify({ title: "WANTED LEVEL UPDATED", message: `${star}-STAR TECH ENTHUSIAST` });
                }}
                title={`Wanted Level ${star}`}
                className="transition-transform hover:scale-125 focus:outline-none"
              >
                <Star
                  size={13}
                  className={
                    star <= currentWanted
                      ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_#FFD700] animate-pulse"
                      : "text-gray-700"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden 2xl:flex items-center space-x-1 text-xs">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href, item.label)}
              className="px-2 py-1 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Functional Radio Player + GTA Stats & Mute Control */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Functional GTA Radio Module */}
          <div className="relative">
            <button
              onClick={() => setShowRadioPanel(!showRadioPanel)}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all ${
                radioActive
                  ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(253,184,19,0.3)]"
                  : "bg-black/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
              }`}
              title="GTA Radio Controls"
            >
              <Radio size={14} className={radioActive ? "text-amber-400 animate-pulse" : "text-gray-500"} />
              <span className="hidden md:inline text-[11px] max-w-[110px] truncate">
                {currentStation.name}
              </span>
              {radioActive && (
                <div className="flex items-end space-x-0.5 h-3 ml-1">
                  <span className="w-0.5 h-full bg-amber-400 animate-pulse" />
                  <span className="w-0.5 h-2 bg-amber-300 animate-pulse" />
                  <span className="w-0.5 h-full bg-amber-400 animate-pulse" />
                </div>
              )}
            </button>

            {/* Floating Radio Control Menu */}
            {showRadioPanel && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-[#0A0F1D] border-2 border-amber-400/80 rounded-xl p-3 shadow-2xl z-50 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">
                    GTA TECH RADIO
                  </span>
                  <button onClick={() => setShowRadioPanel(false)} className="text-gray-400 hover:text-white text-xs">✕</button>
                </div>

                <div className="bg-black/60 p-2.5 rounded-lg border border-gray-800">
                  <div className="text-xs font-black text-white truncate">{currentStation.name}</div>
                  <div className="text-[10px] text-cyan-300 font-bold">{currentStation.genre} • 104.5 FM</div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={handleToggleRadio}
                    className={`flex-1 py-1.5 rounded text-xs font-bold flex items-center justify-center space-x-1 ${
                      radioActive ? "bg-amber-400 text-black" : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {radioActive ? <Pause size={13} /> : <Play size={13} />}
                    <span>{radioActive ? "PAUSE" : "PLAY"}</span>
                  </button>

                  <button
                    onClick={handleNextStation}
                    className="p-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs font-bold flex items-center space-x-1"
                    title="Next Station"
                  >
                    <SkipForward size={14} />
                  </button>
                </div>

                {/* Volume slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-gray-400">
                    <span>VOLUME</span>
                    <span>{radioVolume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={radioVolume}
                    onChange={handleVolumeChange}
                    className="w-full accent-amber-400 cursor-pointer h-1 bg-gray-800 rounded"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Health & Armor Bars */}
          <div className="hidden lg:flex flex-col space-y-1 w-24 text-[9px]">
            <div className="flex items-center space-x-1">
              <Heart size={9} className="text-red-500 fill-red-500" />
              <div className="flex-1 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <div className="h-full bg-green-500 w-full shadow-[0_0_4px_#22c55e]" />
              </div>
              <span className="text-green-400 font-bold">100</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield size={9} className="text-cyan-400 fill-cyan-400" />
              <div className="flex-1 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <div className="h-full bg-cyan-400 w-full shadow-[0_0_4px_#00F0FF]" />
              </div>
              <span className="text-cyan-400 font-bold">100</span>
            </div>
          </div>

          {/* Cash counter */}
          <div className="hidden sm:flex items-center bg-black/60 border border-green-500/30 px-2 py-0.5 rounded text-green-400 font-bold text-xs tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.2)]">
            <DollarSign size={12} className="text-green-400 mr-0.5" />
            <span>1,840,000</span>
          </div>

          {/* Master Sound Toggle */}
          <button
            onClick={toggleMuteSound}
            className="p-1.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-amber-400 rounded text-gray-300 hover:text-amber-400 transition-colors"
            title="Mute/Unmute Sounds"
          >
            {isMuted ? <VolumeX size={15} className="text-red-400" /> : <Volume2 size={15} className="text-amber-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-1.5 bg-gray-900 border border-gray-700 rounded text-gray-200"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-[#070A12] border-b border-gray-800 px-4 py-3 space-y-1 text-sm">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-900/80 border border-gray-800 hover:border-amber-400 text-gray-200 hover:text-amber-400 rounded text-xs"
                >
                  <Icon size={14} className="text-amber-400" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Shield, Sparkles, Terminal, Code2, Layers, Cpu, Database, Wrench, Cloud, BookCheck, Crosshair, ChevronRight } from 'lucide-react';

export default function AbilitiesWheel({ onNotify }) {
  const { playerAbilities } = portfolioData;

  const loadouts = [
    {
      id: "PYTHON",
      name: "PYTHON LOADOUT",
      tagline: "Neural Scripting & AI Tensor Weapons",
      icon: Code2,
      color: "#22c55e",
      skills: playerAbilities["Programming"].filter(s => s.name === "Python").concat(playerAbilities["AI / ML"].slice(0, 3)),
      linkedProjects: ["MEDICINE AI ASSISTANT", "REAL-TIME OBJECT DETECTOR"]
    },
    {
      id: "JAVASCRIPT",
      name: "JAVASCRIPT LOADOUT",
      tagline: "Real-Time WebSocket & Async Engines",
      icon: Terminal,
      color: "#FDB813",
      skills: playerAbilities["Programming"].filter(s => s.name === "JavaScript").concat(playerAbilities["Backend"]),
      linkedProjects: ["DELHI BUS TRACKER PRO"]
    },
    {
      id: "AIML",
      name: "AI / ML LOADOUT",
      tagline: "Multimodal Gemini Vision & Deep Learning Cannon",
      icon: Cpu,
      color: "#00F0FF",
      skills: playerAbilities["AI / ML"],
      linkedProjects: ["MEDICINE AI ASSISTANT", "REAL-TIME OBJECT DETECTOR"]
    },
    {
      id: "CV",
      name: "COMPUTER VISION LOADOUT",
      tagline: "YOLOv8 & ByteTrack 45+ FPS Surveillance Scanner",
      icon: Sparkles,
      color: "#FF2A85",
      skills: playerAbilities["Computer Vision"].concat(playerAbilities["AI / ML"].filter(s => s.name === "YOLOv8" || s.name === "ByteTrack")),
      linkedProjects: ["REAL-TIME OBJECT DETECTOR"]
    },
    {
      id: "FULLSTACK",
      name: "FULL STACK LOADOUT",
      tagline: "Distributed Cloud, MongoDB & RESTful APIs",
      icon: Layers,
      color: "#FF6B00",
      skills: playerAbilities["Frontend"].concat(playerAbilities["Backend"]).concat(playerAbilities["Databases"]),
      linkedProjects: ["DELHI BUS TRACKER PRO", "MUSIC FACTORY"]
    },
    {
      id: "CORE_CS",
      name: "C / CORE CS LOADOUT",
      tagline: "Heavy DSA Armor & Algorithmic Problem Solving",
      icon: BookCheck,
      color: "#A855F7",
      skills: playerAbilities["Programming"].filter(s => s.name === "C").concat(playerAbilities["Core CS"]),
      linkedProjects: ["CodeChef DSA Certified"]
    }
  ];

  const [activeLoadoutId, setActiveLoadoutId] = useState("PYTHON");

  const handleSelectLoadout = (loadout) => {
    soundManager.playLoadoutSelect();
    setActiveLoadoutId(loadout.id);
    if (onNotify) {
      onNotify({ title: "LOADOUT EQUIPPED", message: loadout.name });
    }
  };

  const currentLoadout = loadouts.find(l => l.id === activeLoadoutId) || loadouts[0];
  const LoadoutIcon = currentLoadout.icon;

  return (
    <section id="abilities" className="relative py-24 px-4 sm:px-6 bg-[#06080E] text-white border-t border-gray-900 overflow-hidden font-mono">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-pink-500 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-pink-500 text-xs uppercase tracking-widest font-bold">
              <Crosshair size={14} />
              <span>GTA TACTICAL LOADOUT & ABILITIES WHEEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-1">
              WEAPON SELECT // LOADOUT
            </h2>
          </div>
          <div className="text-xs text-pink-400 bg-pink-500/10 border border-pink-500/30 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            6 LOADOUTS UNLOCKED
          </div>
        </div>

        {/* Loadout Select Radial / Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {loadouts.map((l) => {
            const Icon = l.icon;
            const isSelected = l.id === activeLoadoutId;
            return (
              <button
                key={l.id}
                onClick={() => handleSelectLoadout(l)}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-2 ${
                  isSelected
                    ? "bg-pink-500/20 border-pink-400 text-white shadow-[0_0_20px_rgba(255,42,133,0.4)] scale-105"
                    : "bg-[#0E1424]/80 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                <div 
                  className="p-3 rounded-lg flex items-center justify-center border"
                  style={{ backgroundColor: `${l.color}15`, borderColor: `${l.color}40`, color: l.color }}
                >
                  <Icon size={22} />
                </div>
                <span className="text-xs font-black uppercase tracking-tight">
                  {l.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Loadout Detailed Telemetry Display */}
        <div className="bg-[#0A0E1A] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-4 gap-3">
            <div className="flex items-center space-x-3.5">
              <div 
                className="p-3 rounded-xl border shadow-lg"
                style={{ backgroundColor: `${currentLoadout.color}20`, borderColor: currentLoadout.color, color: currentLoadout.color }}
              >
                <LoadoutIcon size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                  {currentLoadout.name}
                </h3>
                <span className="text-xs text-gray-400">
                  {currentLoadout.tagline}
                </span>
              </div>
            </div>

            <div className="self-start sm:self-auto">
              <span className="text-xs font-bold px-3 py-1 rounded bg-black/60 border" style={{ borderColor: currentLoadout.color, color: currentLoadout.color }}>
                EQUIPPED IN MAIN HOLSTER
              </span>
            </div>
          </div>

          {/* Equipped Skills Arsenal */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              EQUIPPED SKILL WEAPONS ({currentLoadout.skills.length} NODES)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentLoadout.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#05070D] border border-gray-800 hover:border-pink-500/60 p-3.5 rounded-xl transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Linked Project Campaigns */}
          <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-400">LINKED MISSIONS:</span>
              {currentLoadout.linkedProjects.map((proj) => (
                <span key={proj} className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
                  {proj}
                </span>
              ))}
            </div>

            <a
              href="#missions"
              onClick={() => soundManager.playMenuClick()}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
            >
              <span>VIEW MISSION DOSSIERS</span>
              <ChevronRight size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

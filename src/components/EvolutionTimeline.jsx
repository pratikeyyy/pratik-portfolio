import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Gamepad2, Radio, Sparkles, ChevronRight, Layers, ShieldCheck, Terminal } from 'lucide-react';

export default function EvolutionTimeline({ onNotify }) {
  const { evolutionEras } = portfolioData;
  const [activeEraId, setActiveEraId] = useState("gta5");

  const currentEra = evolutionEras.find((e) => e.id === activeEraId) || evolutionEras[6];

  const handleEraSelect = (era) => {
    setActiveEraId(era.id);
    if (era.id === 'gta1') soundManager.playTone(440, 'square', 0.15, 0.1);
    else if (era.id === 'gta2') soundManager.playTone(660, 'sawtooth', 0.15, 0.1);
    else if (era.id === 'gta3') soundManager.playPagerSound();
    else if (era.id === 'gtavice') soundManager.playViceCityChime();
    else if (era.id === 'gtasa') soundManager.playTone(520, 'triangle', 0.2, 0.12);
    else if (era.id === 'gta4') soundManager.playTone(300, 'sine', 0.2, 0.15);
    else soundManager.playMissionPassed();

    if (onNotify) {
      onNotify({ title: "ERA SHIFTED", message: `${era.title} (${era.year}) ACTIVATED` });
    }
  };

  return (
    <section id="evolution" className="relative py-24 px-4 sm:px-6 bg-[#06080E] text-white border-t border-gray-900 overflow-hidden">
      
      {/* Background Visual Effects according to selected era */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentEra.bgClass} opacity-40 transition-all duration-700 pointer-events-none`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {activeEraId === 'gta1' && (
        <div className="absolute inset-0 crt-overlay pointer-events-none opacity-80" />
      )}

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-amber-400" />
            <span>PROGRESSIVE FRANCHISE SYSTEM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white uppercase">
            THE EVOLUTION
          </h2>

          <p className="text-sm sm:text-base font-mono text-gray-400 max-w-2xl mx-auto">
            From 2D arcade grid roots to next-generation multimodal AI architecture: A journey transformed through the design milestones of open-world gaming.
          </p>
        </div>

        {/* Horizontal Era Navigation Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar font-mono">
          {evolutionEras.map((era, index) => {
            const isActive = era.id === activeEraId;
            return (
              <button
                key={era.id}
                onClick={() => handleEraSelect(era.id)}
                className={`flex-shrink-0 px-3 sm:px-5 py-3 rounded-xl border text-center transition-all flex flex-col items-center min-w-[120px] sm:min-w-[140px] ${
                  isActive
                    ? "bg-[#121A2E] border-amber-400 text-white shadow-[0_0_20px_rgba(253,184,19,0.3)] scale-105"
                    : "bg-[#090D18]/80 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200"
                }`}
              >
                <span className="text-[10px] font-bold tracking-widest text-amber-400">
                  {era.year}
                </span>
                <span className="text-xs sm:text-sm font-black uppercase mt-0.5">
                  {era.title}
                </span>
                <span className="text-[9px] text-gray-400 uppercase mt-1">
                  {era.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Era Featured Stage Card */}
        <div className="bg-[#0B101D] border-2 border-gray-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl transition-all duration-500">
          
          {/* Era Glow Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded uppercase" style={{ backgroundColor: `${currentEra.accent}20`, color: currentEra.accent, border: `1px solid ${currentEra.accent}50` }}>
                  {currentEra.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">ERA {currentEra.year}</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-mono uppercase text-white mt-2">
                {currentEra.title}
              </h3>
              <p className="text-sm sm:text-lg font-mono text-gray-300 mt-1" style={{ color: currentEra.accent }}>
                {currentEra.subtitle}
              </p>
            </div>

            <div className="flex items-center space-x-2 self-start md:self-auto font-mono text-xs">
              <span className="text-gray-400">STATUS:</span>
              <span className="text-green-400 font-bold bg-green-950/40 border border-green-500/40 px-2.5 py-1 rounded">
                COMPUTATIONAL SYNC 100%
              </span>
            </div>
          </div>

          {/* Era Narrative & Tech Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            <div className="lg:col-span-7 space-y-5 font-mono">
              <div className="space-y-2">
                <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center space-x-2">
                  <Terminal size={14} className="text-amber-400" />
                  <span>ERA ARCHITECTURAL PARADIGM</span>
                </div>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed bg-[#070A12] p-4 rounded-xl border border-gray-800/80">
                  {currentEra.desc}
                </p>
              </div>

              {/* Technologies in this era */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  ERA TECH NODES
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentEra.skillsHighlight.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#0F1626] border border-gray-700 text-white font-mono text-xs rounded-lg flex items-center space-x-1.5"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentEra.accent }} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Era UI Visual Simulation Box */}
            <div className="lg:col-span-5 bg-[#070A12] border border-gray-800 rounded-xl p-5 font-mono text-xs flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 font-bold">SYSTEM TELEMETRY</span>
                <span className="text-amber-400 font-bold">{currentEra.title}</span>
              </div>

              {/* Custom Era Graphical Wireframe Visualizer */}
              <div className="relative h-44 rounded-lg bg-black/80 border border-gray-800 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {activeEraId === 'gta1' && (
                  <div className="text-center space-y-2 font-mono">
                    <div className="text-green-400 font-bold text-xs tracking-widest animate-pulse">
                      [ 2D TOP-DOWN VECTOR GRID ]
                    </div>
                    <div className="w-20 h-10 border-2 border-green-400 mx-auto rounded flex items-center justify-center text-[10px] text-green-300">
                      CAR_01
                    </div>
                    <div className="text-[10px] text-gray-500">SCORE: 1,840,000 • X2 MULTIPLIER</div>
                  </div>
                )}

                {activeEraId === 'gta2' && (
                  <div className="text-center space-y-2">
                    <div className="text-cyan-400 font-bold text-xs tracking-widest animate-pulse">
                      [ ZAIBATSU RESPECT LEVEL ]
                    </div>
                    <div className="flex justify-center space-x-1">
                      <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded">RESPECT +++++</span>
                    </div>
                    <div className="text-[10px] text-gray-400">ELECTROLUMINESCENT HUD ACTIVE</div>
                  </div>
                )}

                {activeEraId === 'gta3' && (
                  <div className="text-center space-y-2">
                    <div className="text-cyan-400 font-bold text-xs tracking-widest">
                      [ LIBERTY PAGER v3.0 ]
                    </div>
                    <div className="bg-slate-900 border border-cyan-500/40 p-2 rounded text-cyan-300 text-[10px]">
                      CALL PRATIK KUMAR: AI MISSION READY
                    </div>
                    <div className="text-[10px] text-gray-500">3D REVOLUTION INITIATED</div>
                  </div>
                )}

                {activeEraId === 'gtavice' && (
                  <div className="text-center space-y-2">
                    <div className="text-pink-500 font-bold text-xs tracking-widest drop-shadow-[0_0_8px_#FF2A85]">
                      [ VICE SUNSET AUDIO LAB ]
                    </div>
                    <div className="text-cyan-400 text-sm font-bold animate-pulse">
                      SYNTHWAVE FM 104.5
                    </div>
                    <div className="text-[10px] text-pink-300">NEON PALM SHADERS ACTIVE</div>
                  </div>
                )}

                {activeEraId === 'gtasa' && (
                  <div className="text-center space-y-2">
                    <div className="text-amber-500 font-bold text-xs tracking-widest">
                      [ SAN ANDREAS TURF MAP ]
                    </div>
                    <div className="flex justify-center space-x-2 text-[10px]">
                      <span className="text-amber-400">RESPECT: 100%</span>
                      <span className="text-green-400">STAMINA: MAX</span>
                    </div>
                    <div className="text-[10px] text-gray-400">TERRITORY: CS & AI DOMAIN</div>
                  </div>
                )}

                {activeEraId === 'gta4' && (
                  <div className="text-center space-y-2">
                    <div className="text-slate-300 font-bold text-xs tracking-widest">
                      [ LIBERTY CITY METRO INTEL ]
                    </div>
                    <div className="text-gray-300 text-[11px]">
                      DATA ANALYTICS & PYTHON EDA PIPELINE
                    </div>
                    <div className="text-[10px] text-gray-500">DARK URBAN REALISM</div>
                  </div>
                )}

                {activeEraId === 'gta5' && (
                  <div className="text-center space-y-2">
                    <div className="text-amber-400 font-bold text-xs tracking-widest drop-shadow-[0_0_8px_#FDB813]">
                      [ MULTIMODAL AI & VISION ENGINE ]
                    </div>
                    <div className="text-white text-xs font-bold bg-amber-500/20 border border-amber-400/50 px-3 py-1 rounded">
                      GEMINI VISION • YOLOv8 • BYTE TRACK
                    </div>
                    <div className="text-[10px] text-amber-300">NEXT-GEN HIGH-TECH HUD</div>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-[11px] text-gray-400">
                <span>STAGE: {currentEra.title}</span>
                <span className="text-amber-400 font-bold">ERA UNLOCKED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

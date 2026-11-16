import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { User, Shield, Terminal, Award, Cpu, MapPin, Sparkles, BookOpen, Compass, Code, Brain, Laptop } from 'lucide-react';

export default function PlayerProfile() {
  const { hero, education } = portfolioData;
  const [selectedAttribute, setSelectedAttribute] = useState("AI_CORE");

  const attributes = [
    {
      id: "AI_CORE",
      label: "AI / ML SPECIALIST",
      icon: Brain,
      score: "MAX",
      color: "text-amber-400 border-amber-400/40 bg-amber-500/10",
      details: "Multimodal Gemini Vision AI reasoning, YOLOv8 object detection, ByteTrack tracking, Deep Learning neural networks, Scikit-learn pipelines."
    },
    {
      id: "CV_CORE",
      label: "COMPUTER VISION",
      icon: Cpu,
      score: "99+",
      color: "text-cyan-400 border-cyan-400/40 bg-cyan-500/10",
      details: "High-FPS video inference pipelines (45+ FPS), OpenCV tensor transformations, bounding-box tracking, real-time camera stream telemetry."
    },
    {
      id: "FULLSTACK_CORE",
      label: "FULL STACK ARCHITECT",
      icon: Laptop,
      score: "98",
      color: "text-pink-400 border-pink-400/40 bg-pink-500/10",
      details: "Node.js & Express RESTful services, MongoDB document models, bidirectional WebSocket connections, Bootstrap 5 & Gradio UIs."
    },
    {
      id: "DSA_CORE",
      label: "ALGORITHMS & DSA",
      icon: Code,
      score: "95",
      color: "text-green-400 border-green-400/40 bg-green-500/10",
      details: "CodeChef certified problem solver, advanced tree & graph traversals, dynamic programming, low-level C memory mastery, computational complexity optimization."
    }
  ];

  const handleSelectAttribute = (attrId) => {
    soundManager.playSelectSound();
    setSelectedAttribute(attrId);
  };

  return (
    <section id="profile" className="relative py-20 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-400/80 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              <User size={14} />
              <span>CHARACTER SELECT & IDENTITY DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              PLAYER PROFILE
            </h2>
          </div>
          <div className="font-mono text-xs text-gray-400 bg-[#0F1523] px-3 py-1.5 rounded border border-gray-800 self-start md:self-auto">
            UID: PK-2024-AI • CLASS: S-RANK DEVELOPER
          </div>
        </div>

        {/* Profile Grid: Left Character Card + Right Stats Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Abstract Player Avatar & Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1523] to-[#090D16] border-2 border-gray-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Background grid accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

            <div className="space-y-6">
              {/* Avatar Box (Original Abstract Silhouette / Digital Graphic - No Fake Face) */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-xl bg-gradient-to-tr from-gray-950 via-slate-900 to-[#162035] border-2 border-amber-400/40 p-4 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(253,184,19,0.15)] group">
                <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-xl" />
                <div className="absolute inset-2 border border-cyan-400/20 rounded-lg pointer-events-none" />

                {/* Abstract Stylized Digital Player Silhouette / Vector */}
                <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-b from-amber-400/20 via-cyan-500/20 to-pink-500/20 border-2 border-amber-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(253,184,19,0.3)]">
                  <Cpu size={56} className="text-amber-400 group-hover:scale-110 transition-transform" />
                </div>

                <div className="relative z-10 font-mono">
                  <div className="font-extrabold text-lg tracking-wider text-white">
                    PRATIK KUMAR
                  </div>
                  <div className="text-xs text-amber-300 font-bold">
                    CSE (ARTIFICIAL INTELLIGENCE)
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    ABESIT • AKTU // CGPA 7.49
                  </div>
                </div>

                {/* Level Badge */}
                <div className="absolute top-3 right-3 bg-amber-400 text-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow">
                  LVL 99
                </div>
              </div>

              {/* Character Details List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center bg-[#070B14] p-2.5 rounded border border-gray-800">
                  <span className="text-gray-400 flex items-center space-x-1.5">
                    <BookOpen size={13} className="text-amber-400" />
                    <span>DEGREE</span>
                  </span>
                  <span className="text-white font-bold text-right">B.Tech CSE (AI)</span>
                </div>

                <div className="flex justify-between items-center bg-[#070B14] p-2.5 rounded border border-gray-800">
                  <span className="text-gray-400 flex items-center space-x-1.5">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>LOCATION</span>
                  </span>
                  <span className="text-white font-bold">Delhi NCR / Greater Noida</span>
                </div>

                <div className="flex justify-between items-center bg-[#070B14] p-2.5 rounded border border-gray-800">
                  <span className="text-gray-400 flex items-center space-x-1.5">
                    <Award size={13} className="text-green-400" />
                    <span>ACADEMIC CGPA</span>
                  </span>
                  <span className="text-green-400 font-bold font-mono">7.49 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Terminal */}
            <div className="mt-6 pt-4 border-t border-gray-800/80 font-mono text-[11px] text-gray-400 flex items-center justify-between">
              <span className="text-amber-400 font-bold">DISPATCH: ACTIVE</span>
              <span>SPECIALTY: AI & VISION</span>
            </div>
          </div>

          {/* Right Column: Player Attribute Selectors & Career Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Attribute Selector Cards */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-400 flex items-center justify-between">
                <span>SELECT SPECIALIZATION MATRIX</span>
                <span className="text-amber-400">CLICK TO INSPECT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                {attributes.map((attr) => {
                  const Icon = attr.icon;
                  const isSelected = selectedAttribute === attr.id;
                  return (
                    <button
                      key={attr.id}
                      onClick={() => handleSelectAttribute(attr.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? `${attr.color} border-current shadow-[0_0_15px_rgba(253,184,19,0.2)]`
                          : "bg-[#0F1523]/60 border-gray-800 hover:border-gray-700 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2 font-bold text-sm">
                          <Icon size={16} />
                          <span>{attr.label}</span>
                        </div>
                        <span className="text-xs font-black bg-black/40 px-2 py-0.5 rounded border border-current">
                          {attr.score}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-2">
                        {attr.details}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Attribute Deep Dive Box */}
            <div className="bg-[#0D1322] border-2 border-amber-400/50 rounded-xl p-5 space-y-4 font-mono shadow-xl relative">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                  <Terminal size={16} />
                  <span>SPECIALIZATION TELEMETRY BRIEF</span>
                </div>
                <span className="text-xs text-gray-400 bg-black/60 px-2 py-0.5 rounded">
                  {selectedAttribute}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {attributes.find((a) => a.id === selectedAttribute)?.details}
              </p>

              {/* Progress Gauges */}
              <div className="space-y-2 pt-2 text-xs">
                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>ARCHITECTURAL EXECUTION</span>
                    <span className="text-amber-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full bg-amber-400 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>AI / COMPUTER VISION INTEGRATION</span>
                    <span className="text-cyan-400 font-bold">98%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full bg-cyan-400 w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>PRODUCTION RELIABILITY & SCALING</span>
                    <span className="text-pink-400 font-bold">96%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full bg-pink-400 w-[96%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../sound/audioEffects';
import { GithubIcon } from './CustomIcons';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Terminal, Award, DollarSign, Sparkles } from 'lucide-react';

export default function MissionModal({ mission, onClose }) {
  if (!mission) return null;

  useEffect(() => {
    soundManager.playPagerSound();
  }, [mission]);

  const handleLaunchTest = () => {
    soundManager.playMissionPassed();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FDB813', '#FF2A85', '#00F0FF', '#22c55e']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A0F1D] border-2 border-amber-400 rounded-2xl shadow-[0_0_40px_rgba(253,184,19,0.3)] overflow-hidden flex flex-col font-mono text-white">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-[#121A2E] border-b border-gray-800 p-4 sm:p-5">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {mission.number} • BRIEFING DOSSIER
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                {mission.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playMenuClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-gray-900 border border-gray-700 hover:border-amber-400 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Mission Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#060912] p-3 rounded-xl border border-gray-800 text-xs">
            <div>
              <span className="text-gray-400 block text-[10px]">DIFFICULTY</span>
              <span className="text-amber-400 font-bold">{mission.difficulty}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">LOCATION</span>
              <span className="text-cyan-300 font-bold truncate block">{mission.location}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">STATUS</span>
              <span className="text-green-400 font-bold">{mission.status}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">REWARD</span>
              <span className="text-amber-400 font-bold">{mission.reward}</span>
            </div>
          </div>

          {/* Mission Briefing */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Terminal size={14} className="text-amber-400" />
              <span>MISSION OBJECTIVE & BRIEF</span>
            </div>
            <p className="text-sm text-gray-200 bg-[#0F1626] p-4 rounded-xl border border-gray-800 leading-relaxed">
              {mission.brief}
            </p>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
              <ShieldCheck size={14} className="text-green-400" />
              <span>CORE ARCHITECTURAL FEATURES</span>
            </div>
            <div className="space-y-2">
              {mission.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 bg-[#070A14] p-3 rounded-lg border border-gray-800/80 text-xs text-gray-300"
                >
                  <CheckCircle2 size={15} className="text-green-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Arsenal */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              TECHNOLOGY WEAPONS EQUIPPED
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#141C2E] border border-amber-400/30 text-amber-300 text-xs rounded-lg font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#121A2E] border-t border-gray-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleLaunchTest}
            className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(253,184,19,0.4)] flex items-center space-x-2"
          >
            <Sparkles size={16} />
            <span>TEST DRIVE MISSION [PASS]</span>
          </button>

          <div className="flex items-center space-x-3">
            <a
              href={mission.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-500 text-white text-xs font-bold rounded-lg flex items-center space-x-2 transition-colors"
            >
              <GithubIcon size={15} />
              <span>SOURCE REPO</span>
            </a>

            <a
              href={mission.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg flex items-center space-x-2 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.3)]"
            >
              <ExternalLink size={15} />
              <span>LIVE SYSTEM</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

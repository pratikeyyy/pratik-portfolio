import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import MissionModal from './MissionModal';
import { FolderKanban, ChevronRight } from 'lucide-react';

export default function MissionsSection({ onNotify }) {
  const { missions } = portfolioData;
  const [selectedMission, setSelectedMission] = useState(null);

  const handleSelectMission = (mission) => {
    soundManager.playMissionAccepted();
    setSelectedMission(mission);
    if (onNotify) {
      onNotify({ title: "MISSION ACCEPTED", message: mission.title });
    }
  };

  return (
    <section id="missions" className="relative py-24 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden font-mono">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-400 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs uppercase tracking-widest font-bold">
              <FolderKanban size={14} />
              <span>PRIMARY CAMPAIGN DOSSIERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-1">
              MISSIONS
            </h2>
          </div>
          <div className="text-xs text-gray-400 bg-[#0F1523] px-3 py-1.5 rounded border border-gray-800 self-start md:self-auto font-bold">
            ALL {missions.length} MISSIONS PASSED • 100% COMPLETION
          </div>
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="bg-gradient-to-b from-[#0F1626] to-[#0A0E18] border-2 border-gray-800 hover:border-amber-400/80 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Mission Header */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-xs font-bold text-amber-400 tracking-wider">
                    {mission.number}
                  </span>
                  <span className="text-[10px] bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded font-bold uppercase">
                    {mission.eraBadge}
                  </span>
                </div>

                {/* Mission Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white group-hover:text-amber-400 transition-colors">
                    {mission.title}
                  </h3>
                  <p className="text-xs text-cyan-300 mt-1">
                    {mission.tagline}
                  </p>
                </div>

                {/* Brief preview */}
                <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed bg-[#06080E]/60 p-3 rounded-lg border border-gray-800/80">
                  {mission.brief}
                </p>

                {/* Technology Badges */}
                <div className="space-y-1.5">
                  <div className="text-[10px] text-gray-400 uppercase">
                    TECH WEAPONS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mission.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#141C2E] border border-gray-700 text-gray-200 text-[11px] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Mission Card Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <div className="text-xs text-green-400 font-bold flex items-center space-x-1">
                  <span>STATUS: PASSED</span>
                </div>

                <button
                  onClick={() => handleSelectMission(mission)}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-4 py-2 bg-amber-400/20 hover:bg-amber-400 hover:text-black border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center space-x-1.5 shadow-[0_0_10px_rgba(253,184,19,0.15)]"
                >
                  <span>MISSION BRIEF</span>
                  <ChevronRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Mission Briefing Modal */}
      {selectedMission && (
        <MissionModal
          mission={selectedMission}
          onClose={() => {
            setSelectedMission(null);
            if (onNotify) onNotify({ title: "MISSION COMPLETED", message: `${selectedMission.title} REVIEWED` });
          }}
        />
      )}
    </section>
  );
}

import React from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles, Brain, BarChart3, Code2, CheckCircle2 } from 'lucide-react';

export default function AchievementsBadges() {
  const { achievements } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Brain': return Brain;
      case 'BarChart3': return BarChart3;
      case 'Code2': return Code2;
      default: return Award;
    }
  };

  const handleCardClick = () => {
    soundManager.playMissionPassed();
  };

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 bg-[#06080E] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-400 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              <Award size={14} />
              <span>OFFICIAL CERTIFICATIONS & HONORS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              ACHIEVEMENTS UNLOCKED
            </h2>
          </div>
          <div className="font-mono text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            4 / 4 TROPHIES UNLOCKED
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {achievements.map((ach) => {
            const Icon = getIcon(ach.icon);
            return (
              <div
                key={ach.id}
                onClick={handleCardClick}
                className="bg-[#0D1322] border-2 border-gray-800 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-300 space-y-4 shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${ach.color}15`, borderColor: `${ach.color}50` }}
                    >
                      <Icon size={24} style={{ color: ach.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: ach.color }}>
                        {ach.badgeType}
                      </span>
                      <span className="text-xs text-gray-400">
                        {ach.issuer} • {ach.year}
                      </span>
                    </div>
                  </div>

                  <span className="p-1 rounded bg-black/60 border border-gray-800 text-green-400">
                    <CheckCircle2 size={16} />
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white uppercase group-hover:text-amber-300 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed bg-[#060912] p-3 rounded-xl border border-gray-800/80">
                  {ach.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { Award, Building2, Calendar, CheckCircle2, MapPin, Terminal } from 'lucide-react';

export default function CompletedMissions() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-400 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-slate-300 font-mono text-xs uppercase tracking-widest font-bold">
              <Award size={14} />
              <span>CAREER DEBRIEFING LEDGER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              COMPLETED MISSIONS
            </h2>
          </div>
          <div className="font-mono text-xs text-green-400 bg-green-950/40 border border-green-500/40 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            INTERNSHIPS VERIFIED • 100% ACCURACY
          </div>
        </div>

        {/* Experience Dossiers Timeline */}
        <div className="space-y-6 font-mono">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0B101D] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
            >
              {/* Mission Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-4 gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded uppercase">
                      {exp.type}
                    </span>
                    <span className="text-xs text-gray-400">{exp.era}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-cyan-300 mt-1">
                    <span className="flex items-center space-x-1 font-bold">
                      <Building2 size={13} />
                      <span>{exp.company}</span>
                    </span>
                    <span className="text-gray-400 flex items-center space-x-1">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/40 rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 size={14} />
                    <span>{exp.badge}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Terminal size={14} className="text-amber-400" />
                  <span>OPERATIONAL RESPONSIBILITIES</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="bg-[#05070D] p-3.5 rounded-xl border border-gray-800/80 text-xs text-gray-300 flex items-start space-x-2.5"
                    >
                      <span className="text-amber-400 font-bold">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 uppercase mr-1">
                  SKILLS DEPLOYED:
                </span>
                {exp.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[#141C2E] border border-gray-700 text-gray-300 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

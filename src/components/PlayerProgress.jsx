import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PlayerProgress() {
  const { education } = portfolioData;

  return (
    <section id="progress" className="relative py-24 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-500 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-500 font-mono text-xs uppercase tracking-widest font-bold">
              <GraduationCap size={14} />
              <span>ACADEMIC EXPEDITION & LEVELING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              PLAYER PROGRESS
            </h2>
          </div>
          <div className="font-mono text-xs text-green-400 bg-green-950/40 border border-green-500/40 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            ACADEMIC CGPA: {education.cgpa} / 10.0
          </div>
        </div>

        {/* Education Hero Card */}
        <div className="bg-gradient-to-r from-[#0F1626] to-[#0A0E18] border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl font-mono">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {education.degree}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mt-0.5">
                {education.field}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mt-2">
                <span className="flex items-center space-x-1 text-cyan-300 font-bold">
                  <MapPin size={13} />
                  <span>{education.institution}</span>
                </span>
                <span className="flex items-center space-x-1 text-amber-300">
                  <Calendar size={13} />
                  <span>{education.period}</span>
                </span>
              </div>
            </div>

            <div className="bg-[#05070D] px-4 py-3 rounded-xl border border-gray-800 text-right self-start md:self-auto">
              <span className="text-[10px] text-gray-400 block uppercase">CURRENT STANDING</span>
              <span className="text-xl sm:text-2xl font-black text-green-400">{education.cgpa} CGPA</span>
            </div>
          </div>

          {/* 4-Year Academic Progression Timeline */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              4-YEAR CAMPAIGN ROADMAP (2024 - 2028)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {education.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#05070D] border border-gray-800 p-4 rounded-xl space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                      {m.year}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase mt-2">
                      {m.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function CityBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06080E] via-[#090D18] to-[#04060A] opacity-95" />
      
      {/* Distant Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-96 opacity-15 overflow-hidden">
        <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <rect x="40" y="80" width="70" height="240" fill="#1A2234" />
          <rect x="130" y="40" width="90" height="280" fill="#141C2E" />
          <polygon points="175,10 160,40 190,40" fill="#141C2E" />
          <rect x="240" y="120" width="80" height="200" fill="#1A2234" />
          <rect x="340" y="60" width="110" height="260" fill="#121828" />
          <rect x="470" y="140" width="60" height="180" fill="#1A2234" />
          <rect x="550" y="30" width="100" height="290" fill="#141C2E" />
          <polygon points="600,0 580,30 620,30" fill="#141C2E" />
          <rect x="670" y="90" width="80" height="230" fill="#1A2234" />
          <rect x="770" y="110" width="120" height="210" fill="#121828" />
          <rect x="910" y="50" width="85" height="270" fill="#141C2E" />
          <rect x="1015" y="100" width="75" height="220" fill="#1A2234" />
          <rect x="1110" y="70" width="100" height="250" fill="#141C2E" />
          <rect x="1230" y="110" width="80" height="210" fill="#1A2234" />
          <rect x="1330" y="40" width="90" height="280" fill="#121828" />
          
          <circle cx="150" cy="90" r="2" fill="#FDB813" opacity="0.6" />
          <circle cx="170" cy="120" r="2" fill="#00F0FF" opacity="0.6" />
          <circle cx="360" cy="80" r="2" fill="#FF2A85" opacity="0.6" />
          <circle cx="580" cy="60" r="2" fill="#FDB813" opacity="0.6" />
          <circle cx="930" cy="90" r="2" fill="#FDB813" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-1/4 w-32 h-64 bg-gradient-to-t from-amber-500/5 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-64 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-full blur-2xl" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
    </div>
  );
}

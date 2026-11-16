import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { Map, Navigation, MapPin, Compass, Shield, Award, Terminal } from 'lucide-react';

export default function InteractiveCityMap() {
  const [activeDistrict, setActiveDistrict] = useState("MISSIONS");

  const districts = [
    {
      id: "HERO",
      name: "CENTRAL COMMAND",
      href: "#hero",
      x: 50,
      y: 20,
      color: "#FDB813",
      desc: "Hero Dashboard • Status HUD • Live Telemetry"
    },
    {
      id: "PROFILE",
      name: "IDENTITY DISTRICT",
      href: "#profile",
      x: 25,
      y: 35,
      color: "#00F0FF",
      desc: "Player Profile • Academic standing (CGPA 7.49) • Core attributes"
    },
    {
      id: "EVOLUTION",
      name: "EVOLUTION HIGHWAY",
      href: "#evolution",
      x: 75,
      y: 35,
      color: "#22c55e",
      desc: "GTA 1 → GTA V visual transformation highway"
    },
    {
      id: "MISSIONS",
      name: "MISSION CORRIDOR",
      href: "#missions",
      x: 50,
      y: 50,
      color: "#FF2A85",
      desc: "Medicine AI • Object Detector • Bus Tracker • Music Factory"
    },
    {
      id: "ABILITIES",
      name: "WEAPONS DOCKS",
      href: "#abilities",
      x: 20,
      y: 65,
      color: "#FF6B00",
      desc: "Categorized skill arsenal • Python, CV, Deep Learning, Node.js"
    },
    {
      id: "EXPERIENCE",
      name: "INTERN CITADEL",
      href: "#experience",
      x: 80,
      y: 65,
      color: "#38bdf8",
      desc: "Cognifyz Technologies & Bluestock completed missions"
    },
    {
      id: "SAFEHOUSE",
      name: "SAFEHOUSE SANCTUARY",
      href: "#safehouse",
      x: 50,
      y: 85,
      color: "#FDB813",
      desc: "Direct communication HQ • Email, GitHub, LinkedIn"
    }
  ];

  const handleDistrictClick = (district) => {
    soundManager.playMenuClick();
    setActiveDistrict(district.id);
    const elem = document.querySelector(district.href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedData = districts.find((d) => d.id === activeDistrict) || districts[3];

  return (
    <section id="city-map" className="relative py-24 px-4 sm:px-6 bg-[#06080E] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-cyan-400 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
              <Map size={14} />
              <span>ORIGINAL OPEN-WORLD VECTOR CARTOGRAPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mt-1">
              OPEN-WORLD NAVIGATION MAP
            </h2>
          </div>
          <div className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            CLICK MARKER TO FAST-TRAVEL
          </div>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono">
          
          {/* Interactive Vector Map Canvas Box */}
          <div className="lg:col-span-8 bg-[#090D18] border-2 border-gray-800 rounded-2xl p-4 sm:p-6 relative min-h-[420px] shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />

            {/* Decorative Vector Roads / Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-700/50" fill="none">
              <path d="M 100 120 Q 300 200 500 120 T 900 200" strokeWidth="3" strokeDasharray="6 6" />
              <path d="M 250 80 L 250 360 L 750 360 L 750 80" strokeWidth="2" strokeOpacity="0.4" />
              <path d="M 500 80 L 500 400" strokeWidth="3" stroke="#FDB813" strokeOpacity="0.3" />
              <circle cx="50%" cy="50%" r="140" stroke="#00F0FF" strokeOpacity="0.2" strokeWidth="2" />
            </svg>

            {/* Top Map HUD info */}
            <div className="relative z-10 flex justify-between items-center text-xs text-gray-400 bg-black/60 p-2.5 rounded-lg border border-gray-800">
              <span className="flex items-center space-x-2 text-cyan-400 font-bold">
                <Compass size={14} className="animate-spin" />
                <span>MAP GPS: DELHI NCR / PRATIK METROPOLIS</span>
              </span>
              <span>SCALE: 1 : 10,000</span>
            </div>

            {/* Interactive Markers Placed Across the Map */}
            <div className="relative z-10 w-full h-[320px]">
              {districts.map((district) => {
                const isSelected = district.id === activeDistrict;
                return (
                  <button
                    key={district.id}
                    onClick={() => handleDistrictClick(district)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transform transition-all group focus:outline-none"
                    style={{ left: `${district.x}%`, top: `${district.y}%` }}
                  >
                    <div
                      className={`p-2 rounded-xl flex items-center justify-center border-2 transition-all shadow-lg ${
                        isSelected
                          ? "scale-125 bg-white text-black border-amber-400 shadow-[0_0_20px_#FDB813]"
                          : "bg-[#0B101D] text-white hover:scale-110"
                      }`}
                      style={{ borderColor: district.color }}
                    >
                      <MapPin size={18} style={{ color: isSelected ? '#000000' : district.color }} />
                    </div>

                    <span className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 border border-gray-700 text-[10px] font-bold rounded text-white whitespace-nowrap shadow opacity-80 group-hover:opacity-100">
                      {district.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom GPS Footer */}
            <div className="relative z-10 flex justify-between text-[10px] text-gray-500 pt-2 border-t border-gray-800">
              <span>WAYPOINTS: 7 ACTIVE</span>
              <span className="text-green-400 font-bold">ALL SECTORS ACCESSIBLE</span>
            </div>
          </div>

          {/* Right Selected District Inspector Box */}
          <div className="lg:col-span-4 bg-[#090D18] border-2 border-cyan-400/40 rounded-2xl p-6 space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Navigation size={14} />
                <span>DISTRICT TELEMETRY</span>
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase text-white">
                  {selectedData.name}
                </h3>
                <p className="text-xs text-gray-300 mt-2 bg-[#05070D] p-3.5 rounded-xl border border-gray-800 leading-relaxed">
                  {selectedData.desc}
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>FAST-TRAVEL TARGET:</span>
                  <span className="text-amber-400 font-bold">{selectedData.href}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>SECTOR CLEARANCE:</span>
                  <span className="text-green-400 font-bold">UNRESTRICTED</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDistrictClick(selectedData)}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center space-x-2"
            >
              <Navigation size={15} />
              <span>ENGAGE FAST TRAVEL</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

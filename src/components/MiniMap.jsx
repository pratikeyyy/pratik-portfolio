import React, { useState } from 'react';
import { soundManager } from '../sound/audioEffects';
import { Navigation, Radio, X } from 'lucide-react';

export default function MiniMap({ onNotify }) {
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const waypoints = [
    { name: "PROFILE", href: "#profile", x: 45, y: 35, color: "#22c55e" },
    { name: "EVOLUTION", href: "#evolution", x: 75, y: 30, color: "#00F0FF" },
    { name: "MISSIONS", href: "#missions", x: 60, y: 65, color: "#FDB813" },
    { name: "LOADOUT", href: "#abilities", x: 25, y: 55, color: "#FF2A85" },
    { name: "SAFEHOUSE", href: "#safehouse", x: 80, y: 75, color: "#FF6B00" }
  ];

  const handleWaypoint = (wp) => {
    soundManager.playMenuClick();
    if (onNotify) {
      onNotify({ title: "GPS ROUTE PLOTTED", message: `FAST-TRAVEL TO ${wp.name}` });
    }
    const elem = document.querySelector(wp.href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Collapsed by default: the radar used to sit on top of hero text and
  // project cards. A small pill keeps it one tap away without covering content.
  if (collapsed) {
    return (
      <button
        onClick={() => {
          soundManager.playMenuClick();
          setCollapsed(false);
        }}
        onMouseEnter={() => soundManager.playHover()}
        title="Open Radar GPS"
        aria-label="Open Radar GPS"
        className="fixed bottom-4 left-4 z-30 flex items-center space-x-2 bg-[#060A14]/95 backdrop-blur-md border-2 border-gray-700/80 hover:border-green-500 rounded-full pl-3 pr-4 py-2.5 shadow-[0_0_25px_rgba(0,0,0,0.85)] text-green-400 font-mono select-none"
      >
        <Radio size={14} className="animate-pulse" />
        <span className="text-[10px] font-bold tracking-widest">RADAR GPS</span>
      </button>
    );
  }

  return (
    <aside aria-label="HUD Mini-Radar" className="fixed bottom-4 left-4 z-30 select-none font-mono">
      <div 
        className={`relative bg-[#060A14]/95 backdrop-blur-md rounded-2xl border-2 border-gray-700/80 shadow-[0_0_25px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 ${
          expanded ? "w-64 h-64" : "w-44 h-44"
        }`}
      >
        {/* Radar Background & Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Circular Radar Sweep */}
        <div className="absolute inset-2 rounded-full border border-gray-700/50 overflow-hidden">
          <div className="absolute inset-0 border border-green-500/20 rounded-full" />
          <div className="absolute inset-6 border border-green-500/10 rounded-full" />
          <div className="absolute inset-12 border border-green-500/10 rounded-full" />

          {/* Crosshairs */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-green-500/20" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-green-500/20" />

          {/* Sweeping radar line */}
          <div 
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-top-left animate-radar-sweep pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.45) 0%, rgba(34, 197, 94, 0) 70%)'
            }}
          />

          {/* Center Player Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_10px_#ffffff] animate-pulse">
              <Navigation size={10} className="text-black transform rotate-45" />
            </div>
          </div>

          {/* Map Waypoints */}
          {waypoints.map((wp) => (
            <button
              key={wp.name}
              onClick={() => handleWaypoint(wp)}
              onMouseEnter={() => soundManager.playHover()}
              title={`Navigate to ${wp.name}`}
              className="absolute w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full transform hover:scale-150 transition-transform focus:outline-none z-10 group"
              style={{
                left: `${wp.x}%`,
                top: `${wp.y}%`,
                backgroundColor: wp.color,
                boxShadow: `0 0 8px ${wp.color}`
              }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-black/95 text-[8px] text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-gray-700">
                {wp.name}
              </span>
            </button>
          ))}
        </div>

        {/* Radar Info Header */}
        <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[9px] text-gray-400 z-20">
          <span className="flex items-center space-x-1 text-amber-400 font-bold">
            <Radio size={10} className="animate-pulse" />
            <span>RADAR GPS</span>
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[8px] text-gray-400 hover:text-white bg-black/50 px-1 rounded"
            >
              {expanded ? "MIN" : "EXP"}
            </button>
            <button
              onClick={() => setCollapsed(true)}
              title="Collapse radar"
              aria-label="Collapse radar"
              className="text-gray-400 hover:text-white bg-black/50 px-1 rounded flex items-center"
            >
              <X size={10} />
            </button>
          </div>
        </div>

        {/* Location Footer */}
        <div className="absolute bottom-1.5 left-2 right-2 text-center text-[8px] text-green-400 font-bold bg-black/80 py-0.5 rounded border border-green-900/40">
          DELHI NCR DISTRICT • ABESIT
        </div>
      </div>
    </aside>
  );
}

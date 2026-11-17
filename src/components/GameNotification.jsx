import React from 'react';
import { Sparkles } from 'lucide-react';

export default function GameNotification({ notification }) {
  if (!notification) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 select-none max-w-[calc(100vw-2rem)] sm:max-w-sm font-mono pointer-events-none">
      <div className="bg-[#090D18]/95 backdrop-blur-md border-2 border-amber-400 rounded-xl p-3 sm:p-4 shadow-[0_0_25px_rgba(253,184,19,0.4)] flex items-center space-x-3 text-white animate-bounce-short">
        <div className="p-2 rounded-lg bg-amber-400/20 text-amber-400 border border-amber-400/40 shrink-0">
          <Sparkles size={18} className="animate-spin" />
        </div>
        <div className="space-y-0.5 overflow-hidden">
          <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>{notification.title || "GAME NOTIFICATION"}</span>
          </div>
          <div className="text-xs sm:text-sm font-black text-white uppercase tracking-tight truncate">
            {notification.message}
          </div>
        </div>
      </div>
    </div>
  );
}

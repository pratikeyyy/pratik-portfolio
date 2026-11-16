import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../sound/audioEffects';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './CustomIcons';
import { Mail, Send, Terminal, Shield } from 'lucide-react';

export default function SafehouseContact() {
  const { safehouse } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      soundManager.play8BitTone(300, 'sawtooth', 0.2);
      setStatusMessage('PLEASE FILL OUT ALL COMMAND FIELDS.');
      return;
    }
    soundManager.playMissionPassed();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FDB813', '#22c55e', '#00F0FF']
    });
    setStatusMessage('TRANSMISSION DISPATCHED TO PRATIK KUMAR SAFEHOUSE!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="safehouse" className="relative py-24 px-4 sm:px-6 bg-[#080B11] text-white border-t border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 font-mono">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-400 pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs uppercase tracking-widest font-bold">
              <Shield size={14} />
              <span>FINAL MISSION COORDINATES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-1">
              SAFEHOUSE
            </h2>
          </div>
          <div className="text-xs text-green-400 bg-green-950/40 border border-green-500/40 px-3 py-1.5 rounded self-start md:self-auto font-bold">
            {safehouse.status}
          </div>
        </div>

        {/* Contact Grid: Direct Channels + Interactive Terminal Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Safehouse Links */}
          <div className="lg:col-span-5 bg-[#0D1322] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                  COMMUNICATION FREQUENCIES
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                  CONTACT PLAYER
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Ready to collaborate on high-impact AI/ML systems, Computer Vision solutions, or Full-Stack software engineering.
                </p>
              </div>

              {/* Direct Link Buttons */}
              <div className="space-y-3">
                <a
                  href={safehouse.emailLink}
                  onClick={() => soundManager.playMenuClick()}
                  className="flex items-center space-x-3 p-3.5 bg-[#060912] hover:bg-[#121A2E] border border-gray-800 hover:border-amber-400 rounded-xl transition-all group"
                >
                  <div className="p-2 rounded-lg bg-amber-400/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-gray-400 block uppercase">DIRECT EMAIL</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
                      {safehouse.email}
                    </span>
                  </div>
                </a>

                <a
                  href={safehouse.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playMenuClick()}
                  className="flex items-center space-x-3 p-3.5 bg-[#060912] hover:bg-[#121A2E] border border-gray-800 hover:border-cyan-400 rounded-xl transition-all group"
                >
                  <div className="p-2 rounded-lg bg-cyan-400/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">SOURCE REPOSITORIES</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300">
                      GitHub Profile
                    </span>
                  </div>
                </a>

                <a
                  href={safehouse.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playMenuClick()}
                  className="flex items-center space-x-3 p-3.5 bg-[#060912] hover:bg-[#121A2E] border border-gray-800 hover:border-pink-400 rounded-xl transition-all group"
                >
                  <div className="p-2 rounded-lg bg-pink-400/20 text-pink-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">PROFESSIONAL NETWORK</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300">
                      LinkedIn Profile
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 pt-4 border-t border-gray-800">
              COORDINATES: {safehouse.coordinates}
            </div>
          </div>

          {/* Right Column: Encrypted Message Transmission Terminal */}
          <div className="lg:col-span-7 bg-[#0D1322] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase">
                <Terminal size={16} />
                <span>SAFEHOUSE ENCRYPTED DISPATCH TERMINAL</span>
              </div>
              <span className="text-[10px] text-green-400 bg-green-950/40 px-2 py-0.5 rounded border border-green-800">
                PORT 8080 SECURE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-gray-400 uppercase tracking-wider block">
                  SENDER IDENTITY [NAME]
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name / callsign..."
                  className="w-full bg-[#05070D] border border-gray-800 focus:border-amber-400 p-3 rounded-lg text-white font-mono outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 uppercase tracking-wider block">
                  RETURN FREQUENCY [EMAIL]
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#05070D] border border-gray-800 focus:border-amber-400 p-3 rounded-lg text-white font-mono outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 uppercase tracking-wider block">
                  TRANSMISSION PAYLOAD [MESSAGE]
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="State mission requirements or opportunity details..."
                  className="w-full bg-[#05070D] border border-gray-800 focus:border-amber-400 p-3 rounded-lg text-white font-mono outline-none resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 bg-amber-400/10 border border-amber-400/40 rounded-lg text-amber-300 text-xs">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(253,184,19,0.4)] flex items-center justify-center space-x-2"
              >
                <Send size={16} />
                <span>TRANSMIT DISPATCH</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

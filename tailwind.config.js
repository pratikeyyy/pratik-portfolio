/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gta: {
          gold: '#FDB813',
          green: '#22c55e',
          vicePink: '#FF2A85',
          viceCyan: '#00F0FF',
          dark: '#080B11',
          card: '#0F1523',
          cardBorder: '#1F293D',
          saOrange: '#FF6B00',
          saAmber: '#D97706',
          ivSlate: '#1E232A',
          wantedYellow: '#FFD700',
          wantedRed: '#FF2222',
          purple: '#8A2BE2'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar-sweep': 'radarSweep 3.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-vice': 'glowVice 2s ease-in-out infinite alternate'
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        glowVice: {
          '0%': { filter: 'drop-shadow(0 0 6px rgba(255, 42, 133, 0.7))' },
          '100%': { filter: 'drop-shadow(0 0 16px rgba(0, 240, 255, 0.9))' }
        }
      }
    }
  },
  plugins: []
};

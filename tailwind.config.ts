import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00F0FF', // 青色霓虹
        accent: '#FF3CF7',  // 粉色霓虹
        warning: '#F5D300', // 黄色霓虹
        purple: '#8B5CF6',  // 紫色霓虹
        dark: {
          900: '#0B0F14',   // 深色背景
          800: '#1A1F2E',   // 深色卡片
          700: '#2D3748',   // 深色边框
        },
        neon: {
          blue: '#00F0FF',
          pink: '#FF3CF7',
          yellow: '#F5D300',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        'oxanium': ['Oxanium', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'flicker': 'flicker 0.15s infinite linear',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '0.8'
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            opacity: '1'
          },
        },
        'glow': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '100%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'brightness(1)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'brightness(0.8)',
          },
        },
      },
      backgroundImage: {
        'grid': `
          linear-gradient(rgba(0, 240, 255, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.06) 1px, transparent 1px)
        `,
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        'scan-lines': `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 240, 255, 0.03) 2px,
            rgba(0, 240, 255, 0.03) 4px
          )
        `,
      },
      backgroundSize: {
        'grid': '20px 20px',
        'noise': '200px 200px',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.neon': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.neon-glow': {
          boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.btn-neon': {
          position: 'relative',
          background: 'transparent',
          border: '2px solid currentColor',
          color: 'currentColor',
          transition: 'all 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'currentColor',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            zIndex: '-1',
          },
          '&:hover': {
            color: '#0B0F14',
            '&::before': {
              opacity: '1',
            },
          },
        },
        '.cyber-grid': {
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        },
        '.cyber-scan': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00F0FF, transparent)',
            animation: 'scan 2s linear infinite',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;

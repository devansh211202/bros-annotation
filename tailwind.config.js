/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05060a',
        'bg-soft': '#0a0c14',
        surface: '#0f1320',
        'surface-2': '#141929',
        primary: {
          DEFAULT: '#3b82f6',
          soft: '#60a5fa',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          soft: '#a78bfa',
        },
        cyan: '#22d3ee',
        text: {
          DEFAULT: '#e8ecf5',
          muted: '#8b94a8',
          dim: '#5a6378',
        },
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};

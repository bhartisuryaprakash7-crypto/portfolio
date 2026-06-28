/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg:      '#06060f',
        bg2:     '#0d0d1a',
        surface: '#12122a',
        purple:  '#7c3aed',
        blue:    '#0ea5e9',
        green:   '#10b981',
        amber:   '#f59e0b',
        violet:  '#a78bfa',
        dim:     '#94a3b8',
        muted:   '#475569',
      },
      boxShadow: {
        glow:       '0 0 40px rgba(124,58,237,0.4)',
        'glow-lg':  '0 0 60px rgba(124,58,237,0.6)',
        'glow-blue':'0 0 30px rgba(14,165,233,0.4)',
      },
      animation: {
        pulse2: 'pulse2 2s ease-in-out infinite',
        spin2:  'spin2 4s linear infinite',
        float:  'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(1.5)' },
        },
        spin2: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
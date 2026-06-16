/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: '#2563eb',
          light: '#60a5fa'
        },
        navbarBlack: '#0a0a0a',
        gradient: {
          top: '#09090b',
          mid: '#0f172a',
          bottom: '#111827'
        },
        glass: {
          bg: 'rgba(15, 23, 42, 0.74)',
          border: 'rgba(148, 163, 184, 0.14)'
        },
        body: '#cbd5e1', // light gray
        muted: '#94a3b8',
        dark: {
          100: '#1f2937',
          200: '#111827',
          300: '#0f172a',
          400: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

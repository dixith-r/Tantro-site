/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — derived from the Tantro logo
        ink: {
          950: '#05070D',   // page background
          900: '#0A0E18',   // raised surfaces
          800: '#111726',   // cards
          700: '#1A2238',   // card hover
          600: '#242D48',   // borders strong
          500: '#2F3A5C',   // borders medium
        },
        azure: {
          DEFAULT: '#2E6BFF',
          glow: '#5B8CFF',
        },
        violet: {
          DEFAULT: '#7A4FFF',
          glow: '#9B76FF',
        },
        teal: {
          DEFAULT: '#20D5A5',
          glow: '#4DE6BD',
        },
        mist: {
          100: '#E9ECF5',
          200: '#B8C0D9',
          300: '#8790B0',
          400: '#5D6682',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2E6BFF 0%, #7A4FFF 50%, #20D5A5 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(46,107,255,0.15) 0%, rgba(122,79,255,0.15) 50%, rgba(32,213,165,0.15) 100%)',
        'grid-ink': `
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-lg': '56px 56px',
      },
      boxShadow: {
        'glow-azure': '0 0 40px -10px rgba(46,107,255,0.55)',
        'glow-teal':  '0 0 40px -10px rgba(32,213,165,0.55)',
        'glow-violet':'0 0 40px -10px rgba(122,79,255,0.55)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

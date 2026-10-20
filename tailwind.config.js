/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base palette — warm, editorial
        cream: '#F5F2ED',        // main background
        ivory: '#FAF8F4',        // secondary background (lighter)
        charcoal: '#1A1A1A',     // main text
        ink: '#0F0F0F',          // dark sections
        stone: '#8A8580',        // muted body text
        line: '#E5E0D8',         // hairline borders

        // Accent — muted terracotta (change to gold later if you want)
        accent: {
          DEFAULT: '#B8724A',    // terracotta
          soft: '#D9A57C',
        },
      },

      fontFamily: {
        // serif = headings (Playfair Display)
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        // sans = body (Inter)
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Editorial display sizes — fluid where it matters
        'display': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero':    ['clamp(2.5rem, 7vw, 6rem)',  { lineHeight: '1',    letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2rem, 5vw, 4rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'h3':      ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },

      letterSpacing: {
        widest: '0.2em',
        editorial: '-0.02em',
      },

      spacing: {
        // Extra breathing room for editorial sections
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': 'clamp(5rem, 12vw, 10rem)',
      },

      maxWidth: {
        'editorial': '90rem',   // 1440px — for full-bleed editorial layouts
        'prose-wide': '65ch',
      },

      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-line': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'reveal-line': 'reveal-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
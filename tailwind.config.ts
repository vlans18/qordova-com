import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Colors ─────────────────────────────────────────── */
      colors: {
        qordova: {
          /* Backgrounds */
          bg:         '#0A0A0B',
          surface:    '#111114',
          surface2:   '#18181C',
          surface3:   '#1E1E23',

          /* Borders */
          border:     '#2A2A2E',

          /* Amber-gold accent */
          gold:       '#C8A84B',
          'gold-hover': '#D4B55A',

          /* Text */
          text1:      '#F5F5F0',
          text2:      '#B8B8B0',
          text3:      '#888884',
          text4:      '#555552',
        },
      },

      /* ── Background colors (semantic aliases) ───────────── */
      backgroundColor: {
        base:       '#0A0A0B',
        surface:    '#111114',
        'surface-2': '#18181C',
        'surface-3': '#1E1E23',
      },

      /* ── Text colors (semantic aliases) ─────────────────── */
      textColor: {
        primary:    '#F5F5F0',
        secondary:  '#B8B8B0',
        muted:      '#888884',
        disabled:   '#555552',
        gold:       '#C8A84B',
      },

      /* ── Border colors ───────────────────────────────────── */
      borderColor: {
        base:       '#2A2A2E',
        subtle:     'rgba(255, 255, 255, 0.06)',
        gold:       'rgba(200, 168, 75, 0.28)',
      },

      /* ── Font families ───────────────────────────────────── */
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Courier New', 'monospace'],
      },

      /* ── Font sizes ──────────────────────────────────────── */
      fontSize: {
        'display-xl': ['clamp(48px, 6vw, 80px)',    { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(36px, 4.5vw, 64px)',  { lineHeight: '1.08', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(28px, 3.5vw, 46px)',  { lineHeight: '1.12', letterSpacing: '-0.012em' }],
        'display-sm': ['clamp(22px, 2.5vw, 32px)',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'body-lg':    ['18px',  { lineHeight: '1.7' }],
        'body-md':    ['16px',  { lineHeight: '1.72' }],
        'body-sm':    ['14px',  { lineHeight: '1.65' }],
        'label':      ['11px',  { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'mono-sm':    ['10px',  { lineHeight: '1.4', letterSpacing: '0.18em' }],
        'mono-xs':    ['9px',   { lineHeight: '1.4', letterSpacing: '0.20em' }],
      },

      /* ── Font weights ────────────────────────────────────── */
      fontWeight: {
        light:   '300',
        normal:  '400',
        medium:  '500',
        semibold: '600',
      },

      /* ── Spacing ─────────────────────────────────────────── */
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
        '34': '136px',
        '38': '152px',
        '42': '168px',
        '46': '184px',
        '50': '200px',
        '54': '216px',
        '58': '232px',
        '62': '248px',
        '66': '264px',
        '70': '280px',
        '88': '352px',
        '100': '400px',
        '112': '448px',
        '128': '512px',
      },

      /* ── Max width ───────────────────────────────────────── */
      maxWidth: {
        container: '1200px',
        prose:     '65ch',
        measure:   '62ch',
        narrow:    '520px',
        wide:      '860px',
      },

      /* ── Height ──────────────────────────────────────────── */
      height: {
        header: '64px',
        screen: '100svh',
      },

      /* ── Min height ──────────────────────────────────────── */
      minHeight: {
        screen:  '100svh',
        hero:    '88svh',
        'hero-full': '100svh',
      },

      /* ── Border radius ───────────────────────────────────── */
      borderRadius: {
        none:  '0px',
        sm:    '1px',
        DEFAULT: '2px',
        md:    '3px',
        lg:    '4px',
      },

      /* ── Z-index ─────────────────────────────────────────── */
      zIndex: {
        base:     '1',
        raised:   '10',
        dropdown: '50',
        header:   '100',
        drawer:   '200',
        modal:    '300',
        toast:    '400',
      },

      /* ── Box shadow ──────────────────────────────────────── */
      boxShadow: {
        gold:   '0 0 0 1px rgba(200, 168, 75, 0.28)',
        'gold-sm': '0 0 0 1px rgba(200, 168, 75, 0.18)',
        inner:  'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        card:   '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
        'card-lg': '0 4px 16px rgba(0, 0, 0, 0.5)',
      },

      /* ── Transitions ─────────────────────────────────────── */
      transitionDuration: {
        fast:  '150ms',
        base:  '250ms',
        slow:  '400ms',
      },

      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* ── Animation ───────────────────────────────────────── */
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        'fade-up':          'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':          'fade-in 0.6s ease both',
        'slide-in-right':   'slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-out-right':  'slide-out-right 0.3s ease-in both',
      },

      /* ── Screen breakpoints (match default, documented) ──── */
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },

      /* ── Backdrop blur ───────────────────────────────────── */
      backdropBlur: {
        header: '16px',
      },

      /* ── Grid ────────────────────────────────────────────── */
      gridTemplateColumns: {
        'auto-fill-sm':  'repeat(auto-fill, minmax(280px, 1fr))',
        'auto-fill-md':  'repeat(auto-fill, minmax(360px, 1fr))',
        'sidebar':       '1fr 2fr',
        'sidebar-right': '2fr 1fr',
        '2-even':        'repeat(2, 1fr)',
        '3-even':        'repeat(3, 1fr)',
        '5-even':        'repeat(5, 1fr)',
      },
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/**/*.{html,js,jsx}'
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      'sm': { 'min': '400px' ,'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      fall: {
        DEFAULT: '#E76000',
        50: '#FFC7A0',
        100: '#FFBB8B',
        200: '#FFA362',
        300: '#FF8C3A',
        400: '#FF7411',
        500: '#E76000',
        600: '#AF4900',
        700: '#773100',
        800: '#3F1A00',
        900: '#070300',
        950: '#000000'
      }
    },
    backgroundColor: ({ theme }) => theme('colors'),
    borderColor: ({ theme }) => theme('colors'),
    textColor: ({ theme }) => theme('colors'),
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],

    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    padding: ({theme})=> theme('spacing'),
    margin: ({theme})=> theme('spacing'),
    width: ({theme})=> theme('spacing'),
    minWidth: ({theme})=> theme('spacing'),
    maxWidth: ({theme})=> theme('spacing'),
    height: ({theme})=> theme('spacing'),
    minHeight: ({theme})=> theme('spacing'),
    maxHeight: ({theme})=> theme('spacing'),
    translate: ({theme})=> theme('spacing'),
    borderRadius: ({theme}) => ({
      full: '50%',
      ...theme('spacing')
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      'logo': ['13rem', {lineHeight: '1'}]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      width: {
        layout: '80%',
        full: '100%'
      },
      height: {
        full: '100%'
      }
    }
  },
  plugins: [],
}


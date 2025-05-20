/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,tsx,ts}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#66BB46',
        secondary: '#9A8379',
        highlight: '#F6BC45',
        complementary: '#A48291',
      },
    },
    fontSize: {
      'title-1': ['2.25rem', { lineHeight: '2.5rem' }], // ~36px
      'title-2': ['1.875rem', { lineHeight: '2.25rem' }], // ~30px
      'title-3': ['1.5rem', { lineHeight: '2rem' }], // ~24px

      'body-1': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }], // ~20px bold
      'body-2': ['1.125rem', { lineHeight: '1.75rem' }], // ~18px
      'body-3': ['1rem', { lineHeight: '1.5rem' }], // ~16px
      'body-4': ['0.875rem', { lineHeight: '1.25rem' }], // ~14px
    },
  },
  plugins: [],
}


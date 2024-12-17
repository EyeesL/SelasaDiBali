/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        kaisei: ['"Kaisei Tokumin"', 'serif'], // Custom font for headings
        urban: ['"Urbanist"', 'sans-serif'],    // Default body font
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      cream: {
        10: '#FDFBF6',
        70: '#CDC6AF',
        80: '#A49E8C',
        90: '#7B7769',
      },
      rustic: {
        60: '#A26644',
        90: '#513322',
      },
      mamba: {
        50: '#9A9682',
        70: '#6F6C57',
        80: '#595646',
      },
    },
  },
  plugins: [],
};

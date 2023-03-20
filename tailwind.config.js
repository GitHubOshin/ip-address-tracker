module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { mobile: '0px', desktop: '1440px' },
    fontFamily: {
      rubik: ['Rubik']
    },
    extend: {
      colors: {
        veryDarkGray: 'hsl(0, 0%, 17%)',
        darkGray: 'hsl(0, 0%, 59%)'
      }
    }
  },
  plugins: []
}

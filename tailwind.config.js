const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Inter', ...fontFamily.sans]
      },

    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'rgba(255, 120, 45, 1)',
        black: 'rgba(0, 0, 0, 1)',
        gray: 'rgba(85, 85, 85, 1)',
        green: '#55be24',
        whiteGrey: 'rgba(245, 245, 245, 1)',
        grey: 'rgba(157, 157, 157, 1)',
        lightGray: 'rgba(234, 234, 234, 1)',
      },
      fontFamily: {
        jost: ['"Jost"', 'serif'],
        exo: ['"Exo"', 'serif'],
      },
    },
  },
  plugins: [],
}

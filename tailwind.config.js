/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        LightRed: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Offwhite: "hsl(0, 0%, 94%)",
        LightGrey: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
        OffBlack: "hsl(0, 0%, 8%)",
      }

    },
  },

  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#181f3a',
          medium: '#21284d',
          card: '#22294c',
        },
        blue: {
          primary: '#2563eb',
          hover: '#3275f7',
        },
        accent: {
          green: '#22d6a7',
        },
      },
    },
  },
  plugins: [],
}

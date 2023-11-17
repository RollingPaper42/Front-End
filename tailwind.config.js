/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'white' : '#ffffff',
        'black' : '#212121',
        'green' : '#00ffff',
        'pink' : '#ff00ff',
        'buttonColor' : '#8F38FF',
      },
    },
    fontFamily: {
      FiraCode: ["FiraCode"],
    },
  },
  plugins: [],
};

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
      colors: {
        'strcat-white': '#F0EEEA',
        'strcat-black': '#212121',
        'strcat-green': '#7CED43',
        'strcat-blue': '#557FE4',
        'strcat-yellow': '#FBFF36',
        'strcat-buttonColor': '#8F38FF',
      },
    },
    fontFamily: {
      FiraCode: ['FiraCode'],
    },
  },
  plugins: [],
};

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
        'my-white': '#F0EEEA',
        'my-black': '#212121',
        'my-green': '#7CED43',
        'my-blue': '#557FE4',
        'my-yellow': '#FBFF36',
        'my-buttonColor': '#8F38FF',
      },
    },
    fontFamily: {
      FiraCode: ['FiraCode'],
    },
  },
  plugins: [],
};

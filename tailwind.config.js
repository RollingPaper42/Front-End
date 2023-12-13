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
        'strcat-blue': '#6CD8ED',
        'strcat-yellow': '#FBFF36',
        'strcat-cyan': '#6CD8ED',
        'strcat-buttonColor': '#8F38FF',
        'strcat-gray': '#BCBCBC',
        'strcat-gray2': '#4D4D4D',
        'strcat-gray3': '#828282',
        'strcat-red': '#DE6565',
        'strcat-textarea-bg': '#373737',
        'strcat-textarea-text': '#909090',
        'strcat-textarea-error': '#8A4E4E',
        'strcat-error': '#FF0000',
        'strcat-sub': '#9D9D8C',
        'strcat-white2': '#E9E9E9',
        'strcat-bright-yellow': '#FDFFB0',
        'strcat-default-yellow': '#FBFF36',
        'strcat-default-cyan': '#6CD8ED',
        'strcat-default-green': '#7CED43',
        'strcat-default-magenta': '#FF43A8',
        'strcat-default-white': '#FFFFFF',
        'strcat-default-black': '#212121',

        'strcat-calm-orange': '#FFA857',
        'strcat-calm-cyan': '#ABC4FF',
        'strcat-calm-text-cyan': '#557FE4',
        'strcat-calm-green': '#BEE4A4',
        'strcat-calm-text-green': '#61A136',
        'strcat-calm-magenta': '#FF43A8',
        'strcat-calm-white': '#F0EEEA',
        'strcat-calm-black': '#463F3A',

        'strcat-green-black': '#212121',
        'strcat-green-cyan': '#8CD8ED',
        'strcat-green-yellow': '#FBFF36',
        'strcat-green-green': '#7CED43',

        'strcat-cyan-white': '#FFFFFF',
        'strcat-cyan-green': '#7CED43',
        'strcat-cyan-yellow': '#FBFF36',
        'strcat-cyan-magenta': '#FF43A8',
        'strcat-cyan-cyan': '#6CD8ED',
        'strcat-cyan-black': '#212121',

        'login-button-kakao': '#FEE500',
        'login-button-google': '#FFFFFF',
        'loading-gray': '#D9D9D9',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '20%': { opacity: 0.5 },
          '80%': { opacity: 0.5 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        slide: 'slide 0.7s linear',
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      fontSize: {
        'headline-size1': ['26px'],
        'headline-size2': ['24px'],
        'title-size1': ['22px'],
        'title-size2': ['20px'],
        'body-size1': ['18px'],
        'body-size2': ['16px'],
        'caption-size1': ['16px'],
        'caption-size2': ['14px'],
      },
      letterSpacing: {
        0: '0em',
        1: '0.01em',
        2: '0.02em',
        3: '0.03em',
        4: '0.04em',
      },
      lineHeight: {
        16: 1.6,
        15: 1.5,
        14: 1.4,
      },
      zIndex: {
        writer: 5,
        button: 10,
        drawer: 30,
        modal: 99,
      },
    },
    fontFamily: {
      pretentdard: ['Pretendard'],
    },
    plugins: [],
  },
};

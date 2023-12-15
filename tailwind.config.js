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
        'strcat-gray-500': '#909090',
        'strcat-red': '#DE6565',
        'strcat-textarea-bg': '#373737',
        'strcat-textarea-text': '#909090',
        'strcat-textarea-error': '#8A4E4E',
        'strcat-error': '#FF0000',
        'strcat-sub': '#9D9D8C',
        'strcat-white2': '#E9E9E9',
        'strcat-unhighlighted': '#424242',
        'strcat-bright-yellow': '#FDFFB0',
        'strcat-default-yellow': '#FBFF36',
        'strcat-default-cyan': '#6CD8ED',
        'strcat-default-green': '#7CED43',
        'strcat-default-magenta': '#FF43A8',
        'strcat-default-white': '#FFFFFF',
        'strcat-default-black': '#212121',
        'chris-bg': '#246F50',
        'mas-bg': '#DE6565',
        'night-bg': '#FDFFB0',
        'peach-bg': '#FFC8B0',
        'lilac-bg': '#D7C4FF',
        'line-in': '#585858',

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
        textFadeIn: {
          '0%': { opacity: 0.15 },
          '100%': { opacity: 1 },
        },
        fall: {
          '0%': { opacity: 0 },
          '10%': { opacity: 0.5 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 },
        },
        drawerOpen: {
          from: { transform: 'translateX(110%)' },
          to: { transform: 'translateX(0)' },
        },
        drawerOpenBg: {
          from: { backgroundColor: 'rgba(0,0,0,0)' },
          to: { backgroundColor: 'rgba(0,0,0,0.8)' },
        },
        drawerClose: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(110%)' },
        },
        drawerCloseBg: {
          from: { backgroundColor: 'rgba(0,0,0,0.8)' },
          to: { backgroundColor: 'rgba(0,0,0,0)' },
        },
      },
      animation: {
        slide: 'slide 0.7s linear',
        fadeIn: 'fadeIn 2s ease-in-out',
        textFadeIn: 'textFadeIn 0.35s ease-in-out',
        fall: 'fall 14s ease-in-out infinite',
        drawerOpen: 'drawerOpen 0.2s ease-in',
        drawerOpenBg: 'drawerOpenBg 0.2s ease-in',
        drawerClose: 'drawerClose 0.2s ease-in',
        drawerCloseBg: 'drawerCloseBg 0.2s ease-in',
        'pulse-custom1': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'pulse-custom2': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 2) infinite;',
        'pulse-custom3': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 3) infinite;',
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
        text: 5,
        writer: 10,
        button: 20,
        drawer: 30,
        modal: 99,
      },
      boxShadow: {
        highlight: '0 1px 0 2px #feffb0',
      },
    },
    fontFamily: {
      pretentdard: ['Pretendard'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};

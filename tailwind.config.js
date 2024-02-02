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
        'strcat-red': '#DE6565',
        'strcat-textarea-bg': '#373737',
        'strcat-textarea-text': '#909090',
        'strcat-sub': '#9D9D8C',
        'strcat-bright-yellow': '#FDFFB0',

        // New Theme
        'default-white': '#FFFFFF',
        'default-white2': '#E9E9E9',
        'default-black': '#212121',
        'default-black2': '#000000',
        'default-gray': '#4D4D4D',
        'default-gray2': '#BCBCBC',
        'default-gray3': '#909090',
        'default-gray4': '#828282',

        'kakao-bg': '#FEE500',
        'google-bg': '#FFFFFF',
        'textarea-bg': '#373737',
        'drawer-scrollbar': '#373737',
        'drawerlist-bg': '#1D1D1D',

        'night-highlight': '#FDFFB0',
        'night-buttonbg': '#9D9D8C',

        'peach-highlight': '#FFC8B0',
        'peach-buttonbg': '#987A6F',

        'lilac-highlight': '#D7C4FF',
        'lilac-buttonbg': '#66697D',

        'chris-highlight': '#246F50',
        'chris-buttonbg': '#2A4C3E',

        'mas-highlight': '#DE6565',
        'mas-buttonbg': '#964E4E',
        'strcat-sul': '#82CBFF',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
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
      sniglet: ['Sniglet'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};

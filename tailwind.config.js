/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#FFFFFF',
        'text-secondary': '#888888',
        'text-alt': '#991b1b',
        body: '#17171F',
        'body-2': '#242431',
        'body-3': '#40404D',
        tile: '#252525',
        'text-input': '#17171F',
        'selected-text': '#A3A3FF',
        theme: '#3F3FFF',
        nav: '#404053',
        secondary: '#9191A4',
        badge: '#3F3F51',
        'input-border': '#565666',
        input: '#2A2A35',
        github: '#333',
        linkedin: '#0072b1',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'mr-bedfort': ['Mr Bedfort', 'cursive'],
      },
    },
  },
  plugins: [],
};

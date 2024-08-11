/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'blog.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#DFD0B8',
        secondary: '#DFD0B8',
        dark: '#6EACDA',
        dark2: '#153448',
        dark3: '#010c16',
        dark4: '#093255',
        porto: '#305874',
        bwhite: '#e8e9eb',
        bwhite2: '#eee4cd',
        fcolor: '#3C5B6F',
      },
      screens:{
        '2xl': '1320px',
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}


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
        primary: '#323232',
        secondary: '#3d2a21',
        dark: '#0c0b0b',
        bwhite: '#e8e9eb',
        bwhite2: '#eee4cd',
        fcolor: '#2e272a',
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


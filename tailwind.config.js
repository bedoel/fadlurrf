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
        primary: '#e6e6cb',
        secondary: '#E2E2B6',
        dark: '#6EACDA',
        dark2: '#021526',
        dark3: '#010c16',
        dark4: '#093255',
        bwhite: '#e8e9eb',
        bwhite2: '#eee4cd',
        fcolor: '#021526',
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


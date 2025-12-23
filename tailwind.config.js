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
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        dark: '#6E8293',
        dark2: '#000000',
        dark3: '#010c16',
        dark5: '#000000',
        dark4: '#1D2323',
        porto: '#305874',
        bwhite: '#ffffff',
        bwhite2: '#ffffff',
        fcolor: '#6E8293',
      },
      backgroundImage: {
        'custom': "url('src/img/citylight.jpg')",
        'parallax': "url('src/img/citylight2.jpg')",
      },
      screens:{
        '2xl': '1320px',
      },
      maxHeight: {
        '128': '32rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
            colors: {
                nearWhite: '#F3F3F3',
                nearBlack: '#333333'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                dmSans: ['DM Sans', 'sans-serif'],
                spaceGrotesk: ['Space Grotesk', 'sans-serif']
            }
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1400px',
            xl: '1700px'
        }
  },
  plugins: [],
}

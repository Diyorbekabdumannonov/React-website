module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          medium: '#123B64',
          dark: '#011936',
          light:'#63ADA6'
        },
        gray: {
          light: '#F2F3F4',
          medium: '#E0E7EC',
          highter: '#3B5C7D'
        },
        yellow: {
          medium: '#F79F19'
        }
      },
      maxWidth: {
        desktop: '1440px',
        tablet: '1260px'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C84B31',      // Merah Rempah / Sambal Medan
          primaryHover: '#A83B24', // Hover State
          secondary: '#EBB071',    // Kuning Bumbu / Kari Gurih
          secondaryLight: '#FDF3E7',
          dark: '#1D1D1D',         // Kopi Sidikalang Hitam
          muted: '#636B69',        // Abu-abu Netral
          lightBg: '#FDFBF7',      // Putih Krem Hangat
          cardBg: '#FFFFFF',       // Putih Bersih
          accent: '#2D6E7E',       // Hijau Danau Toba / Wisata Tropis
          accentLight: '#EBF4F6'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'stitch-sm': '0 2px 8px -2px rgba(29, 29, 29, 0.06)',
        'stitch-md': '0 12px 24px -6px rgba(29, 29, 29, 0.08), 0 4px 8px -2px rgba(29, 29, 29, 0.04)',
        'stitch-hover': '0 20px 32px -8px rgba(200, 75, 49, 0.15)',
        'stitch-floating': '0 16px 36px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        'stitch-btn': '9999px',
        'stitch-card': '20px',
        'stitch-badge': '12px'
      }
    },
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: { // Tambahkan keyframe ini
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        scaleIn: 'scaleIn 0.3s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards', // Tambahkan animasi ini
        'spin-slow': 'spin 8s linear infinite',
      },
       fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
        },
        spinSlow: { // For the dotted circle animation
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInDown: 'fadeInDown 0.7s ease-out forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        slideInUp: 'slideInUp 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.3s ease-out forwards',
        'spin-slow': 'spinSlow 20s linear infinite', // Adjust duration as needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
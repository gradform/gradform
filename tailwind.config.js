/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'neue-haas-grotesk': ['"Neue Haas Grotesk"', 'sans-serif'],
        'bricolage-24pt': ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        'grad-blue': '#2E90D4',
        'grad-light': '#F4F7FB',
        'bubble-in': '#E5E5EA', /* Light Gray - Incoming (user) - 100% Opaque */
        'bubble-out': '#34B7F1', /* Soft Blue - Outgoing (Gradform) - 100% Opaque */
      },
      backgroundImage: {
        'linear-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLogo: {
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        organicFloat1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(10px, -20px) rotate(-1deg) scale(1.01)' },
          '66%': { transform: 'translate(-15px, 25px) rotate(2deg) scale(1.005)' },
        },
        organicFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(-12px, 18px) rotate(1.5deg) scale(1.008)' },
          '66%': { transform: 'translate(8px, -22px) rotate(-2deg) scale(1.012)' },
        },
        scrollFadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSubtle: {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: '1' },
          '33%': { transform: 'translate(1px, -1px) scale(1.001) rotate(0.1deg)', opacity: '1' },
          '66%': { transform: 'translate(-1px, 1px) scale(0.999) rotate(-0.1deg)', opacity: '1' },
          '100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
        fadeInLogo: 'fadeInLogo 1.5s ease-out forwards',
        fadeIn: 'fadeIn 2.4s ease-out both',
        'sway-left': 'organicFloat1 45s ease-in-out infinite',
        'sway-right': 'organicFloat2 48s ease-in-out infinite',
        'scroll-fade-in': 'scrollFadeIn 1s ease-out forwards',
        shine: 'shine 3s infinite linear',
        gradient: 'gradient 8s linear infinite',
        'bubble-float': 'floatSubtle 10s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [], // Minor change to trigger Tailwind CSS re-compilation
}

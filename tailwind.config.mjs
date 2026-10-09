/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cieloDia: '#87CEEB',
        cieloNoche: '#0B1021',
        tierraDia: '#8B4513',
        tierraNoche: '#2D1B11',
        sol: '#FCD34D',
        luna: '#E5E7EB',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'rays-rotate': 'raysRotate 45s linear infinite',
        'wind-sway': 'windSway 7s ease-in-out infinite',
        'wind-sway-slow': 'windSway 10s ease-in-out infinite',
        'pollen-drift': 'pollenDrift 10s linear infinite',
        'pollen-drift-slow': 'pollenDrift 15s linear infinite',
        'grid-drift': 'gridDrift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        raysRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        windSway: {
          '0%, 100%': { transform: 'skewX(-5deg) translateX(-50px)' },
          '50%': { transform: 'skewX(5deg) translateX(50px)' },
        },
        pollenDrift: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translate(200px, -150px)', opacity: '0' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary': 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'accent': 'var(--color-accent)',
        'border': 'var(--color-border)',
        'correct': '#22c55e',
        'incorrect': '#ef4444',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}
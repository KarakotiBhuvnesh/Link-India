import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E7490', // teal-700
          fg: '#FFFFFF',
        },
        accent: '#F59E0B', // amber-500
      },
      container: {
        center: true,
        padding: '1rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config

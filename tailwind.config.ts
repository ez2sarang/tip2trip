import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f4dba8',
          300: '#ecc26d',
          400: '#e3a43a',
          500: '#d8891f',
          600: '#bf6e15',
          700: '#9d5213',
          800: '#7e4117',
          900: '#683717',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

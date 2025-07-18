import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
    colors: {
    blue: '#1e3a8a',
    lightBlue: '#60a5fa',
    gray: {
      100: '#f3f4f6',
      900: '#1f2937',
    },  
  },
  },
  plugins: [],
}
export default config
}

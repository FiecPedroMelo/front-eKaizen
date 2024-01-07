import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'EBDFD6': '#EBDFD6',
        '8F0000': '#8F0000',
        'FF6E41': '#FF6E41',
      },
      borderColor: {
        'EBDFD6': '#EBDFD6',
        '8F0000': '#8F0000',
        'FF6E41': '#FF6E41',

      },
      textColor: {
        'EBDFD6': '#EBDFD6',
        '8F0000': '#8F0000',
        'FF6E41':'#FF6E41',

      },
      fontFamily: {
        body: ['Quicksand', 'sans-serif'],
        custom2: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
export default config

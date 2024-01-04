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
      },
      borderColor: {
        'EBDFD6': '#EBDFD6',
        '8F0000': '#8F0000',

      },
      textColor: {
        'EBDFD6': '#EBDFD6',
        '8F0000': '#8F0000',

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

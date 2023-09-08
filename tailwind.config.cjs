/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/image/building.webp')",
      },
      colors: {
        lime: '#F2EC7E',
        'custom-black': '#24282C',
        'custom-white': '#fbfbf8',
        'custom-white-2': '#EAE9E2',
        'custom-green': '#D3F36A',
        'custom-blue': '#CDDFE3',
      },
      fontFamily: {
        neutral: 'Neutral Face',
        neutralBold: 'Neutral Face Bold',
      },
    },
  },
  plugins: [],
};

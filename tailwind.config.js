/** @type {import('tailwindcss').Config} */

const gridColumns = {}
for (let i = 1; i <= 24; i++) {
  gridColumns[i] = `span ${i} / span ${i}`
}

export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 24 column grid
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumns: gridColumns,
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
  ],
}

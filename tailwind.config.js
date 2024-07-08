// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  // content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E90FF',
      },
    },
  },
  variants: {},
  plugins: [],
};

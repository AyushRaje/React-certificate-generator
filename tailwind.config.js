module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JavaScript/JSX/TypeScript files in the src folder
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    }, // Extend default theme if needed
  },
  plugins: [],
};

module.exports = {
  mode:"jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  content: [],
  theme: {
    extend: {
      animation: {
        linner:"0.5s wiggle"
      },
      keyframes: {
        wiggle: {
          '0%': { opacity:"0" },
          '100%': { opacity:"1" },
        }
      }
    },
  },
  plugins: [],
}

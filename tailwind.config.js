// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["font-dotgothic"], // ← キーに合わせる
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ['DotGothic16', 'sans-serif'], // ← クラス名は font-**dotgothic**
      },
    },
  },
  plugins: [],
};
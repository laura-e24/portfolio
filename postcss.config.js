module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-purgecss": {
      content: ["src/**/*.html,.jsx"],
      css: ["src/**/*.css"]
    }
  },
}

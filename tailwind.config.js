module.exports = require("design_system/tailwind.config.js");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'hmodal': 'calc(100% - 56px)',
        'md-h-variable': '600px',
      },
      width: {
        'md-w-variable': '500px'
      }
    },
  },
  plugins: [],
}


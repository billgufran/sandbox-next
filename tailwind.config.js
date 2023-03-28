/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@brikl/design-storefront/(src|dist)/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@brikl/design-storefront/preset")],
};

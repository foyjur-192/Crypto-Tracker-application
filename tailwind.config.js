/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      DoctorTheme: {
        primary: "#282B4C",
        secondary: "#262626",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}

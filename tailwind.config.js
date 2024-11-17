/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your template files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ]
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your template files
  ],
  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 6s linear infinite',
    },
  },
  },
  plugins: [
    require('daisyui'),
  ]
}


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Path to your template files
//   ],
//   theme: {
//     extend: {
//       animation: {
//       'spin-slow': 'spin 6s linear infinite',
//     },
//   },
//   },
//   plugins: [
//     require('daisyui'),
//   ]
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your template files
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        // You can customize colors for dark mode if needed
        darkBackground: '#1a1a1a', // Example for dark mode background color
        lightBackground: '#f5f5f5', // Example for light mode background color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

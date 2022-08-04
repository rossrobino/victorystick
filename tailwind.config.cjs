/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'zilla': ["'Zilla Slab'", 'serif'],
      },
    },
    backgroundImage: {
      'top': "url('$lib/images/topography.webp')",
      'golf': "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('$lib/images/bandonLandscape.webp')",
    },
  },
  plugins: []
};
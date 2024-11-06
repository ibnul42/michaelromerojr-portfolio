/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stripes': 'linear-gradient(45deg, #d8eefe 25%, transparent 25%, transparent 50%, #d8eefe 50%, #d8eefe 75%, transparent 75%, transparent)',
      },
    },
  },
  plugins: [],
}
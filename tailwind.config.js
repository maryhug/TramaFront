/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                playfair: ['"Playfair Display"', 'serif']
            },
        },
    },
    plugins: [],
}

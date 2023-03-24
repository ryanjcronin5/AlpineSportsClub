/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        backgroundSize: {
            full: 'full',
        },
        fontFamily: {
            'averia-sans-libre': ['Averia Sans Libre', 'san-serif']
        },
        extend: {
            backgroundImage: {
                'header-image': "url('./img/image1.png')",
            }
        },
    },
    plugins: [],
}
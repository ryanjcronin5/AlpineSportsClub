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
        screens: {
            'mobileS': '320px',
            'mobileM': '375px',
            'mobileL': '425px',
            'tablet': '640px',
            'laptop': '1024',
            'desktop': '1280px',
        },
    },
    plugins: [],
}
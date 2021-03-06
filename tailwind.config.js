import colors from 'tailwindcss/colors';

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.lightBlue
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

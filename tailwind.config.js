/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.vue',
        './src/components/*.vue',
        './src/components/**/*.vue',
        './src/components/**/**/*.vue',
        './src/pages/*.vue',
        './src/pages/**/*.vue',
        './src/pages/**/**/*.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
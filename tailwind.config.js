/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#343a40',
                lightGray: '#495057',
                darkGray: '#1f2326',
                light: '#e9ecef',
                textDark: '#212529',
                textLight: '#f8f9fa',
                border: '#525866',
                editor: '#dee2e6',
                greenest: '#2d9d78',
                lightGreen: '#33b58a',
                darkGreen: '#258062',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};

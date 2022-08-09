/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bgNav: '#2f3542',
                bgBody: '#dfe6e9',
                bgFormBtnSubmit: '#2ed573',
                bgFormBtnClear: '#ff4757'
            }
        }
    },
    plugins: []
};

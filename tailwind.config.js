/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './*.html',
        './flexbox/**/*.{html,js}',
        './grid/**/*.{html,js}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f7e6',
                    100: '#ccefcc',
                    200: '#99df99',
                    300: '#66cf66',
                    400: '#33bf33',
                    500: '#028f00',
                    600: '#027200',
                    700: '#015500',
                    800: '#013800',
                    900: '#001b00',
                    950: '#000e00',
                },
            },
            fontFamily: {
                sans: [
                    'JetBrains Mono',
                    'Fira Code',
                    'SF Mono',
                    'Consolas',
                    'monospace',
                ],
                display: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};

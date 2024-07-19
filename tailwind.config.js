/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true
        },
        extend: {
            aspectRatio: {
                '3/4': '3/4',
                '4/3': '4/3',
                '5/3': '5/3'
            }
        }
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                coffee: {
                    ...require('daisyui/src/colors/themes')['[data-theme=coffee]'],
                    primary: '#f2b705',
                    secondary: '#5D4B15',
                    accent: '#4ade80',
                    neutral: '#373737',
                    'base-100': '#1c1c1c',
                    'base-200': '#2c2c2c',
                    'base-300': '#5a5a5a',
                    info: '#2563eb',
                    success: '#3ec200',
                    warning: '#FFD25F',
                    error: '#fd364d',
                    '--bc': '36.667 8.3333% 100%'
                }
            }
        ]
    }
};

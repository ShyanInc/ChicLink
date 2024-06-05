import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            purple: '#EAB4F7',
            yellow: '#F2F99C',
            black: '#030303',
            white: '#F1F1F1',
        },
        extend: {
            backgroundImage: {
                bg_image: "url('../public/images/bg.png')",
            },
        },
        fontFamily: {
            sans: ['Mont', 'sans-serif'],
        },
    },
    plugins: [],
}
export default config

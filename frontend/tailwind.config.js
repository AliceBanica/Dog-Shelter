/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        backgroundImage: (theme) => ({
            "home-img": "url('./src/assets/home-page.jpg')",
            "contact-img": "url('./src/assets/contact.jpg')",
            "about-img": "url('./src/assets/about.jpg')",
        }),
        extend: {
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                moveIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
        variants: {
            animation: ["motion-safe"],
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
    },
    plugins: [],
};

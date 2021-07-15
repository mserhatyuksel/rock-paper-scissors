// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: {
            "6": "1.5rem",
            "24": "6rem",
            "36": "9rem",
            "1/2": "50%",
            "3/4": "75%",
            full: "100%",
        },
        minHeight: {
            "6": "1.5rem",
            "24": "6rem",
            "36": "9rem",
            "1/2": "50%",
            "3/4": "75%",
            full: "100%",
        },
        // margin: {
        //     // "18": "72px",
        // },
        extend: {
            colors: {
                bg: {
                    primary: "hsl(214, 47%, 23%)",
                    secondary: "hsl(237, 49%, 15%)",
                    dark: "hsl(223, 46%, 17%)"
                },
                textColor: {
                    dark: "hsl(229, 25%, 31%)",
                    score: "hsl(229, 64%, 46%)",
                },
                header: "hsl(217, 16%, 45%)",
            },
            spacing: {
                '18': '4.5rem',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

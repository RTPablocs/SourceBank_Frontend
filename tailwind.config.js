const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    important: true,
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US"
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: {'max': '639px'},
            ...defaultTheme.screens
        },
        extend: {
            backgroundImage: (theme) => ({
            }),
            spacing: {
                '91': '91%'
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"]
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true
    },
};

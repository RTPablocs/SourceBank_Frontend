module.exports = {
    important: true,
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US"
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
            }),
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ["@svgr/webpack"],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },

    i18n:{
        locales:  [
            "en-US", // Inglês (Estados Unidos)
            "es-ES", // Espanhol (Espanha)
            "fr", // Francês
            "de", // Alemão
            "it", // Italiano
            "pt-BR", // Português (Brasil)
            "pt-PT", // Português (Portugal)
            "nl-NL", // Holandês (Países Baixos)
            "ru", // Russo
            "ja", // Japonês
            "zh-CN", // Chinês (Simplificado)
            "zh-TW", // Chinês (Tradicional)
            "ko", // Coreano
            "ar", // Árabe
            "hi", // Hindi
            "id", // Indonésio
            "tr", // Turco
            "th", // Tailandês
            "vi", // Vietnamita
            "sv", // Sueco
            "fi", // Finlandês
            "no", // Norueguês
            "da", // Dinamarquês
            "pl", // Polonês
            "cs", // Tcheco
            "hu", // Húngaro
            "ro", // Romeno
            "el", // Grego
            "bg", // Búlgaro
            "sk", // Eslovaco
            "sl", // Esloveno
            "uk", // Ucraniano
            "hr", // Croata
            "et", // Estoniano
            "lv", // Letão
            "lt", // Lituano
            "ms", // Malaio
            "fil", // Filipino
            "sw", // Swahili
            "af", // Africâner
            "sq", // Albanês
            "am", // Amárico
            "hy", // Armênio
            "az", // Azerbaijano
            "eu", // Basco
            "be", // Bielorrusso
            "bn", // Bengali
            "bs", // Bósnio
            "ceb", // Cebuano
            "co" // Córsico
          ],
          defaultLocale: 'pt-BR',
          localeDetection: false
    }
};

export default nextConfig;

const path = require('path');
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'), // Alias pour `src`
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV), // Définit l'environnement
                },
                '__VUE_OPTIONS_API__': JSON.stringify(true), // Active l'API Options
                '__VUE_PROD_DEVTOOLS__': JSON.stringify(false), // Désactive les devtools en prod
                '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false), // Désactive les détails en prod
            }),
        ],
    },
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'), // Définit `@` pour pointer vers le dossier `src`
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    VUE_APP_API_URL: JSON.stringify(process.env.VUE_APP_API_URL),
                    VUE_APP_MODE: JSON.stringify(process.env.VUE_APP_MODE),
                },
            }),
        ],
    },
};

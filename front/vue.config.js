const path = require('path');
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Alias pour simplifier les imports
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
  devServer: {
    port: 8080, // Port utilisé pendant le développement
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL || 'http://localhost:5000', // Redirige les appels API vers le backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  outputDir: 'dist', // Répertoire de build
  css: {
    extract: true,  // Extraction des fichiers CSS en production
    sourceMap: process.env.NODE_ENV !== 'production',  // Source maps en dev uniquement
    loaderOptions: {
      css: {
        // Désactive la minification en production
        minimize: false,
      },
    },
  },
};



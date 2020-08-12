const path = require('path'); 
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/style/_variables.scss";
                    @import "@/style/_font.scss";
                    @import "@/style/_global.scss";
                    @import "@/style/_animations.scss";
                `
            }
        }
    },
    configureWebpack: {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: [ '/', '/qui-sommes-nous', '/nos-partenaires', '/notre-objectif' ],
          })
        ]
    }
};
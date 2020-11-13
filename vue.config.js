const path = require('path'); 
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const routerPaths = require('./src/router.paths').default.map(r => r.path).filter(p => !p.match(/\*/));


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
            routes: [ '/', '/qui-sommes-nous', '/nos-partenaires', '/notre-programme' ],
          }),
          new SitemapPlugin('https://www.battledrive.fr', routerPaths, {
            fileName: 'sitemap.xml',
            lastMod: true,
            changeFreq: 'monthly'
          })
        ]
    }
};
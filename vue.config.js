module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/style/_variables.scss";
                    @import "@/style/_font.scss";
                    @import "@/style/_global.scss";
                `
            }
        }
    }
};
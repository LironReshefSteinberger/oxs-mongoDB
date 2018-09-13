module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/assets/scss/_vars.scss";@import "@/assets/scss/_functions.scss";`
        }
      }
    },
    lintOnSave: false
   }
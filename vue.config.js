const { defineConfig } = require('@vue/cli-service')
const px2rem = require('postcss-px2rem')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          processors: [
            px2rem({remUnit: 10}) // 基准大小 baseSize，需要和rem.js中相同
          ]
        },
      }
    }
  }
})

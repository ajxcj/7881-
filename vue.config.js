const { defineConfig } = require('@vue/cli-service')
const px2rem = require('postcss-px2rem')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
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
  },
  devServer:{
    proxy:{
      '/home':{
          target:'https://gw.7881.com',
          pathRewrite:{ //重写路径，剔除多余的代理路径
            '^/home':''
          }  
      }
    }
  }
})

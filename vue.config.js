'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')
const isProduction = process.env.NODE_ENV === 'production' // 是否为生产环境
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const theme = 'default'
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const name = defaultSettings.title || 'zhyl'
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/theme/${theme}.scss";`
      }
    },
    requireModuleExtension: true,
    extract: true,

    // extract: true, //默认状态生产环境是true,开发环境是false
    sourceMap: false
    // loaderOptions: {}
    // modules:false, //废弃
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        'imgs': resolve('src/assets/img'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'api': resolve('src/api'),
        'mixin': resolve('src/mixin')
      }
    }
  },
  chainWebpack: config => {
    if (isProduction) {
      config.optimization.minimize(true)
    }
  }
}

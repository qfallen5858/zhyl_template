'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')
function resolve(dir) {
  return path.join(__dirname, dir)
}

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
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}

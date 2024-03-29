const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const config = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@gif', resolve('src/assets/gif')).set('@img', resolve('src/assets/images'))

    config.plugin('html').tap((args) => {
      args[0].title = '索亚 soyastudio'
      return args
    })
  },
  css: {
    loaderOptions: {
      less: {
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  }
}

module.exports = config

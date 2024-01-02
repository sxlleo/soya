const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const config = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@gif', resolve('src/assets/gif')).set('@img', resolve('src/assets/images'))

    config.plugin('html').tap((args) => {
      args[0].title = 'SOYA STUDIO'
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

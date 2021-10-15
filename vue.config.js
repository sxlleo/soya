const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@packages", resolve("packages"));
  },
  css: {
    loaderOptions: {
      less: {
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
}

module.exports = config;
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@packages", resolve("packages"));
  }
}

module.exports = config;
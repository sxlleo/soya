const isProd = process.env.NODE_ENV == "production";//production
const plugins = [];
if(isProd) {
  plugins.push(["transform-remove-console", { exclude: ["error", "warn"] }]);
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}

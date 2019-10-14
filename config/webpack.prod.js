/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [new UglifyJSPlugin()]
});

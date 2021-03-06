/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 00:03:55
 * @LastEditTime: 2019-09-04 19:54:04
 * @LastEditors: Please set LastEditors
 */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ManifestPlugin = require("./src/manifestPlugin");
debugger;
module.exports = {
  mode: "development",
  // devtool: "source-maps",
  entry: {
    app: "./src/index.js"
  },
  // optimization: {
  //   flagIncludedChunks: true,
  //   minimize: false,
  //   runtimeChunk: {
  //     name: "manifest"
  //   }
  // },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    // new ManifestPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       // you can specify a publicPath here
          //       // by default it use publicPath in webpackOptions.output
          //       publicPath: "../"
          //     }
          //   },
          "css-loader"
        ]
      }
    ]
  },
  stats: {
    assets: true,
    builtAt: true,
    colors: true
  }
};

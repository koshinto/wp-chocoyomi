/* eslint-disable no-undef */
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: env,
  plugins: [new MiniCssExtractPlugin({
    filename: "style.css"
  })],
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/public/`,
    filename: "bundle.js",
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 800,
    poll: 1000,
  },
  devServer: {
    port: 8888,
    static: __dirname,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env" ]
          }
        }
      },
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${__dirname}/public/`
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}
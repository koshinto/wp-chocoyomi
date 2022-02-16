const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin({
    filename: "style.css"
  })],
  entry: `${__dirname}/src/main.js`,
  output: {
    path: __dirname,
    filename: "bundle.js",
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
}
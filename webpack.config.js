const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: false,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3080, //default 8080
    open: true,
    hot: false,
    historyApiFallback: true,
  },
};

const path = require("path");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: isDev
    ? [
        "webpack-hot-middleware/client?reload=true&timeout=1000",
        "./src/views/index.js",
      ]
    : "./src/views/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/", // required for middleware
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: isDev ? "inline-source-map" : false,

  plugins: isDev ? [new webpack.HotModuleReplacementPlugin()] : [],
};

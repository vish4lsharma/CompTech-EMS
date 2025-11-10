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
      // ✅ Babel loader for React and JS
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

      // ✅ CSS loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // ✅ Image loader (PNG, JPG, SVG, etc.)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: isDev ? "inline-source-map" : false,

  plugins: isDev ? [new webpack.HotModuleReplacementPlugin()] : [],
};
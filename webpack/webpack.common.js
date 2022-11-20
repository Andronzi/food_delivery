const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  src: path.resolve(__dirname, "..", "src"),
  dist: path.resolve(__dirname, "..", "dist"),
};

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    sourceMap: true,
  },
};

const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    sourceMap: true,
  },
};

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",

  resolve: {
    alias: {
      "@components": `${paths.src}/components`,
      "@images": `${paths.src}/resources/images`,
      "@resources": `${path.src}/resources`,
      "@icons": `${paths.src}/resources/icons`,
      "@redux": `${paths.src}/redux`,
      "@src": paths.src,
      "@api": `${paths.src}/api`,
    },
    extensions: [
      ".wasm",
      ".ts",
      ".tsx",
      "jsx",
      ".mjs",
      ".cjs",
      ".js",
      ".json",
      ".jpg",
      ".png",
      ".jpeg",
      ".ico",
      ".scss",
      ".css",
    ],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", cssLoader, postCSSLoader],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", cssLoader, "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: "file-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        use: "file-loader",
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },

  output: {
    path: paths.dist,
    filename: "./bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.dist}/index.html`,
    }),
  ],

  stats: "errors-only",
};

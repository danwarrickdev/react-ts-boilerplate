const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "index.bundle.js",
      publicPath: "/",
      clean: true,
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "eval-source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@emotion/react/jsx-runtime": path.resolve(
          __dirname,
          "node_modules/@emotion/react/jsx-runtime"
        ),
        "@emotion/react": path.resolve(
          __dirname,
          "node_modules/@emotion/react"
        ),
        "@emotion/styled": path.resolve(
          __dirname,
          "node_modules/@emotion/styled"
        ),
      },
    },
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "src"),
        },
        {
          directory: path.join(__dirname, "public"),
          publicPath: "/",
        },
      ],
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/[name].[hash][ext]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(argv.mode || "development"),
      }),
    ],
    optimization: isProduction
      ? {
          splitChunks: {
            chunks: "all",
          },
          runtimeChunk: "single",
        }
      : {},
  };
};

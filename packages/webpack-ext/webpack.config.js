var webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  mode: "production",
  entry: {
    ui: "./src/main.js",
    options: "./src/options/main.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          reactivityTransform: true,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: /==\/?UserScript==|^[ ]?@|eslint-disable|spell-checker/i,
          },
        },
        extractComments: false,
      }),
    ],
  },
  watchOptions: {
    poll: 1000, //监测修改的时间(ms)
    aggregateTimeout: 500, //防止重复按键，500毫米内算按键一次
    ignored: /node_modules/, //不监测
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/vendor", to: "" }],
    }),
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
};

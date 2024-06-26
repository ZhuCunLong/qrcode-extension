const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

// project root path
const appDirectory = fs.realpathSync(process.cwd());

const appConfig = require("./app.config");

const buildApp = appConfig.filter((item) => item.build);

const entry = buildApp.reduce((res, item) => {
  res[item.name] = path.resolve(appDirectory, item.entry);
  return res;
}, {});

const allHtmlWebpackPlugins = buildApp.map(
  (item) =>
    new HtmlWebpackPlugin({
      filename: `${item.name}.html`,
      template: item.page,
      chunks: [item.name],
      cache: true,
    })
);

module.exports = {
  resolve: {
    extensions: [".vue", ".ts", ".js", ".less"],
    plugins: [
      new TsConfigPathsPlugin({
        extensions: [".vue", ".ts", ".js", ".less"],
      }),
    ],
  },
  entry,
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(appDirectory, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    ...allHtmlWebpackPlugins,
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/*.json", to: "[name][ext]" },
        { from: "public/*.png", to: "img/[name][ext]" },
        { from: "public/manifest.json", to: "[name][ext]" },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    require("unplugin-auto-import/webpack").default({
      resolvers: [ElementPlusResolver()],
    }),
    require("unplugin-vue-components/webpack").default({
      resolvers: [ElementPlusResolver()],
    }),
    new CleanWebpackPlugin(),
  ],
  stats: "minimal", // 或者 'errors-warnings' 显示错误和警告
};

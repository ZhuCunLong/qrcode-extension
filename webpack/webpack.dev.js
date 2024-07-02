const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

// project root path
const appDirectory = fs.realpathSync(process.cwd())

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(false), // 或false，取决于你的应用是否使用options API
      __VUE_PROD_DEVTOOLS__: JSON.stringify(true), // 如果你不希望在生产环境中有devtools
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // 根据你的需求设置
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(appDirectory, 'dist'),
    },
    compress: true,
    hot: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watchFiles: {
      paths: [
        path.resolve(appDirectory, 'src/**/*'),
        path.resolve(appDirectory, 'public/**/*'),
      ],
    },
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      logging: 'warn',
      overlay: false,
    },
  },
})

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
    // 关闭热重载，因为修改静态文件后会导致整个页面重载，影响hmr，可能是因为开发时会把dist目录作为静态资源服务器，导致热重载时会触发整个页面的刷新
    liveReload: false,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // watchFiles: {
    //   paths: [
    //     path.resolve(appDirectory, 'src/**/*'),
    //     path.resolve(appDirectory, 'public/**/*'),
    //   ],
    // },
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: false,
    },
  },
})

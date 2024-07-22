const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 0,
          priority: 1,
        },
      },
    },
  },
})

'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const srcPath = path.resolve(__dirname, '../src')

const packageWebpackConfig = merge(baseWebpackConfig, {
  entry: './src/package.js',
  output: {
    path: config.build.assetsRoot,
    filename: 'vueaflet.js',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()]
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     filename: 'vendor.js',
  //     minChunks (module) {
  //       // any required modules inside node_modules are extracted to vendor
  //       return (
  //         module.resource &&
  //         /\.js$/.test(module.resource) &&
  //         module.resource.indexOf(
  //           path.join(__dirname, '../node_modules')
  //         ) === 0
  //       )
  //     }
  //   })
  // ]
})

module.exports = packageWebpackConfig

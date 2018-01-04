'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

const packageWebpackConfig = merge(baseWebpackConfig, {
  entry: './src/package.js',
  output: {
    path: config.build.assetsRoot,
    filename: 'vueaflet.js',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()]
})

module.exports = packageWebpackConfig

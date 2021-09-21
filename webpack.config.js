const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env) => {
  const ENV_VARIABLES = {
    'process.env.WIDTH': env.WIDTH,
    'process.env.HEIGHT': env.HEIGHT,
    'process.env.LANGUAGE': JSON.stringify(env.LANGUAGE),
  }

  console.log(env)

  const destFolder = path.resolve(__dirname, `dist/${env.LANGUAGE}/${env.WIDTH}x${env.HEIGHT}`)

  return {
    watch: env.watch,
    entry: './src/js/main.js',
    output: {
      filename: 'main.js',
      path: destFolder
    },
    optimization: {
      minimize: env.production,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false,
            keep_classnames: true,
            keep_fnames: true
          }
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
      }),
      new webpack.DefinePlugin(ENV_VARIABLES),
      new HtmlWebpackPlugin({
        title: 'Finnair',
        template: 'src/index.html',
        width: env.WIDTH,
        height: env.HEIGHT
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {loader: 'css-loader'},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g)(\?[\s\S]+)?$/,
          loader: 'file-loader',
        }
      ]
    }
  }
}

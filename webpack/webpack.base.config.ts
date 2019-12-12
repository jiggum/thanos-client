/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = (() => {
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const AutoprefixerPlugin = require('autoprefixer')

  return {
    entry: path.join(__dirname, '..', 'src', 'index.tsx'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: '/node_modules/',
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [AutoprefixerPlugin()],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
      }),
    ],
  }
})()

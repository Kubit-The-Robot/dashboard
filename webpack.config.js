/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    open: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kubit-engine.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './src/config.js'),
      containers: path.resolve(__dirname, './src/containers'),
      dux: path.resolve(__dirname, './src/core/dux'),
      modules: path.resolve(__dirname, './src/modules'),
      overdux: path.resolve(__dirname, './src/core/overdux'),
      overreact: path.resolve(__dirname, './src/core/overreact'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'static/index.ejs',
    }),
  ],
};

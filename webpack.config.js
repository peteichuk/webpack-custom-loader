const {CheckerPlugin} = require('awesome-typescript-loader');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const replacementsPath = path.resolve(__dirname, 'configs/replacements.JSON');
const fs = require('fs');

module.exports = {
  mode: 'development',

  entry: './src/main.ts',

  resolve: {
    extensions: ['.ts', '.tsx']
  },

  // Source maps support ('inline-source-map' also works)
  // devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-transformer',
          options: {replacements: JSON.parse(fs.readFileSync(replacementsPath, 'utf8'))}
        },
      },
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin()
  ]
};

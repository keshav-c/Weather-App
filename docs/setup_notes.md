Initialize

npm init -y

In package.json

-- "main": "index.js",
++ "private": true,

Local linters

npm install --save-dev eslint@6.8.x eslint-config-airbnb-base@14.1.x eslint-plugin-import@2.20.x

npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator

In package.json

"scripts": {
  "lint": "eslint . && stylelint '**/*.{css,scss}'"
}

Install webpack

npm install webpack webpack-cli --save-dev

In package.json

"scripts": {
  "build": "webpack"
}

Development mode

Install dev server

npm install --save-dev webpack-dev-server

In package.json

"scripts": {
  "start": "webpack-dev-server --open"
}

Install plugins

npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin

Install loaders

npm install --save-dev style-loader css-loader
npm install sass-loader sass --save-dev
npm install --save-dev file-loader

The state of config file

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};

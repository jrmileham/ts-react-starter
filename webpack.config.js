require('dotenv').config();
const webpack = require('webpack');
const Dotenv  = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const pkg = require('./package.json');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV;
const APP_ROOT = process.cwd();
const sourcePath = `${APP_ROOT}/src`;
const outputPath = `${APP_ROOT}/${(/^dev+/i.test(ENV))? 'public/static' : 'build'}`;

console.log('-------------------');
console.log('***** WEBPACK *****');
console.log('Application:', pkg.name);
console.log('Application version:', pkg.version);
console.log('Node version:', process.version);
console.log('Target environment:', ENV);
console.log('HTTP Port:', PORT);
console.log('Working DIR', APP_ROOT);
console.log('Source Path:', sourcePath);
console.log('Output Path:', outputPath);
if(/^dev/i.test(ENV)) console.log('URL:', `http://localhost:${PORT}`);
console.log('-------------------');

const config = {
  mode: (!(/^(prod[u]?).*/i.test(ENV)))? "development" : "production",
  devtool: (ENV !== "production")? "inline-source-map" : false,
  context: sourcePath,
  entry: [`./entry.tsx`, `${APP_ROOT}/public/styles/main.scss`],
  output: {
    filename: "js/app.bundle.js",
    path: outputPath,
    publicPath: ""
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.ts', '.tsx'],
    modules: [`${APP_ROOT}/node_modules`, sourcePath]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {loader: 'ts-loader'}
      }
    ]
  },
  plugins: [
    new Dotenv({
      safe: true
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/main.css'
    })
  ]
 };

 // Add any extra dev or non components
if(/^dev+/i.test(ENV)){
  config.devServer = {
    contentBase: outputPath,
    compress: true,
    port: PORT,
    host: '0.0.0.0',
    hot: true,
    
    proxy: {}
  };
} else {
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: `${APP_ROOT}/public/static`, to: outputPath}
      ]
    })
  );
}

module.exports = config;
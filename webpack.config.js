require('dotenv').config();
const fs = require('fs');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv  = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CopyPlugin = require("copy-webpack-plugin");

const pkg = require('./package.json');

const PORT = process.env.PORT ?? 8080;
const ENV = process.env.NODE_ENV;
const APP_ROOT = process.cwd();
const APP_NAME = process.env.APP_NAME ?? pkg.name;
const APP_NAME_LONG = process.env.APP_NAME_LONG ?? APP_NAME;
const HOST = '0.0.0.0';
const sourcePath = `${APP_ROOT}/src`;
const outputPath = `${APP_ROOT}/${(/^dev+/i.test(ENV))? 'public' : 'build'}`;
const tsConfigFile = `tsconfig${(/^dev+/i.test(ENV))? '.dev': '' }.json`;

console.log('-------------------');
console.log('***** WEBPACK *****');
console.log('Application:', APP_NAME);
console.log('Application version:', pkg.version);
console.log('Node version:', process.version);
console.log('Target environment:', ENV);
console.log('HTTP Port:', PORT);
console.log('Working DIR', APP_ROOT);
console.log('Source Path:', sourcePath);
console.log('Output Path:', outputPath);
if(/^dev/i.test(ENV)) console.log('URL:', `http://${HOST}:${PORT}`);
console.log('-------------------');

const config = {
  mode: (!(/^(prod[u]?).*/i.test(ENV)))? "development" : "production",
  devtool: (ENV !== "production")? "inline-source-map" : false,
  context: sourcePath,
  entry: [`./entry.tsx`, `${APP_ROOT}/public/styles/main.scss`],
  optimization: {
    minimize: (ENV === "production")? true : false,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false
        }
      },
      extractComments: false,
    })]
  },
  output: {
    filename: "js/app.bundle.js",
    path: outputPath,
    publicPath: ""
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({configFile: tsConfigFile})],
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
        use: {loader: 'ts-loader', options: {configFile: tsConfigFile}}
      }
    ]
  },
  plugins: [
    new Dotenv({
      safe: true
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/main.css'
    }),
    new HtmlWebpackPlugin({
      template: `${APP_ROOT}/public/index.html`,
      templateParameters: {APP_NAME, APP_NAME_LONG, DESCRIPTION: pkg.description},
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      ios: true,
      short_name: APP_NAME,
      name: APP_NAME_LONG,
      icons: [
        {
          src: "public/logo192.png",
          size: "192x192"
        },
        {
          src: "public/logo512.png",
          size: "512x512"
        }
      ],
      start_url: ".",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff"
    })
  ]
 };

 // Add any extra dev or non components
if(/^dev+/i.test(ENV)){
  config.devServer = {
    contentBase: outputPath,
    compress: true,
    port: PORT,
    host: HOST,
    hot: true
  };
} else {
  if(fs.existsSync(`${APP_ROOT}/build`)) fs.rmSync(`${APP_ROOT}/build`, {recursive: true});
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: `${APP_ROOT}/public/favicon.ico`, to: outputPath},
        { from: `${APP_ROOT}/public/robots.txt`, to: outputPath}
      ]
    })
  );
}

module.exports = config;
const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ngcWebpack = require('ngc-webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
/*
 * Webpack Constants
 */
const AOT = helpers.hasNpmFlag('aot');
const METADATA = {
  title: 'Ontimize web dynamic form webpack',
  baseUrl: '/',
  isDevServer: false
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {

    entry: {
      'ontimize-web-ngx-dynamicform-builder': helpers.root('index.ts')
    },

    resolve: {
      extensions: ['.ts', '.js', '.html']
    },

    // rest of config here
    externals: [
      {
        'ontimize-web-ngx': {
          root: ['ontimize-web-ngx'],
          commonjs: 'ontimize-web-ngx',
          commonjs2: 'ontimize-web-ngx',
          amd: 'ontimize-web-ngx'
        }
      },
      /^\@angular\//,
      /^\@ngx-translate\//,
      /^\@rxjs\//
    ],

    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader?configFileName=tsconfig-webpack.json', 'angular2-template-loader'],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        /* Embed files. */
        {
          test: /\.(html|css)$/,
          loader: 'raw-loader',
          exclude: /\.async\.(html|css)$/
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          // include: ['styles.scss']
        },
        {
          test: /\.(ts|js)$/,
          loader: 'source-map-loader',
          exclude: [
            // these packages have problems with their sourcemaps
            helpers.root('node_modules/rxjs'),
            helpers.root('node_modules/@angular')
          ]
        }
        // , {
        //   test: /\.json$/,
        //   use: 'json-loader'
        // }, {
        //   test: /\.css$/,
        //   use: ['to-string-loader', 'css-loader'],
        //   include: [helpers.root('src')]
        // }, {
        //   test: /\.(jpg|png|gif)$/,
        //   use: 'file-loader'
        // }, {
        //   test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        //   use: 'file-loader'
        // }
      ]
    },
    plugins: [

      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./src')
      ),

      new ngcWebpack.NgcWebpackPlugin({
        disabled: false,
        //  disabled: !AOT,
        tsConfig: helpers.root('tsconfig.ngc.json'),
        resourceOverride: helpers.root('config/resource-override.js')
      })

    ]
  };
}

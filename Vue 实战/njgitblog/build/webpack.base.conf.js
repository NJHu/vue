'use strict'

// node自带的文件路径工具
const path = require('path')

// 工具函数集合
const utils = require('./utils')

// 配置文件
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 获取绝对路径, dir相对于本文件的路径, return绝对路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),

  // webpack入口文件
  entry: {
    app: './src/main.js'
  },

  // webpack输出路径和命名规则
  output: {
    // 编译输出的静态资源根路径（例如：/dist）
    path: config.build.assetsRoot,
    // 编译输出的文件名
    filename: '[name].js',
    // 编译输出的路径（例如'//cdn.xxx.com/app/'）
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 模块的解析规则
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 路径别名，方便引用模块，例如有了别名之后，
      // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
      'vue$': 'vue/dist/vue.esm.js',
      // @ 表示项目跟路径
      '@': resolve('src'),
    }
  },
  // 不同类型模块的处理规则
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        // 对所有.vue文件使用vue-loader进行编译
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        // 对src和test文件夹下的.js文件使用babel-loader将es6+的代码转成es5
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
      },
      {
        // 对图片资源文件使用url-loader
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的图片转成base64编码的dataURL字符串写到代码中 (为了app增量更新考虑不进行base64）
          limit: 10000,
          // 其他的图片转移到静态资源文件夹 （为了增量更新考虑文件名不进行MD5 hash）
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        // 对多媒体资源文件使用url-loader
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的资源转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          // 其他的资源转移到静态资源文件夹
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        // 对字体资源文件使用url-loader
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的资源转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          // 其他的资源转移到静态资源文件夹
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

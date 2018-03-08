// 项目的路径, ../..../fastcar
const path = require('path');

// uglifyjs-webpack-plugin(JS压缩插件，简称uglify)。
const uglify = require('uglifyjs-webpack-plugin');

// html-webpack-plugin用于将webpack编译打包后的文件注入到html模板中
// 即自动在index.html里面加上<link>和<script>标签引用webpack打包后的文件
// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CSS分离:extract-text-webpack-plugin
// cnpm install extract-text-webpack-plugin@next

const extractTextPlugin = require("extract-text-webpack-plugin");


// 利用extract-text-webpack-plugin插件很轻松的就把CSS文件分离了出来，但是CSS路径并不正确，很多小伙伴就在这里搞个几天还是没有头绪，网上也给出了很多的解决方案，我觉的最好的解决方案是使用publicPath解决，我也一直在用。
// publicPath：是在webpack.config.js文件的output选项中，主要作用就是处理静态文件路径的。
//
// 在处理前，我们在webpack.config.js 上方声明一个对象，叫website。
var website = {
    // publicPath：是在webpack.config.js文件的output选项中，主要作用就是处理静态文件路径的。
    publicPath: "./"
}

console.log( encodeURIComponent(process.env.type) );
// PurifyCSS
// 使用PurifyCSS可以大大减少CSS冗余，比如我们经常使用的BootStrap(140KB)就可以减少到只有35KB大小。这在实际开发当中是非常有用的。
//
// 安装PurifyCSS-webpack
// 从名字你就可以看出这是一个插件，而不是loader。所以这个需要安装还需要引入。 PurifyCSS-webpack要以来于purify-css这个包，所以这两个都需要安装。
1
// npm i -D purifycss-webpack purify-css
// 这里的-D代表的是–save-dev ,只是一个简写。
// 因为我们需要同步检查html模板，所以我们需要引入node的glob对象使用。在webpack.config.js文件头部引入glob。
const glob = require('glob');

// 引入purifycss-webpack
// 同样在webpack.config.js文件头部引入purifycss-webpack
const PurifyCSSPlugin = require("purifycss-webpack");

const webpack = require('webpack');

const entry = require("./entry_webpack.js");
module.exports = {
    // 入口文件的配置项
    entry: {
        //里面的entery是可以随便写的
        entry:'./src/entry.js',
        jquery:'jquery'
    },

    //出口文件的配置项
    output: {
        //输出的路径，用了Node语法
        //打包的路径配置, 添加...../fastcar/dist
        path: path.resolve(__dirname, 'dist'),
        //打包的文件名称
        //输出的文件名称
        filename: '[name].js',
        // 然后在output选项中引用这个对象的publicPath属性。
        publicPath: website.publicPath
    },

    //模块：例如解读CSS,图片如何转换，压缩
    // loader
    // loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
    module: {
        rules: [
            {
                // 使用不同的Loader，Webpack可以的脚本和工具，从而对不同的文件格式进行特定处理
                //     test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
                // use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
                // include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
                // query：为loaders提供额外的设置选项（可选）。
                // style-loader:它是用来处理css文件中的url()等，npm中的网址
                //npm install style-loader --save-dev
                //css-loader：它是用来将css插入到页面的style标签
                //npm install --save-dev css-loader
                test: /\.css$/,

                // 第一种写法：直接用use。
                // use: ['style-loader', 'css-loader']
                // 第二种写法：把use换成loader。
                // loader:['style-loader','css-loader']
                // 第三种写法：用use+loader的写法：
                // use: [
                //     {
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader"
                //     }
                // ]
                // 四包装代码：还要修改原来我们的style-loader和css-loader。
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        // 自动加前缀
                        'postcss-loader'
                    ]
                })
            },
            {
                // test:/\.(png|jpg|gif)/是匹配图片文件后缀名称。
                test: /\.(png|jpg|gif)/,
                // 是指定使用的loader和loader的配置参数。
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 是把小于500000B的文件打成Base64的格式，写入JS。
                        limit: 50000,
                        outputPath: 'images/',
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            {
                test: /\.less$/,
                // 我们之前讲了extract-text-webpack-plugin这个插件，想把Less文件分离出来的方法跟这个几乎一样，之前的我们在第09节中讲过，这里我们就只讲less的loader配置方法。（此处建议收看视频）
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
//             Babel是什么？
// Babel其实是一个编译JavaScript的平台，它的强大之处表现在可以通过便宜帮你达到以下目的：
//
// 使用下一代的javaScript代码(ES6,ES7….)，即使这些标准目前并未被当前的浏览器完全支持。
// 使用基于JavaScript进行了扩展的语言，比如React的JSX。
// Babel的安装与配置
// Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析ES6的babel-preset-es2015包和解析JSX的babel-preset-react包）。
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                    // options: {
                    //     presets: [
                    //         "es2015", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            }
        ]
    },

//插件，用于生产模版和各项功能
//     插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务
    plugins: [
        // (JS压缩插件，简称uglify)。
        new uglify(),
        new HtmlWebpackPlugin({
            // minify：是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
            minify: {
                removeAttributeQuotes: true
            },
            // 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS
            hash: true,
            // 是要打包的html模版路径和文件名称。
            template: './src/index.html'
        }),
        // 这里的/css/index.css是分离后的路径位置
        new extractTextPlugin("/css/index.css"),
        // 配置plugins
        // 引入完成后我们需要在webpack.config.js里配置plugins
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //name对应入口文件中的名字，我们起的是jQuery
            name:'jquery',
            //把文件打包到哪里，是一个路径
            filename:"assets/js/jquery.min.js",
            //最小打包的文件模块数，这里直接写2就好
            minChunks:2
        }),
    ],

    //配置webpack开发服务功能
    devServer:
        {
            //设置基本目录结构,:配置服务器基本运行路径，用于找到程序打包地址。
            contentBase: path.resolve(__dirname, 'dist'),
            //服务器的IP地址，可以使用IP也可以使用localhost,服务运行地址，建议使用本机IP，这里为了讲解方便，所以用localhost。
            host: 'localhost',
            //服务端压缩是否开启
            compress: true,
            //配置服务端口号
            port: 8282,
            // 打开浏览器
            open: true
        }
}
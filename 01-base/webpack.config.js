const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    /**
     * 1、index.html中的script:src的路径：path.join(publicPath, filename)
     * 2、生成的main.js文件路径： path.join(path, filename)
     */
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: '/assets/'
  },
  devServer: {
    /**
     * 静态文件根目录
     * 1、查找打包后的文件顺序：output.path > contentBase
     * 2、查找正常静态文件顺序: contentBase > output.path
     */
    contentBase: resolve(__dirname, 'static'),
    // 公开访问路径，自定义寻包路径，优先级高，默认为 output.publicPath
    // publicPath: '/assets/',
    // 写入硬盘？
    writeToDisk: true,
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 强制顺序
        options: { fix: true },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            // 高级JS语法转换为低级JS
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: { version: 3 },
              targets: {
                chrome: '60',
                firefox: '60',
                ie: '9',
                safari: '10',
                edge: '17',
              },
            }],
            // JSX语法转换为JS
            '@babel/preset-react',
          ],
          plugins: [
            // STAGE1的遗留模式
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-private-methods", { loose: true }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        /**
         * url-loader是file-loader的增强版，会有一个增强的功能limit
         */
        loader: 'url-loader',
        options: {
          name: '[hash:5].[ext]',
          /**
          * 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          *      解析时会出问题：[object Module]，
          * 解决：关闭url-loader的es6模块化，使用commonjs解析
          */
          esModule: false,
          limit: 128 * 1024,
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

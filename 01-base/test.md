### 引入图片的方式
+ 放在静态文件根目录，需要配置`devServer.contentBase`
+ 通过`require/import` + `new Image()` 引入
+ 在css通过`background-image`引入
+ 在html直接通过`img:src`相对路径引入

### file-loader
+ 1、拷贝图片
+ 2、把图片模块变成JS模块

### `babel-loader`还需要装`@babel/preset-env`以及`@babel/preset-react`
+ babel-loader使用Babel和webpack转译Javascript文件
+ @babel/@babel/core ：Babel编译核心包
+ @babel/@babel/preset-env：为每一个环境的预设
+ @babel/@babel/preset-react：React插件的Babel预设
+ @babel/plugin-proposal-decorators：把类和对象装饰器编译成ES5
+ @babel/plugin-proposal-class-properties：转换静态类属性以及使用属性初始值化语法声明的属性

### webpack.config.js里面路径的区别与联系
+ output.path：只当输出到硬盘上的目录
+ output.publicPath：打包文件被引用时资源的前缀（包括`/`），上线之后一般指向CDN，例如`http://somecnd.com/assets/`，静态文件目录在哪就指向哪
+ devServer.contentBase：一个额外的不需要经过处理的静态文件根目录
+ devServer.publicPath：打包生成的静态文件所在的位置（若是devServer里面的publicPath没有配置，则默认是output里面设置的publicPath的值）
+ 一般devServer.publicPath和output.publicPath保存一致，或者不写devServer.publicPath

### presets.@babel/preset-env.useBuiltIns
+ false: 不对polyfill做操作，如果引入@babel/polyfill，则无视配置的浏览器兼容性，日纳入所有的polyfill
+ entry: 根据配置引入浏览器不兼容的polyfill，需要在入口文件手动添加`import '@babel/polyfill`,会自动根据`browserslist`替换所有不兼容的polyfill。如果core-js为3，则`import '@babel/polyfill`需要改成`import 'core-js/stable'`;`import 'regenerator-runtime/runtime'`
+ usage: 自动引入
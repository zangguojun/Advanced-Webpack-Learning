module.exports = {
  root: true, // 根配置文件
  // extends: 'airbnb-base',
  parser: "babel-eslint", // 需要一个parser解析器给我们把源代码转成抽象语法树
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  // 指定脚本运行环境
  env: { browser: true },
  rules: {
    // 缩进风格
    indent: ["error", 2],
    quotes: "off",
    "no-console": "off",
  },
};

# 组件库模板

>一套企业级的 UI 设计语言和 Vue.js 实现。

[![Build Status](https://travis-ci.org/fe6/component-template.svg?branch=master)](https://travis-ci.org/fe6/component-template)
[![Codecov 单元测试覆盖率](https://img.shields.io/codecov/c/github/fe6/component-template/master.svg?style=flat)](https://codecov.io/gh/fe6/component-template/branch/master)

![GitHub language count](https://img.shields.io/github/languages/count/fe6/component-template.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fe6/component-template.svg)
[![Fork component-template](https://img.shields.io/github/forks/fe6/component-template.svg?style=flat&label=Fork)](https://github.com/fe6/component-template/fork) [![Star component-template](https://img.shields.io/github/stars/fe6/component-template.svg?style=flat&label=Star)](https://github.com/fe6/component-template/stargazers)
[![watchers in component-template](https://img.shields.io/github/watchers/fe6/component-template.svg?style=flat&label=Watch)](https://github.com/fe6/component-template/watchers)

[![Sauce Labs Test Status (for master branch)](https://badges.herokuapp.com/browsers?googlechrome=7&firefox=7&microsoftedge=10&iexplore=9&safari=10.10)](https://saucelabs.com/u/_wmhilton)


## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 Vue.js 组件。
- 全链路开发和设计工具体系。
- 按需加载系统。

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install

# development 环境的本地热加载服务，访问地址: localhost:8080
# 在 config 中修改端口号
npm start

# 利用 jest 单元测试
npm test

# 打包组件库
npm run build

# 打包官网
npm run build:site

# 打包官网，打包并查看捆绑分析器报表
npm run build --report

# JavaScript 的代码规范监测
npm run eslint

# style 的代码规范监测
npm run stylelint

# 进行 style 和 JavaScript 的规范检测
npm run lint-staged

# 上传单元测试覆盖率报告
npm run codecov
```

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。

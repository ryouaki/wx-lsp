# wx-lsp
让微信小程序开发更美好！

## 如何使用

1. 创建一个空目录
2. 进入共目录，执行npm init初始化项目
3. 执行 npm install wx-lsp-core 安装老色批相关依赖
4. 在package.json中的script中配置npm run wxlsp。此时会自动创建一个wxprogram的目录，并自动生成基础项目文件。
5. 使用微信开发工具导入生成的wxprogram目录
6. 根据用户在vscode中项目目录创建的lsp文件，自动生成对应的js，wxml，wxss，json文件，并同步到wxprogram目录指定文件夹下
7. 支持less转wxss？可以考虑。
8. 支持ts
9. 支持npm包
10. 原生js，wxss，wss，wxml，json不进行转码。直接同步

## 工程目录

```sh
|-- 项目根目录
    |-- wxprogram // 自动生成
        |-- components 
            |-- xxx // 组件名
                |-- index.js
                |-- index.wxss
                |-- index.wxml
                |-- index.json
        |-- behaviors
            |-- xxx
                |-- index.js
        |-- templates
            |-- xxx
                |-- index.wxml
                |-- index.wss
        |-- pages
            |-- xxx
                |-- index.js
                |-- index.wxss
                |-- index.wss
                |-- index.wxml
                |-- index.json
        |-- wxlsp // 核心库，自动生成，不能修改
    |-- components // 组件库
        |-- *.lsp
    |-- behaviors // mixin模块
        |-- *.lsp
    |-- templates // 末班库
        |-- *.lsp
    |-- pages // 业务模块单元
        |-- *.lsp
    |-- App.lsp // 入口文件，等同于小程序的app.js,app.json, app.wxss
    |-- sitemap.json // 同sitemap.json
    |-- package.json
    |-- package-lock.json // 锁版本文件
    |-- .gitignore // git黑名单
    |-- tsconfig.json
    |-- Readme.md // 项目说明文档
    |-- License // 协议
```

## ToDo

1. App基础类 OK
2. Page基础类 OK
3. Component基础类 OK
4. 沙盒隔离实现 OK
5. 自动生成代码工具
6. VSCODE语法高亮插件
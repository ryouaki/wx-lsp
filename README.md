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
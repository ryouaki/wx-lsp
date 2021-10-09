'use strict';
const fs = require('fs');
const fe = require('fs-extra');
const __root = process.cwd();

if (fe.existsSync(`${__root}/project.config.json`)) {
  throw new Error('Already has a wxlsp project here!')
}

// 初始化工程目录
fe.ensureDirSync(`${__root}/wxprogram`);
fe.ensureDirSync(`${__root}/components`);
fe.ensureDirSync(`${__root}/behaviors`);
fe.ensureDirSync(`${__root}/templates`);
fe.ensureDirSync(`${__root}/pages`);

// 初始化工程文件
fe.ensureFileSync(`${__root}/App.lsp`);
fe.ensureFileSync(`${__root}/sitemap.json`);
fe.ensureFileSync(`${__root}/project.config.json`);

// 初始化 小程序工程文件
const projectcfg = require('./project.config');
fs.writeFileSync(`${__root}/project.config.json`, projectcfg, {
  flag: 'w'
})

// 初始化 小程序sitemap文件
const sitemap = require('./sitemap');
fs.writeFileSync(`${__root}/sitemap.json`, sitemap, {
  flag: 'w'
})


// 初始化样板代码

// 初始化工程配置

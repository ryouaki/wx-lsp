'use strict';
const fs = require('fs');
const fe = require('fs-extra');
const __root = process.cwd();

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

// 初始化 小程序工程目录


// 初始化缓存目录

// 初始化工程配置

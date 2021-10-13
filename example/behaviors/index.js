/**
 * 该文件又工具自动生成。
 * 由项目根目录/behaviors/xxx.lsp的<js>标签内容生成。自动导入wxprogram/behaviors/【目录】/xxx/index.js文件
 * 并自动通过这个文件实现注册入全局对象behaviors中。
 * 文件名不是index的。使用导出类名作为末尾路径名。
 */
// app.js
import {
  AddBehavior
} from './../wxlsp/core/behavior'

const behaviors = {}

/** 自动注入 Start */
let c = require('./wxlsp');
behaviors['wxlsp'] = AddBehavior(new c());
c = require('./test/today');
behaviors['test/today'] = AddBehavior(new c());
/** 自动注入 End*/

module.exports = function (path) {
  return behaviors[path]
}

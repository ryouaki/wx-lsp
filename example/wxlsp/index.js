/**
 * 引导脚本，必须第一个被初始化
 */
require('./core/context') // 初始化上下文
import {
  StartApp,
  LspApp
} from './core/application'

module.exports = {
  ctx: new Proxy({}, {
    get: function () {
      throw new Error(`Please use this.wx instead of wx directly!`)
    },
    set: function () {
      throw new Error(`Please use this.wx instead of wx directly!`)
    }
  }),
  App() {
    throw new Error('App is disabled, Please Use class LspApp instead.')
  },
  Page() {
    throw new Error('Page is disabled, Please Use class LspPage instead.')
  },
  LspApp: LspApp,
  StartApp: StartApp,
  AddPage(name, page) {
    Page(page)
  },
  AddComponent(name, comp) {
    Component(comp)
  }
}
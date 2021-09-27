/**
 * 引导脚本，必须第一个被初始化
 */
require('./core/context') // 初始化上下文
import {
  StartApp,
  LspApp
} from './core/application'

import {
  AddPage,
  LspPage
} from './core/page'

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
    throw new Error('App() is disabled, Please Use class LspApp instead.')
  },
  Page() {
    throw new Error('Page() is disabled, Please Use class LspPage instead.')
  },
  Component() {
    throw new Error('Component() is disabled, Please Use class LspComponent instead.')
  },
  LspApp,
  StartApp,
  LspPage,
  AddPage,
  AddComponent(name, comp) {
    Component(comp)
  }
}

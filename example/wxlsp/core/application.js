/**
 * LspApp 小程序应用类，代替App()方法使用。
 * 该类针对App的所有生命周期进行了劫持。并回调日志接口，上报日志。
 * 主要记录：
 * - 启动时间
 * - 生成唯一ID标记当次打开
 * - onError错误
 * - unCatchHandle错误
 * - 页面未找到
 * - 内存报警 wx.onMemoryWarning(function callback)
 * - 爆栈
 */
import { log, event } from './log'
import ctx from './context'

// 声明周期白名单，需要劫持的接口。
const lifeAPIs = ['onLaunch', 'onShow', 'onHide']
const reportIpis = ['onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange']

// Application基类
class LspApp {
  constructor() {
    this.wx = ctx
  }
}

// 注册App，并对生命周期进行劫持。
module.exports.StartApp = function (app) {
  let target = {}
  target.__proto__ = app
  target.__$$initRecord = Date.now()

  if (!(app instanceof LspApp)) {
    throw new Error('Application must extends LspApp!')
  }

  let len = lifeAPIs.length
  for (let i = 0; i < len; i++) {
    target[lifeAPIs[i]] = function () {
      event('App', lifeAPIs[i])
      let ret = null
      if (app[lifeAPIs[i]]) {
        ret = app[lifeAPIs[i]].call(app, arguments)
      }
      log('App', lifeAPIs[i], Date.now() - this.__$$initRecord)
      return ret
    }
  }
  target.onError = function () {
    console.log(...arguments)
  }
  target.onUnhandledRejection = function () {
    console.log(...arguments)
  }
  App(target)
}

module.exports.LspApp = LspApp
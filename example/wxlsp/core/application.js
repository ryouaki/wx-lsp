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
import { log, event, error, warn } from './log'
import ctx from './context'

// 需要劫持的生命周期。
// ['onLaunch', 'onShow', 'onHide']
// ['onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange']

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

  if (!(app instanceof LspApp)) {
    throw new Error('Application must extends LspApp!')
  }

  const start = Date.now()
  // 注入onLaunch
  target['onLaunch'] = function (opts = {}) {
    event('App', 'onLaunch')
    if (app['onLaunch']) {
      app['onLaunch'].call(app, opts)
    }
    log('App', 'onLaunch', {
      dura: Date.now() - start,
      ...opts
    })
  }

  // 注入onShow
  target['onShow'] = function (opts = {}) {
    event('App', 'onShow')
    const s = Date.now()
    if (app['onShow']) {
      app['onShow'].call(app, opts)
    }
    const e = Date.now()
    log('App', 'onShow', {
      dura: e - s,
      alldura: e - start,
      ...opts
    })
  }

  // 注入onHide
  target['onHide'] = function () {
    event('App', 'onHide')
    const s = Date.now()
    if (app['onHide']) {
      app['onHide'].call(app)
    }
    log('App', 'onHide', {
      dura: Date.now() - s
    })
  }

  // 注入onError
  target['onError'] = function (err) {
    if (app['onError']) {
      app['onError'].call(app, err)
    }
    error('App', 'onError', {
      errMsg: err
    })
  }

  // 注入onPageNotFound
  target['onPageNotFound'] = function (res) {
    if (app['onPageNotFound']) {
      app['onPageNotFound'].call(app, res)
    }
    error('App', 'onPageNotFound', {
      errMsg: res
    })
  }

  // 注入onUnhandledRejection
  target['onUnhandledRejection'] = function (res) {
    if (app['onUnhandledRejection']) {
      app['onUnhandledRejection'].call(app, res)
    }
    error('App', 'onUnhandledRejection', {
      errMsg: res
    })
  }

  // 注入onThemeChange
  target['onThemeChange'] = function (res) {
    if (app['onThemeChange']) {
      app['onThemeChange'].call(app, res)
    }
    event('App', 'onThemeChange', {
      msg: res
    })
  }

  // 监控内存不足
  wx.onMemoryWarning((res) => {
    warn('App', 'onMemoryWarning', {
      errMsg: res
    })
  })

  App(target)
}

module.exports.LspApp = LspApp
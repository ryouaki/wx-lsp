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
import {
  log,
  event,
  error,
  warn
} from './log'
import ctx from './context'

// 需要劫持的生命周期。
const lifeAPIs = ['onLaunch', 'onShow', 'onHide']
const eventAPIs = ['onError', 'onPageNotFound', 'onUnhandledRejection']

// Application基类
class LspApp {
  constructor() {}
}

// 注册App，并对生命周期进行劫持。
module.exports.StartApp = function (app) {
  let target = app
  target.wx = ctx

  if (!(app instanceof LspApp)) {
    throw new Error('Application must extends LspApp!')
  }

  const start = Date.now()
  lifeAPIs.forEach((key) => {
    var cb = app[key]
    target[key] = function (opts = {}) {
      event('App', key)
      const s = Date.now()
      if (cb) {
        cb.call(this, opts)
      }
      const e = Date.now()
      log('App', key, {
        dura: e - s,
        total_time: e - start,
        ...opts
      })
    }
  })

  eventAPIs.forEach((key) => {
    let cb = app[key]
    target[key] = function (err) {
      if (app[key]) {
        cb.call(this, err)
      }
      error('App', key, {
        errMsg: err
      })
    }
  })

  // 注入onThemeChange
  {
    let cb = app['onThemeChange']
    target['onThemeChange'] = function (res) {
      if (cb) {
        cb.call(this, res)
      }
      event('App', 'onThemeChange', {
        msg: res
      })
    }
  }

  // 监控内存不足
  {
    let cb = app['onMemoryWarning']
    ctx.onMemoryWarning((res) => {
      if (cb) {
        cb.call(target, res)
      }
      warn('App', 'onMemoryWarning', {
        errMsg: res
      })
    })
  }

  App(target)
}

module.exports.LspApp = LspApp
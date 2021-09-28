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
  event,
  warn
} from './log'
import Base, { injectLifeApi, injectEventApi } from './base'
import { mergeProps } from './utils'

// 需要劫持的生命周期。
const lifeApis = ['onLaunch', 'onShow', 'onHide']
const eventApis = ['onError', 'onPageNotFound', 'onUnhandledRejection']

// Application基类
class LspApp extends Base {

}

// 注册App，并对生命周期进行劫持。
module.exports.StartApp = function (app) {
  let target = app
  const name = app.__proto__.constructor.name

  if (!(app instanceof LspApp)) {
    throw new Error('Application must extends LspApp!')
  }

  injectLifeApi(lifeApis, target, app, name)
  injectEventApi(eventApis, target, app, name, true)

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
    target.wxApi().onMemoryWarning((res) => {
      if (cb) {
        cb.call(target, res)
      }
      warn('App', 'onMemoryWarning', {
        errMsg: res
      })
    })
  }

  mergeProps(target, app, [...lifeApis, ...eventApis, 'onThemeChange', 'onMemoryWarning'])

  App(target)
}

module.exports.LspApp = LspApp
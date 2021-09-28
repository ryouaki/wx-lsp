/**
 * LspPage 小程序的页面基类，代替Page()方法
 * 针对页面的所有生命周期，原始接口进行劫持，采集系统日志与监控
 * 主要记录：
 * - 启动时长
 * - 声明周期监控
 * - 生成唯一页面id，每进入一次重新生成
 * - 异常事件上报
 * - 路由监控
 * - 爆栈
 * - 图片异常上报接口注入
 */
import {
  log,
  event,
  error,
  warn
} from './log'
import ctx from './context'
import { mergeProps } from './utils'

// 需要劫持的生命周期
const lifeAPIs = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload']
const eventAPIs = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onShareTimeline', 'onAddToFavorites', 'onPageScroll', 'onResize', 'onTabItemTap', 'onSaveExitState']

class LspPage {
  constructor() {
  }

  wxApi() {
    return ctx
  }
}

module.exports.AddPage = function (page) {
  let target = page
  target.__name__ = page.__proto__.constructor.name

  if (!(page instanceof LspPage)) {
    throw new Error('Page must extends LspPage!')
  }

  const start = Date.now()
  lifeAPIs.forEach((key) => {
    let cb = page[key]
    target[key] = function (opts = {}) {
      event('Page', key)
      if (cb) {
        cb.call(this, opts)
      }
      log('Page', key, {
        dura: Date.now() - start,
        ...opts
      })
    }
  })
  
  mergeProps(target, page, [...lifeAPIs, ...eventAPIs])

  Page(target)
}

module.exports.LspPage = LspPage
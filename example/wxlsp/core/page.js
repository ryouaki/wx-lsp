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
import Base, { injectLifeApi, injectEventApi } from './base'
import { mergeProps } from './utils'

// 需要劫持的生命周期
const lifeApis = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload']
const eventApis = []

class LspPage extends Base {

}

module.exports.AddPage = function (page) {
  let target = page
  const name = page.__proto__.constructor.name

  if (!(page instanceof LspPage)) {
    throw new Error('Page must extends LspPage!')
  }

  injectLifeApi(lifeApis, target, page, name)
  injectEventApi(eventApis, target, page, name)
  mergeProps(target, page, [...lifeApis, ...eventApis])

  Page(target)
}

module.exports.LspPage = LspPage
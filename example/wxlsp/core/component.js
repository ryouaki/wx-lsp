/**
 * LspComponent 小程序的组件基类，代替Component()方法
 * 针对组件的所有生命周期，原始接口进行劫持，采集系统日志与监控
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
const lifeApis = ['created', 'ready', 'moved', 'attached', 'detached']
const eventApis = []

class LspComponent extends Base {
    
}

module.exports.AddComponent = function (comp) {
  let target = comp
  const name = comp.__proto__.constructor.name

  if (!(comp instanceof LspComponent)) {
    throw new Error('Component must extends LspComponent!')
  }

  injectLifeApi(lifeApis, target, comp, name)
  if (target.lifetimes) {
    injectLifeApi(['attached', 'detached'], target.lifetimes, comp.lifetimes, name)
  }
  injectEventApi(eventApis, target, comp, name)
  if (!target.methods) {
    target.methods = {}
  }
  mergeProps(target.methods, comp.methods, [...lifeApis, ...eventApis])
  mergeProps(target.methods, comp, [...lifeApis, ...eventApis])

  Component(target)
}

module.exports.LspComponent = LspComponent
/**
 * ：LspBehavior 小程序的mixin基类，代替Behavior()方法
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

class LspBehavior extends Base {
    
}

module.exports.AddBehavior = function (behavior) {
    let target = behavior
    const name = behavior.__proto__.constructor.name
  
    if (!(behavior instanceof LspBehavior)) {
      throw new Error('Behavior must extends LspBehavior!')
    }
  
    injectLifeApi(lifeApis, target , behavior, name)
    if (target.lifetimes) {
      injectLifeApi(['attached', 'detached'], target.lifetimes, behavior.lifetimes, name)
    }
    injectEventApi(eventApis, target, behavior, name)
    if (!target.methods) {
      target.methods = {}
    }
    mergeProps(target.methods, behavior.methods, [...lifeApis, ...eventApis])
    mergeProps(target.methods, behavior, [...lifeApis, ...eventApis])
  
    return Behavior(target)
  }
  
  module.exports.LspBehavior = LspBehavior
// app.js
import {
  ctx,
  App,
  LspApp,
  StartApp
} from './wxlsp/index'

(function (wx, App, LspApp, StartApp) {
  class Application extends LspApp {
    constructor() {
      super()

      this.globalData = {
        userInfo: null
      }
    }

    onLaunch() {
      console.log('App.onLaunch')
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    }

    onShow() {
      console.log('App.onShow')
    }

    onHide() {
      console.log('App.onHide')
    }

    onError() {
      console.log('App.onError')
    }

    onPageNotFound() {
      console.log('App.onPageNotFound')
    }

    onUnhandledRejection() {
      console.log('App.onUnhandledRejection')
    }

    onThemeChange() {
      console.log('App.onThemeChange')
    }
  }

  StartApp(new Application())
  
})(ctx, App, LspApp, StartApp)
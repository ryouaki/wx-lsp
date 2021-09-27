// app.js
import {
  ctx,
  App,
  LspApp,
  StartApp
} from './wxlsp/index'

(function (wx, App, LspApp, StartApp) {
  class Application extends LspApp {
    globalData = {
      userInfo: 222
    }

    onPageNotFound() {
      console.log('test')
    }

    constructor() {
      super()
    }

    onLaunch() {
      // 展示本地存储能力
      const logs = this.wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      this.wx.setStorageSync('logs', logs)
      
      // 登录
      this.wx.login({
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
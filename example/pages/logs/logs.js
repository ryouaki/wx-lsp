// app.js
import {
  ctx,
  App,
  Page,
  getApp,
  LspApp,
  StartApp,
  LspPage,
  AddPage
} from '../../wxlsp/index'

(function (wx, App, Page, getApp, LspApp, StartApp, LspPage,
  AddPage) {
  // logs.js
  const util = require('../../utils/util.js')

  class LogPage extends LspPage {
    data = {
      logs: [],
      test: ''
    }
    onLoad() {
      this.setData({
        logs: (this.wxApi().getStorageSync('logs') || []).map(log => {
          return {
            date: util.formatTime(new Date(log)),
            timeStamp: log
          }
        }),
      })
    }

  }

  AddPage(new LogPage())
})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
  AddPage)
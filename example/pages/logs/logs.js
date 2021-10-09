// app.js
import {
  ctx,
  App,
  Page,
  getApp,
  LspApp,
  StartApp,
  LspPage,
  Add
} from '../../wxlsp/index'

(function (wx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add) {
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

  Add(new LogPage())
})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add)
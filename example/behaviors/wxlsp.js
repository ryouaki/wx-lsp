// app.js
import {
  ctx,
  App,
  Page,
  getApp,
  LspApp,
  StartApp,
  LspPage,
  Add,
  LspBehavior
} from '../wxlsp/index'

(function (wx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add, LspBehavior) {

  module.exports = class extends LspBehavior {
    data = {
      now: 0
    }
    methods = {
      timeHandle() {
        this.setData({
          now: new Date().toString()
        })
        setTimeout(this.timeHandle.bind(this), 100)
      }
    }
  }

})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add, LspBehavior)
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
  var getBehavior = require('./../../behaviors/index')

  class WxlspPage extends LspPage {
    behaviors = [
      getBehavior('wxlsp'), 
      getBehavior('test/today')
    ]

    onShow() {console.log('test')
      this.timeHandle()
    }
  }

  Add(new WxlspPage())
})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add)
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
  } from '../../wxlsp/index'
  
  (function (wx, App, Page, getApp, LspApp, StartApp, LspPage,
    Add,LspBehavior) {

module.exports = class extends LspBehavior {
    data = {
        today: Date.now()
    }
}

})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
    Add,LspBehavior)
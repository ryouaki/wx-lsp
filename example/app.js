// app.js
import {
  ctx,
  App,
  getApp,
  LspApp,
  StartApp,
  setReportFn
} from './wxlsp/index'

(function (wx, App, getApp, LspApp, StartApp) {
  class Application extends LspApp {
    constructor() {
      super()
    }
  }

  StartApp(new Application())
  
})(ctx, App, getApp, LspApp, StartApp)
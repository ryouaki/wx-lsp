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
  class LogPage extends LspPage {
  }

  Add(new LogPage())
})(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
  Add)
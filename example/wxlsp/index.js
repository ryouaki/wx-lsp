import ctx from './core/context'
import { StartApp, LspApp } from './core/application'



module.exports = {
  ctx: ctx,
  App: function () {
    throw new Error('App is disabled, Please Use class LspApp instead.')
  },
  Page: function () {
    throw new Error('Page is disabled, Please Use class LspPage instead.')
  },
  LspApp: LspApp,
  StartApp: StartApp,
  AddPage: function (name, page) {
    Page(page)
  },
  AddComponent: function (name, comp) {
    Component(comp)
  }
}
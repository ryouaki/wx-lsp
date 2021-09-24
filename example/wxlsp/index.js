let context = {}

context.__proto__ = wx
const keys = Object.getOwnPropertyNames(wx)

for (let i = 0; i < keys.length; i++) {
  console.log(`keys[${keys[i]}]=` + Object.prototype.toString.call(wx[keys[i]]))
}

context = new Proxy(context, {
  get: function (target, prop) {
    console.log(prop)
    return wx[prop]
  },
  set: function (target, prop, value) {
    throw new Error(`${prop} is Read-Only.`)
    return false
  }
})

module.exports = {
  ctx: context,
  App: function () {
    throw new Error('App is disabled, Please Use class LspApp instead.')
  },
  Page: function () {
    throw new Error('Page is disabled, Please Use class LspPage instead.')
  },
  LspApp: class baseApp {
    constructor(opts) {
      this.__$$ctx = context
    }
  },
  StartApp: function (app) {
    App(app)
  },
  AddPage: function (name, page) {
    Page(page)
  },
  AddComponent: function (name, comp) {
    Component(comp)
  }
}
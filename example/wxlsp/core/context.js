let context = {}
context.__proto__ = wx

context = new Proxy(context, {
  get: function (target, prop) {
    return wx[prop]
  },
  set: function (target, prop, value) {
    throw new Error(`${prop} is Read-Only.`)
  }
})

module.exports = context
let context = {}
context.__proto__ = wx

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

module.exports = context
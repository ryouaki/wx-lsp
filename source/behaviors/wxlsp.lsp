<js>
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
</js>
// app.js
import {
  ctx,
  App,
  Page,
  Component,
  getApp,
  LspApp,
  StartApp,
  LspPage,
  Add,
  LspComponent,
} from '../../../../wxlsp/index'

(function (wx, App, Page, Component, getApp, LspApp, StartApp, LspPage,
  Add) {
  const behavior = require('./behiver/testBehavior')

  class Avatar extends LspComponent {
    behaviors = [behavior]
    properties = {
      motto: {
        type: Number,
        observer(newVal, oldVal) {
          console.log('kkk')
        }
      }
    }

    data = {
      count: 0,
      test: 'test'
    }

    created() {
      this.timerH = setInterval(() => {
        this.timerHandle()
        if (this.data.count > 100) {
          clearInterval(this.timerH)
        }
      }, 100)
    }

    ready() {
      console.warn('test', this.data.motto, this.data.test, this.test(), this.aaa())
    }

    attached() {
      console.error("test")
    }

    lifetimes = {
      attached() {
        console.error("test 111")
      }
    }

    pageLifetimes = {
      show: function () {

      },
      hide: function () {},
      resize: function () {},
    }
    methods = {
      test() {
        return 'hello'
      }
    }

    test() {
      return 'hello hello'
    }

    timerHandle() {
      this.setData({
        count: this.data.count + 1
      })
    }
  }

  Add(new Avatar())
})(ctx, App, Page, Component, getApp, LspApp, StartApp, LspPage,
  Add)
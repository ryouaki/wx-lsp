// app.js
import {
    ctx,
    App,
    Page,
    getApp,
    LspApp,
    StartApp,
    LspPage,
    LspComponent,
    Add
  } from '../../wxlsp/index'
  
  (function (wx, App, Page, getApp, LspApp, StartApp, LspPage,
    Add, LspComponent) {
  
    class Notice extends LspComponent {
      constructor() {
        super()
      }
  
      onLoad() {
        if (this.wxApi().getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
      }
    }
  
    Add(new Notice())
  })(ctx, App, Page, getApp, LspApp, StartApp, LspPage,
    Add, LspComponent)
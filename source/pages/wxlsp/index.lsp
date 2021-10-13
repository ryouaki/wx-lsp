<wxml>
  <view class="container">
    Welcome come to wxlsp<br/>
    {{now}}<br/>
    {{today}}
  </view>
</wxml>
<js>
import getBehavior from './../../behaviors/index'

class WxlspPage extends LspPage {
  behaviors = [getBehavior('wxlsp'), getBehavior('test/today')]

  onShow() {console.log('test')
    this.timeHandle()
  }
}

Add(new WxlspPage())
</js>
<wxss>
.container {
  font-size: 12px;
}
</wxss>
<json>
{
  "navigationBarTitleText": "wxlsp欢迎你",
  "usingComponents": {}
}
</json>
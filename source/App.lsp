<wxml>
    <view class="container">
    <view class="userinfo">
        <block wx:if="{{canIUseOpenData}}">
        <view class="userinfo-avatar" bindtap="bindViewTap">
            <open-data type="userAvatarUrl"></open-data>
        </view>
        <open-data type="userNickName"></open-data>
        </block>
        <block wx:elif="{{!hasUserInfo}}">
        <button wx:if="{{canIUseGetUserProfile}}" bindtap="getUserProfile"> 获取头像昵称 </button>
        <button wx:elif="{{canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
        <view wx:else> 请使用1.4.4及以上版本基础库 </view>
        </block>
        <block wx:else>
        <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
        <text class="userinfo-nickname">{{userInfo.nickName}}</text>
        </block>
    </view>
    <view class="usermotto">
        <text class="user-motto">{{motto}}</text>
    </view>
    </view>
</wxml>
<script>
class IndexPage extends LspPage {
  constructor() {
    super()

    this.data = {
      motto: 'Hello World',
      userInfo: {},
      hasUserInfo: false,
      canIUse: this.canIUse('button.open-type.getUserInfo'),
      canIUseGetUserProfile: false,
      canIUseOpenData: this.canIUse('open-data.type.userAvatarUrl') && this.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    }
  }

  bindViewTap() {
    this.navigateTo({
      url: '../logs/logs'
    })
  }

  onLoad() {
    if (this.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
}

Registry('IndexPage', new IndexPage())
</script>
<wxss>
/**index.wxss**/
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
}

.userinfo-avatar {
  overflow: hidden;
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.usermotto {
  margin-top: 200px;
}
</wxss>
<json>
{
  "usingComponents": {}
}
</json>
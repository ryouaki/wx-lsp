<script>
class Application extends LspApp {
  constructor() {
    super()
    // 注册系统采集日志回调接口
    setReportFn((...opts) => {
      console.log(opts)
    })
  }
}

StartApp(new Application())
</script>
<wxss>
</wxss>
<json>
{
  "pages":[
    "pages/home/index"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "wxlsp",
    "navigationBarTextStyle":"black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
</json>

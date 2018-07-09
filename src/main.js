import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'


Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: 'IT之家Lite',
      backgroundTextStyle: 'dark',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index',
        text: '资讯',
        iconPath: 'static/images/news.png',
        selectedIconPath: 'static/images/news-active.png'
      }, {
        pagePath: 'pages/problem',
        text: '圈子',
        iconPath: 'static/images/quanzi.png',
        selectedIconPath: 'static/images/quanzi-active.png'
      }]
    }
  }
}

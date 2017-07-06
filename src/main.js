import Vue from 'vue'
import FastClick from 'fastclick'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import router from './router/'
import store from './store/'
// import store from './store'
import filters from './filters'
// import 'nib/index.styl'
import './assets/css/main.styl' // !样式如果放在组件后导入会导致组件中样式在前?
import ddb from './assets/js/ddb/'
import App from './app'

Vue.use(YDUI)

window.ddb = ddb
Vue.prototype.$ddb = ddb
Vue.config.productionTip = false

FastClick.attach(document.body)

// 定义 vue 过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 转页后
// router.beforeEach((route, redirect, next) => {
//   window.scrollTo(0, 0)
//   next()
// })

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
// router.beforeEach((to, from, next) => {
//   // 处理左侧滚动不影响右边
//   $('html, body, #page').removeClass('scroll-hide')
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.state.userInfo.userId) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  // data: {
  //   // transitionName: 'slide-left'
  // },
  created() {
    this.init()
  },
  // watch: {
  //   '$route': function(to, from) {
  //     var toDepth = to.path.split('/').length;
  //     var fromDepth = from.path.split('/').length;
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
  //   }
  // },
  methods: {
    init() {
      let plate = ddb.getParam('plate') || ddb.session('plate') || '粤BC5033'
      if (!plate) ddb.tips('缺少必要参数：[车牌号]')
      ddb.session('plate', plate)
      this.$store.commit('setPlate', plate)
    }
  }
})
import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules/'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  plate: '', // 车牌号
  failImg: 'http://static.wechat.buskeji.com/webapp/image/failed-img.png',
  // failImg: 'http://loc.wechat.buskeji.com/webapp/assets/img/icon-fail.png',
  query: {}, // 查询参数
  goodsList: [], // 物品列表
  borrowCount: 0, // 借用中物品数量
  // xxx: false, // xxx
  // xxx: false, // xxx
  // xxx: false, // xxx
  // xxx: false, // xxx
  // xxx: false, // xxx
  // xxx: false, // xxx
  // xxx: false, // xxx
  xxx: false // 没有更多滚动加载评论
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // modules,
  strict: debug
})
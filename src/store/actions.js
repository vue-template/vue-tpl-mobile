// import * as types from './mutation-types'
import ddb from '../assets/js/ddb/'

export const getGoods = ({commit}, opts) => {
  ddb.loading()
  return new Promise((resolve, reject) => {
    ddb.get(opts.api, opts.data).then(res => {
      ddb.hideLoading(800)
      resolve(res)

      if (res.ret === 0) {
        commit('setGoodsList', res.data)
      } else {
        ddb.tips(res.msg)
      }
    }).catch(err => {
      ddb.hideLoading(800)
      reject(err)
    })
  })
}

export const getBorrowCount = ({commit}, opts) => {
  ddb.get(opts.api, opts.data).then(res => {
    if (res.ret === 0) commit('setBorrowCount', res.data.total)
  })
}

export const getQueryGoods = ({state, commit, dispatch}, {queryId, api, data}) => {
  console.log('test')
  commit('setQuery', {goodsId: queryId})
  if (!state.goodsList.length) {
    dispatch('getGoods', {api, data})
  }
}

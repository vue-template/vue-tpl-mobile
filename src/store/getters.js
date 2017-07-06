export default {
  // goodsList(state) {
  //   return state.goodsList || []
  // },
  validGoods(state) {
    return state.goodsList.filter(goods => goods.remain_num > 0)
  },
  queryGoods(state) {
    return state.goodsList.filter(goods => goods.goods_id === state.query.goodsId)[0] || {}
  }
}

// import * as types from './mutation-types'

export default {
  setPlate(state, data) {
    state.plate = data
  },
  setQuery(state, data) {
    state.query = Object.assign(state.query, data)
  },
  setGoodsList(state, {rows}) {
    state.goodsList = rows
  },
  setBorrowCount(state, data) {
    state.borrowCount = data
  }
}

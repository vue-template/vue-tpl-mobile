import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index'
import ConfirmBorrow from '@/views/confirm-borrow'
import BorrowedRecord from '@/views/borrowed-record'
import BorrowedDetails from '@/views/borrowed-details'
import BorrowFail from '@/views/borrow-fail'
import BorrowSuccess from '@/views/borrow-success'
import LostAppeal from '@/views/lost-appeal'
import AppealSuccess from '@/views/appeal-success'

Vue.use(Router)

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '免费借还'
  }
}, {
  path: '/confirm-borrow',
  name: 'confirm-borrow',
  component: ConfirmBorrow,
  meta: {
    title: '确认借用'
  }
}, {
  path: '/borrowed-record',
  name: 'borrowed-record',
  component: BorrowedRecord,
  meta: {
    title: '借还记录'
  }
}, {
  path: '/borrow-fail',
  name: 'borrow-fail',
  component: BorrowFail,
  meta: {
    title: '借还失败'
  }
}, {
  path: '/borrow-success',
  name: 'borrow-success',
  component: BorrowSuccess,
  meta: {
    title: '借还成功'
  }
}, {
  path: '/borrowed-details',
  name: 'borrowed-details',
  component: BorrowedDetails,
  meta: {
    title: '借还详情'
  }
}, {
  path: '/lost-appeal',
  name: 'lost-appeal',
  component: LostAppeal,
  meta: {
    title: '丢失申诉'
  }
}, {
  path: '/appeal-success',
  name: 'appeal-success',
  component: AppealSuccess,
  meta: {
    title: '申诉成功'
  }
}, {
  path: '*',
  redirect: 'home'
}]

export default new Router({
  // mode: 'history',
  routes
})
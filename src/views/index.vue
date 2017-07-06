<template>
  <div class="home">
    <header>
      <h1>嗒嗒福利</h1>
      <p><em>免押金</em> 借用物品</p>
    </header>

    <div class="main">
      <div class="panel borrow">
        <h2>我要借</h2>
        <ul v-if="validGoods.length">
          <li class="w-goods" v-for="item in validGoods" @click="viewGoods(item.goods_id)">
            <img :src="item.image_url" @error.once="imgFailed">
            <p>{{item.goods}}</p>
          </li>
        </ul>
        <p v-else class="w-empty">暂无可借用物品</p>
      </div>
      <div class="panel return">
        <h2>我要还</h2>
        <p>当前借用中物品<strong>{{borrowCount}}</strong>件</p>
        <div class="action">查看借用记录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'home',
    // data() {
    //   return {
    //     failedImg: 'http://static.wechat.buskeji.com/webapp/image/failed-img.png'
    //     // failedImg: 'http://loc.wechat.buskeji.com/webapp/assets/img/icon-fail.png'
    //   }
    // },
    computed: {
      ...mapState(['failImg', 'plate', 'borrowCount']),
      ...mapGetters(['validGoods'])
    },
    created() {
      // let ddb = window.ddb
      // console.log(ddb)
      // ddb.user.syncLogin()
      // console.log(this.$ddb)
      // this.$dialog.confirm({
      // ddb.confirm({
      //   title: '选填标题',
      //   mes: '我有一个小毛驴我从来也不骑！',
      //   opts: () => {
      //     this.$dialog.toast({
      //       mes: '你点了确定',
      //       timeout: 1000
      //     })
      //   }
      // })
      // ddb.loading()
      // this.$http.get(ddb.config.api + 'borrow_goods/get_goods_list', {params: ddb.params})

      this.init()
    },
    methods: {
      ...mapActions(['getGoods', 'getBorrowCount']),
      init() {
        this.getGoods({
          api: 'borrow_goods/get_goods_list',
          data: {plate: this.plate}
        })

        this.getBorrowCount({
          api: 'borrow_member/my_borrow_count'
        })
      },
      imgFailed(e) {
        e.target.src = this.failImg
      },
      viewGoods(id) {
        this.$router.push({
          name: 'confirm-borrow',
          query: {id}
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>

<template>
  <div class="confirm-borrow">
    <div class="main">
      <div class="panel goods">
        <div v-if="queryGoods.goods_id" class="w-goods">
          <img :src="queryGoods.image_url" @error.once="imgFailed">
          <p>{{queryGoods.goods}}</p>
        </div>
        <p v-else class="w-empty">物品被借走了~</p>
        <div class="description">
          <span>免费借7天</span>
          <span>免押金</span>
          <span>价值30元</span>
        </div>
      </div>
      <div class="panel company">
        <h3>粤B23456</h3>
        <p>深圳市嗒嗒科技有限公司</p>
      </div>
      <a class="button w-btn block" @click="confirm">确认错用</a>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState(['plate', 'failImg']),
      ...mapGetters(['queryGoods'])
    },
    created() {
      this.init()
    },
    methods: {
      ...mapActions(['getQueryGoods']),
      init() {
        this.getQueryGoods({
          queryId: this.$route.query.id,
          api: 'borrow_goods/get_goods_list',
          data: {plate: this.plate}
        })
      },
      imgFailed(e) {
        e.target.src = this.failImg
      },
      confirm() {
        let ddb = window.ddb
        ddb.get('borrow_goods/borrow_chosen_goods', {
          plate: this.plate,
          goods_id: this.queryGoods.goods_id
        }).then(res => {
          if (res.ret === 0) {
            this.$router.push('borrow-success')
          } else {
            ddb.tips(res.msg)
          }
        })
      }
    }
  }
</script>

<template>
  <div class="borrow-success">
    <div class="main">
      <div class="panel status">
        <status title="借用成功"></status>
        <p class="tips">
          请于2017-04-07 14:30前归还
          <em>任意嗒嗒巴士均可归还</em>
        </p>
      </div>
      <yd-cell-group class="panel info">
        <yd-cell-item>
          <span slot="left">借用人ID：</span>
          <span slot="right">54566</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">借用物品：</span>
          <span slot="right">雨伞</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">借用日期：</span>
          <span slot="right">2017-02-31</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">借用时车辆：</span>
          <span slot="right">粤B34344</span>
        </yd-cell-item>
      </yd-cell-group>
      <a class="button w-btn block">查看借还记录</a>
    </div>
  </div>
</template>

<script>
  import status from '../components/status.vue'

  export default {
    components: {
      status
    },
    data() {
      return {
        // msg: 'msg'
      }
    }
  }
</script>

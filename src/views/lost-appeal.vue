<template>
  <div>
    <yd-flexbox direction="vertical">
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
    </yd-flexbox>

    <div style="height: 300px;">
      <yd-flexbox direction="vertical">
        <div>div</div>
        <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
        <div>div</div>
      </yd-flexbox>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // msg: 'msg'
      }
    }
  }
</script>

<style lang="stylus">
  h1
  h2
    font-weight normal
</style>

<template>
  <div class="w-status">
    <h2>{{title || '提交成功'}}</h2>
    <p><slot></slot></p>
  </div>
</template>

<script>
  export default {
    // replace: true,
    props: ['title']
  }
</script>

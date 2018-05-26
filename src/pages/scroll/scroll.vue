<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

const options = {
  scrollY: true // 因为scrollY默认为true，其实可以省略
}

export default {


  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, options)
    }, 1000)
  }
}
</script>

<style scoped>
</style>
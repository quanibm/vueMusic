<template>
  <div>
    <nav class="head_nav">
      <router-link class="nav_link" to="/home/recommend">推荐</router-link>
      <router-link class="nav_link" to="/home/friend">朋友</router-link>

      <router-link class="nav_link" to="/home/radio">电台</router-link>

    </nav>
    <router-view></router-view>





  </div>
</template>

<script>
  export default {

  }

</script>



<style lang="less" scoped>
  .head_nav {
    background: #D33A31;
    height: 3.3rem;
    line-height: 3rem;
    display: flex;
    justify-content: space-around;
    .nav_link {
      color: #fff;
      flex-grow: 1;
      text-align: center;
    }

  }

</style>

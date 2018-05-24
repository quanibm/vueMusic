<template>
  <div>
    <header class="header">
      <div class="menu" @click="tagNav">

        <img src="../files/imgs/a2.png" alt="目录">
      </div>
      <div class="center_link">
        <router-link class="head_link" to="/localMusic">
          <img src="../files/imgs/a1.png" alt="">
        </router-link>
        <router-link class="head_link" to="/home">
          <img src="../files/imgs/a4.png" alt="">
        </router-link>
        <router-link class="head_link" to="/musicVideo">
          <img src="../files/imgs/a3.png" alt="">
        </router-link>
      </div>
      <div class="search">
        <router-link to="/search">
          <img src="../files/imgs/a5.png" alt="">
        </router-link>
      </div>
    </header>
    <left-Side-Menu v-if="tagNavValue"></left-Side-Menu>


    <router-view></router-view>
  </div>
</template>

<script>
  import leftSideMenu from '@/components/leftSideMenu.vue'
  import {
    mapState
  } from 'vuex'


  export default {
    components: {
      leftSideMenu
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        "tagNavValue"
      ])
    },
    methods: {
      tagNav() {
        this.$store.commit('changeNav')
      }
    }
  };

</script>

<style lang="less" scoped>


  .header {
    background-color: #D33A31;
    width: 100%;
    height: 3.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 2rem;
    }
    .menu {
      width: 2rem;
    }
    .center_link {
      display: flex;
      justify-content: space-around;
      align-content: center;
      width: 10rem;
      .head_link {
        display: block;
      }
    }

    .search {
      width: 2rem;
    }
  }

</style>

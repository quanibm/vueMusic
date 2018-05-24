<template>
  <div class="bannerContainer">
    <div class="slideshow-box" v-if="banner.length > 0">
      <ul class="slideshow-items">
        <li class="slideshow-list" v-for="item in banner[0].data.banners">
          <img class="bannerImg" :src="item.picUrl" alt=""> </li>
      </ul>
      <!-- <div class="slideshow-list" v-for="item in banner[0].data.banners">
        <img class="bannerImg" :src="item.picUrl" alt=""> </div>
      <div class="slideBarBox" v-if="banner.length > 0">
        <span class="slideBar" v-for="item in banner[0].data.banners"></span>
      </div>
       --></div>
  </div>
</template>
<script>
  import {
    mapActions,
    mapState
  } from "vuex";
  export default {
    computed: { ...mapState(["banner"])
    },
    methods: { ...mapActions(["getBanner"]),
      slide(){
        alert()
      }
    },
    created() {
      this.getBanner(); //获取banner
    },
    mounted() {
      this.slide()
    }
  }

</script>
<style lang="less" scoped>
  .bannerContainer {
    position: relative;
  }

  .slideshow-box {
    width: 100%;
    overflow: hidden;
  }

  .slideshow-items {
    background: rgba(0, 0, 0, 0);
    height: 10rem;
    display: flex;
    .slideshow-list {
      height: 10rem;
      margin: 0 0.6rem;
      border-radius: 0.2rem;
      .bannerImg {
        width: 95vw;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }

  .slideBarBox {
    display: flex;
    position: absolute;
    left: 8rem;
    top: 6.8rem;
    .slideBar {
      background: pink;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }

</style>

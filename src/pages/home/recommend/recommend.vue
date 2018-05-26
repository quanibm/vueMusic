<template>
  <div class="recommend">
    <div class="container-box">
      <div class="slider-wrapper">
        <slider-show>
          <div class="slideshow-item" v-for="(item,index) in banners" :key="index">
            <img class="bannerImg" :src="item.picUrl" alt="">
          </div>
        </slider-show>
      </div>

    </div>
  </div>
</template>

<script>
import slider from '../../slider/slider.vue'


import { mapActions, mapState } from "vuex";
export default {
  components: {
    sliderShow: slider,
  },

  data () {
    return {
      banners: []
    }
  },

  computed: {
    ...mapState(["banner"])
  },

  methods: {
    ...mapActions(["getBanner"]),
    saveBanners () {
      setTimeout(() => {
        this.banners = this.banner[0].data.banners
      }, 100);
    }
  },

  created () {
    this.getBanner(); //获取banner
  },
  mounted () {
    this.saveBanners()
  }






};

</script>

<style lang="less" scoped>
.recommend {
  background: #d33a31;
  width: 100%;
  height: 6rem;
}

.slider-wrapper {
  width: 96%;
  margin: 0 auto;
  border-radius: 0.3125rem /* 5/16 */;
  overflow: hidden;
}

.slideshow-item {
  float: left;
  // display: flex;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  img {
    display: block;
    width: 100%;
  }
}
</style>

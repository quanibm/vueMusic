<template>
  <div class="recommend">
    <div class="container-box">
      <div class="slider-wrapper">
        <slider-show :banners="banner[0].data.banners"></slider-show>
      </div>
    </div>
  </div>
</template>

<script>
import slider from "../../slider/slider.vue";
import banner from "../../banner/banner.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    sliderShow: banner
  },
  computed: {
    ...mapState(["banner"])
  },
  methods: {
    ...mapActions(["getBanner"])
  },
  created() {
    this.getBanner();//请求banners
  },
  data() {
    return {};
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

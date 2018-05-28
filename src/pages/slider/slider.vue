<template>
    <div class="carousel-wrap" ref="slider">
        <transition-group tag="ul" class="slider-ul" ref="sliderGroup" name="list">
            <li v-for="(list,index) in banners" v-show="index === currentIndex" :key="index" @touchstart="stop" @touchend="go">
                <a href="javascript:">
                    <img class="bannerImg" :src="list.picUrl" alt="tupm">
                </a>
            </li>
        </transition-group>
        <div class="carousel-items">
            <span :class="{'active':index === currentIndex}" v-for="(item, index) in banners.length" :key="index">123</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      currentIndex: 0,
      timer: "",
      banners: []
    };
  },
  computed: {
    ...mapState(["banner"])
  },

  methods: {
    ...mapActions(["getBanner"]),
    saveBanners() {
      setTimeout(() => {
        this.banners = this.banner[0].data.banners;
      }, 100);
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.banners.length - 1) {
        this.currentIndex = 0;
      }
    },
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 2500);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  created() {
    this.getBanner(); //获取banner
  },

  mounted() {
    this.saveBanners();
    this.timer = setInterval(() => {
      this.autoPlay();
    }, 2500);
  }
};
</script>

<style lang="less" scoped>
.carousel-wrap {
  min-height: 1px;
  overflow: hidden;
  position: relative;
  .slider-ul {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    display: flex;
    li {
      box-sizing: border-box;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
.carousel-items {
  background: pink;
  position: absolute;
  z-index: 10000;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 3px;
    background-color: #400080;
    cursor: pointer;
  }
  .active {
    background-color: orange;
  }
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

// .list-leave-active {
//   transition: all 1s ease;
//   transform: translateX(-100%);
// }

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>

<template>
  <div class="slide-show" @touchstart="clearInv" @touchend="runInv">
    <div class="slide-img">
      <a href="banners[nowIndex].href">
        <transition name="slide-trans">
          <img :src="banners[nowIndex].picUrl" v-if="isShow">
        </transition>
        <transition name="slide-trans-old">
          <img :src="banners[nowIndex].picUrl" v-if="!isShow">
        </transition>
      </a>
    </div>
    <div class="slide-pages">
      <ul>
        <li @click="goto(prevIndex)" v-if="false"></li>
        <li v-for="(item ,index) in banners" @click="goto(index)">
          <a :class="{on: index === nowIndex}"></a>
        </li>
        <li @click="goto(prevIndex)" v-if="false"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      //通过让父组件数据更新,渲染也自动更新的机制来更新我们的banners,但是其会报错的问题仍为未解决
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.banners.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.banners.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<style lang="less" scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(100%);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-100%);
}

.slide-show {
  position: relative;
  margin: 0 auto;
  width: 96%;
  height: 11.25rem /* 180/16 */;
  overflow: hidden;
  .slide-img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }
}

.slide-pages {
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  li {
    display: inline-block;
    width: 1rem /* 10/16 */;
    height: 1rem /* 10/16 */;
    margin: .2rem;
    border-radius: 50%;
    background: #c0c0c0;
    .on{
      display: block;
      width: 100%;
      height: 100%;      
      border-radius: 50%;
      background-color: #ff3333;
    }
  }
}
</style>

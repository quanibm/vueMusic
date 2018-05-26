<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot active" v-for="(item, index) in dots" :key="index" >*</span>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data () {
        return {
            dots: []
        }
    },
    props: {
        /**
         * 1 滚动的时候会派发scroll 事件,会截流;
         * 2 滚动的时候实时派发scroll事件,不会截流;
         * 3 除了实时派发scroll事件,在swipe的情况下仍然能实时派发scroll事件
         */
        // 循环轮播
        loop: {
            type: Boolean,
            default: true
        },
        // 自动轮播
        autoPlay: {
            type: Boolean,
            default: true
        },
        // 间隔
        interval: {
            type: Number,
            default: 4000
        }
    },


    mounted () {
        /**
         * this.$nextTick 是一个异步函数,为了确保dom 已经渲染
         */
        this.$nextTick(() => {
            this._initSlider();
            this._initDots();
        })

    },


    methods: {
        _initSlider () {
            console.log(this.$refs.slider);

            if (!this.$refs.slider) {
                return
            }
            // this.slider = new BScroll(this.$refs.slider, {
            //     scrollX: true,
            //     momentum: false,
            //     snap: {
            //         loop: this.loop,
            //         threshold: 0.3,
            //         speed: 400
            //     },
            //     snapSpeed: 400,
            //     bounce: false,
            //     stopPropagation: true,
            //     click: true
            // })
        },
        _initDots () {
            this.dots = new Array(this.$refs.sliderGroup.children.length)
            console.log(this.dots);

            console.dir(this.$refs.sliderGroup.children)
            console.log(this.$refs.sliderGroup);

        }
    }
}
</script>

<style lang="less" scoped>
.slider {
  min-height: 1px;
  position: relative;
  .slider-grounp {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slideshow-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: .75rem /* 12/16 */;
    text-align: center;
    // font-size: 0;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      //   background: $color-text-l;
      .active {
        // width: 10px;
        border-radius: 5px;
        // background: $color-highlight-background;
      }
    }
  }
}
</style>

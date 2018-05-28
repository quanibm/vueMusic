<template>
  <div class="recommend">
    <div class="container-box">
      <div class="slider-wrapper">
        <slider-show :banners="banner[0].data.banners"></slider-show>
      </div>
      <div class="recommend-list">
        <ul>
          <li v-for="(item , index) in recommendList" @click="tagLinkShow(index)">
            <router-link to="" class="list-link linkToFm">
              <img :src="item.src1">
              <img :src="item.src2" v-if="!linkShow === index">
            </router-link>
            <span> {{item.title}} </span>
          </li>
          <!-- <li>
            <router-link to="" class="list-link linkToRe">
              <img src="../../../files/imgs/b21.png" alt="">
            </router-link>
            <span>每日推荐</span>
          </li>
          <li>
            <router-link to="" class="list-link linkToSl">
              <img src="../../../files/imgs/b31.png" alt="">
            </router-link>
            <span>歌单</span>
          </li>-->

          <!-- // <li>
          //   <router-link to="" class="list-link linkToRl">
          //     <img src="../../../files/imgs/b41.png" alt="">
          //   </router-link>
          //   <span>排行榜</span>
          // </li>  -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
    ...mapActions(["getBanner"]),
    tagLinkShow(index) {
      console.log(linkShow);
      
      this.linkShow = index;
      setTimeout(() => {
        this.linkShow = "";
      }, 200);
    }
  },
  created() {
    this.getBanner(); //请求banners
  },
  data() {
    return {
      recommendList: [
        {
          src1: "./static/imgs/b11.png",
          src2: "./static/imgs/b12.png",
          title: "私人FM"
        },
        {
          src1: "./static/imgs/b21.png",
          src2: "./static/imgs/b22.png",
          title: "每日推荐"
        },
        {
          src1: "./static/imgs/b31.png",
          src2: "./static/imgs/b32.png",
          title: "歌单"
        },
        {
          src1: "./static/imgs/b41.png",
          src2: "./static/imgs/b42.png",
          title: "排行榜"
        }
      ],
      linkShow: ""
    };
  }
};
</script>

<style lang="less" scoped>
.recommend {
  background: #d33a31;
  width: 100%;
  height: 6rem;
}
.recommend-list {
  width: 96%;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-around;
    .list-link {
      display: block;
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 50%;
      margin: 1.25rem 0 /* 20/16 */;
      img {
        widows: 100%;
        height: 100%;
      }
    }
    span {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
  .linkToFm {
    // background: url(../../../files/imgs/b11.png) no-repeat center center / 100% 100%;
  }
}
</style>

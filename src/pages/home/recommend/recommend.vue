<template>
  <div class="recommend">
    <div class="container-box">
      <div class="slider-wrapper">
        <slider-show v-cloak :banners="banner[0].data.banners"></slider-show>
      </div>
      <div class="recommend-list">
        <ul>
          <li v-for="(item , index) in recommendList" @click="tagLinkShow(index)">
            <router-link to="" class="list-link linkToFm">
              <img :src="item.src1">
              <!-- <img :src="item.src2" v-if="!(linkShow === index)"> -->
            </router-link>
            <span> {{item.title}} </span>
          </li>
        </ul>
      </div>
      <song-list></song-list>
    </div>
  </div>
</template>

<script>
import banner from "../../banner/banner.vue";
import songList from "../../songList/songList.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    sliderShow: banner,
    songList
  },
  computed: {
    ...mapState(["banner"])
  },
  methods: {
    ...mapActions(["getBanner"]),
    tagLinkShow(index) {
      this.linkShow = index;
      setTimeout(() => {
        this.linkShow = 0;
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
      linkShow: 0
    };
  }
};
</script>

<style lang="less" scoped>
[v-cloak]{
  display: none;
}
.recommend {
  background: #d33a31;
  width: 100%;
  height: 6rem;
}
.recommend-list {
  width: 96%;
  margin: 0 auto;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #c0c1bf;
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

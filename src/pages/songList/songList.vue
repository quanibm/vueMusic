<template>
  <div class="songList">
    <router-link to="">
      <p>推荐歌单
        <span> > </span>
      </p>
    </router-link>
    <ul class="listBox" v-cloak>
      <li v-for="(item, index) in Pesonalized[0].result" :key="index">
        <i v-text="item.playCount"></i>
        <img :src="item.picUrl">
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      aaa: ""
    };
  },
  computed: {
    ...mapState(["Pesonalized"])
  },
  methods: {
    ...mapActions(["getPesonalized"])
  },
  created() {
    this.getPesonalized();
    this.$nextTick(() => {
      console.log(111);
      
      console.log("this.Pesonalized", this.Pesonalized[0].result);

    });
  }
};
</script>




<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.songList {
  width: 96%;
  margin: 0 auto;
  p {
    height: 4rem;
    line-height: 4rem;
    font-weight: 700;
    font-size: 1.6rem;
    color: #000;
    span {
      color: #808080;
    }
  }
}
.listBox {
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  li {
    width: 32%;
    position: relative;
    margin: 0.625rem 0 /* 10/16 */;
    box-sizing: border-box;

    i {
      position: absolute;
      color: white;
    }
    img {
      width: 100%;
    }
    span {
      font-size: 0.75rem /* 12/16 */;
    }
  }
}
</style>

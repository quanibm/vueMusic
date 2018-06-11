<template>
  <section class="sideSection" v-if="tagNavValue">

    <aside class="left">
      <header class="left_title">
        <p>登录网页云音乐</p>
        <p>320k高音质无限下载,手机电脑多端同步</p>
        <span class="left_login">
          立即登录
        </span>
      </header>

      <nav class="left-menu">
        <ul class="list-style listMessages">
          <li>
            <span class="messages icons-images"></span>
            <span>我的消息</span>
          </li>
          <li>
            <span class="member icons-images"></span>

            <span>VIP会员</span>
          </li>
          <li>
            <span class="store icons-images"></span>

            <span>商城</span>
          </li>
          <li>
            <span class="freeSong icons-images"></span>

            <span>在线听歌免流量</span>
          </li>
        </ul>
        <ul class="list-style listMessages">
          <li>
            <span class="myFriend icons-images"></span>
            <span>我的好友</span>
          </li>
          <li>
            <span class="nearbyPerson icons-images"></span>

            <span>附近的人</span>
          </li>
        </ul>
        <ul class="list-style listMessages">
          <li>
            <span class="customTheme icons-images"></span>
            <span>个性话主题</span>
          </li>
          <li>
            <span class="member icons-images"></span>
            <span>VIP会员</span>
          </li>
          <li>
            <span class="store icons-images"></span>
            <span>商城</span>
          </li>
          <li>
            <span class="freeSong icons-images"></span>
            <span>在线听歌免流量</span>
          </li>
        </ul>

      </nav>

    </aside>
    <aside class="right" @click="tagNav"></aside>

  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tagNavValue"])
  },
  methods: {
    tagNav() {
      this.$store.commit("changeNav");
    }
  }
};
</script>

<style lang="less" scoped>
.sideSection {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  top: 0;
  display: flex;
  .left {
    width: 80%;
    background-color: white;
  }
  .right {
    width: 20%;
    background-color: rgba(100, 100, 100, 0.6);
  }
}

.left_title {
  height: 18rem;
  color: #c1c1c2;
  text-align: center;
  padding-top: 3.9rem;
  box-sizing: border-box;
  background-color: #000000;
}

.left_login {
  display: block;
  color: #fff;
  width: 8.6rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  margin: 5rem auto;
  border: 1px solid #c1c1c2;
  border-radius: 3.6rem;
}

.list-style {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  background: linear-gradient(#f2f4f5 100%) no-repeat left bottom / 100% 0.38rem;

  li {
    font-size: 1rem;
    height: 3rem;

    .icons-images {
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
      display: block;
    }

    span {
      display: block;
      float: left;
      height: 2rem;
      line-height: 2rem;
    }
  }



  .messages {
    background: url("../files/imgs/a6.png") no-repeat center center / 100% 100%;
  }
  .member {
    background: url("../files/imgs/a9.png") no-repeat center center / 100% 100%;
  }
  .store {
    background: url("../files/imgs/a8.png") no-repeat center center / 100% 100%;
  }
  .freeSong {
    background: url("../files/imgs/a10.png") no-repeat center center / 100% 100%;
  }
  .myFriend {
    background: url("../files/imgs/a7.png") no-repeat center center / 100% 100%;
  }
  .nearbyPerson {
    background: url("../files/imgs/ak6.png") no-repeat center center / 100% 100%;
  }
  .customTheme {
    background: url("../files/imgs/ak9.png") no-repeat center center / 100% 100%;
  }
}
</style>

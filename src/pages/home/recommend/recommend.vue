<template>
  <div class="recommend">
    <div class="container-box">
      <slide-show></slide-show>

    </div>
  </div>
</template>

<script>
  import slide from '../../slide/slide.vue'



  import {
    mapActions,
    mapState
  } from "vuex";
  export default {
    components: {
      slideShow: slide,

    },

  };

</script>

<style lang="less" scoped>
  .recommend {
    background: #d33a31;
    width: 100%;
    height: 6rem;

  }

  .container-box {}

</style>

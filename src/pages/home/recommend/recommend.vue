<template>
  <div>
    <div class="slideshow-box">
      <div class="slideshow-items">
        <div class="slideshow-list"></div>
        <div class="slideshow-list"></div>
        <div class="slideshow-list"></div>
        <div class="slideshow-list"></div>
        <div class="slideshow-list"></div>

      </div>
    </div>








  </div>
</template>

<script>


  export default {

  }

</script>

<style lang="less" scoped>
  .slideshow-box {
    background: #D33A31;
    width: 100%;
    height: 6rem;
    .slideshow-items {
      background: rgba(0, 0, 0, 0);
      height: 8rem;
      display: flex;
      width: 1180vw;


      .slideshow-list {
        background: pink;
        width: 95vw;
        height: 9rem;
        margin: 0 .6rem;
        border-radius: 0.2rem;
      }
    }
  }

</style>

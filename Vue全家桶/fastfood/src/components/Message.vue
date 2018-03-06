<template>
  <div class="message-wrapper">
    <p>{{msg}}</p>
    <hr>
    <div>
      <!--<router-view></router-view>-->
      <router-view name="left"></router-view>
      <br>
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: '单页面多路由区域操作'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .message-wrapper {
    background-color: yellowgreen;
    p {
      font-size: 1.5rem;
    }
  }
</style>

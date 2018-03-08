<template>
  <div class="page01-wrapper">
    {{msg}}
    <hr>
    <!--<p>$route: {{JSON.toString($route)}}</p>-->
    <!--<p>$router: {JSON.toString($router)}}</p>-->
    <p>$route.query: {{$route.query}}</p>
    <p>新闻1_ID：{{ $route.query.newsId}}</p>
    <p>新闻1_标题：{{ $route.query.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'page01',
  data () {
    return {
      msg: 'page01-router'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .page01-wrapper {
    background-color: yellow;
    font-size: 1.5rem;
  }
</style>

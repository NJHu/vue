<template>
  <div class="page03-wrapper">
    {{msg}}
    <p>新闻3ID：{{ $route.query.newsId}}</p>
    <p>新闻3标题：{{ $route.query.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'page03',
  data () {
    return {
      msg: 'page03-router'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$router)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .page03-wrapper {
    background-color: greenyellow;
    font-size: 1.5rem;
  }
</style>

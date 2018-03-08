<template>
  <div class="page02-wrapper">
    {{msg}}
    <p>新闻2ID：{{ $route.query.newsId}}</p>
    <p>新闻2标题：{{ $route.query.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'page02',
  data () {
    return {
      msg: 'page02-router'
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
  .page02-wrapper {
    background-color: rosybrown;
    font-size: 1.5rem;
  }
</style>

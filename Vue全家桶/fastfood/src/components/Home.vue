<template>
  <div class="home-wrapper">
    <p>新闻ID：{{ $route.query.newsId}}</p>
    <p>新闻标题：{{ $route.query.newsTitle}}</p>
    <div>
      <p>router-link: </p>
      <router-link to="/page01">去到page01</router-link>
      <p>query 传递参数: </p>
      <router-link :to="{path: '/page01', query: {newsId: '4375', newsTitle: '我是新闻标题'}}">去到page01有参数</router-link>
      <p>Vuex: </p>
      <router-link :to="{path: '/vuexlearn', query: {}}">Vuex_store</router-link>
    </div>
    <hr>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'HomeHomeHomeHome'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$router)
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开路由模板')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home-wrapper {
    background-color: yellow;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }

  a {
    border: solid red 2px;
  }
</style>

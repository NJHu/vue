<template>
  <div class="new-wrapper">
    <p>{{msg}}</p>
    <p>this.$router.name = {{this.$router.name}}</p>
    <p>$router.name = {{$router.name}}</p>
    <p>$route.name = {{$route.name}}</p>
    <p>this.$route.name = {{this.$route.name}}</p>
  <div>
    <router-view class="aaa"></router-view>
  </div>

    <button @click="changeClick">切换路由</button>
  </div>
</template>

<script>
export default {
  name: 'new',
  data () {
    return {
      msg: 'vue-router配置子路由router-view'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
  },
  methods: {
    changeClick: function () {
      console.log(this.$route.path)
      if (this.$route.path === '/tabBar/new/page02') {
        this.$router.replace({path: '/tabBar/new/page03', query: {}})
      } else {
        this.$router.replace({path: '/tabBar/new/page02', query: {}})
      }
      console.log(this.$route.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .new-wrapper {
    background-color: aliceblue;
    font-size: 1.5rem;
    button {
      border: 1px solid red;
      font-size: 1.5rem;
    }
  }
</style>

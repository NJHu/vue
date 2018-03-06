<template>
  <div class="tabar-wrapper">
    <!--<router-link :to="{path: '/tabBar/home', query: {id: '123456'}}">goHome</router-link>-->
    <!--<router-link to="/tabBar/home">gogogo</router-link>-->
    <div class="tabar-contents">
        <router-view></router-view>
    </div>
    <div class="bottom-tabbar">
      <span @click="tabBarClick({path:'/tabBar/home'})">首页</span>
      <span @click="tabBarClick({path:'/tabBar/new'})">新新</span>
      <span @click="tabBarClick({path:'/tabBar/message'})">消息</span>
      <span @click="tabBarClick({path:'/tabBar/me'})">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
  },
  methods: {
    tabBarClick: function (selectedPage) {
      if (selectedPage.path === '/tabBar/me') {
        this.$router.push({path: '/login', query: {}})
        return
      }
      this.$router.replace({path: selectedPage.path, query: {}})
      console.log(this.$route.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .tabar-wrapper {
    background-color: red;
    .tabar-contents {
      margin-bottom: 49px;
      overflow: hidden;
    }
    .bottom-tabbar {
      position: fixed;
      height: 49px;
      background-color: red;
      width: 100%;
      bottom: 0;
      span {
        display: inline-block;
        width: 20%;
        height: 100%;
        background-color: green;
        text-align: center;
        vertical-align: middle;
        margin: 0;
        padding: 0;
        border: 0;
      }
    }
  }
</style>

<!--页面入口文件-->

<template>
  <div id="app-wrapper">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  #app-wrapper {
    background-color: black;
    .fade-enter {
      opacity: 0;
    }
    .fade-leave {
      opacity: 1;
    }
    .fade-enter-active {
      transition: opacity .5s;
    }
    .fade-leave-active {
      opacity: 0;
      transition: opacity .5s;
    }
  }
</style>

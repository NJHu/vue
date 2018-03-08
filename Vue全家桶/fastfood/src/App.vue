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
  /*fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。*/
  /*fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。*/
  /*fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。*/
  /*fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。*/
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

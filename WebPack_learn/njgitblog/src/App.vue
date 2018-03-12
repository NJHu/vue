<template>
  <div id="app-window">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app-window {
  background-color: red;
  min-width: 1012px;
}
</style>

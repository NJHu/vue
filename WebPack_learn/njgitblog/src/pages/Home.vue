<template>
  <div class="home-wrapper">
    <left-nav></left-nav>
    <div class="main">
      <router-view name="poscontent"></router-view>
    </div>
  </div>
</template>

<script>
import LeftNav from '../components/LeftNav.vue'
export default {
  name: 'home',
  components: {
    'left-nav': LeftNav
  },
  data () {
    return {
      msg: 'HomeMsg'
    }
  },
  mounted: function () {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home-wrapper {
    .main {
      float:left;
      width:95%;
      background-color: #EFF2F7;
      overflow: auto;
    }
  }
</style>

<template>
  <div class="login-wrapper">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login-wrapper'
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
  .login-wrapper {
    background-color: yellow;
  }
</style>

<template>
  <div class="me-wrapper">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'Mememememememe'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .me-wrapper {
    background-color: green;
  }
</style>

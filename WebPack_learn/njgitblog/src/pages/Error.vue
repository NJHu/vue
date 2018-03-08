<template>
  <div class="error-wrapper">
    <p>{{msg}}</p>

    <button @click="goback">goback返回</button>
    <button @click="goHome">push首页</button>
    <button @click="replaceHome">replace首页</button>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: '404!'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$router)
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    },
    replaceHome () {
      this.$router.replace('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .error-wrapper {
    background-color: red;
    p {
      font-size: 3rem;
      color: green;
      text-align: center;
    }
    button {
      border: solid 1px red;
      font-size: 1.5rem;
    }
  }
</style>

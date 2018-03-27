<template>
  <div class="app-wrapper" style="background-color: white">
  <ul>
    <!--<li><a href="/">Home</a></li>-->
    <!--<li><a href="/about">about</a></li>-->
    <!--<li><a href="/news">news</a></li>-->
    <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
    <li><nuxt-link :to="{path: 'about'}">about</nuxt-link></li>
    <li><nuxt-link :to="{name: 'news', params: {newsId: 123}}">news</nuxt-link></li>

    <li><nuxt-link :to="{path: 'news', query: {newsId: 456}}">news</nuxt-link></li>
  </ul>

    <h1>姓名：{{info.name}}</h1>
    <h2>年龄：{{info.age}}</h2>
    <h2>兴趣：{{info.interest}}</h2>
    <div><img src="~static/Snip20170413_1.png"/></div>
  </div>
</template>

<script>
  import NuxtLink from "../.nuxt/components/nuxt-link";
  import axios from 'axios'
  export default {
    components: {NuxtLink},
    data () {
      return {
        info: {}
      }
    },
    async asyncData () {
      let {data} = await axios.get('https://api.myjson.com/bins/14p2l3')
      return {info: data}
    }
  }
</script>

<style>

</style>

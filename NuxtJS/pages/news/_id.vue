<template>
  <div>
    <h2>news-content--[{{$route.query.newsId}}]</h2>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: this.$route.query.title
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description-content-id', age: 'news', content: 'this is news page'}
        ]
      }
    }
  }
</script>

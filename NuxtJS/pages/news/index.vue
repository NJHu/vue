<template>
  <div>
    <h2>news page</h2>
    <hr>
    <h2>name: {{$route.name}}</h2>
    <h2>path: {{$route.path}}</h2>
    <hr>
    <h2>params: {{$route.params}}</h2>
    <h2>query: {{$route.query}}</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <!--<li><a href="/news/123">content</a></li>-->
      <!--<li><a href="/news/456">content</a></li>-->
      <!--<li><nuxt-link :to="{path: 'news', query: {newsId: 456}}">news</nuxt-link></li>-->
      <nuxt-link :to="{path: 'news/_id', query: {newsId: 123}}">content</nuxt-link>
      <hr>
      <nuxt-link :to="{path: 'news/_id', query: {newsId: 456, title: '我是标题'}}">content</nuxt-link>
    </ul>
  </div>
</template>

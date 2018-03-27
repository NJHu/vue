module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'y',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~assets/css/normailze.css',
    '~assets/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: 'green'},
  /*
  ** Build configuration
  */
  build: {

    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

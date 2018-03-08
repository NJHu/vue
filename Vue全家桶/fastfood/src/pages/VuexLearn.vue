<template>
  <div class="vuex-learn-wrapper">
    <div>
      <p>
        $store.state.count = {{$store.state.count}}
      </p>
      <p>
        this.$store.state.count = {{this.$store.state.count}}
      </p>
      <p>dataCount: this.$store.state.count = {{dataCount}}</p>
      <p>computed == {{stateCount}}</p>
      <p>computed...mapState(['count']) = |{{count}}|</p>
    </div>
    <hr>
    <div>
      <p>
        $store.commit('add')
        <button @click="$store.commit('add', 3)"> 加法 </button>
      </p>
      <p>
        $store.commit('reduce')
        <button @click="$store.commit('reduce')"> 减法 </button>
      </p>
    </div>
    <hr>
    <div>
      <p>
        ...mapMutations(['add', 'reduce'])
        <button @click="add(2)"> 加法 </button>
      </p>
      <p>
        ...mapMutations(['add', 'reduce'])
        <button @click="reduce"> 减法 </button>
      </p>
    </div>
    <hr>
    <div>
      <p>
        ...mapActions(['addAction', 'reduceAction'])
        <button @click="addAction"> 加法 </button>
      </p>
      <p>
        ...mapActions(['addAction', 'reduceAction'])
        <button @click="reduceAction"> 减法 </button>
      </p>
    </div>
    <hr>
    <div>
      <p>...mapGetters(['phoneNum']): {{phoneNum}}</p>
      <p>this.$store.getters.phoneNum: {{getPhoneNum}}</p>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'new',
  data () {
    return {
      msg: 'vuex-learn',
      dataCount: this.$store.state.count
    }
  },
  mounted: function () {
    console.log(mapState)
    console.log(mapMutations)
    console.log(mapGetters)
    console.log(mapActions)
  },
  store,
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  computed: {
    stateCount: function () {
      return this.$store.state.count
    },
    ...mapState(['count']),
    ...mapGetters(['phoneNum']),
    getPhoneNum () {
      return this.$store.getters.phoneNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .vuex-learn-wrapper {
    background-color: yellow;
    font-size: 1.5rem;
    button {
      font-size: 1.5rem;
      border: 1px solid red;
    }
  }
</style>

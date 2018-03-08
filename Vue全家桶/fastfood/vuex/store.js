
// 引入 vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  phoneNum: 'yy13288888888xxxxxxx'
}

// 转变
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  phoneNum: function (state) {
    return state.phoneNum.substr(2, 11)
  }
}

const actions = {
  addAction: function (context) {
    context.commit('add', 5)
  },
  // reduceAction: function (context) {
  //   context.commit('reduce')
  // }
  reduceAction: function ({commit}) {
    setTimeout(function () {
      commit('reduce')
    }, 2000)
    console.log('我先执行')
  }
}

// 创建 store
const store = new Vuex.Store({
  state, mutations, getters, actions
})

// export default 封装代码
export default store

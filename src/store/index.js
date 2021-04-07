import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newModal:false
  },
  mutations: {
    changeNewModal(state,payload){
      state.newModal = payload
    }
  },
  actions: {
  },
  getters: {
    getNewModal(state){
      return state.newModal
    }
  },
  modules: {
  }
})

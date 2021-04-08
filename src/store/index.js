import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newModal:false,
    receipt: [],
    dorilar: [],
  },
  mutations: {
    changeNewModal(state,payload){
      state.newModal = payload
    },
    addReceipt(state,payload){
      state.receipt.push(payload)
    },
    addDori(state,payload){
      state.dorilar.push(payload)
    },
    toDorilar(state,payload){
      state.dorilar = payload
    },
    toReceipt(state,payload){
      state.receipt = payload
    }
  },
  actions: {
    addNewDori(context,payload){
      axios.post('http://localhost:3000/dorilar',payload).then(response => {
        context.commit('addDori',response.data)
      })
    },
    allDorilar(context){
      axios.get('http://localhost:3000/dorilar').then(response => {
        context.commit('toDorilar',response.data)
      })
    },
    allReceipt(context){
      axios.get('http://localhost:3000/receipt').then(response => {
        context.commit('toReceipt',response.data)
      })
    }
  },
  getters: {
    getNewModal(state){
      return state.newModal
    },
    getDorilar(state){
      return state.dorilar
    },
    getReDorilar(state){
      return byId => {
        return state.dorilar.filter(item => {
          return item.reid == byId
        })
      }
    },
    getCompany(state){
      return bid => {
      let com=  state.receipt.find(i => i.id == bid)
      return com.company  
      }
    },
    getAllSum(state){
      return byId => {
        let summa = 0
        state.dorilar.forEach(i => {
            if (i.reid == byId){
              summa += i.bonarhi*i.qadoq
            }
        })
        return summa
      }
    }
  },
  modules: {
  }
})

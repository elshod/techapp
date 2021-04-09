import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newModal:false,
    newCompModal:false,
    receipt: [],
    dorilar: [],
    company: [],
  },
  mutations: {
    changeNewModal(state,payload){
      state.newModal = payload
    },
    changeNewCompModal(state,payload){
      state.newCompModal = payload
    },
    addCompany(state,payload){
      state.company.push(payload)
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
    },
    toCompany(state,payload){
      state.company = payload
    }
  },
  actions: {
    addNewCompany(context,payload){
      axios.post('http://localhost:3000/company',payload).then(response => {
        context.commit('addCompany',response.data)
      })
    },
    allCompany(context){
      axios.get('http://localhost:3000/company').then(response => {
        context.commit('toCompany',response.data)
      })
    },
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
    getAllCompany(state){
      return state.company
    },
    getByCompany(state){
      return byId => {
        return state.company.filter(item => {
          return item.id == byId
        })
      }
    },
    getNewModal(state){
      return state.newModal
    },
    getNewCompModal(state){
      return state.newCompModal
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
        console.log(bid)
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

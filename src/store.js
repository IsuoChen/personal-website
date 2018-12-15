import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    pageName: ''
  },
  mutations: {
    LoadingCircular (state, { isLoading }) {
      state.isLoading = isLoading
    },
    SetPageName (state, { name }) {
      state.pageName = name
    }
  },
  actions: {

  }
})

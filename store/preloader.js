import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    loading: false
  },
  mutations: {
    CHANGE_PRELOADER_STATUS (state, boolean) {
      state.loading = boolean
    }
  }
}

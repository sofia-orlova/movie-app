import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      tv: {}
    }
  },
  getters: {
    setTv ({ tv }) {
      tv.imageLink = getImageLink('medium', tv.poster_path || tv.profile_path)
      return tv
    }
  },
  mutations: {
    SET_TV (state, tvResponseData) {
      state.tv = tvResponseData
    }
  },
  actions: {
    async getTv ({ commit, state }, { id }) {
      const oneTv = await this.$axios.get(`/tv/${id}`)
      commit('SET_TV', oneTv.data)
    }
  }
}

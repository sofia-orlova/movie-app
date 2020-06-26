import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state: {
    trends: {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    }
  },
  getters: {
    mapDailyTrends ({ trends }) {
      return trends.results.map((item) => {
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        item.name = item.name || item.title
        return item
      })
    }
  },
  mutations: {
    SET_DAILY_TRENDS (state, responseData) {
      state.trends = responseData
    }
  },
  actions: {
    async getDailyTrends ({ commit }) {
      const result = await this.$axios.get('/trending/all/day', {
      })
      commit('SET_DAILY_TRENDS', result.data)
    }
  }
}

import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      trends: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      },
      populars: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      },
      loading: false
    }
  },
  getters: {
    mapTrends ({ trends }) {
      return trends.results.map((item) => {
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        item.name = item.name || item.title
        item.releaseDate = item.release_date || item.first_air_date
        item.rating = item.vote_average * 10
        return item
      })
    },
    mapPopulars ({ populars }) {
      return populars.results.map((item) => {
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        item.name = item.name || item.title
        item.releaseDate = item.release_date || item.first_air_date
        item.rating = item.vote_average * 10
        return item
      })
    }
  },
  mutations: {
    SET_TRENDS (state, responseData) {
      state.trends = responseData
    },
    SET_POPULARS (state, responseData) {
      state.populars = responseData
    },
    SET_LOADING (state, boolean) {
      state.loading = boolean
    }
  },
  actions: {
    async getDailyTrends ({ commit }) {
      const result = await this.$axios.get('/trending/all/day', {
      })
      commit('SET_TRENDS', result.data)
    },
    async getWeeklyTrends ({ commit }) {
      const result = await this.$axios.get('/trending/all/week', {
      })
      commit('SET_TRENDS', result.data)
    },
    async getPopularMovies ({ commit }) {
      const result = await this.$axios.get('/movie/popular', {
      })
      commit('SET_POPULARS', result.data)
    },
    async getPopularTv ({ commit }) {
      const result = await this.$axios.get('/tv/popular', {
      })
      commit('SET_POPULARS', result.data)
    }
  }
}

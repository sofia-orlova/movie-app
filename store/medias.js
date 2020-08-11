import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
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
    SET_POPULARS (state, responseData) {
      state.populars = responseData
    },
    SET_LOADING (state, boolean) {
      state.loading = boolean
    }
  },
  actions: {
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

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
      loading: false,
      slots: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      }
    }
  },
  getters: {
    mapPopulars ({ populars }) {
      return populars.results.map((item) => {
        const actorWorkList = item.known_for ? item.known_for.map((el) => {
          return el.name || el.title
        }).join(', ') : ''
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        item.name = item.name || item.title
        item.releaseDate = item.release_date || item.first_air_date
        item.rating = item.vote_average * 10
        item.content = actorWorkList || item.overview
        return item
      })
    },
    breackSlots ({ slots }) {
      const array = slots.results
      const size = 3
      const subarray = []
      for (let i = 0; i < Math.ceil(array.length / size); i++) {
        subarray[i] = array.slice((i * size), (i * size) + size)
      }
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
    async getNowPlayingMovies ({ commit }) {
      const result = await this.$axios.get('/movie/now_playing', {
      })
      commit('SET_POPULARS', result.data)
    },
    async getPopularTv ({ commit }) {
      const result = await this.$axios.get('/tv/popular', {
      })
      commit('SET_POPULARS', result.data)
    },
    async getPopularPeople ({ commit }) {
      const result = await this.$axios.get('/person/popular', {
      })
      commit('SET_POPULARS', result.data)
    }
  }
}

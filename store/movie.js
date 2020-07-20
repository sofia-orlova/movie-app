import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      movie: {}
    }
  },
  getters: {
    setMovie ({ movie }) {
      movie.imageLink = getImageLink('medium', movie.poster_path || movie.profile_path)
      movie.backgroungImage = getImageLink('medium', movie.backdrop_path)
      return movie
    }
  },
  mutations: {
    SET_MOVIE (state, movieResponseData) {
      state.movie = movieResponseData
    }
  },
  actions: {
    async getMovie ({ commit, state }, { id }) {
      const oneMovie = await this.$axios.get(`/movie/${id}`)
      commit('SET_MOVIE', oneMovie.data)
    }
  }
}

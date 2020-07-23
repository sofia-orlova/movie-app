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
      movie.movieGenres = movie.genres.map((el) => {
        return el.name
      }).join(', ')
      movie.imageLink = getImageLink('medium', movie.poster_path || movie.profile_path)
      movie.backgroungImage = getImageLink('medium', movie.backdrop_path)
      movie.releaseYear = new Date(movie.release_date).getFullYear()
      movie.releaseDate = movie.release_date || movie.first_air_date
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

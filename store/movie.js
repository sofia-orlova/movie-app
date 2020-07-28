import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      movie: {},
      movieKeywords: {
        id: 0,
        keywords: []
      },
      similarMovies: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      }
    }
  },
  getters: {
    setMovie ({ movie }) {
      movie.movieGenres = movie.genres.map((el) => {
        return el.name
      }).join(', ')
      movie.productionCountries = movie.production_countries.map((el) => {
        return el.iso_3166_1
      }).join(', ')
      movie.imageLink = getImageLink('medium', movie.poster_path || movie.profile_path)
      movie.backgroungImage = getImageLink('medium', movie.backdrop_path)
      movie.releaseYear = new Date(movie.release_date).getFullYear()
      movie.releaseDate = movie.release_date || movie.first_air_date
      movie.movieBudget = new Intl.NumberFormat('en-EN').format(movie.budget)
      movie.movieRevenue = new Intl.NumberFormat('en-EN').format(movie.revenue)
      movie.collectionBackground = getImageLink('medium', movie.belongs_to_collection.poster_path)
      return movie
    }
  },
  mutations: {
    SET_MOVIE (state, movieResponseData) {
      state.movie = movieResponseData
    },
    SET_MOVIE_KEYWORDS (state, keywordsResponse) {
      state.movieKeywords = keywordsResponse
    },
    SET_SIMILAR_MOVIES (state, similarMoviesResponse) {
      state.similarMovies = similarMoviesResponse
    }
  },
  actions: {
    async getMovie ({ commit, state }, { id }) {
      const oneMovie = await this.$axios.get(`/movie/${id}`)
      commit('SET_MOVIE', oneMovie.data)
    },
    async getMovieKeywords ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/keywords`)
      commit('SET_MOVIE_KEYWORDS', result.data)
    },
    async getSimilarMovies ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/similar`)
      commit('SET_SIMILAR_MOVIES', result.data)
    }
  }
}

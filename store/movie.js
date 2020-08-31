import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'
import getVideoImage from '../plugins/helpers/getVideoImage'
import getVideoLink from '../plugins/helpers/getVideoLink'

Vue.use(Vuex)

export default {
  state () {
    return {
      movie: {},
      movieKeywords: {
        id: 0,
        keywords: []
      },
      recommendations: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      },
      movieImages: {},
      movieVideos: {
        id: 0,
        results: []
      },
      movieReviews: {
        id: 0,
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
      movie.collectionBackground = movie.belongs_to_collection ? getImageLink('medium', movie.belongs_to_collection.poster_path) : null
      return movie
    },
    setMovieRecommendations ({ recommendations }) {
      return recommendations.results.map((item) => {
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        return item
      })
    },
    setMovieImages ({ movieImages }) {
      return movieImages.posters.map((item) => {
        item.imageLink = getImageLink('medium', item.file_path)
        return item
      })
    },
    setMovieVideos ({ movieVideos }) {
      return movieVideos.results.map((item) => {
        item.videoImage = getVideoImage(item.key)
        item.videoLink = getVideoLink(item.key)
        return item
      })
    }
  },
  mutations: {
    SET_MOVIE (state, movieResponseData) {
      state.movie = movieResponseData
    },
    SET_MOVIE_KEYWORDS (state, keywordsResponse) {
      state.movieKeywords = keywordsResponse
    },
    SET_MOVIE_RECOMMENDATIONS (state, MovieRecommendationsResponse) {
      state.recommendations = MovieRecommendationsResponse
    },
    SET_MOVIE_IMAGES (state, MovieImagesResponse) {
      state.movieImages = MovieImagesResponse
    },
    SET_MOVIE_VIDEOS (state, MovieVideosResponse) {
      state.movieVideos = MovieVideosResponse
    },
    SET_MOVIE_REVIEWS (state, MovieVideosResponse) {
      state.movieReviews = MovieVideosResponse
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
    async getMovieRecommendations ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/recommendations`)
      commit('SET_MOVIE_RECOMMENDATIONS', result.data)
    },
    async getMovieImages ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/images`)
      commit('SET_MOVIE_IMAGES', result.data)
    },
    async getMovieVideos ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/videos`)
      commit('SET_MOVIE_VIDEOS', result.data)
    },
    async getMovieReviews ({ commit, state }, { id }) {
      const result = await this.$axios.get(`/movie/${id}/reviews`)
      commit('SET_MOVIE_REVIEWS', result.data)
    }
  }
}

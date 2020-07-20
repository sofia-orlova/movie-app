import Vue from 'vue'
import Vuex from 'vuex'
import getImageLink from '../plugins/helpers/getImageLink'

Vue.use(Vuex)
export default {
  state () {
    return {
      searchPhrase: '',
      searchResult: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      },
      filter: {
        criterion: ''
      }
    }
  },
  getters: {
    setSearchResult ({ searchResult }) {
      return searchResult.results.map((item) => {
        const actorWorkList = item.known_for ? item.known_for.map((el) => {
          return el.name || el.title
        }).join(',') : ''
        item.imageLink = getImageLink('medium', item.poster_path || item.profile_path)
        item.releaseDate = item.release_date || item.first_air_date
        item.name = item.name || item.title
        item.content = actorWorkList || item.overview
        return item
      })
    },
    getPagination ({ searchResult }) {
      // eslint-disable-next-line camelcase
      const { page, total_pages, total_results } = searchResult
      return {
        page,
        totalPages: total_pages,
        totalResults: total_results
      }
    }
  },
  mutations: {
    SET_SEARCH_PHRASE (state, searchPhrase) {
      state.searchPhrase = searchPhrase
    },
    SET_SEARCH_RESULT (state, searchResponseData) {
      state.searchResult = searchResponseData
    },
    SET_PAGE (state, page) {
      state.searchResult.page = page
    },
    SET_FILTER_CRITERIA ({ filter }, criteria) {
      Vue.set(filter, 'criterion', criteria)
    }
  },
  actions: {
    async getSearchByMovies ({ commit, state }) {
      const result = await this.$axios.get('/search/movie', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    },
    async getSearchByTvShows ({ commit, state }) {
      const result = await this.$axios.get('/search/tv', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    },
    async getSearchByPeople ({ commit, state }) {
      const result = await this.$axios.get('/search/person', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    },
    async getSearchByKeyWords ({ commit, state }) {
      const result = await this.$axios.get('/search/keyword', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    },
    async getSearchByCollections ({ commit, state }) {
      const result = await this.$axios.get('/search/collection', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    },
    async getSearchByCompanies ({ commit, state }) {
      const result = await this.$axios.get('/search/company', {
        params: {
          query: state.searchPhrase,
          page: state.searchResult.page
        }
      })
      commit('SET_SEARCH_RESULT', result.data)
    }
  }
}

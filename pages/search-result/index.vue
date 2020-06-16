<template>
  <div>
    <div v-if="searchData.length">
      <h1>Search results are here</h1>
      <h2>{{ searchResult.total_results }}</h2>
      <search-movie-card
        v-for="(searchItem, index) in searchData"
        :key="index"
        :search-item="searchItem"
      />
      <el-pagination
        layout="prev, pager, next"
        :page-count="pagination.totalPages"
        :current-page="pagination.page"
        @current-change="changePage"
      />
    </div>
    <div v-else>
      <h2>По вашему запросу ничего не найдено</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SearchMovieCard from '../../components/SearchMovieCard'
export default {
  name: 'SearchResult',
  layout: 'default',
  components: { SearchMovieCard },
  async fetch () {
    const searchPhrase = new URLSearchParams(window.location.search).get('search')
    this.$preloader.startPreloader()
    if (searchPhrase) {
      await this.$store.commit('search/SET_SEARCH_PHRASE', searchPhrase)
      await this.$store.dispatch('search/getSearchResults')
    }
    this.$preloader.stopPreloader()
    console.log(window.location.search)
  },
  computed: {
    ...mapState('search', {
      searchPhraseQuery: state => state.searchQuery,
      searchResult: state => state.searchResult
    }),
    ...mapState('preloader', {
      preloaderStatus: state => state.loading
    }),
    ...mapGetters('search',
      {
        searchData: 'getSearchResult',
        pagination: 'getPagination'
      }
    )
  },
  methods: {
    ...mapMutations('search', ['SET_PAGE']),
    ...mapActions('search', [
      'getSearchResults'
    ]),
    async changePage (page) {
      this.$preloader.startPreloader()
      await this.SET_PAGE(page)
      await this.getSearchResults()
      this.$preloader.stopPreloader()
    }
  }
}
</script>

<style scoped>

</style>

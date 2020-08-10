<template>
  <div>
    <search-bar class="search-bar" />
    <hr>
    <div class="search-result">
      <el-row v-if="searchData.length">
        <el-col
          :lg="6"
          :md="6"
          :sm="24"
        >
          <search-filter @changeFilter="changeFilter" />
        </el-col>
        <el-col
          :lg="18"
          :md="18"
          :sm="24"
        >
          <search-movie-card
            v-for="(searchItem, index) in searchData"
            :key="index"
            :search-item="searchItem"
            :filter-criteria="filterCriteria"
          />
        </el-col>
        <el-col :span="24">
          <el-pagination
            class="search-result__pagination"
            layout="prev, pager, next"
            :page-count="pagination.totalPages"
            :current-page="pagination.page"
            @current-change="changePage"
          />
        </el-col>
      </el-row>
      <div v-else>
        <h2>По вашему запросу ничего не найдено</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SearchMovieCard from '../components/search/SearchMovieCard'
import SearchFilter from '../components/search/SearchFilter'
import SearchBar from '../components/search/SearchBar'
export default {
  name: 'SearchResult',
  layout: 'main',
  components: { SearchMovieCard, SearchFilter, SearchBar },
  async fetch () {
    const searchPhrase = new URLSearchParams(window.location.search).get('search')
    this.$preloader.startPreloader()
    if (searchPhrase) {
      await this.$store.commit('search/SET_SEARCH_PHRASE', searchPhrase)
      await this.$store.dispatch('search/getSearchByMovies')
    }
    this.$preloader.stopPreloader()
    console.log(window.location.search)
    console.log(this)
  },
  computed: {
    ...mapState('search', {
      searchPhraseQuery: state => state.searchQuery,
      filterCriteria: state => state.filter.criterion
    }),
    ...mapState('preloader', {
      preloaderStatus: state => state.loading
    }),
    ...mapGetters('search',
      {
        searchData: 'setSearchResult',
        pagination: 'getPagination'
      }
    )
  },
  methods: {
    ...mapMutations('search', ['SET_PAGE', 'SET_FILTER_CRITERIA']),
    ...mapActions('search', [
      'getSearchByMovies',
      'getSearchByTvShows',
      'getSearchByPeople',
      'getSearchByCompanies',
      'getSearchByKeyWords',
      'getSearchByCollections'
    ]),
    async changeFilter (action) {
      await this.SET_FILTER_CRITERIA(action)
      await this.SET_PAGE(1)
      await this.getResult()
    },
    async getResult () {
      switch (this.filterCriteria) {
        case 'tvShows':
          await this.getSearchByTvShows()
          break
        case 'people':
          await this.getSearchByPeople()
          break
        case 'companies':
          await this.getSearchByCompanies()
          break
        case 'keyWords':
          await this.getSearchByKeyWords()
          break
        case 'collections':
          await this.getSearchByCollections()
          break
        default:
          await this.getSearchByMovies()
          break
      }
    },
    async changePage (page) {
      this.$preloader.startPreloader()
      await this.SET_PAGE(page)
      await this.getResult()
      this.$preloader.stopPreloader()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  max-width: 1140px;
  margin: 0 auto;
}
.search-result {
  padding: 20px;
  .search-result__pagination {
    text-align: center;
    margin-top: 10px;
  }
}
/deep/ {
  .search-form__wrapper {
    .search-form__input {
      padding-right: 0 !important;
    }
    .search-form__submit {
      display: none;
    }
    /deep/ {
      .el-input__inner {
      border-radius: 0;
      border: none;
      }
    }
  }
}
</style>

<template>
  <div class="search-filters">
    <p class="search-filters__title">
      {{ searchFilters.title }}
    </p>
    <el-button
      v-for="(filterCriterion, index) in searchFilters.criteria"
      :key="index"
      class="search-filters__button"
      @click="changeFilter(filterCriterion.action)"
    >
      <div>
        {{ filterCriterion.label }}
      </div>
    </el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchFilter',
  data () {
    return {
      searchFilters: {
        title: this.$t('searchFilters.title'),
        criteria: [
          {
            action: 'movies',
            label: this.$t('searchFilters.criteria.movies')
          },
          {
            action: 'tvShows',
            label: this.$t('searchFilters.criteria.tvShows')
          },
          {
            action: 'people',
            label: this.$t('searchFilters.criteria.people')
          },
          {
            action: 'companies',
            label: this.$t('searchFilters.criteria.companies')
          },
          {
            action: 'keyWords',
            label: this.$t('searchFilters.criteria.keyWords')
          },
          {
            action: 'collections',
            label: this.$t('searchFilters.criteria.collections')
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('search', {
      searchResult: state => state.searchResult
    })
  },
  methods: {
    changeFilter (action) {
      this.$emit('changeFilter', action)
    }
  },
  i18n: {
    messages: {
      ru: {
        searchFilters: {
          title: 'Результаты поиска',
          criteria: {
            movies: 'Фильмы',
            tvShows: 'Сериалы',
            people: 'Люди',
            companies: 'Компании',
            keyWords: 'Ключевые слова',
            collections: 'Коллекции'
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/main";
.search-filters{
  display: flex;
  flex-direction: column;
  border: 1px solid $secondary-color;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: 10px;
  &__title {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    background: $secondary-color;
    color: $white;
    padding: 10px 0;
  }
  &__button {
    background: $white;
    border: none;
    font-weight: 700;
    margin-left: 0;
    /deep/ {
      > span {
        display: flex;
        justify-content: space-between;
      }
    }
    &:focus {
      background: $shadow;
      color: $black;
    }
    &:hover {
      background: $shadow;
    }
  }
}
</style>

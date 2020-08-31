<template>
  <div>
    <el-form class="search-form" @submit.native.prevent="submitSearch">
      <div class="search-form__wrapper">
        <el-form-item class="search-form__input">
          <el-input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('searchBar.searchPlaceholder')"
          />
        </el-form-item>
        <el-form-item class="search-form__submit">
          <el-button
            type="submit"
            class="search-form__button"
            @click="submitSearch"
          >
            {{ $t('searchBar.searchButton') }}
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    async submitSearch () {
      this.$router.push({
        path: 'search-result',
        query: { search: this.searchQuery }
      })
      await await this.$store.commit('search/SET_SEARCH_PHRASE', this.searchQuery)
      await this.$store.dispatch('search/getSearchByMovies')
    }
  },
  i18n: {
    messages: {
      ru: {
        searchBar: {
          searchButton: 'Найти',
          searchPlaceholder: 'Найти фильм, сериал, персону...'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main";
.search-form {
  .search-form__wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    .search-form__input {
      width: 100%;
      padding-right: 50px;
    }
    .search-form__submit {
      position: absolute;
      right: 0;
      .search-form__button {
        border: none;
        border-radius: 30px;
        background: linear-gradient(to right, $tertiary-color, $secondary-color);
        color: $white;
        font-weight: 700;
        margin-left: -30px;
        &:hover {
          color: $black;
        }
      }
    }
  }
  /deep/ {
    .el-input__inner {
      height: 38px;
      border-radius: 30px;
    }
  }
}
</style>

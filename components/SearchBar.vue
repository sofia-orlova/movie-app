<template>
  <div>
    <el-form class="search-form" @submit.native.prevent="submitSearch">
      <div class="search-form__wrapper">
        <el-form-item class="search-form__input">
          <el-input
            v-model="searchQuery"
            type="text"
            placeholder="Найти фильм, сериал, персону..."
          />
        </el-form-item>
        <el-form-item class="search-form__submit">
          <el-button
            type="submit"
            class="search-button"
            @click="submitSearch"
          >
            Search
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
    submitSearch () {
      this.$router.replace({
        name: 'search-result',
        query: { search: this.searchQuery }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.search-form__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  .search-button {
    border: none;
    border-radius: 30px;
    background: linear-gradient(to right, #90cea1, #01b4e4);
    color: #ffffff;
    font-weight: 700;
    margin-left: -30px;
    &:hover {
      color: #000000;
    }
  }
  .search-form__input {
    width: 100%;
    padding-right: 50px;
  }
  .search-form__submit {
    position: absolute;
    right: 0;
  }
}

  /deep/ {
    .el-input__inner {
      height: 38px;
      border-radius: 30px;
    }
  }
</style>

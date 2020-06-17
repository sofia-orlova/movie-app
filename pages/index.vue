<template>
  <div class="container">
    <div>
      <logo />
    </div>
    <div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Найти фильм, сериал, персону..."
      >
      <button>GO</button>
    </div>
    <div v-for="(searchItem, index) in searchResults" :key="index">
      {{ searchItem }}
    </div>
  </div>
</template>

<script>
import Logo from '../components/common/Logo.vue'

export default {
  name: 'HomePage',
  components: {
    Logo
  },
  layout: 'default',
  data () {
    return {
      searchResults: [],
      searchQuery: ''
    }
  },
  created () {
    this.getMovie()
  },
  methods: {
    async getMovie () {
      const { data } = await this.$axios.get('/search/movie', {
        params: {
          query: 'Джон Уик'
        }
      })
      this.searchResults = data.results
    }
  }
}
</script>

<style>
</style>

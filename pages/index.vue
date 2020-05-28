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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div>
    <div class="welcome">
      <h1>Добро пожаловать.</h1>
      <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
      <search-bar />
    </div>
  </div>
</template>
<script>
import SearchBar from '../components/SearchBar'
export default {
  name: 'HomePage',
  components: { SearchBar },
  layout: 'default'
}
</script>
<style lang="scss">
  .welcome {
    background: #0169dc;
    color: #ffffff;
    padding: 50px 20px 50px 20px;
    h1 {
      font-size: 45px;
    }
    p {
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 40px;
    }
  }
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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

<template>
  <div class="homepage">
    <div class="homepage__banner">
      <el-row>
        <h1 class="homepage__welcome">
          {{ this.$t('homePage.welcome') }}
        </h1>
        <p class="homepage__tagline">
          {{ this.$t('homePage.tagline') }}
        </p>
        <search-bar />
      </el-row>
    </div>
  </div>
</template>
<script>
import SearchBar from '../components/search/SearchBar'
export default {
  name: 'HomePage',
  components: { SearchBar },
  layout: 'main',
  i18n: {
    messages: {
      ru: {
        homePage: {
          welcome: 'Добро пожаловать.',
          tagline: 'Миллионы фильмов, сериалов и людей. Исследуйте сейчас.'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.homepage {
  .homepage__banner {
    background: #0169dc;
    color: #ffffff;
    padding: 50px 20px 50px 20px;
    .homepage__welcome {
      font-size: 45px;
    }
    .homepage__tagline {
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 40px;
    }
  }
}
</style>

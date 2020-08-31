<template>
  <div>
    <div class="switcher">
      <h2 class="switcher__label">
        {{ $t('popularsCarousel.whatIsPopular') }}
      </h2>
      <div class="switcher__button-wrapper">
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToPopularMovies"
        >
          {{ $t('popularsCarousel.movies') }}
        </el-button>
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToPopularTv"
        >
          {{ $t('popularsCarousel.tvShows') }}
        </el-button>
      </div>
    </div>
    <carousel :carousel-items="trends" :type="type" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Carousel from './Carousel'
export default {
  name: 'PopularsCarousel',
  components: {
    Carousel
  },
  async fetch () {
    this.$store.commit('carousels/SET_LOADING', true)
    await this.$store.dispatch('carousels/getPopularMovies')
    this.$store.commit('carousels/SET_LOADING', false)
  },
  data () {
    return {
      type: 'movie'
    }
  },
  computed: {
    ...mapGetters('carousels',
      {
        trends: 'mapPopulars'
      }
    )
  },
  methods: {
    ...mapActions('carousels', [
      'getPopularMovies',
      'getPopularTv'
    ]),
    async switchToPopularMovies () {
      this.$store.commit('carousels/SET_LOADING', true)
      await this.getPopularMovies()
      this.type = 'movie'
      this.$store.commit('carousels/SET_LOADING', false)
    },
    async switchToPopularTv () {
      this.$store.commit('carousels/SET_LOADING', true)
      await this.getPopularTv()
      this.type = 'tv'
      this.$store.commit('carousels/SET_LOADING', false)
    }
  },
  i18n: {
    messages: {
      ru: {
        popularsCarousel: {
          whatIsPopular: 'Что популярно',
          movies: 'Фильмы',
          tvShows: 'Сериалы'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
@import "assets/scss/homepage-carousels/homepage-carousels-styles";
</style>

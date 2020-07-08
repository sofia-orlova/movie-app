<template>
  <div>
    <div class="switcher">
      <h2 class="switcher__label">
        Что популярно
      </h2>
      <div class="switcher__button-wrapper">
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToPopularMovies"
        >
          Фильмы
        </el-button>
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToPopularTv"
        >
          Сериалы
        </el-button>
      </div>
    </div>
    <carousel :carousel-items="trends" />
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
      this.$store.commit('carousels/SET_LOADING', false)
    },
    async switchToPopularTv () {
      this.$store.commit('carousels/SET_LOADING', true)
      await this.getPopularTv()
      this.$store.commit('carousels/SET_LOADING', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
@import "assets/scss/homepage-carousels/homepage-carousels-styles";
</style>

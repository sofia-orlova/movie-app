<template>
  <div>
    <div class="switcher">
      <h2 class="switcher__label">
        В тренде
      </h2>
      <div class="switcher__button-wrapper">
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToDailyTrends"
        >
          Сегодня
        </el-button>
        <el-button
          round
          size="mini"
          class="switcher__button-item"
          @click="switchToWeeklyTrends"
        >
          На этой неделе
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
  name: 'TrendsCarousel',
  components: {
    Carousel
  },
  async fetch () {
    this.$store.commit('carousels/SET_LOADING', true)
    await this.$store.dispatch('carousels/getDailyTrends')
    this.$store.commit('carousels/SET_LOADING', false)
  },
  computed: {
    ...mapGetters('carousels',
      {
        trends: 'mapTrends'
      }
    )
  },
  methods: {
    ...mapActions('carousels', [
      'getDailyTrends',
      'getWeeklyTrends'
    ]),
    async switchToDailyTrends () {
      this.$store.commit('carousels/SET_LOADING', true)
      await this.getDailyTrends()
      this.$store.commit('carousels/SET_LOADING', false)
    },
    async switchToWeeklyTrends () {
      this.$store.commit('carousels/SET_LOADING', true)
      await this.getWeeklyTrends()
      this.$store.commit('carousels/SET_LOADING', false)
    }
  },
  i18n: {
    messages: {
      ru: {
        TrendsCarousel: {
          InTrend: 'В тренде',
          today: 'Сегодня',
          thisWeek: 'На этой неделе'
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

<template>
  <div>
    <el-row>
      <el-col
        v-for="(trendyItem, index) in trends"
        :key="index"
      >
        {{ trendyItem.name }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'TrendsCarousel',
  async fetch () {
    await this.$store.dispatch('carousels/getDailyTrends')
  },
  computed: {
    ...mapState('carousels', {
      trendies: state => state.trends.results
    }),
    ...mapGetters('carousels',
      {
        trends: 'mapDailyTrends'
      }
    )
  },
  methods: {
    ...mapActions('carousels', [
      'getDailyTrends'
    ])
  }
}
</script>

<style scoped>

</style>

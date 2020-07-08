<template>
  <div class="container">
    <div>
      <populars-carousel />
      <trends-carousel />
    </div>
  </div>
</template>

<script>
import TrendsCarousel from '../components/TrendsCarousel'
import PopularsCarousel from '../components/PopularsCarousel'

export default {
  name: 'HomePage',
  components: {
    TrendsCarousel,
    PopularsCarousel
  },
  layout: 'main'
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container">
    <div>
      <logo />
      <trends-carousel />
    </div>
  </div>
</template>

<script>
import Logo from '../components/common/Logo.vue'
import TrendsCarousel from '../components/TrendsCarousel'

export default {
  name: 'HomePage',
  components: {
    Logo,
    TrendsCarousel
  },
  layout: 'main'
}
</script>

<style lang="scss" scoped>
</style>

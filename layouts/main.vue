<template>
  <div>
    <main-header />
    <div class="main-layout-container">
      <nuxt />
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '../components/common/Header'
import MainFooter from '../components/common/Footer'
export default {
  components: { MainHeader, MainFooter }
}
</script>

<style lang="scss">
@import "../assets/scss/main";
.main-layout-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;
}
</style>

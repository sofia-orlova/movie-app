<template>
  <div>
    <main-header />
    <nuxt />
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
</style>

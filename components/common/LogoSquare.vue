<template>
  <nuxt-link
    :to="localePath('index')"
    class="main-footer__logo"
  >
    <logo-square-svg />
  </nuxt-link>
</template>
<script>
import LogoSquareSvg from '../../assets/logo-square.svg'
export default {
  name: 'LogoSquare',
  components: { LogoSquareSvg }
}
</script>
<style lang="scss" scoped>
  .main-footer__logo {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
</style>

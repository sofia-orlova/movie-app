<template>
  <nuxt-link :to="localePath('index')">
    <svg-logo class="logo" />
  </nuxt-link>
</template>
<script>
import SvgLogo from '../../assets/images/svg/logo.svg'
export default {
  name: 'Logo',
  components: {
    SvgLogo
  }
}
</script>
<style lang="scss" scoped>
.logo {
  max-width: 150px;
}
</style>

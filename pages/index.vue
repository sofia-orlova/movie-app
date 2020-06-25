<template>
  <div class="container">
    <div>
      <logo />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'HomePage',
  components: {
    Logo
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>
</style>

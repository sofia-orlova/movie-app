<template>
  <div>
    <preloader v-if="loading == true" />
    <nuxt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Preloader from '../components/Preloader'
export default {
  name: 'DefaultLayout',
  components: { Preloader },
  computed: {
    ...mapState('preloader', {
      loading: state => state.loading
    })
  }
}
</script>
<style>

</style>

<template>
  <div>
    {{ tv.name }}
    <img :src="tv.imageLink">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TvPage',
  async fetch ({ route, store }) {
    await store.dispatch('tv/getTv', {
      id: route.params.id
    })
    console.log(route.params)
  },
  computed: {
    ...mapGetters('tv', {
      tv: 'setTv'
    })
  }
}
</script>

<style scoped>

</style>

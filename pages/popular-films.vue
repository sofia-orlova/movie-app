<template>
  <div>
    <h1>Popular films are here</h1>
    <media-template :media-items="popularMovies"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MediaTemplate from '@/components/MediaTemplate'
export default {
  name: 'PopularFilms',
  components: { MediaTemplate },
  layout: 'main',
  async fetch () {
    await this.$store.dispatch('medias/getPopularMovies')
  },
  computed: {
    ...mapGetters('medias',
      {
        popularMovies: 'mapPopulars'
      }
    )
  }
}
</script>

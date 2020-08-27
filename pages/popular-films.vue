<template>
  <div>
    <h1>Popular films are here</h1>
    <el-row>
      <el-col :span="7">
        bla bla bla
      </el-col>
      <el-col :span="17">
        <media-template :media-items="popularMovies" />
      </el-col>
    </el-row>
    <el-row>
      <media-template
        v-for="(partOfSlots, key) in breakedSlots"
        :key="key"
        :media-items="partOfSlots"
      />
    </el-row>
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
        popularMovies: 'mapPopulars',
        breakedSlots: 'breakedSlots'
      }
    )
  }
}
</script>

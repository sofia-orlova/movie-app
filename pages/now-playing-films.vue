<template>
  <div>
    <h1>{{ $t('nowPlayingMoviePage.pageTitle')}}</h1>
    <el-row>
      <el-col :span="7">
        bla bla bla-bla
      </el-col>
      <el-col :span="17">
        <media-template :media-items="NowPlayingMovies" />
      </el-col>
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
    await this.$store.dispatch('medias/getNowPlayingMovies')
  },
  computed: {
    ...mapGetters('medias',
      {
        NowPlayingMovies: 'mapPopulars'
      }
    )
  },
  i18n: {
    messages: {
      ru: {
        nowPlayingMoviePage: {
          pageTitle: 'Смотрят сейчас'
        }
      }
    }
  }
}
</script>

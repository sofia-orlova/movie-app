<template>
  <div class="movie-page">
    <movie-page-profile
      :movie="movie"
      :movie-page-profile-titles="moviePageProfileTitles"
    />
    <el-row :gutter="20">
      <el-col :lg="17" :md="17" :sm="17" :xs="24">
        <movie-page-media
          :movie-page-overview-titles="moviePageOverviewTitles"
          :movie-images="movieImages"
          :movie-videos="MovieVideos"
        />
        <movie-page-collection-banner
          :movie="movie"
          :movie-page-overview-titles="moviePageOverviewTitles"
        />
        <movie-page-carousel
          :similar-movies="recommendations"
          :movie-page-overview-titles="moviePageOverviewTitles"
        />
      </el-col>
      <el-col
        :lg="7"
        :md="7"
        :sm="7"
        :xs="24"
      >
        <movie-page-side-bar
          :movie="movie"
          :movie-page-overview-titles="moviePageOverviewTitles"
          :keywords="keywords"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MoviePageCarousel from '../../components/movie-page/carousel'
import MoviePageSideBar from '../../components/movie-page/moviePageSideBar'
import MoviePageProfile from '../../components/movie-page/moviePageProfile'
import MoviePageCollectionBanner from '../../components/movie-page/moviePageCollectionBanner'
import MoviePageMedia from '../../components/movie-page/moviePageMedia'
export default {
  name: 'MoviePage',
  layout: 'main',
  components: { MoviePageMedia, MoviePageCollectionBanner, MoviePageCarousel, MoviePageSideBar, MoviePageProfile },
  async fetch ({ route, store }) {
    const id = route.params.id
    await store.dispatch('movie/getMovie', { id })
    await store.dispatch('movie/getMovieKeywords', { id })
    await store.dispatch('movie/getMovieRecommendations', { id })
    await store.dispatch('movie/getMovieImages', { id })
    await store.dispatch('movie/getMovieVideos', { id })
  },
  data () {
    return {
      moviePageProfileTitles: {
        overview: this.$t('moviePageProfileTitles.overview')
      },
      moviePageOverviewTitles: {
        originalTitle: this.$t('moviePageOverviewTitles.originalTitle'),
        status: this.$t('moviePageOverviewTitles.status'),
        originalLanguage: this.$t('moviePageOverviewTitles.originalLanguage'),
        budget: this.$t('moviePageOverviewTitles.budget'),
        revenue: this.$t('moviePageOverviewTitles.revenue'),
        keywords: this.$t('moviePageOverviewTitles.keywords'),
        partOfTheCollection: this.$t('moviePageOverviewTitles.partOfTheCollection'),
        viewTheCollection: this.$t('moviePageOverviewTitles.viewTheCollection'),
        recommendations: this.$t('moviePageOverviewTitles.recommendations'),
        media: this.$t('moviePageOverviewTitles.media')
      }
    }
  },
  computed: {
    ...mapGetters('movie', {
      movie: 'setMovie',
      recommendations: 'setMovieRecommendations',
      movieImages: 'setMovieImages',
      MovieVideos: 'setMovieVideos'
    }),
    ...mapState('movie', {
      keywords: state => state.movieKeywords.keywords
    }),
    ...mapState('preloader', {
      preloaderStatus: state => state.loading
    })
  },
  i18n: {
    messages: {
      ru: {
        moviePageProfileTitles: {
          overview: 'Обзор'
        },
        moviePageOverviewTitles: {
          originalTitle: 'Исходное название',
          status: 'Статус',
          originalLanguage: 'Исходный язык',
          budget: 'Бюджет',
          revenue: 'Сборы',
          keywords: 'Ключевые слова',
          partOfTheCollection: 'Часть коллекции: ',
          viewTheCollection: 'Перейти в коллекцию',
          recommendations: 'Рекомендации',
          media: 'Медиа'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
.movie-page {
  position: relative;
}
</style>

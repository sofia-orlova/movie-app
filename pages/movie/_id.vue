<template>
  <div class="movie-page">
    <movie-page-profile
      :movie="movie"
      :movie-page-profile-titles="moviePageProfileTitles"
    />
    <el-row :gutter="20" class="movie-page__info-wrapper">
      <el-col :lg="17" :md="17" :sm="17" :xs="24">
        <movie-page-media
          :movie-page-overview-titles="moviePageOverviewTitles"
          :movie-images="movieImages"
          :movie-videos="movieVideos"
        />
        <movie-page-reviews
          :movie-reviews="movieReviews"
          :movie-page-overview-titles="moviePageOverviewTitles"
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
import MoviePageCarousel from '../../components/movie-page/MoviePageCarousel'
import MoviePageSideBar from '../../components/movie-page/moviePageSideBar'
import MoviePageProfile from '../../components/movie-page/MoviePageProfile'
import MoviePageCollectionBanner from '../../components/movie-page/MoviePageCollectionBanner'
import MoviePageMedia from '../../components/movie-page/MoviePageMedia'
import MoviePageReviews from '@/components/movie-page/MoviePageReviews'
export default {
  name: 'MoviePage',
  layout: 'main',
  components: { MoviePageReviews, MoviePageMedia, MoviePageCollectionBanner, MoviePageCarousel, MoviePageSideBar, MoviePageProfile },
  async fetch ({ route, store }) {
    const id = route.params.id
    await store.dispatch('movie/getMovie', { id })
    await store.dispatch('movie/getMovieKeywords', { id })
    await store.dispatch('movie/getMovieRecommendations', { id })
    await store.dispatch('movie/getMovieImages', { id })
    await store.dispatch('movie/getMovieVideos', { id })
    await store.dispatch('movie/getMovieReviews', { id })
  },
  data () {
    return {
      // into mixin
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
        media: this.$t('moviePageOverviewTitles.media'),
        video: this.$t('moviePageOverviewTitles.video'),
        posters: this.$t('moviePageOverviewTitles.posters'),
        notFound: this.$t('moviePageOverviewTitles.notFound'),
        reviews: this.$t('moviePageOverviewTitles.reviews'),
        readMore: this.$t('moviePageOverviewTitles.readMore'),
        reviewFrom: this.$t('moviePageOverviewTitles.reviewFrom')
      }
    }
  },
  computed: {
    ...mapGetters('movie', {
      movie: 'setMovie',
      recommendations: 'setMovieRecommendations',
      movieImages: 'setMovieImages',
      movieVideos: 'setMovieVideos'
    }),
    ...mapState('movie', {
      keywords: state => state.movieKeywords.keywords,
      movieReviews: state => state.movieReviews.results
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
          media: 'Медиа',
          video: 'Видео',
          posters: 'Постеры',
          notFound: 'Ничего не найдено',
          reviews: 'Рецензии',
          readMore: 'читать далее',
          reviewFrom: 'Обзор от'
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
  .movie-page__info-wrapper {
    padding: 15px 10px;
  }
}
</style>

<template>
  <div class="movie-page">
    <div class="movie-page__profile-wrapper" :style="movieProfileBackground">
      <el-row :gutter="20">
        <el-col
          :span="6"
          class="movie-page__poster-wrapper"
        >
          <el-image :src="movie.imageLink" class="movie-page__poster-image" />
        </el-col>
        <el-col
          :span="18"
          class="movie-page__overview-wrapper"
        >
          <p class="movie-page__movie-title">
            {{ movie.title }}
            <span>
              ({{ movie.releaseYear }})
            </span>
          </p>
          <ul class="movie-page__quick-info">
            <li class="movie-page__release">
              {{ movie.releaseDate }}({{ movie.productionCountries }})
            </li>
            <li>{{ movie.movieGenres }}</li>
            <li v-if="movie.runtime">
              {{ movie.runtime }}m
            </li>
          </ul>
          <p class="movie-page__tagline">
            {{ movie.tagline }}
          </p>
          <h3>{{ moviePageProfileTitles.overview }}</h3>
          <p>
            {{ movie.overview }}
          </p>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="17">
        <nuxt-link :to="localePath({ name: 'collection-id', params: { id: movie.belongs_to_collection.id }})">
          <div class="movie-page__collection-wrapper" :style="movieCollectionBackground">
            <p class="movie-page__collection-title">
              {{ moviePageOverviewTitles.partOfTheCollection }}
              {{ movie.belongs_to_collection.name }}
            </p>
            <p>{{ moviePageOverviewTitles.viewTheCollection }}</p>
          </div>
        </nuxt-link>
      </el-col>
      <el-col :span="7">
        <div class="movie-page__basic-info">
          <h4>{{ moviePageOverviewTitles.originalTitle }}</h4>
          <p>{{ movie.original_title }}</p>
          <h4>{{ moviePageOverviewTitles.status }}</h4>
          <p>{{ movie.status }}</p>
          <h4>{{ moviePageOverviewTitles.originalLanguage }}</h4>
          <p>{{ movie.original_language }}</p>
          <h4>{{ moviePageOverviewTitles.budget }}</h4>
          <p>${{ movie.movieBudget }}</p>
          <h4>{{ moviePageOverviewTitles.revenue }}</h4>
          <p>${{ movie.movieRevenue }}</p>
          <h4>{{ moviePageOverviewTitles.keywords }}</h4>
          <span
            v-for="(keyword, i) in keywords"
            :key="i"
            class="movie-page__keyword"
          >
            {{ keyword.name }}
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'MoviePage',
  layout: 'main',
  async fetch ({ route, store }) {
    await store.dispatch('movie/getMovie', {
      id: route.params.id
    })
    await store.dispatch('movie/getMovieKeywords', {
      id: route.params.id
    })
    await store.dispatch('movie/getSimilarMovies', {
      id: route.params.id
    })
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
        viewTheCollection: this.$t('moviePageOverviewTitles.viewTheCollection')
      }
    }
  },
  computed: {
    ...mapGetters('movie', {
      movie: 'setMovie'
    }),
    ...mapState('movie', {
      keywords: state => state.movieKeywords.keywords
    }),
    movieProfileBackground () {
      return {
        'background-image': `url(${this.movie.backgroungImage})`
      }
    },
    movieCollectionBackground () {
      return {
        'background-image': `url(${this.movie.collectionBackground})`
      }
    }
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
          viewTheCollection: 'Перейти в коллекцию'
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

  .movie-page__profile-wrapper {
    color: $white;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 10px;
    font-size: 15px;
    &:before {
      content: '';
      background: rgba($primary-color, 0.8);
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .movie-page__poster-image {
      border-radius: 10px;
    }
    .movie-page__overview-wrapper {
      .movie-page__movie-title {
        font-size: 24px;
        font-weight: 700;
        > span {
          font-weight: 400;
          color: rgba($white, 0.7);
        }
      }
      .movie-page__quick-info {
        display: flex;
        font-weight: 400;
        padding: 10px 0;
        .movie-page__release {
          list-style: none;
          padding-left: 0;
          &:before {
            content: '\AE';
          }
        }
        > li {
          list-style: inside;
          padding: 0 5px;
        }
      }
      .movie-page__tagline {
        font-style: italic;
        padding-bottom: 15px;
      }
    }
  }
  .movie-page__basic-info {
    p {
      padding-bottom: 10px;
    }
    .movie-page__keyword{
      border-radius: 5px;
      background: $shadow;
      margin-right: 5px;
      padding: 4px;
      line-height: 2;
      font-size: 14px;
    }
  }
  .movie-page__collection-wrapper {
    color: $white;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 10px;
    font-size: 15px;
    z-index: -2;
    border-radius: 10px;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      background: rgba($primary-color, 0.8);
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .movie-page__collection-title {
      color: $white;
      font-size: 24px;
      font-weight: 700;
    }
  }
}
@media all and (max-width: 640px){
  .movie-page__poster-wrapper {
    width: 100%;
  }

  .movie-page__overview-wrapper {
    width: 100%;
    padding: 0 !important;
  }
  .movie-page__quick-info {
    display: block !important;
  }
}
@media all and (min-width: 450px) and (max-width: 640px){
  .movie-page__poster-image {
    max-height: 350px;
  }
  .movie-page__overview-wrapper {
    width: 100%;
  }
}
</style>

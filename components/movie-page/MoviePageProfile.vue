<template>
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
</template>

<script>
export default {
  name: 'MoviePageProfile',
  props: {
    movie: {
      type: Object,
      required: true
    },
    moviePageProfileTitles: {
      type: Object,
      required: true
    }
  },
  computed: {
    movieProfileBackground () {
      return {
        'background-image': `url(${this.movie.backgroungImage})`
      }
    }
  }
}
</script>

<style scoped lang="scss">
    @import "assets/scss/main";
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
    @media all and (max-width: 640px){
      .movie-page__poster-wrapper {
        width: 100%;
      }

      .movie-page__overview-wrapper {
        width: 100%;
        padding: 0;
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

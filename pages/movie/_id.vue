<template>
  <div class="movie-page">
    <div class="movie-page__profile-wrapper" :style="backgroundStyles">
      <el-row class="bg-inner">
        <el-col :span="6">
          <el-image :src="movie.imageLink" class="movie-page__poster-image" />
        </el-col>
        <el-col :span="18" class="movie-page__movie-title">
          {{ movie.title }}
          <span>
            ({{ movie.releaseYear }})
          </span>
          <p>{{ movie.releaseDate }} <span>{{ movie.movieGenres}} </span></p>
        </el-col>
      </el-row>
    </div>
    <div>bla bla bla</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MoviePage',
  layout: 'main',
  async fetch ({ route, store }) {
    await store.dispatch('movie/getMovie', {
      id: route.params.id
    })
    console.log(route.params)
  },
  computed: {
    ...mapGetters('movie', {
      movie: 'setMovie'
    }),
    backgroundStyles () {
      return {
        'background-image': `url(${this.movie.backgroungImage})`
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
    position: relative;
    max-height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    &:before {
      content: '';
      background: rgba($primary-color, 0.8);
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .movie-page__background-image {
      width: 100%;
      z-index: -1;
      position: absolute;
    }
    .movie-page__poster-image {
      border-radius: 10px;
      margin: 0 5px;
    }
    .bg-inner {
      padding: 15px 5px;
    }
    .movie-page__movie-title {
      color: $white;
      font-size: 24px;
      font-weight: 700;
      > span {
        font-weight: 400;
        color: rgba($white, 0.7);
      }
      &:before {
        content: '\AE';
      }
    }
  }
}
</style>

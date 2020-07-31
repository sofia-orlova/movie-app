<template>
  <div>
    <nuxt-link
      v-if="movie.belongs_to_collection"
      :to="localePath({ name: 'collection-id', params: { id: movie.belongs_to_collection.id }})"
    >
      <div class="movie-page__collection-wrapper" :style="movieCollectionBackground">
        <p class="movie-page__collection-title">
          {{ moviePageOverviewTitles.partOfTheCollection }}
          {{ movie.belongs_to_collection.name }}
        </p>
        <p>{{ moviePageOverviewTitles.viewTheCollection }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MoviePageCollectionBanner',
  props: {
    movie: {
      type: Object,
      required: true
    },
    moviePageOverviewTitles: {
      type: Object,
      required: true
    }
  },
  computed: {
    movieCollectionBackground () {
      return {
        'background-image': `url(${this.movie.collectionBackground})`
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main";
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

</style>

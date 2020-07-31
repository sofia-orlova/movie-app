<template>
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
</template>

<script>
export default {
  name: 'MoviePageSideBar',
  props: {
    movie: {
      type: Object,
      required: true
    },
    moviePageOverviewTitles: {
      type: Object,
      required: true
    },
    keywords: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
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
</style>

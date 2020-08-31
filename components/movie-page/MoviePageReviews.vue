<template>
  <div class="movie-page-review">
    <h3>{{ moviePageOverviewTitles.reviews }}</h3>
    <div v-if="movieReviews.length">
      <div v-for="movieReview in movieReviews" :key="movieReview.id" class="movie-page-review__review-container">
        <h4 class="movie-page-review__review-title">
          {{ moviePageOverviewTitles.reviewFrom }} {{ movieReview.author }}
        </h4>
        <p class="movie-page-review__review-content">
          {{ movieReview.content }}<span>
            <a href="#">{{ moviePageOverviewTitles.readMore }}</a>
          </span>
        </p>
      </div>
    </div>
    <div v-else class="movie-page-review__not-found">
      <p>{{ moviePageOverviewTitles.notFound }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviePageReviews',
  props: {
    moviePageOverviewTitles: {
      type: Object,
      required: true
    },
    movieReviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main";
.movie-page-review {
  padding-bottom: 20px;
  .movie-page-review__review-container {
    border: 1px solid $shadow;
    border-radius: 10px;
    box-shadow: 5px 3px 10px $shadow;
    padding: 10px 15px;
    .movie-page-review__review-title {
      padding-bottom: 10px;
    }
    .movie-page-review__review-content {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .movie-page-review__not-found {
    padding-top: 10px;
    padding-bottom: 30px;
  }
}
</style>

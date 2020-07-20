<template>
  <div class="search-card">
    {{ getShowType() }}
    <nuxt-link :to="localePath({ name: getShowType(), params: { id: searchItem.id }})">
      <div class="search-card__wrapper">
        <div class="search-card__image">
          <img :src="searchItem.imageLink">
        </div>
        <div class="search-card__overview-container">
          <p class="search-card__title">
            {{ searchItem.name }}
          </p>
          <p class="search-card__date">
            {{ searchItem.releaseDate }}
          </p>
          <p class="search-card__description">
            {{ searchItem.content }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SearchMovieCard',
  props: {
    searchItem: {
      type: Object,
      required: true
    },
    filterCriteria: {
      type: String,
      required: true
    }
  },
  methods: {
    getShowType () {
      switch (this.filterCriteria) {
        case 'tvShows':
          return 'tv-id'
        case 'people':
          return 'person-id'
        case 'companies':
          return 'company-id'
        case 'keyWords':
          return 'keyword-id'
        case 'collections':
          return 'collection-id'
        default:
          return 'movie-id'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main";
.search-card {

  &__wrapper{
    display: flex;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 3px 10px $shadow;
    margin-bottom: 10px;

    .search-card__image {
      width: 100px;
      img {
        height: 100%;
        width: 100px;
      }
    }

    .search-card__overview-container {
      padding: 10px;
      .search-card__title {
        font-size: 19px;
        font-weight: 700;
      }
      .search-card__date {
        color: #999;
      }
      .search-card__description {
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>

<template>
  <div>
    <nuxt-link :to="{ name: `${getShowType()}`, params: { id: searchItem.id }}">
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
          <p>
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
    }
  },
  methods: {
    getShowType () {
      if (this.searchItem.media_type === 'movie') {
        return 'movie-id'
      } else if (this.searchItem.media_type === 'tv') {
        return 'tv-id'
      } else {
        return 'person-id'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #000000;
  }
.search-card__wrapper{
  display: flex;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 5px #65809a63;
  margin: 10px;
  .search-card__image {
    width: 100px;
    img {
      height: 100%;
      width: 100px;
    }
  }
  .search-card__overview-container {
    padding: 10px;
    p {
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .search-card__title {
      font-size: 19px;
      font-weight: 700;
    }
    .search-card__date {
      color: #999;
    }
  }
}
</style>

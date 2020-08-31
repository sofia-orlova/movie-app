<template>
  <el-row>
    <h2>{{ $t('popularPeoplePage.pageTitle')}}</h2>
    <div class="popular-people">
      <div
        v-for="(popularPerson, index) in popularPeople"
        :key="index"
        class="popular-people__item-wrapper"
      >
        <div class="popular-people__item-container">
          <img :src="popularPerson.imageLink" class="popular-people__item-image">
          <div class="popular-people__item-content">
            <p class="popular-people__item-title">
              {{ popularPerson.name }}
            </p>
            <p class="popular-people__actor-worklist">
              {{ popularPerson.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </el-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PopularFilms',
  layout: 'main',
  async fetch () {
    await this.$store.dispatch('medias/getPopularPeople')
  },
  computed: {
    ...mapGetters('medias',
      {
        popularPeople: 'mapPopulars'
      }
    )
  },
  i18n: {
    messages: {
      ru: {
        popularPeoplePage: {
          pageTitle: 'Популярные люди'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/main";
h2 {
  padding: 10px;
}
.popular-people {
  display: flex;
  flex-wrap: wrap;
  .popular-people__item-wrapper {
    width: 20%;
    padding: 10px;
    .popular-people__item-container {
      border: 1px solid $shadow;
      box-shadow: 0 0 14px 2px $shadow;;
      height: 100%;
      .popular-people__item-image {
        width: 100%;
        max-height: 220px;
        object-fit: cover;
      }
      .popular-people__item-title {
        font-weight: 700;
        padding: 5px 0;
      }
      .popular-people__actor-worklist {
        color: $grey;
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

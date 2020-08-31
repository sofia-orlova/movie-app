<template>
  <div>
    <h3>{{ moviePageOverviewTitles.recommendations }}</h3>
    <swiper
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="(similarMovie, index) in similarMovies"
        :key="index"
      >
        <nuxt-link
          :to="localePath({ name: 'movie-id', params: { id: similarMovie.id }})"
        >
          <div>
            <img :src="similarMovie.imageLink" class="swiper__image">
            <div class="swiper__content">
              <p class="swiper__movie-title">
                {{ similarMovie.title }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'MoviePageCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    similarMovies: {
      type: Array,
      required: true
    },
    moviePageOverviewTitles: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 8,
        spaceBetween: 20,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
.swiper {
  width: 100%;
  margin: 20px 0;

  /deep/ {
    .swiper-wrapper {
       margin-bottom: 10px;
    }
    .swiper-slide {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      font-size: 15px;
      .swiper__image {
        width: 100%;
        border-radius: 10px;
      }
    }
    .swiper__content {
      padding-left: 10px;
    }
    .swiper-pagination {
      position: initial;
    }
    .swiper-button-prev, .swiper-button-next {
      bottom: -15px;
      top: unset;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 14px;
    }
  }
}
</style>

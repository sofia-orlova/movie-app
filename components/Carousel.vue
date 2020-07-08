<template>
  <swiper
    v-loading="loading"
    class="swiper"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="(carouselItem, index) in carouselItems"
      :key="index"
    >
      <div>
        <img :src="carouselItem.imageLink" class="swiper__image">
        <div class="swiper__content">
          <el-progress
            class="swiper__progress-circle"
            type="circle"
            :percentage="carouselItem.rating"
            :width="42"
            :stroke-width="2"
            :color="progressBarColor(carouselItem.rating)"
          />
          <p class="swiper__movie-title">
            {{ carouselItem.name }}
          </p>
          <p class="swiper__release-date">
            {{ carouselItem.releaseDate }}
          </p>
        </div>
      </div>
      <div />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="pagination" class="swiper-pagination" />
    <div slot="button-next" class="swiper-button-next" />
  </swiper>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    carouselItems: {
      type: Array,
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
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 7,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    }
  },
  computed: {
    ...mapState('carousels', {
      loading: state => state.loading
    })
  },
  methods: {
    progressBarColor (percentage) {
      if (percentage >= 70) {
        return '#00E273'
      } else if (percentage >= 40) {
        return '#cbcb48'
      } else {
        return '#721143'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main";
.swiper {
  /*height: 300px;*/
  width: 100%;
  margin-bottom: 20px;
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

      .swiper__progress-circle {
        margin-top: -25px;

        /deep/ {
          .el-progress-circle {
            background: $primary-color;
            border-radius: 100px;
            padding: 2px;
          }

          .el-progress__text {
            font-size: 12px !important;
            color: $white;
          }

          .el-progress-circle__track {
            display: none;
          }
        }
      }

      .swiper__release-date {
        color: $grey;
        font-weight: 400;
      }
    }
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
</style>

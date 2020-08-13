<template>
  <div class="media">
    <div
      v-for="(mediaItem, index) in mediaItems"
      :key="index"
      class="media__item-wrapper"
    >
      <div class="media__item-container">
        <img :src="mediaItem.imageLink" class="media__item-image">
        <div class="media__item-content">
          <el-progress
            v-if="mediaItem.rating"
            class="swiper__progress-circle"
            type="circle"
            :percentage="mediaItem.rating"
            :width="42"
            :stroke-width="2"
            :color="progressBarColor(mediaItem.rating)"
          />
          <p class="media__item-title">
            {{ mediaItem.name }}
          </p>
          <p class="media__item-release-date">
            {{ mediaItem.releaseDate }}
          </p>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaTemplate',
  props: {
    mediaItems: {
      type: Array,
      required: true
    }
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

<style scoped lang="scss">
@import "assets/scss/main";
.media {
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;

  .media__item-wrapper {
    width: 25%;
    padding: 10px;
    .media__item-container {
      border: 1px solid $shadow;
      box-shadow: 0 0 14px 2px $shadow;;
      border-radius: 10px;
      overflow: hidden;
      height: 100%;
      .media__item-image {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
      }
      .media__item-content {
        padding: 0 10px 10px 10px;
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
        .media__item-title {
          font-weight: 700;
          padding: 5px 0;
        }
        .media__item-release-date {
          color: $grey;
        }
      }
    }
  }
}
</style>

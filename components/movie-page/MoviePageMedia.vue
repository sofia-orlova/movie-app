<template>
  <div class="movie-page-media">
    <h3>{{ moviePageOverviewTitles.media }}</h3>
    <el-tabs>
      <el-tab-pane :label="moviePageOverviewTitles.video">
        <el-carousel :autoplay="false">
          <div v-if="movieVideos.length">
            <el-carousel-item v-for="movieVideo in movieVideos" :key="movieVideo.id">
              <div v-if="videoList[movieVideo.id]" class="movie-page-media__video-container">
                <iframe
                  width="100%"
                  height="300"
                  :src="movieVideo.videoLink + '?autoplay=1'"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div v-else class="movie-page-media__video-image-wrapper" @click="playVideo(movieVideo.id)">
                <div class="movie-page-media__video-button el-icon-caret-right" />
                <el-image
                  :src="movieVideo.videoImage"
                  fit="cover"
                />
              </div>
            </el-carousel-item>
          </div>
          <div v-else>
            {{ moviePageOverviewTitles.notFound }}
          </div>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane :label="moviePageOverviewTitles.posters">
        <div v-if="movieImages.length">
          <div class="movie-page-media__posters-container">
            <div
              v-for="(movieImage, index) in movieImages"
              :key="index"
              class="movie-page-media__poster"
            >
              <el-image :src="movieImage.imageLink" />
            </div>
          </div>
        </div>
        <div v-else>
          {{ moviePageOverviewTitles.notFound }}
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'MoviePageMedia',
  props: {
    moviePageOverviewTitles: {
      type: Object,
      required: true
    },
    movieImages: {
      type: Array,
      required: true
    },
    movieVideos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      videoList: {}
    }
  },
  created () {
    this.videoList = this.movieVideos.reduce((accumulator, curEl) => {
      accumulator[curEl.id] = false
      return accumulator
    }, {})
  },
  methods: {
    playVideo (videoId) {
      this.videoList[videoId] = true
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main";
.movie-page-media {
  padding-bottom: 20px;
  .movie-page-media__video-container {
    display: flex;
    justify-content: center;
  }
  .movie-page-media__video-image-wrapper {
    position: relative;
    height: 100%;
    .movie-page-media__video-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 35px;
      padding: 8px 20px;
      background: rgba($black, 0.75);
      border-radius: 12px;
      color: $white;
      z-index: 1;
    }
    &:hover {
      .movie-page-media__video-button {
        background: rgba(red, 0.75);
      }
    }
    /deep/ {
      .el-image {
        height: 100%;
      }
    }
  }
  .movie-page-media__posters-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .movie-page-media__poster {
      max-height: 320px;
      max-width: 200px;
      margin-right: 5px;
    }
  }
  .movie-page-media__video-button {
    font-size: 30px;
    padding: 8px 22px;
    background: rgba($black, 0.75);
    border-radius: 12px;
    color: $white;
    &:hover {
      background: rgba(red, 0.75);;
    }
  }
}
</style>

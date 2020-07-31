<template>
  <div>
    <h3>{{ moviePageOverviewTitles.media }}</h3>
    <div class="movie-page__media-image-wrapper">
      <div v-for="(movieImage, index) in movieImages" :key="index" class="movie-page__media-image">
        <el-image :src="movieImage.imageLink" />
      </div>
    </div>
    <div v-for="movieVideo in movieVideos" :key="movieVideo.id" @click="playVideo">
      <div v-if="videoPlay">
        <iframe
          width="560"
          height="315"
          :src="movieVideo.videoLink"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div v-if="!videoPlay">
        <el-image
          :src="movieVideo.videoImage"
        />
      </div>
    </div>
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
      videoPlay: false
    }
  },
  methods: {
    playVideo () {
      this.videoPlay = !this.videoPlay
    }
  }
}
</script>

<style scoped lang="scss">
.movie-page__media-image-wrapper {
  display: flex;
  flex-wrap: wrap;
  .movie-page__media-image {
    max-width: 150px;
    margin-right: 5px;
  }
}
</style>

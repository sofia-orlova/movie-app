<template>
  <div>
    <div class="profile-wrapper">
      <el-row>
        <img :src="movie.backgroungImage" class="background-image">
        <el-col :span="6">
          <img :src="movie.imageLink" class="profile-image">
        </el-col>
        <el-col :span="18">
          {{ movie.title }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MoviePage',
  async fetch ({ route, store }) {
    await store.dispatch('movie/getMovie', {
      id: route.params.id
    })
    console.log(route.params)
  },
  computed: {
    ...mapGetters('movie', {
      movie: 'setMovie'
    })
  }
}
</script>

<style scoped>
.profile-image {
  max-width: 200px;
}
.background-image {
  width: 100%;
  position: absolute;
}
</style>

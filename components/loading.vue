<template>
  <div class="preloder" v-if="loading">
    <div class="preloder__wrapper">
      <i class="el-icon-loading" />
      <p>Loaging...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff99;
  z-index: 9999;
  .preloder__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    i {
      font-size: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>

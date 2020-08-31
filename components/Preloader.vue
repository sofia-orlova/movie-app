<template>
  <div v-if="loading" class="preloder">
    <div class="preloder__wrapper">
      <i class="el-icon-loading" />
      <p>{{ $t('preloader.status') }}</p>
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
  },
  i18n: {
    messages: {
      ru: {
        preloader: {
          status: 'Loaging...'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
.preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  background: $preloader-bg;
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

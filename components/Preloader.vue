<template>
  <div class="preloder__wrapper">
    <div class="preloder__container">
      <i class="el-icon-loading" />
      <p>Loaging...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style lang="scss" scoped>
.preloder__wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff99;
  z-index: 9999;
  .preloder__container {
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

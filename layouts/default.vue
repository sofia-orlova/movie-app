<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
import MainHeader from '../components/common/Header'
export default {
  components: { MainHeader }
}
</script>

<style>
@import "assets/main.scss";
</style>

<template>
  <div>
    <el-row>
      <el-col />
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      footerNav: [
        {
          title: this.$t('footerNav.main.title'),
          subMenu: [
            {
              title: this.$t(footerNav.main.subMenu.about),
              pageIndex: 'about'
            }
          ]
        }
      ]
    }
  },
  i18n: {
    messages: {
      ru: {
        footerNav: {
          main: {
            title: 'Главное',
            subMenu: {
              about: 'О TMDb'
            }
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

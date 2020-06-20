<template>
  <div>
    <nav-menu
      type="horizontal"
      menu-class="main-menu"
      :menu-items="navigation.leftNavigation.menu"
    />
  </div>
</template>
<script>
import navMixin from './mixins/navMixin'
import NavMenu from './Menu'
export default {
  name: 'LeftNavigation',
  components: {
    NavMenu
  },
  mixins: [navMixin]
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/menu/menu-styles";
/*.main-menu {*/
/*  /deep/ {*/
/*    .el-menu-horizontal {*/
/*      background: #3b8070;*/
/*    }*/
/*  }*/
/*}*/

</style>

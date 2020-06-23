<template>
  <div class="header-menu">
    <el-row type="flex" justify="space-between" class="header-menu__horizontal-menu">
      <el-col :span="4" class="header-menu__logo-wrapper">
        <logo />
      </el-col>
      <el-col :span="15">
        <LeftNavigation />
      </el-col>
      <el-col :span="5">
        <RightNavigation />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="header-menu__burger-menu">
        <BurgerMenu />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftNavigation from '../navigation/LeftNavigation'
import RightNavigation from '../navigation/RightNavigation'
import BurgerMenu from '../navigation/BurgerMenu'
import Logo from './Logo'
export default {
  name: 'Header',
  components: { BurgerMenu, LeftNavigation, RightNavigation, Logo }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/main";
@import "../../assets/scss/menu/menu-styles";

.header-menu {
  background: $primary-color;
  padding-left: 10px;
    .header-menu__logo-wrapper {
      align-self: center;
    }
    .header-menu__burger-menu {
      display: none;
    }
    /deep/ {
      .el-menu {
        background: transparent;
        border: none;
        .el-menu-item{
          color: $white;
          &:hover {
            background-color: transparent;
          }
        }
        .el-submenu {
          &__title {
            color: $white;
            &:hover {
              background-color: transparent;
            }
          }
        }
      }
      .main-menu {
        /deep/ {
          .el-submenu__icon-arrow {
            display: none;
          }
        }
      }
    }
}
@media all and (max-width: 981px) {
  .header-menu__horizontal-menu {
    display: none;
  }
  .header-menu__burger-menu {
    display: block !important;
  }
}

</style>

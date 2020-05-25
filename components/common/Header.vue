<template>
  <div class="main-menu-wrapper">
    <el-row type="flex" justify="space-between" class="main-horizontal-menu">
      <el-col :span="3" class="logo-wrapper">
        <logo />
      </el-col>
      <el-col :span="14">
        <LeftNavigation />
      </el-col>
      <el-col :span="7">
        <RightNavigation />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="main-burger-menu">
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
@import "../../assets/main";
.main-menu-wrapper {
  background: #0d253f;
  .logo-wrapper {
    align-self: center;
  }
  /deep/ {
    .el-menu {
      background: transparent;
      border: none;
      .el-menu-item {
        color: #ffffff;
        &:hover {
          background-color: transparent;
        }
      }
      .el-submenu {
        &__title {
          color: #ffffff;
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
  .main-horizontal-menu {
    display: none;
  }
}
@media all and (min-width: 982px) {
  .main-burger-menu {
    display: none;
  }
}
</style>

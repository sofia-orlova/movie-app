<template>
  <div class="main-menu__wrapper">
    <el-row type="flex" justify="space-between">
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
  </div>
</template>
<script>
import LeftNavigation from '../navigation/LeftNavigation'
import RightNavigation from '../navigation/RightNavigation'
import Logo from './Logo'
export default {
  name: 'Header',
  components: { LeftNavigation, RightNavigation, Logo }
}
</script>
<style lang="scss" scoped>
@import "../../assets/main";
.main-menu__wrapper {
  background: $primary-color;
    a {
      color: $black;
    }
    .logo-wrapper {
      align-self: center;
    }
    /deep/ {
      .el-menu {
        background: transparent;
        border: none;
        font-weight: 700;
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
</style>

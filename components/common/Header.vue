<template>
  <div class="main-menu-wrapper">
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
.main-menu-wrapper {
  background: #101c43;
    a {
      color: #000000;
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

</style>

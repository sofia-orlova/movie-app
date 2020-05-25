<template>
  <div class="main-footer-wrapper">
    <el-row
      type="flex"
      class="main-footer-container"
    >
      <el-col class="main-footer-logo">
        <logo-square />
      </el-col>
      <el-col
        v-for="(navItem, navIndex) in navigation.footer.footerNav"
        :key="navIndex"
        class="main-footer-menu"
      >
        <div
          class="main-footer-menu-title"
        >
          {{ navItem.title }}
        </div>
        <ul>
          <li
            v-for="(subMenuItem, subMenuIndex) in navItem.subMenu"
            :key="subMenuIndex"
            class="main-footer-submenu-title"
          >
            <nuxt-link
              :to="localePath(`${subMenuItem.pageIndex}`)"
            >
              {{ subMenuItem.title }}
            </nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import navMixin from '../navigation/mixins/navMixin'
import LogoSquare from './LogoSquare'
export default {
  components: { LogoSquare },
  mixins: [navMixin]
}
</script>
<style lang="scss" scoped>
@import "assets/main";
@media all
  and (min-width: 620px)
  and (max-width: 830px) {
    .main-footer-logo {
      display: none;
    }
}
@media all and (max-width: 620px) {
  .main-footer-container {
    display: inline-block;
    text-align: center;
  }
}
.main-footer-wrapper {
  background: #0d253f;
  padding: 30px 0 50px 0;
  .main-footer-container {
    .main-footer-menu {
      padding: 20px 10px 20px 10px;
      .main-footer-menu-title{
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        padding: 10px 0;
      }
      .main-footer-submenu-title {
        line-height: 1.5;
        margin: 0 0 7px 0;
        a {
          color: #ffffff;
        }
      }
    }
  }

}

</style>

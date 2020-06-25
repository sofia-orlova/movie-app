<template>
  <div class="footer-menu">
    <el-row
      type="flex"
      class="footer-menu__wrapper"
    >
      <el-col class="footer-menu__logo">
        <logo-square />
      </el-col>
      <el-col
        v-for="(navItem, navIndex) in navigation.footer.footerNav"
        :key="navIndex"
        class="footer-menu__menu"
      >
        <div
          class="footer-menu__menu-title"
        >
          {{ navItem.title }}
        </div>
        <ul>
          <li
            v-for="(subMenuItem, subMenuIndex) in navItem.subMenu"
            :key="subMenuIndex"
            class="footer-menu__submenu-title"
          >
            <nuxt-link
              :to="localePath(`${subMenuItem.pageIndex}`)"
              class="footer-menu__link"
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
@import "../../assets/scss/main";

.footer-menu {
  background: $primary-color;
  padding-top: 30px;
  &__wrapper {
    .footer-menu__menu {
      padding: 20px 10px;
      .footer-menu__menu-title{
        color: $white;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        padding: 10px 0;
      }
      .footer-menu__submenu-title {
        line-height: 1.5;
        margin-bottom: 7px;
      }
    }
  }
  .footer-menu__link {
    color: $white;
  }
}
@media all
and (min-width: 620px)
and (max-width: 830px) {
  .footer-menu__logo {
    display: none;
  }
}
@media all and (max-width: 620px) {
  .footer-menu__wrapper {
    display: inline-block;
    text-align: center;
  }
}
</style>

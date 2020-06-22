<template>
  <div class="main-footer">
    <el-row
      type="flex"
      class="main-footer__wrapper"
    >
      <el-col class="main-footer__logo">
        <logo-square />
      </el-col>
      <el-col
        v-for="(navItem, navIndex) in navigation.footer.footerNav"
        :key="navIndex"
        class="main-footer__menu"
      >
        <div
          class="main-footer__menu-title"
        >
          {{ navItem.title }}
        </div>
        <ul>
          <li
            v-for="(subMenuItem, subMenuIndex) in navItem.subMenu"
            :key="subMenuIndex"
            class="main-footer__submenu-title"
          >
            <nuxt-link
              :to="localePath(`${subMenuItem.pageIndex}`)"
              class="main-footer__link"
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

.main-footer {
  background: #0d253f;
  padding: 30px 0 50px 10px;
  &__wrapper {
    .main-footer__menu {
      padding: 20px 10px 20px 10px;
      .main-footer__menu-title{
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        padding: 10px 0;
      }
      .main-footer__submenu-title {
        line-height: 1.5;
        margin: 0 0 7px 0;
      }
    }
  }
  .main-footer__link {
    color: #ffffff;
  }
}
@media all
and (min-width: 620px)
and (max-width: 830px) {
  .main-footer__logo {
    display: none;
  }
}
@media all and (max-width: 620px) {
  .main-footer__wrapper {
    display: inline-block;
    text-align: center;
  }
}
</style>

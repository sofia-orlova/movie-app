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
        v-for="(navItem, navIndex) in footerNav"
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
import LogoSquare from './LogoSquare'
export default {
  components: { LogoSquare },
  data () {
    return {
      footerNav: [
        {
          title: this.$t('footerNav.main.title'),
          subMenu: [
            {
              title: this.$t('footerNav.main.subMenu.about'),
              pageIndex: 'about'
            },
            {
              title: this.$t('footerNav.main.subMenu.support'),
              pageIndex: 'support'
            },
            {
              title: this.$t('footerNav.main.subMenu.supportForums'),
              pageIndex: 'support-forums'
            },
            {
              title: this.$t('footerNav.main.subMenu.api'),
              pageIndex: 'api-info'
            },
            {
              title: this.$t('footerNav.main.subMenu.systemStatus'),
              pageIndex: 'system-status'
            }
          ]
        },
        {
          title: this.$t('footerNav.participation.title'),
          subMenu: [
            {
              title: this.$t('footerNav.participation.subMenu.articles'),
              pageIndex: 'articles'
            },
            {
              title: this.$t('footerNav.participation.subMenu.otherApps'),
              pageIndex: 'other-apps'
            },
            {
              title: this.$t('footerNav.participation.subMenu.addNewFilm'),
              pageIndex: 'support'
            },
            {
              title: this.$t('footerNav.participation.subMenu.addNewTvShow'),
              pageIndex: 'support'
            }
          ]
        },
        {
          title: this.$t('footerNav.community.title'),
          subMenu: [
            {
              title: this.$t('footerNav.community.subMenu.guides'),
              pageIndex: 'about'
            },
            {
              title: this.$t('footerNav.community.subMenu.forum'),
              pageIndex: 'forum'
            },
            {
              title: this.$t('footerNav.community.subMenu.hallOfFame'),
              pageIndex: 'hall-of-fame'
            },
            {
              title: this.$t('footerNav.community.subMenu.tweeter'),
              pageIndex: 'support'
            }
          ]
        },
        {
          title: this.$t('footerNav.rights.title'),
          subMenu: [
            {
              title: this.$t('footerNav.rights.subMenu.termsOfUse'),
              pageIndex: 'terms-of-use'
            },
            {
              title: this.$t('footerNav.rights.subMenu.apiTermsOfUse'),
              pageIndex: 'about'
            },
            {
              title: this.$t('footerNav.rights.subMenu.privacyPolicy'),
              pageIndex: 'privacy-policy'
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
              about: 'О TMDb',
              support: 'Связаться с нами',
              supportForums: 'Форумы поддержки',
              api: 'API',
              systemStatus: 'Статус системы'
            }
          },
          participation: {
            title: 'Учавствуйте',
            subMenu: {
              articles: 'Писание об участии',
              otherApps: 'Сторонние приложения',
              addNewFilm: 'Добавить новый фильм',
              addNewTvShow: 'Добавить новый сериал'
            }
          },
          community: {
            title: 'Сообщество',
            subMenu: {
              guides: 'Руководства',
              forum: 'Обсуждения',
              hallOfFame: 'Доска почета',
              tweeter: 'Twitter'
            }
          },
          rights: {
            title: 'О праве',
            subMenu: {
              termsOfUse: 'Условия использования',
              apiTermsOfUse: 'API Правила использования',
              privacyPolicy: 'Политика конфеденциальности'
            }
          }
        }
      }
    }
  }
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
  background: #101c43;
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

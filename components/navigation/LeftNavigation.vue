<template>
  <div class="left-navigation__wrapper">
    <el-menu
      :default-active="activeIndex"
      class="main-menu"
      mode="horizontal"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <template
        v-for="(menuItem, menuIndex) in menu"
      >
        <el-submenu
          v-if="menuItem.subMenu"
          :key="menuIndex"
          :index="`${menuIndex}--menu`"
          popper-class="main-menu--popup"
        >
          <template slot="title">
            <i v-if="menuItem.icon" :class="menuItem.icon" />
            {{ menuItem.title }}
          </template>
          <el-menu-item
            v-for="(subMenuItem, subMenuIndex) in menuItem.subMenu"
            :key="subMenuIndex"
            :index="`${menuIndex}${subMenuIndex}-sub  `"
          >
            <nuxt-link :to="localePath(`${subMenuItem.pageIndex}`)">
              {{ subMenuItem.title }}
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="menuIndex">
          <nuxt-link
            :to="localePath({
              name: menuItem.pageIndex
            })"
          >
            <i v-if="menuItem.icon" :class="menuItem.icon" />
            {{ menuItem.title }}
          </nuxt-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'LeftNavigation',
  data () {
    return {
      activeIndex: '0',
      menu: [
        {
          title: this.$t('menu.films.title'),
          subMenu: [
            {
              title: this.$t('menu.films.subMenu.popular'),
              pageIndex: 'popular-films'
            },
            {
              title: this.$t('menu.films.subMenu.watchingNow'),
              pageIndex: 'watching-now-films'
            },
            {
              title: this.$t('menu.films.subMenu.comingSoon'),
              pageIndex: 'coming-soon-films'
            },
            {
              title: this.$t('menu.films.subMenu.topRated'),
              pageIndex: 'top-rated-films'
            }
          ]
        },
        {
          title: this.$t('menu.tvShows.title'),
          subMenu: [
            {
              title: this.$t('menu.tvShows.subMenu.popular'),
              pageIndex: 'popular-tv-shows'
            },
            {
              title: this.$t('menu.tvShows.subMenu.airingToday'),
              pageIndex: 'airing-today-tv-shows'
            },
            {
              title: this.$t('menu.tvShows.subMenu.onTv'),
              pageIndex: 'on-tv-shows'
            },
            {
              title: this.$t('menu.tvShows.subMenu.topRated'),
              pageIndex: 'top-rated-tv-shows'
            }
          ]
        },
        {
          title: this.$t('menu.people.title'),
          subMenu: [
            {
              title: this.$t('menu.people.subMenu.popular'),
              pageIndex: 'popular-people'
            }
          ]
        },
        {
          title: this.$t('menu.more.title'),
          subMenu: [
            {
              title: this.$t('menu.more.subMenu.discussions'),
              pageIndex: 'discussions'
            },
            {
              title: this.$t('menu.more.subMenu.leaderboard'),
              pageIndex: 'leaderboard'
            },
            {
              title: this.$t('menu.more.subMenu.support'),
              pageIndex: 'support'
            },
            {
              title: this.$t('menu.more.subMenu.api'),
              pageIndex: 'api-info'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath, item) {
      console.log(key, keyPath, item)
    }
  },
  i18n: {
    messages: {
      ru: {
        menu: {
          films: {
            title: 'Фильмы',
            subMenu: {
              popular: 'Популярные',
              watchingNow: 'Смотрят сейчас',
              comingSoon: 'Ожидаемые',
              topRated: 'Лучшие'
            }
          },
          tvShows: {
            title: 'Сериалы',
            subMenu: {
              popular: 'Популярные',
              airingToday: 'В эфире сегодня',
              onTv: 'На телевидении',
              topRated: 'Лучшие'
            }
          },
          people: {
            title: 'Люди',
            subMenu: {
              popular: 'Популярные'
            }
          },
          more: {
            title: 'Еще',
            subMenu: {
              discussions: 'Обсуждения',
              leaderboard: 'Доска почета',
              support: 'Поддержка',
              api: 'API'
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
a {
  text-decoration: none;
  color: $black;
}
.main-menu {
  /deep/ {
    .el-menu-horizontal {
      background: #3b8070;
    }
  }
}

</style>

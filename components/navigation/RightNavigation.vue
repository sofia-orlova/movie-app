<template>
  <div>
    <el-menu
      class="main-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <template
        v-for="(menuItem, menuIndex) in menu"
      >
        <el-submenu
          v-if="menuItem.subMenu"
          :key="menuIndex"
          :index="`${menuIndex}--menu`"
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
                  class=""
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
  name: 'RightNavigation',
  data () {
    return {
      activeIndex: '0',
      menu: [
        {
          title: '',
          icon: 'el-icon-plus',
          subMenu: [
            {
              title: this.$t('menu.addNew.subMenu.addNewFilm'),
              pageIndex: 'support'
            },
            {
              title: this.$t('menu.addNew.subMenu.addNewTvShow'),
              pageIndex: 'support'
            }
          ]
        },
        {
          title: this.$t('menu.contactUs.title'),
          pageIndex: 'contact-us'
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
          addNew: {
            subMenu: {
              addNewFilm: 'Добавить новый фильм',
              addNewTvShow: 'Добавить новый сериал'
            }
          },
          contactUs: {
            title: 'Контакты'
          }
        }
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #000000;
  }
</style>

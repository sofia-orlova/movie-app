<template>
  <el-menu
    :class="menuClass"
    :default-active="menuActiveItem($route.name)"
    :mode="type"
  >
    <template
      v-for="(menuItem, menuIndex) in menuItems"
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
          :index="subMenuItem.pageIndex"
          @click="hideMenu"
        >
          <nuxt-link
            :to="localePath(subMenuItem.pageIndex)"
          >
            {{ subMenuItem.title }}
          </nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="menuIndex" :index="menuItem.pageIndex">
        <nuxt-link
          :to="localePath(menuItem.pageIndex)"
        >
          <i v-if="menuItem.icon" :class="menuItem.icon" />
          {{ menuItem.title }}
        </nuxt-link>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuClass: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    menuActiveItem () {
      return routeName => routeName.substring(0, routeName.indexOf('__'))
    }
  },
  methods: {
    hideMenu () {
      this.$emit('hideMenu', this.event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main";

a {
  display: block;
  text-decoration: none;
  color: $black;
  width: 100%;
}
</style>

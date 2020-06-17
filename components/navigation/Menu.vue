<template>
  <el-menu
    :default-active="activeIndex"
    :class="menuClass"
    :mode="type"
    active-text-color="#ffd04b"
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
          :index="`${menuIndex}${subMenuIndex}-sub  `"
          @click="hideMenu"
        >
          <nuxt-link
            :to="localePath(`${subMenuItem.pageIndex}`)"
          >
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
  data () {
    return {
      activeIndex: '0'
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
@import "assets/main";
a {
  display: block;
  text-decoration: none;
  color: $black;
  width: 100%;
}
</style>

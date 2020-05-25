<template>
  <div>
    <nav-menu
      type="horizontal"
      menu-class="main-menu"
      :menu-items="navigation.rightNavigation.menu"
    />
  </div>
</template>
<script>
import navMixin from './mixins/navMixin'
import NavMenu from './Menu'
export default {
  name: 'RightNavigation',
  mixins: [navMixin],
  components: {
    NavMenu
  },
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath, item) {
      console.log(key, keyPath, item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/menu-styles";
</style>

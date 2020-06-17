<template>
  <div>
    <div
      id="burger"
      :class="{'active' : isOpen}"
      @click="toggle"
    >
      <button
        type="button"
        class="burger-button"
      >
        <span class="burger-bar burger-bar--1" />
        <span class="burger-bar burger-bar--2" />
        <span class="burger-bar burger-bar--3" />
      </button>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen" class="modal">
        <nav-menu
          type="vertical"
          menu-class="main-menu"
          :menu-items="menu"
          @hideMenu="toggle"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import navMixin from './mixins/navMixin'
import NavMenu from './Menu'
export default {
  name: 'BurgerMenu',
  components: { NavMenu },
  mixins: [navMixin],
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    menu () {
      return [...this.navigation.leftNavigation.menu, ...this.navigation.rightNavigation.menu]
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/main";
/deep/ {
  .el-menu {
    font-weight: 700;
    a {
      color: $white;
      font-weight: 400;
    }
  }
}
button {
  cursor: pointer;
  &:focus {
    outline: 0;
  }
}
#burger {
  padding: 10px 0 10px 5px;
}
.burger-button {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  display: block;
  position: relative;
  height: 30px;
  width: 40px;
  z-index: 999;
  pointer-events: all;
  transition: transform .6s cubic-bezier(.165,.84,.44,1);
  .burger-bar {
    background-color: $white;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
  }
  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }
  &:hover .burger-bar--2 {
    transform: scaleX(1);
  }
  .burger-bar--3 {
    transform: translateY(6px);
  }
}
#burger.active {
  .burger-button {
    transform: rotate(-180deg);
  }
  .burger-bar--1 {
    transform: rotate(45deg)
  }
  .burger-bar--2 {
    opacity: 0;
  }
  .burger-bar--3 {
    transform: rotate(-45deg)
  }
}
.slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s ease;
}
.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>

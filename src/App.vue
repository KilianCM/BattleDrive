<template>
  <div id="app" data-server-rendered="true">
    <side-bar v-on:toggle-menu="menuOpened = $event"></side-bar>
    <div :class="{ 'content-router': true, 'reduced': !menuOpened }">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar/SideBar";

export default {
  name: 'App',
  components: {
    SideBar
  },
  data() {
    return {
      menuOpened: true
    }
  }
}
</script>

<style lang="scss">

  #app {
    display: flex;
    justify-content: stretch;
    min-height: 100vh;

    .content-router {
      margin-left: $width-menu;
      width: calc(100vw - #{$width-menu});
      transition: all ease-in-out 0.7s;
      z-index: 20;

      &.reduced {
        margin-left: $width-menu-reduced;
        width: calc(100vw - #{$width-menu-reduced});
      }
    }
  }

  @media(max-width: $mobile-mode) {
    #app .content-router, #app .content-router.reduced {
      margin-left: $width-menu-reduced;
      width: calc(100vw - #{$width-menu-reduced});
    }
  }


</style>

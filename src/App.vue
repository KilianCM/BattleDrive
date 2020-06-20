<template>
  <div id="app">
    <side-bar></side-bar>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import SideBar from "./components/SideBar/SideBar";

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style lang="scss">

  #app {
    display: flex;
    justify-content: stretch;
    height: 100vh;
  }
</style>

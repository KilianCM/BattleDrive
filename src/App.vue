<template>
  <div id="app">
    <side-bar></side-bar>
    <div class="content-router">
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
  }
}
</script>

<style lang="scss">

  #app {
    display: flex;
    justify-content: stretch;
    height: 100vh;

    .content-router {
      margin-left: 250px;
      width: calc(100vw - 250px);
    }
  }


</style>

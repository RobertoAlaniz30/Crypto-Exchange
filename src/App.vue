<template>
  <px-nav-bar :topAssets="topAssets" />
  <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
</template>

<script>
import PxNavBar from "@/components/PxNavBar.vue";
import api from "@/api";

export default {
  name: "App",
  data() {
    return {
      topAssets: [],
    };
  },
  components: { PxNavBar },
  created() {
    api.getAssets().then((assetsArray) => {
      this.topAssets = assetsArray.slice(0, 3);
    });
  },
};
</script>

<style>
#app {
  background-color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  background-color: black;
  height: 100%;
  min-height: 100vh;
}
div {
  height: 100%;
}
</style>

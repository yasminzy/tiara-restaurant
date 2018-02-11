<template>
<div class="d-flex flex-column mh-100">
  <app-nav />
  <router-view data-aos="fade" />
</div>
</template>

<script>
import AppNav from "./components/app-nav";

export default {
  components: {
    AppNav
  }
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

::selection {
  background-color: #a1887f;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Merienda", cursive;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-100 {
  min-height: 100vh;
}
</style>

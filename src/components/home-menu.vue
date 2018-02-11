<template>
<div class="bg-white container-fluid mh-100 py-5">
  <div data-aos="fade">
    <h2 class="cursive text-center">
      Menu
    </h2>

    <hr class="mb-5">
  </div>

  <home-menu-type name="dinner" title="FOOD &amp; APERITIVES"  data-aos="fade-down-right" />
  <home-menu-type name="dessert" title="DESSERTS"  data-aos="fade-down-left" />
</div>
</template>

<script>
import HomeMenuType from "./home-menu-type";

export default {
  components: {
    HomeMenuType
  }
};
</script>

<style scoped>
hr {
  background-color: #a1887f;
  max-width: 50px;
}

.container-fluid {
  background: url("../assets/menu.jpg") no-repeat center center;
  background-size: cover;
}
</style>

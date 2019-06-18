<template>
  <div class="bg-white container-fluid mh-100 py-5">
    <div data-aos="fade">
      <h2 class="cursive text-center">Menu</h2>

      <hr class="mb-5" />
    </div>

    <HomeMenuType
      type="dinner"
      title="FOOD &amp; APERITIVES"
      data-aos="fade-down-right"
    />
    <HomeMenuType type="dessert" title="DESSERTS" data-aos="fade-down-left" />
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
  background-color: #795548;
  max-width: 50px;
}

.container-fluid {
  background: url("../assets/img/menu.jpg") center center no-repeat;
}
</style>

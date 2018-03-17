<template>
<div>
  <home-header />
  <home-about />
  <app-banner name="our specialities" />
  <home-special />
  <app-banner name="outdoor" v-bind:height="50" empty />
  <home-menu />
</div>
</template>

<script>
import AppBanner from "@/components/app-banner";
import HomeAbout from "@/components/home-about";
import HomeHeader from "@/components/home-header";
import HomeMenu from "@/components/home-menu";
import HomeSpecial from "@/components/home-special";

export default {
  components: {
    AppBanner,
    HomeAbout,
    HomeHeader,
    HomeMenu,
    HomeSpecial
  }
};
</script>

<style scoped>
</style>

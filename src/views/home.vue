<template>
  <div>
    <HomeHeader />
    <HomeAbout />
    <AppBanner name="our specialities" />
    <HomeSpecial />
    <AppBanner :height="50" name="outdoor" empty />
    <HomeMenu />
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

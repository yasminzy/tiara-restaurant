<template>
<div class="container-fluid mh-100 py-5">
  <div class=" container mt-5">
    <h1 class="cursive">Contact</h1>

    <p>WIP</p>

    <!-- <gmap-map class="mx-auto" v-bind:center="center" v-bind:zoom="7" style="height: 225px; max-width: 400px; width: 100%;">
      <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" />
    </gmap-map> -->
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -0.494823, lng: 117.143615 },
      markers: [
        {
          position: { lat: -0.494823, lng: 117.143615 }
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>

<template>
<div class="bg-light container-fluid d-flex justify-content-center py-5" v-cloak>
  <div class="container wrapper p-0">
    <div class="item" v-for="(item, index) in special(menu)" v-bind:key="index">
     <div class="bg-white img-wrapper" data-aos="fade-up-right">
       <img class="d-block img-fluid hvr-grow mx-auto" v-bind:src="'img/' + urlize(item.name) + '.jpg'" v-bind:alt="item.name">
      </div>

      <div class="bg-white d-flex flex-column justify-content-between align-items-center p-3 p-lg-4 p-xl-5 text-center" data-aos="fade-up-left">
        <h3 class="h4 mb-0">{{ item.name }}</h3>

        <p class="my-3 text-muted">{{ item.description }}</p>
        <p class="font-weight-bold mb-0 text-primary">From ${{ item.price }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { menu } from "@/assets/js/data";
import { urlize } from "@/assets/js/functions";

export default {
  data() {
    return {
      menu
    };
  },
  methods: {
    special(input) {
      return input.filter(item => item.special);
    },
    urlize
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  @media (min-width: 576px) {
    min-height: calc(868px - 4rem);
    position: relative;
  }

  @media (min-width: 768px) {
    min-height: calc(1048px - 4rem);
  }

  @media (min-width: 992px) {
    min-height: calc(480px - 4rem);
  }

  @media (min-width: 1200px) {
    min-height: calc(570px - 4rem);
  }
}

.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @media (min-width: 576px) {
    grid-gap: 2rem;
    position: absolute;
    top: -2rem;
  }

  @media (min-width: 992px) {
    grid-gap: 0;
    grid-template-columns: repeat(4, 1fr);
  }
}

.item {
  display: grid;
  grid-template-rows: auto;

  @media (min-width: 992px) {
    grid-template-rows: 1fr 1fr;
  }
}

.item:nth-of-type(odd) .img-wrapper {
  @media (min-width: 992px) {
    order: 1;
  }
}
</style>

<template>
  <div
    :id="urlize(name)"
    :class="
      'container-fluid d-flex justify-content-center align-items-center parallax py-5 mh-' +
        height
    "
  >
    <div class="container" data-aos="fade">
      <h2 v-show="!empty" class="mb-0 text-center text-uppercase text-white">
        {{ name }}
      </h2>
    </div>
  </div>
</template>

<script>
import { urlize } from "@/assets/js/functions";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 75
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    urlize
  }
};
</script>

<style lang="scss" scoped>
#our-specialities {
  background-image: url("../assets/img/our-specialities.jpg");
}

#outdoor {
  background-image: url("../assets/img/outdoor.jpg");
}

#outdoor {
  background-image: url("../assets/img/outdoor.jpg");
}

h2 {
  font-size: 2.5rem;
  letter-spacing: 0.125rem;
  margin-top: -2rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
    margin-top: -2.5rem;
  }
}

.mh-50 {
  min-height: 50vh;
}

.mh-75 {
  min-height: 75vh;
}
</style>

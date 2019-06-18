<template>
  <div class="container">
    <h3 class="h5 mb-4 text-center text-muted text-uppercase">{{ title }}</h3>

    <ul class="list-group mb-5 wrapper">
      <li
        v-for="(item, index) in typeFilter(menu, type)"
        :key="index"
        class="bg-transparent border-0 d-flex justify-content-between align-items-center list-group-item"
      >
        <div>
          <p class="font-weight-bold mb-2">{{ item.name }}</p>

          <small class="text-muted">{{ item.description }}</small>
        </div>

        <span class="badge text-primary cursive">£{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { menu } from "@/assets/js/data";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      menu
    };
  },
  methods: {
    typeFilter(input, word) {
      return input.filter(item => item.type == word);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @media (min-width: 768px) {
    display: grid;
    column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
  }
}

span {
  font-size: 2rem;
}
</style>

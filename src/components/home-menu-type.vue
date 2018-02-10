<template>
<div class="container">
  <h3 class="h5 text-center text-muted mb-4">{{ title }}</h3>

  <ul class="list-group mb-5 wrapper">
    <li class="bg-transparent border-0 list-group-item d-flex justify-content-between align-items-center" v-if="item.type == name" v-for="(item, index) in menu" v-bind:key="index">
      <div>
        <p class="font-weight-bold">{{ item.title }}</p>

        <small class="text-muted">{{ item.description }}</small>
      </div>

      <span class="badge text-primary cursive">
        ${{ item.price || 15 }}
      </span>
    </li>
  </ul>
</div>
</template>

<script>
import { menu } from "@/data";

export default {
  props: {
    name: {
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
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @media (min-width: 768px) {
    display: grid;
    grid-column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-column-gap: 5rem;
  }
}

span {
  font-size: 2rem;
}
</style>

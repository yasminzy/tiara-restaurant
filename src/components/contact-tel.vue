<template>
  <div class="col-md-3 offset-md-1" data-aos="flip-down" data-aos-delay="600">
    <ul class="list-group mb-5 wrapper">
      <li
        v-for="(item, index) in contact"
        v-bind:key="index"
        class="bg-transparent border-left-0 border-right-0 border-top-0 list-group-item px-0"
      >
        <div>
          <p class="font-weight-bold mb-2 text-uppercase">{{ item.label }}</p>

          <small class="text-muted">{{ item.content }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          label: "Telephone",
          content: "(44) 570-5208"
        },
        {
          label: "Email",
          content: "hi[at]tiara.com"
        },
        {
          label: "Address",
          content: "1990 Welo Heights, GB"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }
}

li:last-child {
  border-bottom: 0;
}
</style>

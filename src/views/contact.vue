<template>
<div class="container-fluid bg mh-100 px-0">
  <div class="container-fluid content py-5 mh-100">
    <div class=" container mt-5">
      <h1 class="mb-5">Contact Us</h1>

      <div class="row">
        <contact-form />
        <contact-tel />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ContactForm from "@/components/contact-form.vue";
import ContactTel from "@/components/contact-tel.vue";

export default {
  components: {
    ContactForm,
    ContactTel
  }
};
</script>

<style lang="scss" scoped>
.container-fluid.bg {
  background: url("../assets/img/contact.jpg") no-repeat center center;
  background-size: cover;
}

.content {
  background-color: rgba(255, 255, 255, 0.75);

  @media (min-width: 768px) {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 1200px) {
    background-color: transparent;
  }
}

h1 {
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }
}
</style>

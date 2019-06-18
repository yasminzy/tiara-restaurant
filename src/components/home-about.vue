<template>
  <div
    id="reservation-about"
    class="bg-light container-fluid d-flex justify-content-center"
  >
    <div class="container parallax px-0 text-center wrapper">
      <div class="bg container py-5" data-aos="fade-left">
        <h2 class="cursive font-weight-bold mb-4">Reservations</h2>

        <p class="text-muted mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <router-link to="reservations" class="btn btn-outline-primary"
          >BOOK A TABLE</router-link
        >
      </div>

      <div class="empty"></div>
      <div class="empty"></div>

      <div class="bg container py-5" data-aos="fade-right">
        <h2 class="cursive font-weight-bold mb-4">About</h2>

        <p class="text-muted mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore
          delectus rem explicabo, id voluptas amet architecto incidunt minus
          dolor consequatur odio quaerat nesciunt obcaecati non. Fugiat
          molestias officia ad?
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  @media (min-width: 576px) {
    min-height: calc(610px - 4rem);
    position: relative;
  }

  @media (min-width: 786px) {
    min-height: calc(538px - 4rem);
  }

  @media (min-width: 992px) {
    min-height: calc(514px - 4rem);
  }
}

.wrapper {
  background-image: url("../assets/img/interior.jpg");
  display: grid;
  row-gap: 3rem;

  @media (min-width: 576px) {
    row-gap: 0;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    position: absolute;
    top: -2rem;
  }
}

.bg {
  background-color: rgba(255, 255, 255, 0.9);

  @media (min-width: 576px) {
    background-color: white;
  }
}

.empty {
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
}
</style>

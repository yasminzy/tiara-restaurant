<template>
<div class="container-fluid d-flex flex-column justify-content-center align-items-center" id="header">
  <div class="container text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
    <h1 class="cursive font-weight-bold">Tiara's</h1>

    <p>BRITISH SPECIALITIES</p>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid {
  background: url("../assets/img/header.jpg") fixed no-repeat center center;
  background-size: cover;
  min-height: 100vh;

  @media (min-width: 576px) {
    min-height: calc(100vh + 2rem);
  }
}

h1 {
  font-size: 5rem;

  @media (min-width: 576px) {
    font-size: 5rem;
  }

  @media (min-width: 768px) {
    font-size: 7.5rem;
  }
}

p {
  font-size: 2rem;
  letter-spacing: 0.5rem;
  line-height: 2.5rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
}
</style>

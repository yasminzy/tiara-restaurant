<template>
<div class="container-fluid bg mh-100 px-0">
  <div class="container-fluid content py-5 mh-100">
  <div class="container mt-5">
    <h1 class="mb-5">Reservations</h1>

    <p class="mb-4" data-aos="fade-left">Thank you for choosing Tiara's. To book a table, follow the steps below:
      <ol>
        <li>Choose the time and table.</li>
        <li>Complete the reservation form.</li>
        <li>Check your email for the booking confirmation.</li>
      </ol>
    </p>

    <iframe src="https://sagenda.net/Frontend/5a72824abff31c512cc3f840?retrieveFromCookies=False" height="1100" min-width="576" width="100%" frameborder="0" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms" data-aos="fade-right"></iframe>
  </div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid.bg {
  background: url("../assets/img/reservations.jpg") no-repeat center center;
  background-size: cover;
}

.content {
  background-color: rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    // background-color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 1200px) {
    // background-color: transparent;
  }
}
</style>

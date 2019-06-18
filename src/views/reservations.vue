<template>
  <div class="bg container-fluid mh-100 px-0">
    <div class="container-fluid content py-5 mh-100">
      <div class="container mt-5">
        <h1 class="mb-5">Reservations</h1>

        <p class="mb-4" data-aos="fade-left">
          Thank you for choosing Tiara's. To book a table, follow the steps
          below:
        </p>
        <ol>
          <li>Choose the time and table.</li>
          <li>Complete the reservation form.</li>
          <li>Check your email for the booking confirmation.</li>
        </ol>

        <iframe
          src="https://sagenda.net/Frontend/5a72824abff31c512cc3f840?retrieveFromCookies=False"
          allowtransparency="false"
          frameborder="0"
          height="1100"
          min-width="576"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"
          data-aos="fade-right"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg.container-fluid {
  background: url("../assets/img/reservations.jpg") center center no-repeat;
}

.content {
  @media (min-width: 576px) {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>

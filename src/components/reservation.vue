<template>
<div class="layout-padding">
  <section class="bg-white layout-padding text-primary">
    <h1>Reservation</h1>

    <p>Thank you for choosing Yasmin's. To book a table, follow the steps below:
      <ol>
        <li>Choose the time and table.</li>
        <li>Complete the reservation form.</li>
        <li>Check your email for the booking confirmation.</li>
      </ol>
    </p>

    <div class="btn">
      <q-btn v-on:click="$router.push('/')" flat small icon="arrow_back" color="primary">GO BACK</q-btn>

      <q-btn v-on:click="launch('tel:1234567')" flat small icon="call" color="primary">MANUAL BOOKING</q-btn>
    </div>

    <iframe src="https://sagenda.net/Frontend/5a72824abff31c512cc3f840?retrieveFromCookies=False" height="1300" min-width="576" width="100%" frameborder="0" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"></iframe>
  </section>

</div>
</template>

<script>
import { openURL, QBtn } from "quasar";

export default {
  components: {
    QBtn
  },
  methods: {
    launch(url) {
      openURL(url);
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Pacifico", cursive;
}

.btn {
  margin: 2rem 0 1rem;
}
</style>

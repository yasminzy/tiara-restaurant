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
        <q-btn
          color="primary"
          icon="arrow_back"
          flat
          small
          @click="$router.push('/')"
        >
          GO BACK
        </q-btn>

        <q-btn
          color="primary"
          icon="call"
          flat
          small
          @click="launch('tel:1234567')"
        >
          MANUAL BOOKING
        </q-btn>
      </div>

      <iframe
        src="https://sagenda.net/Frontend/5a72824abff31c512cc3f840?retrieveFromCookies=False"
        allowtransparency="true"
        frameborder="0"
        height="1300"
        min-width="576"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"
        width="100%">
      </iframe>
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

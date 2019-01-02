<template>
  <nav
    v-bind:class="{'bg-white': scrollPosition > headerHeight}"
    class="navbar fixed-top navbar-expand-sm navbar-light w-100"
  >
    <router-link to="/" class="navbar-brand">
      <img
        class="d-inline-block align-top mr-2"
        src="@/assets/img/logo.png"
        alt="Logo"
        height="30"
        width="30"
      >
      
      <span class="cursive font-weight-bold name">Tiara's</span>
    </router-link>

    <button
      class="border-0 navbar-toggler"
      type="button"
      data-target="#navbarSupportedContent"
      data-toggle="collapse"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav text-right ml-auto w-auto">
        <li v-for="(item, index) in menu" v-bind:key="index" class="nav-item">
          <router-link
            v-bind:to="to(item)"
            class="nav-link mx-2 pb-1 px-0"
            exact
          >{{ item.label || item }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          to: "/",
          label: "Home"
        },
        "Reservations",
        "Contact"
      ],
      headerHeight: 0,
      scrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateNav);
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    },
    updateNav() {
      let headerHeight = document.getElementById("header");

      headerHeight
        ? (this.headerHeight = headerHeight.clientHeight)
        : (this.headerHeight = 0);
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style lang="scss" scoped>
.name {
  letter-spacing: 0.125rem;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <nav-item v-for="item in nav.menu" :key="item.id" :navLinkItem="item"/>
        </ul>
        <!--
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        -->
      </div>
    </div>
  </nav>
</template>
<script>
import routerUrl from '@/service/menu/routerUrl.js'
import NavItem from "./NavItem.vue";

export default {
  components: {NavItem},
  data() {
    return {
        nav: {}
    };
  },
  created() {
    this.$store.dispatch("setNav", routerUrl);
    this.updateNav();
  },
  methods: {
    updateNav() {
      this.nav = this.$store.state.navUrl.nav
    },
  },
};
</script>
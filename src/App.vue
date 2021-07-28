<template>
  <div id="nav">
    <nav-bar />
  </div><!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/numberPage">Number</router-link> |
    <router-link :to="{ name: 'Home' }">Home2</router-link> |
    <router-link
      :to="{
        name: 'User',
        params: {
          id: 1,
        },
      }"
      >User1</router-link
    >
    |
    <router-link to="/weather">Weather</router-link>
  </div>
  -->
  <router-view />
</template>
<script>
import NavBar from "./components/navbar/NavBar.vue";
export default {
  components: {NavBar}
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

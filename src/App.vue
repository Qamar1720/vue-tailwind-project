<template>
  <!-- Always show these 2 components -->
  <HeaderNavbar />
  <MainNavbar />
  
  <!-- Router View  -->
  <router-view />
  
  <!-- Always show the footer components -->
    <Footer />
  <!-- </div> -->
</template>

<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import MainNavbar from "./components/MainNavbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    HeaderNavbar,
    MainNavbar,
    Footer,
  },
};
</script>
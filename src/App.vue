<template>
  <div>
    <!-- Always render the Navbars -->
    <HeaderNavbar />
    <MainNavbar />

    <!-- Show components only when 'home' is active -->
    <div v-if="activeSection === 'home'">
      <SampleCom/>
      <!-- <MainDetails/> -->
      <!-- <MainBodyCards /> -->
      <Footer />
      <!-- <Footer /> -->
    </div>

    <!-- Show AboutPage only when 'discoverLive' is active -->
    <div v-if="activeSection === 'discoverLive'">
      <AboutPage />
    </div>

    <!-- Render other pages via router only when 'home' is active -->
    <div v-if="activeSection === 'home'">
      <router-view />
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute } from "vue-router";
import HeaderNavbar from "./components/HeaderNavbar.vue";
import MainNavbar from "./components/MainNavbar.vue";
// import MainBodyCards from "./components/MainBodyCards.vue";
import MainDetails from "./components/MainDetails.vue";
import SampleCom from "./components/SampleCom.vue";
import Footer from "./components/Footer.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  components: {
    HeaderNavbar,
    MainNavbar,
    // MainBodyCards,
    MainDetails,
    SampleCom,
    Footer,
    AboutPage,
  },
  data() {
    return {
      activeSection: "home", // Default section
    };
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    },
  },
  mounted() {
    // Watch route changes and update activeSection
    this.$watch(
      () => this.$route.path,
      (newPath) => {
        if (newPath === "/discover_live") {
          this.activeSection = "discoverLive";
        } else {
          this.activeSection = "home";
        }
      },
      { immediate: true }
    );
  },
};
</script>
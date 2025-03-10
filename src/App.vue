<template>
  <div>
    <!-- Always render the Navbars -->
    <HeaderNavbar />
    <MainNavbar />

    <!-- Show components only when 'home' is active -->
    <div v-if="activeSection === 'home'">
      <!-- <SampleCom/> -->
      <MainDetails/>
      <MainBodyCards />
      <Footer />
      <!-- <Footer /> -->
    </div>
    
    <!-- Show AboutPage only when 'discoverLive' is active -->
    <div v-if="activeSection === 'discoverLive'">
      <NumericGameCard/>
      <NumericGamesCard2/>
      <Footer />
    </div>

    <!-- Render other pages via router only when 'home' is active -->
    <div v-if="activeSection === 'home'">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import HeaderNavbar from "./components/HeaderNavbar.vue";
import MainNavbar from "./components/MainNavbar.vue";
import MainBodyCards from "./components/MainBodyCards.vue";
// import SampleCom from "./components/SampleCom.vue";
import MainDetails from "./components/MainDetails.vue";
import Footer from "./components/Footer.vue";
import AboutPage from "./components/AboutPage.vue";
import NumericGameCard from "./components/DiscoverLivePage/NumericGameCard.vue";
import NumericGamesCard2 from "./components/DiscoverLivePage/NumericGamesCard2.vue";

export default {
  components: {
    HeaderNavbar,
    MainNavbar,
    MainBodyCards,
    // SampleCom,
    NumericGameCard,
    NumericGamesCard2,
    MainDetails,
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
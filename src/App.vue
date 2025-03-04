<template>
  <div>
    <!-- Only render this if the route is not /discover_live -->
    <div v-if="$route.path !== '/discover_live'">
      <HeaderNavbar />
      <MainNavbar />
      <MainBodyCards />
      <MainGames />
      <!-- <Footer/> -->
    </div>

    <!-- Render AboutPage only when route is /discover_live -->
    <router-view />
  </div>
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar.vue'
import MainNavbar from './components/MainNavbar.vue'
// import Footer from './components/Footer.vue'
import MainGames from './components/MainGames.vue'
import MainBodyCards from './components/MainBodyCards.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  components: {
    HeaderNavbar,
    MainNavbar,
    MainGames,
    MainBodyCards,
    // Footer,
    AboutPage
  }
}
</script>

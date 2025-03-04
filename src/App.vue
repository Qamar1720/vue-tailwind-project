<template>
  <div>
    <div class="">
      <div class="">
        <HeaderNavbar/>
        <MainNavbar/>
        <MainBodyCards/>
        <MainGames/>
        <!-- <Footer/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNavbar from './components/HeaderNavbar.vue'
  import MainNavbar from './components/MainNavbar.vue'
  // import Footer from './components/Footer.vue'
  import MainGames from './components/MainGames.vue';
  import MainBodyCards from './components/MainBodyCards.vue'

  export default {
    components: {
      HeaderNavbar,
      MainNavbar,
      MainGames,
      MainBodyCards,
      // Footer
    }
  }
</script>

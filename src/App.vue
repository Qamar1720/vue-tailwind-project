<template>
  <div>
    <div class="">
      <div class="">
        <HeaderNavbar/>
        <MainNavbar/>
        <!-- <MainGames/> -->
        <!-- <MainBody/> -->
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNavbar from './components/HeaderNavbar.vue'
  import MainNavbar from './components/MainNavbar.vue'
  import Footer from './components/Footer.vue'
  // import MainGames from './components/MainGames.vue';
  // import MainBody from './components/MainBody.vue'

  export default {
    components: {
      HeaderNavbar,
      MainNavbar,
      // MainGames,
      // MainBody,
      Footer
    }
  }
</script>

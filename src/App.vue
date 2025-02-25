<template>
  <div>
    <div>
      <HeaderNavbar/>
      <hr>
      <MainNavbar/>
      <Footer/>

    </div>
  </div>
</template>

<script>
  import HeaderNavbar from './components/HeaderNavbar.vue'
  import MainNavbar from './components/MainNavbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      HeaderNavbar,
      MainNavbar,
      Footer
    }
  }
</script>

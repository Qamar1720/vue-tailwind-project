<template>
  <div>
    <hr class="text-[#3E344B]">
  </div>
  <div class="w-full flex min-w-full bg-[#1A0B2E] min-h-screen relative pt-8">
    <!-- Background Image -->
    <div class="w-full my-auto flex relative">
      <img :src="backgroundImage" alt="Background" class="w-full h-auto object-cover bg-cover block">
    </div>

    <!-- Navbar -->
    <nav class="max-w-[1440px] w-full mx-auto flex md:flex-col md:gap-5 xl:gap-0 xl:flex-row justify-between items-center absolute top-4 left-1/2 -translate-x-1/2 px-2 z-10 listitems">
      
      <!-- Logo -->
      <div class="cursor-pointer w-auto px-4 sm:px-0 z-100">
        <img src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
      </div>
      
      <!-- Navigation Links -->
      <div>
        <ul class="hidden md:flex gap-13 mt-2 text-white font-bold">
          <router-link to="/" @click="setActive('home')" :class="activeClass('home')">HOME</router-link>
          
          <router-link to="/discover_live" @click="setActive('discoverLive')" :class="activeClass('discoverLive')">
            DISCOVER LIVE
          </router-link>

          <li @click="setActive('categories')" :class="activeClass('categories')">CATEGORIES</li>
          <li @click="setActive('consulting')" :class="activeClass('consulting')">CONSULTING</li>
          <li @click="setActive('news')" :class="activeClass('news')">NEWS & UPDATES</li>
        </ul>
      </div>
      
      <!-- Hamburger Menu and Close Icon -->
      <!-- <div class="md:hidden flex gap-4 text-[#3E344B] text-3xl z-100 px-5"> -->
        <div class="md:hidden flex gap-4 text-white text-3xl z-100 px-5">
          <i :class="isMenuOpen ? 'fa fa-times' : 'fa fa-bars'" 
          class="cursor-pointer -mt-2" 
          @click="toggleMenu">
        </i>
        </div>

      <!-- Mobile Navigation Menu (Visible when menu is toggled) -->
      <div v-if="isMenuOpen" class="fixed inset-0 bg-[#1A0B2E] text-white flex md:hidden flex-col items-center justify-center min-h-screen transition-all duration-300 ease-in-out z-10 shadow-md">
        <ul class="flex flex-col gap-6 font-bold w-full text-center">
          <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">HOME</li>
          <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">DISCOVER LIVE</li>
          <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">CATEGORIES</li>
          <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">CONSULTING</li>
          <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">NEWS & UPDATES</li>
        </ul>
      </div>
      <div class="hidden md:flex flex-wrap gap-4 md:gap-5 lg:gap-6 text-xl md:text-2xl text-white cursor-pointer px-2">
        <div class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
          <i class="fa fa-twitter"></i>
        </div>
        <div class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
          <i class="fa fa-facebook"></i>
        </div>
        <div class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
          <i class="fa fa-pinterest"></i>
        </div>
        <div class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
          <i class="fa fa-instagram"></i>
        </div>
      </div>
    </nav>
    </div>
  </template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import bgimg2 from "../assets/pics/header_image.jpg";
import discoverBg from "../assets/pics/discover_map.jpg";

const router= createRouter({
  history:createWebHistory(),
  routes:[]
});
export default {
  data() {
    return {
      isMenuOpen: false, // State to toggle the menu visibility
      activeSection: "home"
    };
  },
  computed: {
    backgroundImage() {
    return this.activeSection === "discoverLive" ? discoverBg : bgimg2;
  },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu visibility
  },
  setActive(section) {
      this.activeSection = section;
    },
    activeClass(section) {
      return `relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100 ${
        this.activeSection === section ? "text-[#DF3F2A]" : ""
      }`;
    },
}
};
</script>
<style scoped> -->
  @media screen and (min-width:1279px) and (max-width:1290px){
  /* .listitems{
      display: flex;
      flex-direction: column;
      gap: 14;
    } */
  }

</style>

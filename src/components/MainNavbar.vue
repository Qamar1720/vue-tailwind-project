<template>
<div class=" w-full bg-[#1A0B2E] bg-cover bg-no-repeat bg-[url('assets/pics/header_image.jpg')] h-screen relative">
  <div class="max-w-[1440px] flex justify-between mx-auto">
    <!-- Logo -->
    <div class="cursor-pointer w-auto">
      <img src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
    </div>
    
    
    <!-- Navigation Links -->
    <div>
      <ul class="hidden md:flex gap-13 mt-2 text-white  font-bold">
        <li class="transition duration-300 cursor-pointer hover:text-[#D83831] hover:text-glow">HOME</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#D83831] hover:text-glow">DISCOVER LIVE</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#D83831] hover:text-glow">CATEGORIES</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#D83831] hover:text-glow">CONSULTING</li>
      <li class="transition duration-300 cursor-pointer hover:text-[#D83831] hover:text-glow">NEWS & UPDATES</li>
    </ul>
  </div>
  
  <!-- Hamburger Menu and Close Icon -->
  <div class="md:hidden flex pt-5 gap-4 text-white text-3xl ">
    <i :class="isMenuOpen ? 'fa fa-times' : 'fa fa-bars'" 
    class="cursor-pointer" 
    @click="toggleMenu">
  </i>
</div>

<!-- Mobile Navigation Menu (Visible when menu is toggled) -->
<div v-if="isMenuOpen" class="md:hidden bg-[#1A0B2E] text-white flex flex-col items-center p-4 absolute top-26  translate-x-50 transition-all">
  <ul class="flex flex-col gap-6 font-bold w-74 text-center">
    <li class="">HOME</li>
    <li class="">DISCOVER LIVE</li>
    <li class="">CATEGORIES</li>
    <li class="">CONSULTING</li>
    <li class="">NEWS & UPDATES</li>
  </ul>
</div>
    <div class="hidden md:flex gap-6 text-2xl text-white cursor-pointer mt-2">
      <i class="fa fa-twitter rounded-full hover:text-[#D83831] hover:shadow-[#D83831]"></i>
      <i class="fa fa-facebook hover:text-[#D83831] hover:shadow-[#D83831]"></i>
      <i class="fa fa-pinterest hover:text-[#D83831] hover:shadow-[#D83831]"></i>
      <i class="fa fa-instagram hover:text-[#D83831] hover:shadow-[#D83831]"></i>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // State to toggle the menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu visibility
  }
}
};
</script>

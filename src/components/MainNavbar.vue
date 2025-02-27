<template>
<div class=" w-full min-w-full bg-[#1A0B2E] h-screen relative pt-8">
  <!-- Background Image -->
  <div class="w-full flex items-center justify-center relative">
    <img src="/home/test/Documents/Demo project/vue-tailwind-project/src/assets/pics/header_image.jpg" alt="" class="w-full">
   </div>
   <div class="max-w-[1440px] w-full mx-auto flex justify-between items-center absolute top-4 left-1/2 -translate-x-1/2 px-6 z-10">
    <!-- Logo -->
    <div class="cursor-pointer w-auto">
      <img src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
    </div>
    
    
    <!-- Navigation Links -->
    <div>
      <ul class="hidden md:flex gap-13 mt-2 text-white  font-bold">
        <li class="transition duration-300 cursor-pointer hover:text-[#DF3F2A]  hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A]">HOME</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:shadow-[#33132A] hover:rounded-full ">DISCOVER LIVE</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A]">CATEGORIES</li>
        <li class="transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A]">CONSULTING</li>
      <li class="transition duration-300 cursor-pointer hover:text-[#DF3F2A] 
       hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A]">NEWS & UPDATES</li>
    </ul>
  </div>
  
  <!-- Hamburger Menu and Close Icon -->
  <div class="md:hidden flex gap-4 text-white text-3xl ">
    <i :class="isMenuOpen ? 'fa fa-times' : 'fa fa-bars'" 
    class="cursor-pointer" 
    @click="toggleMenu">
  </i>
</div>

<!-- Mobile Navigation Menu (Visible when menu is toggled) -->
<div v-if="isMenuOpen" class="md:hidden bg-[#1A0B2E] text-white flex flex-col absolute top-18 -left-32 translate-x-50 transition-all duration-300 ease-in-out items-center py-4 z-50 shadow-md">
  <ul class="flex flex-col gap-6 font-bold w-74 text-center">
    <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">HOME</li>
    <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">DISCOVER LIVE</li>
    <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">CATEGORIES</li>
    <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">CONSULTING</li>
    <li class="hover:text-[#DF3F2A] hover:rounded-full cursor-pointer">NEWS & UPDATES</li>
  </ul>
</div>
    <div class="hidden md:flex gap-6 text-2xl text-white cursor-pointer ">
      <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_0px]">
        <i class="fa fa-twitter"></i>
      </div>
        <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
        <i class="fa fa-facebook"></i>
      </div>
        <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
        <i class="fa fa-pinterest"></i>
      </div>
        <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
        <i class="fa fa-instagram"></i>
      </div>
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

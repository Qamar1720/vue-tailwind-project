<template>
  <div>
    <hr class="text-[#3E344B]">
  </div>
<div class=" w-full flex min-w-full bg-[#1A0B2E] min-h-screen relative pt-8">
  <!-- Background Image -->
  <div class="w-full flex items-center justify-center relative">
    <img src="/home/test/Documents/Demo project/vue-tailwind-project/src/assets/pics/header_image.jpg" alt="" class="w-full">
   </div>
   <div class="max-w-[1440px] w-full mx-auto flex md:flex-col md:gap-5 xl:gap-0 xl:flex-row justify-between items-center absolute top-4 left-1/2 -translate-x-1/2 px-6 z-10 listitems">
    <!-- Logo -->
    <div class="cursor-pointer w-auto">
      <img src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
    </div>
    
    
    <!-- Navigation Links -->
    <div>
      <ul class="hidden md:flex gap-13 mt-2 text-white font-bold">
        <li class="relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100">
          HOME
        </li>
        <li class="relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100">
          DISCOVER LIVE
        </li>
        <li class="relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100">
          CATEGORIES
        </li>
        <li class="relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100">
          CONSULTING
        </li>
        <li class="relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:h-[8px] before:w-full before:bg-[#DF3F2A] before:scale-0 before:transition-all before:duration-300 before:ease-in-out hover:before:scale-100">
          NEWS & UPDATES
        </li>
      </ul>
    </div>

  
  <!-- Hamburger Menu and Close Icon -->
  <div class="md:hidden flex gap-4 text-[#3E344B] text-3xl ">
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
<div class="hidden md:flex flex-wrap gap-4 md:gap-5 lg:gap-6 text-xl md:text-2xl text-white cursor-pointer px-2">
  <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_0px]">
    <i class="fa fa-twitter"></i>
  </div>
  <div class="border-2 lg:px-4 rounded-full px-2 md:px-4 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
    <i class="fa fa-facebook"></i>
  </div>
  <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
    <i class="fa fa-pinterest"></i>
  </div>
  <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
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
<style scoped>
  @media screen and (min-width:1279px) and (max-width:1290px){
  .listitems{
      display: flex;
      flex-direction: column;
      gap: 14;
    }
  }
</style>

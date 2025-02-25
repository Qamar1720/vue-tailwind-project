<template>
    <div class="flex bg-purple-900 justify-between items-center p-4">
        <!-- Logo -->
        <div class="cursor-pointer items-center justify-center">
            <img src="../assets/pics/logo.png" alt="Logo" />
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex">
            <ul class="flex gap-7 items-center justify-center text-white cursor-pointer font-bold">
                <li class="hover:bg-shadow-red-400 hover:text-red-400 hover:rounded-full p-2 hover:shadow-red-500">HOME</li>
                <li class="hover:bg-shadow-red-400 hover:text-red-400 hover:rounded-full p-2 hover:shadow-red-500">DISCOVER LIVE</li>
                <li class="hover:bg-shadow-red-400 hover:text-red-400 hover:rounded-full p-2 hover:shadow-red-500">CATEGORIES</li>
                <li class="hover:bg-shadow-red-400 hover:text-red-400 hover:rounded-full p-2 hover:shadow-red-500">CONSULTING</li>
                <li class="hover:bg-shadow-red-400 hover:text-red-400 hover:rounded-full p-2 hover:shadow-red-500">NEWS & UPDATES</li>
            </ul>
        </div>

        <!-- Hamburger Menu and close menu -->
        <div class="md:hidden flex items-center gap-4">
          <i class="fa fa-bars cursor-pointer" @click="toggleMenu"></i>
          <!-- <i class="fa fa-times cursor-pointer mt-4" @click="toggleMenu"></i> -->
        </div>

        <!-- Social Icons (Visible on large screens) -->
        <div class="hidden md:flex gap-6 justify-center items-center text-2xl text-white cursor-pointer">
          <i class="fa fa-twitter border-2 rounded-full hover:text-red-500 hover:shadow-lg hover:shadow-red-500"></i>
          <i class="fa fa-facebook hover:text-red-500 hover:shadow-lg hover:shadow-red-500"></i>
          <i class="fa fa-pinterest hover:text-red-500 hover:shadow-lg hover:shadow-red-500"></i>
          <i class="fa fa-instagram hover:text-red-500 hover:shadow-lg hover:shadow-red-500"></i>
        </div>

    </div>

    <!-- Mobile Navigation Menu (Visible when menu is toggled) -->
    <div v-if="isMenuOpen" class="md:hidden bg-purple-900 text-white flex flex-col items-center p-4">
        <ul class="flex flex-col gap-4 text-center">
            <li class="p-2">HOME</li>
            <li class="p-2">DISCOVER LIVE</li>
            <li class="p-2">CATEGORIES</li>
            <li class="p-2">CONSULTING</li>
            <li class="p-2">NEWS & UPDATES</li>
        </ul>
        <div class="flex gap-4 justify-center items-center text-2xl mt-4">
            <i class="fa fa-twitter border-2 rounded-full hover:text-red-500 hover:shadow-red-500"></i>
            <i class="fa fa-facebook hover:text-red-500"></i>
            <i class="fa fa-pinterest hover:text-red-500 hover:shadow-red-500"></i>
            <i class="fa fa-instagram hover:text-red-500 hover:shadow-red-500"></i>
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


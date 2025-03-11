<template>
  <div>
    <hr class="text-[#3E344B]" />
    <div class="w-full flex min-w-full bg-[#1A0B2E] min-h-screen relative pt-8">
      <!-- Background Image -->
      <div
        class="w-full bg-cover bg-center flex relative pt-8"
        :class="responsiveHeight"
        :style="{ backgroundImage: `url(${navbarBgImage})` }"
      >

        <!-- Page Title -->
        <div v-if="Array.isArray(title)" class="absolute text-center" :class="titlePosition">
        <p v-for="(line, index) in title" :key="index" class="flex items-center justify-center">
          <template v-if="line.highlight">
            <span :class="line.class">{{ line.text.split(line.highlight)[0] }}</span>
            <span :class="line.highlightClass">{{ line.highlight }}</span>
          </template>
          <span v-else :class="line.class">{{ line.text }}</span>
        </p>
      </div>
      </div>

      <!-- Navbar -->
      <nav
        class="max-w-[1440px] w-full mx-auto flex md:flex-col md:gap-5 xl:gap-0 xl:flex-row justify-between items-center absolute top-4 left-1/2 -translate-x-1/2 px-2 z-50 bg-transparent"
      >
        <!-- Logo -->
        <div class="cursor-pointer w-auto px-4 sm:px-0 z-100">
          <img src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
        </div>

        <!-- Navigation Links -->
        <div>
          <ul class="hidden md:flex gap-13 mt-2 text-white font-bold">
            <router-link to="/" :class="activeClass('/')">HOME</router-link>
            <router-link to="/discover_live" :class="activeClass('/discover_live')">DISCOVER LIVE</router-link>
            <router-link to="/categories" :class="activeClass('/categories')">CATEGORIES</router-link>
            <li @click="navigateTo('consulting')" :class="activeClass('consulting')">CONSULTING</li>
            <li @click="navigateTo('news')" :class="activeClass('news')">NEWS & UPDATES</li>
          </ul>
        </div>

        <!-- Hamburger Menu and Close Icon -->
        <div class="md:hidden flex gap-4 text-white text-3xl z-100 px-5">
          <i
            :class="[
              isMenuOpen ? 'fa fa-times' : 'fa fa-bars',
              'cursor-pointer -mt-2'
            ]"
            @click="toggleMenu"
          ></i>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-[#1A0B2E] text-white flex md:hidden flex-col items-center justify-center min-h-screen transition-all duration-300 ease-in-out z-10 shadow-md"
        >
          <ul class="flex flex-col gap-6 font-bold w-full text-center">
            <li @click="navigateTo('/')">HOME</li>
            <li @click="navigateTo('discover_live')">DISCOVER LIVE</li>
            <li @click="navigateTo('categories')">CATEGORIES</li>
            <li @click="navigateTo('consulting')">CONSULTING</li>
            <li @click="navigateTo('news')">NEWS & UPDATES</li>
          </ul>
        </div>

         <!-- Social Media Icons -->
         <div
          class="hidden md:flex flex-wrap gap-4 md:gap-5 lg:gap-6 text-xl md:text-2xl text-white cursor-pointer px-2"
        >
          <div
            class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]"
          >
            <i class="fa fa-twitter"></i>
          </div>
          <div
            class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]"
          >
            <i class="fa fa-facebook"></i>
          </div>
          <div
            class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]"
          >
            <i class="fa fa-pinterest"></i>
          </div>
          <div
            class="flex items-center justify-center border-2 w-10 h-10 rounded-full border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]"
          >
            <i class="fa fa-instagram"></i>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

export default {
  props: {
    navbarBgImage: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isMenuOpen = ref(false);

    const responsiveHeight = computed(() => 
      "h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px] 2xl:h-[180px]"
    );

    // Get background image & text properties from route meta
    const navbarBgImage = computed(() => route.meta.navbarBgImage || "");
    const title = computed(() => route.meta.title || "");
    const titlePosition = computed(() => route.meta.titlePosition || "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2");

    const activeClass = computed(() => (path) =>
      route.path === path
        ? "text-[#DF3F2A] font-bold"
        : "relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100"
    );

    const navigateTo = (section) => {
      router.push(`/${section}`);
      isMenuOpen.value = false; // Close mobile menu on navigation
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { activeClass, navigateTo, isMenuOpen, toggleMenu, navbarBgImage, title, titlePosition };
  },
};
</script>

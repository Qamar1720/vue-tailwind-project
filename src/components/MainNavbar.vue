<template>
  <div>
    <hr class="text-[#3E344B]" />
    <div class="w-full flex min-w-full bg-[#1A0B2E] min-h-screen relative pt-8">
      <!-- Background Image -->
      <div
        class="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        :style="{ backgroundImage: `url(${navbarBgImage})` }"
      >
        <!-- Page Title -->
        <div
          v-if="Array.isArray(title)"
          class="absolute"
          :class="titlePosition"
        >
          <div class="w-full max-w-[1440px] mx-auto px-4">
            <p
              v-for="(line, index) in title"
              :key="index"
              class="flex justify-center md:justify-start"
            >
              <template v-if="line.highlight">
                <span :class="line.class">{{
                  line.text.split(line.highlight)[0]
                }}</span>
                <span :class="line.highlightClass">{{ line.highlight }}</span>
              </template>
              <span v-else :class="line.class">{{ line.text }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Navbar -->
      <nav
        class="max-w-[1440px] w-full mx-auto flex md:flex-col md:gap-5 xl:gap-0 xl:flex-row justify-between items-center absolute top-4 left-1/2 -translate-x-1/2 px-2 z-50 bg-transparent"
      >
        <!-- Logo -->
        <router-link to="/" class="cursor-pointer w-auto px-4 sm:px-0 z-100">
          <img :class="activeClass('/')" src="../assets/pics/logo.png" alt="Logo" class="h-12 w-auto" />
        </router-link>


        <!-- Navigation Links -->
        <div>
          <ul class="hidden md:flex gap-13 mt-2 text-white font-bold">
            <router-link to="/" :class="activeClass('/')">HOME</router-link>
            <router-link
              to="/discover_live"
              :class="activeClass('/discover_live')"
              >DISCOVER LIVE</router-link
            >
            <li
              @click="navigateTo('#')"
              :class="activeClass('')"
            >
              CATEGORIES
            </li>
            <li
              @click="navigateTo('#')"
              :class="activeClass('')"
            >
              CONSULTING
            </li>
            <li @click="navigateTo('#')" :class="activeClass('')">
              NEWS & UPDATES
            </li>
          </ul>
        </div>

        <!-- Hamburger Menu and Close Icon -->
        <div class="md:hidden flex gap-4 text-white text-3xl z-100 px-5">
          <i
            :class="[
              isMenuOpen ? 'fa fa-times' : 'fa fa-bars',
              'cursor-pointer -mt-2',
            ]"
            @click="toggleMenu"
          ></i>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-[#1A0B2E] text-white flex md:hidden flex-col items-center justify-center h-96 transition-all duration-300 ease-in-out z-10 shadow-md"
        >
          <ul class="flex flex-col gap-6 font-bold w-full text-center">
            <li @click="navigateTo('/')">HOME</li>
            <li @click="navigateTo('discover_live')">DISCOVER LIVE</li>
            <li @click="navigateTo('#')">CATEGORIES</li>
            <li @click="navigateTo('#')">CONSULTING</li>
            <li @click="navigateTo('#')">NEWS & UPDATES</li>
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

    // Get background image & text properties from route meta
    const navbarBgImage = computed(() => route.meta.navbarBgImage || "");
    const title = computed(() => route.meta.title || "");
    const titlePosition = computed(
      () =>
        route.meta.titlePosition ||
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    );
    const responsiveHeight = computed(
      () =>
        "h-[400px] w-[100px] sm:mb-0 sm:pb-0 md:h-[600px] md:mb-0 md:pb-0 lg:h-[750px] xl:h-[900px]"
    );

    const activeClass = computed(
      () => (path) =>
        route.path === path
          ? "text-[#DF3F2A] font-bold "
          : "relative transition duration-300 cursor-pointer hover:text-[#DF3F2A] hover:shadow-[0_0_25px_2px] hover:rounded-full hover:shadow-[#33132A] before:absolute before:top-[-34px] before:left-0 before:w-full before:h-[8px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-100"
    );

    const navigateTo = (section) => {
      router.push(`/${section}`);
      isMenuOpen.value = false; // Close mobile menu on navigation
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      activeClass,
      navigateTo,
      isMenuOpen,
      toggleMenu,
      navbarBgImage,
      title,
      titlePosition,
      responsiveHeight,
    };
  },
};
</script>

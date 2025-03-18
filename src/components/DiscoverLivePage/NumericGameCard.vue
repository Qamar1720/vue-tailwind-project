<template>
  <div class="p-6 bg-[#1A0B2E] pb-24">
    <div class="w-full max-w-[1440px] mx-auto">
       <!-- Loading Indicator -->
    <div v-if="loading" class="flex justify-center items-center">
    <svg class="w-8 h-8 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    </div>
       
       <!-- Error Message -->
       <p v-if="error" class="text-red-500">{{ error }}</p>
      </div>
       
    <!-- Game List -->
    <div
      class="flex sm:flex-row flex-col justify-between max-w-[1440px] mx-auto pt-18"
    >
      <div
        class="text-3xl font-bold pb-4 text-[#FDFDFB]"
      >
        Latest Maps
      </div>
      <div
        class="xl:text-xl lg:text-lg md:text-md sm:text-sm pb-4 text-[#CEA229]"
      >
        View All
      </div>
    </div>
    <!-- Main Card Div -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 max-w-[1440px] mx-auto w-full cursor-pointer"
    >
    <!-- Whole Card Design  -->
      <div
        v-for="game in games.slice(0, 6)"
        :key="game.id"
        @click="navigateToGame(game.id)"
        class="mt-2 shadow-md text-black bg-[#2F223E] min-h-[200px] group relative overflow-hidden rounded-lg hover:shadow-gray-400 hover:shadow-[0px_0px_15px_2px] hover:transition-all hover:duration-300 ease-in-out"
      >
      <div class="relative">
        <!-- Game Image -->
        <img
        :src="game.background_image"
        alt="Game Image"
        class="h-55 sm:h-56 md:h-64 object-cover rounded-lg w-full p-2"
        />
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>

          <!-- Content -->
          <div class="absolute top-0.5 w-full flex justify-between">
            <!-- Trapezoid Shape -->
            <div
              class="trapezoid absolute top-40 md:top-48 left-9 flex px-4 py-2 text-white text-xl font-bold"
            >
              29546548
            </div>

            <!-- Playtime & User Icon -->
            <div
              class="flex items-center space-x-2 absolute top-40 md:top-48 left-[76%] sm:left-[75%] md:left-[70%] xl:left-[80%]"
            >
              <i class="fa fa-user text-[#d93e31]" style="font-size: 30px"></i>
              <p class="text-white text-lg font-bold" style="font-size: 30px">
                {{ game.playtime }}
              </p>
            </div>
          </div>

          <!-- Game Title -->
          <div class="flex flex-col gap-0 absolute left-9 top-26 md:top-30">
            <h2
              class="text-xl md:text-2xl font-bold h-[40px] text-white truncate uppercase"
            >
              HELL GATE OPEN,
            </h2>
          </div>

          <!-- Subtitle (Get Tips) -->
          <div class="flex flex-col gap-0 absolute top-32 md:top-38 left-9">
            <h2
              class="text-xl md:text-2xl font-bold h-[40px] text-white truncate uppercase"
            >
              Get Tips
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "../../main";
import { useRoute } from "vue-router";

const API_KEY = "20ab3549926347d0ae7a343a896a4973"; // API key
const games = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch games from the API
const fetchGames = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch games");

    const data = await response.json();
    games.value = data.results; // Games list
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const navigateToGame = (gameId) => {
  router.push(`/game/${gameId}`); // Redirect to dynamic route
};

// Fetch games when component mounts
onMounted(fetchGames);
</script>
<style scoped>
.trapezoid {
  position: relative;
  width: 180px; /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  background-color: #d93e31; /* Red background */
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
/* @media screen and (min-width:640px) and (max-width: 670px) {
      .responsivebtn{
        display: flex;
        gap: 16px;
        font-size: medium;
      }
    } */
@media screen and (min-width: 1024px) and (max-width: 1100px) {
  .responsivebtn {
    font-size: medium;
  }
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .responsivebtn {
    font-size: medium;
  }
}
/* .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  } */
</style>

<template>
    <div class="p-6">
      <!-- Loading Indicator -->
      <p v-if="loading" class="text-gray-400">Loading games...</p>
  
      <!-- Error Message -->
      <p v-if="error" class="text-red-500">{{ error }}</p>
  
      <!-- Game List -->
      <div class="flex sm:flex-row flex-col gap-4 max-w-[1440px] mx-auto pt-24">
        <h1 class="text-3xl font-bold max-w-[1440px] mx-auto w-full pb-5">
          Latest Maps
        </h1>
        <div class="flex relative pb-5">
          <input type="text" placeholder="Sort by Top Concurrent" class="border p-2"/>
          <i class="fa fa-caret-down absolute left-58 top-3"></i>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 max-w-[1440px] mx-auto w-full cursor-pointer">
        <div
          v-for="game in games.slice(0,6)"
          :key="game.id"
          class="pb-6 mt-2 rounded-lg shadow-md text-black bg-[#F5F5F5] hover:bg-white hover:shadow-gray-400 hover:shadow-[0px_0px_15px_2px] hover:transition-all hover:duration-300 ease-in-out min-h-[400px] group"
        >
          <div class="relative">
            <img
              :src="game.background_image"
              alt="Game Image"
              class="h-48 sm:h-56 md:h-64 object-cover rounded-md w-full"
            />
            <!-- Trapezoid Shape -->
            <div class="absolute top-0 left-0 w-full flex justify-center">
              <div
                class="trapezoid relative flex items-center px-4 py-2 text-white text-xl font-bold"
              >
                <i class="fa fa-link mr-1 rotate-810"></i> 01234-5678-4321
              </div>
            </div>
          </div>
          <!-- Card Details -->
          <div class="flex flex-col mt-3 px-6">
            <i class="fa fa-user text-[#D83831] fa-2x">
              <span class="text-gray-600 text-xl ml-2 font-bold"
                >{{ game.rating }}k</span
              >
            </i>
            <div class="flex flex-col gap-0">
              <h2 class="text-xl md:text-2xl  font-bold h-[40px] truncate">
                {{ game.name }}
              </h2>
              <p class="text-sm md:text-lg lg:text-xl text-gray-300 font-bold">
                Released: {{ game.released }}
              </p>
            </div>
  
            <div class="py-4">
              <!-- Line above button -->
              <hr class="border-t w-full border-white transition-all duration-300 group-hover:opacity-0">
              
              <!-- Line above button (hover effect) -->
              <hr class="border-t w-full border-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const API_KEY = "20ab3549926347d0ae7a343a896a4973"; // API key
  const games = ref([]);
  const loading = ref(true);
  const error = ref(null); 
  
  // Fetch games from the API
  const fetchGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${page_size}`
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
  
   // Fetch games when component mounts
  onMounted(fetchGames);
  </script>
  <style>
  .trapezoid {
    position: relative;
    width: 250px; /* Adjust width as needed */
    height: 50px; /* Adjust height as needed */
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
  
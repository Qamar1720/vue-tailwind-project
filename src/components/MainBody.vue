<template>
  <div class="p-6">
    <!-- Loading Indicator -->
    <p v-if="loading" class="text-gray-400">Loading games...</p>
    
    <!-- Error Message -->
    <p v-if="error" class="text-red-500">{{ error }}</p>
    
    <!-- Game List -->
    <div v-if="games.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 w-full cursor-pointer">
      <div v-for="game in games" :key="game.id" class="p-4 rounded-lg shadow-md text-black bg-white">
        <div class="relative">
          <img :src="game.background_image" alt="Game Image" class="h-48 sm:h-56 md:h-64 object-cover rounded-md w-full" />
          <p class="absolute top-0 left-27 rounded-3xl px-3 py-1 font-bold text-lg bg-[#D83831] text-white">
            <i class="fa fa-link"></i> 01234-567
          </p>
        </div>
        <div class="flex flex-col gap-3 mt-3">
          <i class="fa fa-users text-[#D83831] fa-2x">
            <span class="text-gray-600 text-lg ml-1">6.5k</span>
          </i>
          <h2 class="text-xl md:text-2xl font-bold">{{ game.name }}</h2>
          <p class="text-sm md:text-lg font-bold">Released: {{ game.released }}</p>
          <div class="flex items-center justify-between pt-3">
            <button class="rounded-2xl text-sm md:text-lg font-bold cursor-pointer hover:bg-[#D83831] border-2 px-4 py-2 hover:text-white text-[#D83831]">
              Add to playlist
            </button>
            <div class="font-bold flex gap-4 cursor-pointer text-xl">
              <i class="fa fa-heart text-gray-400 fa-2"></i>
              <i class="fa fa-share text-gray-400 fa-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const API_KEY = "20ab3549926347d0ae7a343a896a4973"; // API key
const games = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
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

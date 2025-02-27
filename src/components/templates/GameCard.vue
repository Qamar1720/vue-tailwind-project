<template>
    <!-- <div class="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 rounded-lg cursor-pointer  transition duration-300 ease-in-out">
        <div class=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-yellow-400">
            {{ title }}
        </div>
        <h1 class="font-bold text-xl">{{ description }}</h1>
    </div> -->
    <div class="p-6">
    <h1 class="text-2xl font-bold text-white">Popular Games</h1>
    
    <!-- Loading Indicator -->
    <p v-if="loading" class="text-gray-400">Loading games...</p>
    
    <!-- Error Message -->
    <p v-if="error" class="text-red-500">{{ error }}</p>
    
    <!-- Game List -->
    <div v-if="games.length" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 w-full">
      <div v-for="game in games" :key="game.id" class="p-2 rounded-lg shadow-md text-black bg-white ">
        <img :src="game.background_image" alt="Game Image" class="w-full h-40 object-cover rounded-md" />
        <div class="w-96  mx-auto flex flex-col gap-4">
          <h2 class="text-2xl font-bold mt-2">{{ game.name }}</h2>
          <h2 class="text-2xl font-bold mt-2">Playtime:  {{ game.playtime }}</h2>
          <p class="">Released: {{ game.released }}</p>
          <div class="flex items-center pt-3">
            <button class="rounded-xl cursor-pointer hover:bg-[#D83831] border-2 p-2 hover:text-white text-[#D83831]">Add to playlist</button>
            <!-- <p><i class="fa fa-heart"></i></p>
            <p><i class="fa fa-share"></i></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// Define props
const API_KEY= "20ab3549926347d0ae7a343a896a4973"
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

onMounted(() => {
    getPost();
});
</script>
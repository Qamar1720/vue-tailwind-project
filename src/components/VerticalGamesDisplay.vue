<template>
    <div v-if="!loading && !error" class="pt-0 flex flex-col">
          <!-- Left Games Details -->
           <HomeChart/> 
          <div
            class="lg:w-[100%] border border-[#362943] overflow-x-auto overflow-y-scroll h-96 scrollbar-custom"
          >
            <div class="flex flex-col gap-x-4">
              <div
                v-for="(game, index) in games"
                :key="index"
                @click="navigateToGame(game.id)"
                class="min-w-[900px] flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md transition-all border border-[#362943] cursor-pointer"
              >
                <div class="flex items-center gap-5">
                  <span
                    class="trapezoid text-xl font-bold text-[#E0DAE2] -ml-4"
                    >{{ index + 1 }}</span
                  >
                  <img
                    :src="game.background_image"
                    alt="Game Image"
                    class="h-16 w-20 object-cover"
                  />
                  <h2 class="text-xl md:text-2xl font-bold uppercase truncate">
                    {{ game.name }}
                  </h2>
                  <span class="border px-3 py-1 border-[#3C1831] text-sm"
                    >BY EPIC</span
                  >
                </div>
                <div class="flex gap-8">
                  <h2 class="text-xl md:text-2xl font-bold">
                    {{ game.ratings_count.toLocaleString() }}
                  </h2>
                  <h2 class="text-xl md:text-2xl font-bold text-[#C93828]">
                    {{ game.ratings_count.toLocaleString() }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

</template>
<script setup>
import { ref, onMounted } from "vue";
import router from "../main";
import HomeChart from "./ChartsPage/HomeChart.vue";

const API_KEY = "20ab3549926347d0ae7a343a896a4973";
const games = ref([]);

const errorGames = ref(null);
const loadingGames = ref(true);

//Fetching Gaming data from API
const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch games data");
    const data = await response.json();
    games.value = data.results || [];
  } catch (err) {
    errorGames.value = err.message;
  } finally {
    loadingGames.value = false;
  }
};

const navigateToGame = (gameId) => {
  router.push(`/game/${gameId}`); // Redirect to dynamic route
};

onMounted(async () => {
    await fetchGames();
});
</script>
<style>
.trapezoid {
  width: 34px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #3e344b; /* Adjust background color */
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
/* Custom scrollbar styles */
.scrollbar-custom::-webkit-scrollbar {
    width: 14px; /* Total scrollbar width */
}

.scrollbar-custom::-webkit-scrollbar-track {
    background: #332640; /* Track color */
    border-radius: 10px; /* Rounded track */
    padding: 3px; /* This won't work directly but keeps consistency */
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    background: #493D55; /*Track Color */
    border-radius: 8px; /* Rounded edges */
    width: 8px; /* Make thumb smaller than track to simulate padding */
    margin: 3px; /* Creates spacing effect */
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background: #493D55; /* Color on hover */
}

</style>
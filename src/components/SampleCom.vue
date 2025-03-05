<template>
    <div class="bg-[#1A0B2E] text-white px-8 w-full min-h-screen flex justify-center">
        <div class="max-w-[1440px] w-full mx-auto">
            <div class="flex flex-col gap-4">
                <h2 class="text-[#E0DAE2] text-2xl font-bold">explore and discover</h2>
                <h2 class="text-[#C93828] font-bold text-4xl pb-4">New Maps, Creators & Experiences</h2>
            </div>
            
            <!-- Loading Indicator -->
            <p v-if="loading" class="text-gray-400 text-center">Loading games...</p>

            <!-- Error Message -->
            <p v-if="error" class="text-red-500 text-center">{{ error }}</p>

            <div class=" flex">
                <!-- Game List -->
                <div v-if="!loading && !error" class="pt-0 w-[75%] flex">
                    <div class="w-full flex flex-col gap-4">
                        <div v-for="(game, index) in games" :key="game.id"
                            class="flex items-center justify-between bg-[#1A0B2E] p-4 rounded-lg shadow-md transition-all">
                            <div class="flex items-center gap-4">
                                <span class="trapezoid text-2xl font-bold text-[#E0DAE2] -ml-3">{{ index + 1 }}</span>
                                <img :src="game.background_image" alt="Game Image" class="h-16 w-20 object-cover rounded-md">
                                <h2 class="text-xl md:text-2xl font-bold truncate">{{ game.name }}</h2>
                                <span class="border px-2 py-1 rounded-md text-sm">BY EPIC</span>
                            </div>
                            <div class="flex gap-8">
                                <h2 class="text-xl md:text-2xl font-bold">{{ game.ratings_count }}</h2>
                                <h2 class="text-xl md:text-2xl font-bold">{{ game.ratings_count }}</h2>
                            </div>
                    </div>
                </div>
                <!-- Side List -->
                <div class="w-[25%] border flex">
                    <h2>hello </h2>
                </div>
            </div>
        </div>
    </div>
</div>
    </template>

<script setup>
import { ref, onMounted } from "vue";

const API_KEY = '20ab3549926347d0ae7a343a896a4973';
const games = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch Games from API
const fetchGames = async () => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        if (!response.ok) throw new Error('Failed to fetch Data');
        const data = await response.json();
        games.value = data.results;
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
};

onMounted(fetchGames);
</script>

<style scoped>
.trapezoid {
  width: 50px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #3E344B; /* Adjust background color */
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>

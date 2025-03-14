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

            <!-- Main Div -->
            <div class=" flex flex-col md:flex-row box-border">
                <!-- Right Side Game List -->
                <div v-if="!loading && !error" class="pt-0 md:w-[66%] w-[100%] flex flex-col">
                
                <!-- Static List: First 4 Games using scroller -->
                <div class="w-full flex flex-col border border-[#362943] overflow-y-scroll h-96 scrollbar-custom">
                    <div v-for="(game, index) in games" :key="index"
                    class="flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md transition-all border border-[#362943]">
                    <div class="flex items-center gap-5">
                        <span class="trapezoid text-xl font-bold text-[#E0DAE2] -ml-4">{{ index + 1 }}</span>
                        <img :src="game.background_image" alt="Game Image" class="h-16 w-20 object-cover">
                        <h2 class="text-xl md:text-2xl font-bold uppercase truncate">{{ game.name }}</h2>
                        <span class="border px-3 py-1 border-[#3C1831] text-sm">BY EPIC</span>
                    </div>
                    <div class="flex md:flex-row flex-col gap-8">
                        <h2 class="text-xl md:text-2xl font-bold">{{ game.ratings_count.toLocaleString() }}</h2>
                        <h2 class="text-xl md:text-2xl font-bold text-[#C93828]">{{ game.ratings_count.toLocaleString() }}</h2>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Top Right Div -->
            <div class="w-[34%] ml-8 border-[#3E344B] border-2">
                <div class="flex justify-around text-lg border-[#3E344B] border-2 pt-8 pb-3 ">
                    <button class="uppercase text-white hover:text-[#3A3144] font-bold">Top Developers</button>
                    <button class="uppercase text-[#3A3144] font-bold">Top Studios</button>
                </div>
                <div class="w-full">
                    <div v-for="(game, index) in games.slice(0,5)" :key="index"
                    class="flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md transition-all border border-[#362943] w-full">
                    <div class="flex gap-10 px-4 max-w-[90%]">    
                        <img :src="game.background_image" alt="Game Image" class="h-26 w-26 object-cover">
                        <div class="flex flex-col gap-2 max-w-[90%]">
                        <span class="trapezoid2 text-xl font-bold text-[#E0DAE2]"># {{ index + 1 }}</span>
                        <h2 class="text-xl md:text-xl font-bold uppercase  truncate">{{ game.name }}</h2>
                        <h2 class="text-xl md:text-xl font-bold uppercase truncate"><i class="fa fa-play"></i> {{ game.playtime }}B</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css"; // Import Swiper styles

const API_KEY = "20ab3549926347d0ae7a343a896a4973";
const games = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch Games from API
const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch Data");
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
  width: 34px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #3E344B; /* Adjust background color */
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
.trapezoid2 {
  width: 55px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #D83E31; /* Adjust background color */
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

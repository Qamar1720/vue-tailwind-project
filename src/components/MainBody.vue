<template>
  <div class="p-6">
    <!-- Loading Indicator -->
    <p v-if="loading" class="text-gray-400">Loading games...</p>
    
    <!-- Error Message -->
    <p v-if="error" class="text-red-500">{{ error }}</p>
    
    <!-- Game List -->
    <div v-if="paginatedGames.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 w-full cursor-pointer">
      <div v-for="game in paginatedGames" :key="game.id" class="pb-6 mt-2 rounded-lg shadow-md text-black bg-[#F5F5F5] hover:bg-white hover:shadow-gray-400 hover:shadow-[0px_0px_15px_2px] hover:px-2 hover:transition-all hover:duration-300 ease-in-out">
        <div class="relative">
          <img :src="game.background_image" alt="Game Image" class="h-48 sm:h-56 md:h-64 object-cover rounded-md w-full" />
          
          <!-- Trapezoid Shape -->
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
            <div class="trapezoid relative flex items-center px-4 py-2 text-white text-xl font-bold">
              <i class="fa fa-link mr-1 rotate-810"></i> 01234-5678-4321
            </div>
          </div>
        </div>
        <!-- Card Details -->
        <div class="flex flex-col gap-3 mt-3 px-6">
          <i class="fa fa-user text-[#D83831] fa-2x">
            <span class="text-gray-600 text-lg ml-2 font-bold">{{ game.rating }}k</span>
          </i>
          <h2 class="text-xl md:text-2xl font-bold">{{ game.name }}</h2>
          <p class="text-sm md:text-lg text-gray-400 font-bold">Released: {{ game.released }}</p>
          <hr class="text-white">
          <!-- Icons with playlist button -->
          <div class="flex items-center justify-between pt-3 responsivebtn">
            <button class="rounded-lg text-sm md:text-lg font-bold cursor-pointer hover:bg-[#D83831] border-2 px-4 py-2 hover:text-white text-[#D83831]">
              Add to playlist
            </button>
            <!-- Icons-->
            <div class="font-bold flex gap-6 cursor-pointer text-xl">
              <i class="fa fa-heart text-gray-300 fa-2x hover:text-[#D83831]"></i>
              <i class="fa fa-share-alt text-gray-300 fa-2x  hover:text-[#D83831]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-6 items-center space-x-2">
      <!-- Previous Button -->
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1" 
        class="px-3 py-2 rounded-full bg-gray-200 border disabled:opacity-50">
        <i class="fa fa-angle-left"></i>
      </button>
      
      <!-- Page Numbers -->
      <template v-for="page in totalPages" :key="page">
        <button 
          @click="currentPage = page" 
          :class="['px-4 py-2 rounded-full', currentPage === page ? 'bg-red-500 text-white' : 'bg-gray-200']">
          {{ page }}
        </button>
      </template>

      <!-- Next Button -->
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages" 
        class="px-3 py-2 rounded-full bg-gray-200 border disabled:opacity-50">
        <i class="fa fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const API_KEY = "20ab3549926347d0ae7a343a896a4973"; // API key
const games = ref([]);
const loading = ref(true);
const error = ref(null);
const currentPage = ref(1);
const itemsPerPage = 12;

const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=50`);
    if (!response.ok) throw new Error("Failed to fetch games");
    
    const data = await response.json();
    games.value = data.results; // Games list
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Computed property for paginated games
const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return games.value.slice(start, end);
});

// Total number of pages
const totalPages = computed(() => Math.ceil(games.value.length / itemsPerPage));

// Pagination functions
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// Fetch games when component mounts
onMounted(fetchGames);
</script>
<style >
  .trapezoid {
  position: relative;
  width: 250px; /* Adjust width as needed */
  height: 50px; /* Adjust height as needed */
  background-color: #D93E31; /* Red background */
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
  @media screen and (min-width:639px) and (max-width: 670px) {
    .responsivebtn{
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (min-width:1024px) and (max-width: 1100px) {
    .responsivebtn{
      display: flex;
      flex-direction: column;
    }
  }


</style>
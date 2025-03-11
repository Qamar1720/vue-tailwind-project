<template>
  <div class="p-6">
    <!-- Loading Indicator -->
    <div v-if="loading" class="flex justify-center items-center">
    <svg class="w-8 h-8 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    </div>

    <!-- Error Message -->
    <p v-if="error" class="text-red-500 max-w-[1440px] mx-auto w-full">{{ error }}</p>

    <!-- Game List -->
    <div class="flex sm:flex-row flex-col gap-4 max-w-[1440px] mx-auto pt-24">
      <h1 class="text-3xl font-bold max-w-[1440px] mx-auto w-full pb-5">
        Latest Maps
      </h1>
      <div class="flex relative pb-5">
        <input
          type="text"
          placeholder="Sort by Top Concurrent"
          class="border p-2"
        />
        <i class="fa fa-caret-down absolute left-58 top-3"></i>
      </div>
    </div>
    <div
  v-if="paginatedGames && paginatedGames.length"
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 max-w-[1440px] mx-auto w-full cursor-pointer"
>
  <div
    v-for="game in paginatedGames"
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
            <h2 class="text-xl md:text-2xl font-bold h-[40px] truncate">
              {{ game.name }}
            </h2>
            <p class="text-sm md:text-lg lg:text-xl text-gray-300 font-bold">
              Released: {{ game.released }}
            </p>
          </div>

          <div class="py-4">
            <!-- Line above button -->
            <hr
              class="border-t w-full border-white transition-all duration-300 group-hover:opacity-0"
            />

            <!-- Line above button (hover effect) -->
            <hr
              class="border-t w-full border-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
            />
          </div>

          <!-- Icons with playlist button -->
          <div class="flex items-center justify-between pt-3">
            <button
              class="rounded-lg text-lg sm:text-sm md:text-md lg:text-lg cursor-pointer hover:bg-[#D83831] font-bold border-1 px-4 py-2 hover:text-white text-[#D83831]"
            >
              Add to playlist
            </button>
            <!-- Icons -->
            <div
              class="font-bold flex gap-4 sm:gap-6 cursor-pointer text-2xl sm:text-xl md:text-2xl responsivebtn"
            >
              <i
                class="fa fa-heart text-gray-300 hover:text-[#D83831] fa-2x"
              ></i>
              <i
                class="fa fa-share-alt text-gray-300 hover:text-[#D83831] fa-2x"
              ></i>
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
        class="px-4 py-2 rounded-full cursor-pointer bg-gray-200 border disabled:opacity-50"
      >
        <i class="fa fa-angle-left"></i>
      </button>

      <!-- Page Numbers -->
      <template v-for="page in displayedPages" :key="page">
        <button
          @click="handlePageClick(page)"
          :class="[
            'px-4 py-2 rounded-full',
            currentPage === page ? 'bg-red-500 text-white' : 'bg-gray-200',
          ]"
        >
          {{ page }}
        </button>
      </template>

      <!-- Next Button -->
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-full cursor-pointer bg-gray-200 border disabled:opacity-50"
      >
        <i class="fa fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const API_KEY = "20ab3549926347d0ae7a343a896a4973"; // API key
const games = ref([]);
const loading = ref(true);
const error = ref(null);
const currentPage = ref(1);
const itemsPerPage = 12;
const page_size = 100;

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

//total pages logic
const totalPages = computed(() => Math.ceil((games.value?.length || 0) / itemsPerPage));

// Compute paginated games (only items for the current page)
const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return games.value.slice(start, end);
});

// Compute displayed pagination numbers
const displayedPages = computed(() => {
  const pages = [];

  if (totalPages.value <= 3) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value === 1) {
      pages.push(1, 2, 3);
    } else if (currentPage.value === totalPages.value) {
      pages.push(totalPages.value - 2, totalPages.value - 1, totalPages.value);
    } else {
      pages.push(
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1
      );
    }
  }

  return pages;
});

// Pagination functions
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// Handle page clicks
const handlePageClick = (page) => {
  currentPage.value = page;
};

// Fetch games when component mounts
onMounted(fetchGames);
</script>
<style scoped>
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

<template>
  <div class="p-6 bg-[#1A0B2E] pb-24">
    <div class="w-full max-w-[1440px] mx-auto">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center">
        <svg
          class="w-8 h-8 animate-spin text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </div>

      <!-- Error Message -->
      <p v-else-if="error" class="text-red-500">{{ error }}</p>

      <div v-else class="flex flex-col gap-4 lg:flex-row">
        <!-- Image Details -->
        <div class="flex flex-col xl:flex-row gap-10 w-full lg:w-[50%]">
          <ImagesCard />
        </div>
        
        <!-- Right Section Div -->
        <div class="flex flex-col w-full lg:w-[50%] xl:w-[75%]">
          <div class="flex flex-col gap-3 xl:flex-row justify-between">
            <h2 class="text-[#594D61] text-xl flex items-center mr-3">
              <!-- stars count -->
              <span class="pr-4">
                <!-- <h2 class="text-white flex items-center mr-3">
                  Filled stars -->
                  <span v-for="n in Math.round(game?.rating || 0)" :key="n">
                    <i class="fa fa-star text-yellow-300"></i>
                  </span>
                  
                  <!-- Empty stars -->
                  <span
                  v-for="n in (game?.rating_top || 5) -
                  Math.round(game?.rating || 0)"
                  :key="'empty-' + n"
                  >
                  <i class="fa fa-star text-gray-500"></i>
                </span>
                ({{ game?.reviews_text_count || 0 }} reviews)
                
                <!-- Show the rating count -->
                <!-- ({{ game?.rating || "N/A" }} / {{ game?.rating_top || 5 }})
              </h2> -->
            </span>
          </h2>
          <!-- reviews number -->

          <!-- Div of calender and google play -->
          <div
          class="flex gap-3 sm:flex-row sm:gap-10 text-xl"
          >
            <!-- game date -->
            <h2 class="text-[#594D61] ml-0 2xl:ml-4">
              <i class="fa fa-calendar pr-2"></i>
              {{
                game?.released ? moment(game.released).format("MMM  YY") : "N/A"
              }}
            </h2>
            <!-- google play icon -->
            <h2 class="text-[#594D61]">
              <i class="fa fa-gamepad pr-2" style="font-size: x-large"></i>
              Google Play
            </h2>
          </div>
        </div>
        <!-- game name -->
        <h2 class="text-white text-3xl font-bold my-4 uppercase">
          {{ game?.name || "Unknown Game" }}
        </h2>
        <!-- Creators Detail -->
        <div class="flex gap-5">
          <div>
            <h2 v-if="developerName" class="text-white text-lg mt-1">
              By <span class="text-[#E0BC30]">{{ developerName }} </span>
            </h2>
          </div>
          <!-- follow button -->
          <div class="flex items-center justify-center pt-0">
            <h2
            class="border border-[#594D61] text-[#594D61] py-0.5 w-fit px-3"
            >
            Follow
          </h2>
        </div>
      </div>
      <!-- description of the game -->
      <ul
      class="text-[#8D8793] my-4 font-bold list-disc list-outside pl-5 flex flex-col gap-3 truncate"
      >
      <li v-for="(point, index) in limitedDescription" :key="index" >
        {{ point }}
      </li>
    </ul>
    <!-- number with shape -->
    <div class="trapezoid2 text-lg pr-3">
      <i class="fa fa-link mr-1 rotate-810"></i> 29546548
    </div>
  </div>
</div>
</div>
</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import moment from "moment";
import { useRoute } from "vue-router";
import ImagesCard from "./ImagesCard.vue";

const route = useRoute();
const game = ref(null);
const screenshots = ref([]);
const loading = ref(true);
const error = ref(null);
const selectedImage = ref(null);
const developerName = ref("");
const fixedGallery = ref([]);

const limitedDescription = computed(() => {
  if (!game.value || !game.value.description_raw) return [];

  return game.value.description_raw
    .split(". ")
    .slice(0, 3)
    .map((sentence) => (sentence.length > 50 ? sentence.slice(0, 80) + "." : sentence.trim() + "."));
});


const fetchGameDetails = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${route.params.id}?key=20ab3549926347d0ae7a343a896a4973`
    );
    if (!response.ok) throw new Error("Failed to fetch game details");

    const data = await response.json();
    game.value = data;

    selectedImage.value =
      data.background_image || "https://via.placeholder.com/500";

    // Wait for screenshots API before setting fixedGallery
    await fetchScreenshots();

    // **Fix the gallery images at start (now with correct screenshots)**
    fixedGallery.value = [
      { image: selectedImage.value }, // Main image at start
      ...screenshots.value.slice(0, 2), // First 2 images
    ];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const fetchScreenshots = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${route.params.id}/screenshots?key=20ab3549926347d0ae7a343a896a4973`
    );
    if (!response.ok) throw new Error("Failed to fetch screenshots");

    const data = await response.json();
    screenshots.value = data.results || [];
  } catch (err) {
    error.value = err.message;
  }
};

const fetchDevelopmentTeam = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${route.params.id}/development-team?key=20ab3549926347d0ae7a343a896a4973`
    );
    if (!response.ok) throw new Error("Failed to fetch development team");
    const data = await response.json();

    // Store the first developer name or set a default
    developerName.value =
      data.results.length > 0 ? data.results[0].name : "Unknown Developer";
  } catch (err) {
    error.value = err.message;
  }
};
onMounted(async () => {
  await fetchGameDetails();
  await fetchScreenshots();
  await fetchDevelopmentTeam();
});
</script>

<style scoped>
.trapezoid2 {
  width: 150px;
  height: 40px;
  background-color: #d83e31;
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
/* @media screen and (min-width: 1280px) and (max-width: 1310px) {
  .textdesign {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 0px;
    padding-left: 0px;
  }
} */
</style>

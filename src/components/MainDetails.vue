<template>
  <div class="bg-[#1A0B2E] flex flex-between text-white px-8 pb-30 w-full pt-26">
    <div class="max-w-[1440px] w-full mx-auto overflow-hidden">
      <div class="flex flex-col gap-4">
        <h2 class="text-[#E0DAE2] text-2xl font-bold">explore and discover</h2>
        <h2 class="text-[#C93828] font-bold text-4xl pb-4">
          New Maps, Creatores & Experiences
        </h2>
      </div>
      <!-- Loading Indicator -->
    <div v-if="loading" class="flex justify-center items-center">
    <svg class="w-8 h-8 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    </div>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500">{{ error }}</p>

      <!-- Main Div  -->
      <div class="w-[100%] flex xl:flex-row flex-col xl:gap-6 gap-8 cardssetting">
        <div class="w-full xl:w-[60%]" >
          <VerticalGamesDisplay />
        </div>

        <!-- Top Right Div -->
        <div class=" xl:ml-8 border-[#3E344B] border-2 xl:mt-0 mt-8 rightbar w-full xl:w-[40%]">
          <!-- Buttons for switching content -->
          <div
            class="flex flex-col sm:flex-row gap-3 justify-around text-lg border-[#3E344B] border pt-8 pb-5"
          >
            <button
              @click="selectedTab = 'developers'"
              :class="
                selectedTab === 'developers'
                  ? 'text-white cursor-pointer'
                  : 'text-[#3A3144] hover:text-white cursor-pointer'
              "
              class="uppercase font-bold"
            >
              Top Developers
            </button>
            <button
              @click="selectedTab = 'studios'"
              :class="
                selectedTab === 'studios'
                  ? 'text-white cursor-pointer'
                  : 'text-[#3A3144] hover:text-white cursor-pointer'
              "
              class="uppercase font-bold hover:text-[#3A3144]"
            >
              Top Studios
            </button>
          </div>

          <!-- Conditional Rendering of Content -->
          <div class="w-full">
            <!-- Developers List -->
            <div v-if="selectedTab === 'developers'">
              <div
                v-for="(game, index) in games.slice(0,5)"
                :key="index"
                @click="navigateToGame(game.id)"
                class="flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md transition-all border border-[#362943] cursor-pointer"
              >
                <div class="w-full xl:min-w-[210px] mx-auto">
                  <div class="flex gap-10 px-4">
                    <img
                    :src="game.background_image"
                    alt="Game Image"
                    class="h-22 w-22 md:h-26 md:w-26 object-cover"
                    />
                    <div class="flex flex-col gap-2 truncate w-[160px] sm:w-[290px] md:w-full xl:w-[290px] overflow-x-auto">
                      <span class="trapezoid2 text-md md:text-xl font-bold text-[#E0DAE2]"
                      ># {{ index + 1 }}</span
                      >
                      <h2 class="text-sm md:text-xl font-bold uppercase truncate namedesign">
                        {{ game.name }}
                      </h2>
                      <h2 class="text-sm md:text-xl font-bold uppercase">
                        <i class="fa fa-play"></i> {{ game.playtime }}B
                      </h2>
                    </div>
                  </div>
                  <hr class="border-t mt-6 sm:w-[410px] ml-5 border-[#362943] transition-all duration-300 group-hover:opacity-0 lineincard">
                </div>
              </div>
            </div>
            
            <!-- Studios List -->
              <div v-if="selectedTab === 'studios'">
                <p v-if="loading" class="text-white">Loading...</p>
                <p v-if="error" class="text-red-500">{{ error }}</p>
                <div
                v-for="(studio, index) in studios.slice(0, 5)"
                :key="index"
                @click="navigateToGame(studio.id)"
                class="flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md transition-all border border-[#362943] w-full cursor-pointer"
                >
                <div class="w-full xl:min-w-[210px] mx-auto">

                  <div class="flex gap-10 px-4">
                    <img
                    :src="studio.background_image"
                    alt="Studio Image"
                    class="h-22 w-22 md:h-26 md:w-26 object-cover"
                    />
                    <!-- <h6>image: {{ studio.background_image }}</h6> -->
                    <div class="flex flex-col gap-2 truncate w-[160px] sm:w-[290px] md:w-full xl:w-[290px] overflow-x-auto">
                      <span class="trapezoid2 text-md md:text-xl font-bold text-[#E0DAE2]"
                      ># {{ index + 1 }}</span
                      >
                      <h2 class="text-md md:text-xl font-bold uppercase truncate">
                        {{ studio.name }}
                      </h2>
                      <h2 class="text-md md:text-xl font-bold uppercase">
                        <i class="fa fa-play"></i> {{ studio.playtime && studio.playtime !== 0 ? studio.playtime + 'B' : Math.floor(Math.random() * 15) + 1 + 'B' }}
                      </h2>
                    </div>
                  </div>
                  <hr class="border-t flex mt-6 sm:w-[410px] sm:ml-5 lg:ml-0 border-[#362943] transition-all duration-300 group-hover:opacity-0 lineincard">
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
import router from "../main";
import VerticalGamesDisplay from "./VerticalGamesDisplay.vue";

const selectedTab= ref('developers')
const API_KEY = "20ab3549926347d0ae7a343a896a4973";
const games = ref([]);
const developers = ref([]);
const studios = ref([]);

const errorGames = ref(null);
const errorDevelopers = ref(null);
const errorStudios = ref(null);

const loadingGames = ref(true);
const loadingDevelopers = ref(true);
const loadingStudio = ref(true);

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

//Fetching Developers data from API
const fetchDevelopers = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/developers?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch developers data");
    const data = await response.json();
    developers.value = data.results || [];
  } catch (err) {
    errorDevelopers.value = err.message;
  } finally {
    loadingDevelopers.value = false;
  }
};

//Fetching Studio data from API
const fetchStudiodata = async (gamePk) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games/${gamePk}/game-series?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch Studio data");
    const data = await response.json();
    studios.value = data.results || [];
  } catch (err) {
    errorStudios.value = err.message;
  } finally {
    loadingStudio.value = false;
  }
};
// router link to show image gallery onclick of card 
const navigateToGame = (gameId) => {
  router.push(`/game/${gameId}`); // Redirect to dynamic route
};

onMounted(async () => {
await fetchGames();
  await fetchDevelopers();

  if (games.value.length > 0) {
    fetchStudiodata(games.value[0].id);
  }
});
</script>

<style scoped>
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
.trapezoid2 {
  width: 55px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #d83e31; /* Adjust background color */
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
  background: #493d55; /*Track Color */
  border-radius: 8px; /* Rounded edges */
  width: 8px; /* Make thumb smaller than track to simulate padding */
  margin: 3px; /* Creates spacing effect */
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #493d55; /* Color on hover */
}

@media screen and (min-width: 360px) and (max-width: 510px) {
  .namedesign{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1410px) {
  /* .cardssetting{
    display: flex;
    flex-direction: column;
  } */
  .rightbar{
    width: 100%;
    margin-left: 0;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1450px) {
  .lineincard{
    width: 100%;
  }

}
</style>

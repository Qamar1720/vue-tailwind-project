<template>
  <div class="flex flex-col md:flex-row gap-3 md:gap-0 justify-between border border-[#362943]">
    <div class="flex gap-3 p-4 md:py-10">
      <div>
        <img :src="iconToplevel" alt="Loading Image" />
      </div>
      <div v-for="(game, index) in games.slice(0, 1)" :key="index">
        <h3 class="font-bold text-xl sm:text-3xl">
          {{ game.added?.toLocaleString() || 'N/A' }}
          <span class="uppercase font-bold text-lg sm:text-xl">(All Time Peak)</span>
        </h3>
      </div>
    </div>
    <div class="flex">
      <div class="flex space-x-2 pb-4 md:py-10">
        <button
          v-for="tab in ['today', 'week', 'month', 'all']"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            `px-4 rounded-lg cursor-pointer relative`,
            activeTab === tab
              ? 'text-[#DF3F2A] before:content-[\'\'] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[3px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-70'
              : 'text-[#71647E] hover:text-[#DF3F2A] hover:shadow-[#33132A] before:content-[\'\'] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[3px] before:bg-[#DF3F2A] before:transition-all before:duration-300 before:ease-in-out before:scale-0 hover:before:scale-70'
          ]"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>
    </div>
  </div>
  <div class="border text-center mb-4 border-[#362943]">
    <ChartMainData :chartData="getChartData" />
  </div>
</template>

<script setup>
import iconToplevel from "../../assets/pics/icon_toplevel.png";
import { ref, onMounted, computed } from "vue";
import ChartMainData from "./ChartMainData.vue";

const API_KEY = "20ab3549926347d0ae7a343a896a4973";
const games = ref([]);
const errorGames = ref(null);
const loadingGames = ref(true);
const activeTab = ref("today");

const fetchGames = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch games data");
    const data = await response.json();
    games.value = data.results || [];
  } catch (err) {
    errorGames.value = err.message;
  } finally {
    loadingGames.value = false;
  }
};

onMounted(async () => {
  await fetchGames();
});

const getChartData = computed(() => {
  const datasetOptions = {
    borderWidth: 2,
    fill: true,
  };

  const chartOptions = {
    labels: ['Portion 1', 'Portion 2', 'Portion 3', 'Portion 4', 'Portion 5'],
  };

  const dataMapping = {
    today: { label: 'Today', data: [0.5, 1, 1.5, 2, 1.2], backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)' },
    week: { label: 'Week', data: [1, 1.2, 1.4, 1.6, 1.8], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)' },
    month: { label: 'Month', data: [1.5, 1.6, 1.7, 1.8, 2.0], backgroundColor: 'rgba(153, 102, 255, 0.2)', borderColor: 'rgba(153, 102, 255, 1)' },
    all: { label: 'All', data: [2, 1.8, 1.6, 1.4, 1.2], backgroundColor: 'rgba(255, 206, 86, 0.2)', borderColor: 'rgba(255, 206, 86, 1)' },
  };

  return {
    ...chartOptions,
    datasets: [{ ...dataMapping[activeTab.value], ...datasetOptions }],
  };
});
</script>

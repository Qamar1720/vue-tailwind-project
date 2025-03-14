<template>
  <div class="flex flex-col md:flex-row gap-3 md:gap-0 justify-between border border-[#362943] bg-[#1A0B2E]">
    <div class="flex gap-3 p-4 md:py-10">
      <img :src="iconToplevel" alt="Loading Image" />
      <div v-if="games.length">
        <h3 class="font-bold text-xl sm:text-3xl text-white">
          {{ games[0].added?.toLocaleString() || 'N/A' }}
          <span class="uppercase font-bold text-lg sm:text-xl">(All Time Peak)</span>
        </h3>
      </div>
    </div>

    <div class="flex">
      <div class="flex space-x-2 pb-4 md:py-10">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="setActiveTab(tab)"
          :class="[
            'px-4 rounded-lg cursor-pointer relative',
            activeTab === tab
              ? 'text-[#DF3F2A] font-bold before:content-[\'\'] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[3px] before:bg-[#DF3F2A] before:scale-100'
              : 'text-[#71647E] hover:text-[#DF3F2A] hover:before:scale-100'
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
import { ref, onMounted, computed, watch } from "vue";
import ChartMainData from "./ChartMainData.vue";
import { Chart as ChartJS, registerables } from "chart.js"; 

const API_KEY = "20ab3549926347d0ae7a343a896a4973";
const games = ref([]);
const activeTab = ref("today");
const tabs = ["today", "week", "month", "all"];

const fetchGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch games data");
    const data = await response.json();
    games.value = data.results || [];
  } catch (err) {
    console.error(err);
  }
};

onMounted(fetchGames);

ChartJS.register(...registerables);

// Function to set active tab (ensures reactivity works)
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Computed property to dynamically get chart data
const getChartData = computed(() => {
  const ctx = document.createElement('canvas').getContext('2d');
  const labels = Array(12).fill(''); // X-axis labels

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "#2F3540");  // Start (Dark Gray)
  gradient.addColorStop(0.25, "#FDC878"); // Near Start (Light Orange)
  gradient.addColorStop(0.75, "#8CD7C0"); // Near End (Teal)
  gradient.addColorStop(1, "#2F3540");  // End (Dark Gray)
  gradient.addColorStop(0.5, "#F16161");  // Center (Red)

  const datasets = {
    today: { label: "Today", data: [1300000, 1600000, 1000000, 1400000, 1200000, 1800000, 600000, 1300000, 1200000, 1300000, 1300000, 1500000], borderColor: gradient, backgroundColor: "rgba(75, 192, 192, 0.2)" },
    week: { label: "Week", data: [1300000, 1100000, 1100000, 400000, 1900000, 1800000, 1200000, 1300000, 1500000, 1300000, 1300000, 1500000], borderColor: gradient, backgroundColor: "rgba(75, 192, 192, 0.2)" },
    month: { label: "Month", data: [1800000, 1200000, 1600000, 1800000, 1600000, 1400000, 1000000, 900000, 1200000, 1300000, 1300000, 1500000], borderColor: gradient, backgroundColor: "rgba(75, 192, 192, 0.2)" },
    all: { label: "All", data: [1500000, 1400000, 1000000, 2000000, 1200000, 1100000, 800000, 1300000, 1200000, 1300000, 1300000, 1500000], borderColor: gradient, backgroundColor: "rgba(75, 192, 192, 0.2)" },
  };

  return {
    labels,
    datasets: [datasets[activeTab.value]],
  };
});
</script>

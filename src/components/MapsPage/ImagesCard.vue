<template>
    <!-- Main Image -->
  <div
    class="flex flex-col gap-2"
  >
    <!-- Image Div -->
    <div class="bg-[#2E213B] xl:max-w-[900px]  h-[220px] sm:h-[300px] lg:h-[336px] xl:h-[300px] object-cover w-full p-2">
      <img :src="selectedImage" alt="Game Image" class="w-full object-cover h-[200px] sm:h-[282px] lg:h-[320px] xl:h-[282px]" />
    </div>
    <!-- Image Gallery  -->
    <div class="flex flex-wrap justify-center sm:justify-start gap-3 pt-2 mb-0">
      <img
      v-for="(image, index) in fixedGallery"
      :key="index"
      :src="image.image"
      alt="Game Screenshot"
      class="w-38 h-24 sm:h-22 object-cover cursor-pointer border-2 border-transparent hover:border-red-500 bg-[#2E213B] p-0.5"
      @click="selectedImage = image.image"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const game = ref(null);
const screenshots = ref([]);
const loading = ref(true);
const error = ref(null);
const selectedImage = ref(null);
const fixedGallery = ref([]);


const fetchGameDetails = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${route.params.id}?key=20ab3549926347d0ae7a343a896a4973`
    );
    if (!response.ok) throw new Error("Failed to fetch game details");

    const data = await response.json();
    game.value = data;

    selectedImage.value = data.background_image || "https://via.placeholder.com/500";

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

onMounted(async () => {
  await fetchGameDetails();
  await fetchScreenshots();
});
</script>

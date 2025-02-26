<template>
    <div class="w-full">
        <div class="max-w-[1440px] mx-auto">
            <div v-for="data in postData" :key="data.id" class="w-46 h-46 border-2">
                <img :src="data.background_image" alt="Game Image" class="w-full h-auto">
                <h1 class="text-xl font-bold">{{ data.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const postData = ref([])

const getPost = async () => {
    try {
        const response = await fetch('https://api.rawg.io/api/games/{id}');
        const data = await response.json();
        postData.value = data.results; // Extracting the `results` array
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

onMounted(() => {
    getPost();
});
</script>

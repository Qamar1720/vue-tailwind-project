<template>
    <!-- Main Container -->
    <div class="min-h-screen w-full">
        <div class="max-w-[1440px] w-full mx-auto flex flex-wrap py-10 px-4 md:px-10">
            <!-- Title Section (Uncomment if needed) -->
            <!-- <h1 class="text-4xl font-bold">Latest Maps</h1> -->

            <!-- Search Bar (Uncomment if needed) -->
            <!-- <div class="flex items-center w-full">
                <input type="search" placeholder="Sort by Top Concurrent" class="border p-2 rounded-md w-full sm:w-auto">
            </div> -->
        </div>

        <!-- Card Components Data -->
        <div class="max-w-[1440px] w-full mx-auto px-4 md:px-10">
            <MainBody />
        </div>
    </div>
</template>

<script>
import GameCard from '../components/templates/GameCard.vue'
import MainBody from '../components/MainBody.vue'

export default {
    components: {
        GameCard,
        MainBody
    }
}
</script>

<template>
    <div class="bg-[#1A0B2E] flex flex-between text-white px-8 w-full">
        <div class=" max-w-[1440px] w-full mx-auto">
            <div class="flex flex-col gap-4">
                <h2 class="text-[#E0DAE2] text-2xl font-bold">explore and discover</h2>
                <h2 class="text-[#C93828] font-bold text-4xl pb-4">New Maps, Creatores & Experiences</h2>
            </div>
                <!-- Center Sections -->
                 <!-- Loading Indicator -->
                <p v-if="loading" class="text-gray-400">Loading games...</p>

                <!-- Error Message -->
                <p v-if="error" class="text-red-500">{{ error }}</p>

                <!-- Main Games Details -->
                <div class="flex flex-col md:flex-row pt-8 lg:pt-0 bg-[#1A0B2E]">
                <div class="flex gap-4 w-[75%]">
                    <div>
                        <div>
                            <div v-for="game in games"
                                    :key="game.id"
                                    class="pb-6 mt-2 rounded-lg shadow-md bg-[#1A0B2E] hover:transition-all hover:duration-300 ease-in-out border-white py-3">
                                <div class="flex">
                                <!-- Trapezoid Shape -->
                                <!-- <div class="w-full flex justify-center">
                                    <div class="trapezoid flex items-center px-4 py-2 text-white text-xl font-bold">
                                        <i class="fa fa-link mr-1 rotate-810"></i> 01234-5678-4321
                                    </div>
                                </div> -->
                                <img
                                    :src="game.background_image"
                                    alt="Game Image"
                                    class="h-16 object-cover w-20 "
                                />
                                <div class="flex gap-4 text-white items-center justify-center">
                                    <div>
                                        <h2 class="text-xl md:text-2xl font-bold h-[40px] truncate">
                                            {{ game.name }}
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 class="text-xl md:text-2xl border font-bold">
                                            By Epic
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 class="text-xl md:text-2xl font-bold h-[40px] truncate">
                                            {{ game.released }}
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 class="text-xl md:text-2xl font-bold h-[40px] truncate">
                                            {{ game.ratings_count }}
                                        </h2>
                                    </div>

                                </div>
                                    
                                    <!-- <p class="text-sm md:text-lg lg:text-xl text-gray-300 font-bold">
                                    Released: {{ game.released }}
                                    </p> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 pt-8 sm:pt-0 w-[25%] ">
                    <h2 class="text-lg font-semibold mb-4">RESOURCES</h2>
                    <ul class="space-y-2 list-disc list-inside cursor-pointer">
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">News & Updates</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Top Studios</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Top Developers</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Event Calendars</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Skin Databases</li>
                    </ul>
                </div>                
            </div>                
        </div>                
        </div>                
    </div>
</template>
<script setup>
    import {ref, onMounted} from "vue"

    const API_KEY='20ab3549926347d0ae7a343a896a4973'
    const games= ref([])
    const loading= ref([true])
    const error= ref([null])

    //Fetch Games from API
    const fetchGames = async () => {
        try{
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
            if(!response.ok) throw new Error('Failed to fetch Data');
            const data = await response.json();
            games.value = data.results; //games data
        } catch(err){
            error.value= err.message; //games error
        } finally{
            loading.value= false;
        }
    }
    onMounted(fetchGames);

</script>

<style scoped>
  .trapezoid {
  width: full; 
  height: 70px; 
  clip-path: polygon(10% 10%, 100% 0%, 85% 100%, 15% 100%);
  display: flex;
  border-color: #3E344B;
  align-items: center;
  justify-content: center;
}
</style>
<template>
    <!-- Main Container -->
    <div class="min-h-screen w-full min-w-full">
        <div class="w-[1440px] mx-auto flex py-10 ">    
            <!-- <div class="w-[1440px] mx-auto ">
                <h1 class="text-4xl font-bold">Latest Maps</h1>
            </div> -->
            <!-- <div class=" flex items-center ">
                <input type="search" placeholder="Sort by Top Concurrent " class="border-transparent">
            </div> -->
        </div>
            <!-- Card Components Data -->
            <div class="flex w-[1440px] mx-auto">
                <MainBody/>
            </div>
            <div>
                <!-- <h1>hello pakistan</h1> -->
                <GameCard/>
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
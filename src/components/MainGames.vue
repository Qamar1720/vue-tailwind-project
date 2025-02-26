<template>
    <div class="min-h-screen w-full">
        <div class="w-[1440px] mx-auto flex py-10 justify-between">    
            <div class=" ">
                <h1 class="text-3xl font-bold">Latest Maps</h1>
            </div>
            <div class="border-2 flex items-center ">
                <input type="search" placeholder="Sort by Top Concurrent ">
            </div>
        </div>
            <div>
                <GameCard/>
            </div>
    </div>
</template>
<script>
    import GameCard from '../components/templates/GameCard.vue'

    export default {
    components: {
      GameCard,
    }
  }
</script>
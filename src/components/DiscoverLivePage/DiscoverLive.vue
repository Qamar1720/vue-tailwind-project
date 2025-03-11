<template>
    <!-- <h1 class="text-white text-center text-4xl font-bold p-10">
    {{ $route.meta.title || "Discover Live" }}
  </h1> -->
  <NumericGameCard />
  <NumericGamesCard2 />
  </template>
  
  <script>
  import NumericGameCard from "./NumericGameCard.vue";
  import NumericGamesCard2 from "./NumericGamesCard2.vue";
  
  export default {
    components: {
      NumericGameCard,
      NumericGamesCard2,
    },
  };
  </script>
  
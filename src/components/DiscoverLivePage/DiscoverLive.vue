<template>
  <!-- <h1 class="text-white text-center text-4xl font-bold p-10">
    {{ $route.meta.title || "Discover Live" }}
  </h1> -->
  <div class="bg-[#1A0B2E]">
    <div class="w-full max-w-[1440px] mx-auto bg-[#1A0B2E] pt-14">
      <h1 class="text-[#DC3F37] pl-5 sm:pl-0 font-bold text-3xl py-3">
        Live Graph of Concurrent Players
      </h1>
      <ChartTop2  />
    </div>
    <NumericGameCard />
    <NumericGamesCard2 />
  </div>
</template>

<script>
import ChartTop2 from "./ChartTop2.vue";
import NumericGameCard from "./NumericGameCard.vue";
import NumericGamesCard2 from "./NumericGamesCard2.vue";

export default {
  components: {
    ChartTop2,
    NumericGameCard,
    NumericGamesCard2,
  },
};
</script>

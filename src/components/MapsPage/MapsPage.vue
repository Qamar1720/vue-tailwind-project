<template>
  <div class="bg-[#1A0B2E]">
    <ImageGalary />
    <div class="w-full max-w-[1440px] mx-auto bg-[#1A0B2E]">
      <h1 class="text-[#DC3F37] pl-4 lg:pl-0 font-bold text-3xl py-3">
        Historical Play Volume
      </h1>
      <ChartTop2 class="px-2 sm:px-0"/>
    </div>
    <MoreMaps />
    <SimilarMaps />
  </div>
</template>
<script>
import ImageGalary from "./ImageGalary.vue";
import MoreMaps from "./MoreMaps.vue";
import SimilarMaps from "./SimilarMaps.vue";
import ChartTop2 from "../DiscoverLivePage/ChartTop2.vue";

export default {
  components: {
    ImageGalary,
    ChartTop2,
    MoreMaps,
    SimilarMaps,
  },
};
</script>

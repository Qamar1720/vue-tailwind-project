<template>
  
  <MainDetails />
  <!-- <StarsRating/> -->
  <MainBodyCards />
</template>

<script>
import MainDetails from "./MainDetails.vue";
// import StarsRating from "./StarsRating.vue";
import MainBodyCards from "./MainBodyCards.vue";

export default {
  components: {
    MainDetails,
    // StarsRating,
    MainBodyCards,
  },
};
</script>

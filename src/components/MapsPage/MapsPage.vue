<template>
  <ImageGalary/>
  <MoreMaps/>
  <SimilarMaps/>
</template>
<script>
  import ImageGalary from './ImageGalary.vue'
  import MoreMaps from './MoreMaps.vue'
  import SimilarMaps from './SimilarMaps.vue'
import ImageGalaryVue from './ImageGalary.vue'

  export default {
    components:{
      ImageGalary,
      MoreMaps,
      SimilarMaps
    }
  }
</script>
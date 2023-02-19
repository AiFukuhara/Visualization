<template>
<!--  <Distributon></Distributon>-->

  <RiseSun></RiseSun>
</template>

<script>

import {defineComponent} from "vue";
import SectorBenke from "@/components/SectorBenke.vue";
import Distributon from "@/components/Distributon.vue";
import RiseSun from "@/components/RiseSun.vue";

export default defineComponent({
  components: {RiseSun, Distributon, SectorBenke}
})
</script>

<style scoped>

</style>
<template>
<!--  <Distributon></Distributon>-->

  <div class="common-layout">
    <el-container style="width: 1400px;left: 0px">
      <el-header style="left: 0px;height: 150px;background-image: url(src/assets/zhaoshengtop.png);background-size: cover"></el-header>
      <el-container>
        <el-aside width="560px" style="height: 1180px;background-image: url(src/assets/chartbackgroud.png)">
          <RiseSun style="left: 0px;top: 0px;"></RiseSun>
          <SectorBenke style="left: 0px;top: 0px;"></SectorBenke>
        </el-aside>
        <el-container>
          <el-main style="height: 1150px;background-image: url(src/assets/chartbackgroud.png)">
            <Distributon style="left: 0px;top: 50px"></Distributon>
            <Recruit style="top: 260px;"></Recruit>
          </el-main>
          <el-footer style="height: 30px;background-image: url(src/assets/chartbackgroud.png)"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>




</template>

<script>

import {defineComponent} from "vue";
import SectorBenke from "@/components/SectorBenke.vue";
import Distributon from "@/components/Distributon.vue";
import RiseSun from "@/components/RiseSun.vue";
import Recruit from "@/components/Recruit.vue";

export default defineComponent({
  components: {Recruit, RiseSun, Distributon, SectorBenke}
})
</script>

<style scoped>

</style>
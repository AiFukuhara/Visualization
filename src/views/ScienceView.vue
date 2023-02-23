<template>
  <!--  <Distributon></Distributon>-->

  <div class="common-layout">
    <el-container style="width: 1437px;left: 0px">
      <el-header style="left: 0px;height: 150px;background-image: url(src/assets/zhaoshengtop.png);background-size: cover"></el-header>
      <el-container>
        <el-aside width="560px" style="height: 1180px;background-image: url(src/assets/chartbackgroud.png)">
          <Sicence style="left: 0px;top: 0px;"></Sicence>
        </el-aside>
      </el-container>
    </el-container>
  </div>




</template>

<script>

import {defineComponent} from "vue";

import Sicence from "@/components/Sicence.vue";

export default defineComponent({
  components: {Sicence}
})
</script>

<style scoped>

</style>
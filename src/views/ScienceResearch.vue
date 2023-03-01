<template>
  <el-container>
    <el-header style="background-image: url(src/assets/sciback.png);height: 150px;width: 1500px;background-repeat: no-repeat;background-size: 1500px;background-position-y: -20px">
    </el-header>
    <el-container>
      <el-aside width="600px" style="background-image: url(src/assets/chartbackgroud.png)">
        <Sciterm style="top: 0px;left: 0px"></Sciterm>
      </el-aside>
      <el-container style="left: 0px">
        <el-main style="left: 0px;background-image: url(src/assets/chartbackgroud.png)">
          <Square style="left: 120px;top: 0px;"></Square>
<!--          <Srdis style="top: 0px;left: 0px"></Srdis>-->
        </el-main>
      </el-container>
    </el-container>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script setup>

import Srdis from "@/components/Srdis.vue";
import Sciterm from "@/components/Sciterm.vue";
import Square from "@/components/Square.vue";
</script>
<style scoped>

</style>
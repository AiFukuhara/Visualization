<template>
  <div style="left: 0px;top:0px;height: 200px;width: 1500px;background-image: url(src/assets/jisuanji.png);background-size: 1500px;background-repeat: no-repeat"></div>

  <div class="about">
    <div style="width: 500px;height: 100px;">
      <p style="font-size: 18px;text-align: justify;width: 580px;line-height:50px"> 从1994年开始培养计算机人才，1999年成立计算机系,2000年西南工学院与绵阳经济技术高等专科学校合并组建成立西南科技大学后更名为计算机科学与技术学院。学院现有计算机科学与技术、软件工程2个一级学科硕士学位授权点，拥有电子信息专业硕士学位点（计算机技术领域），拥有计算机系统结构、计算机应用技术、信息安全、可视化与人机交互、领域软件工程、软件服务工程6个二级学科，拥有国防特色学科方向1个。现有软件工程、计算机科学与技术、信息安全、医学影像技术4个本科专业，其中软件工程专业为国家一流本科专业建设点、“国家卓越工程师教育培养计划”专业、四川省特色专业，计算机科学与技术专业为国家一流本科专业建设点、“四川省卓越工程师教育培养计划”专业、四川省特色专业、学校“8111品牌”专业，信息安全专业入选2021年四川省一流本科专业建设点。
      </p>
    </div>
    <img src="src/assets/computer.png" width="800" height="540"  alt="" id="computer"/>


  </div>

  <div id="bar" style="width: 500px;height: 600px"></div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    color: #181815;
    background-image: url(src/assets/chartbackgroud.png)

  }
}
</style>
<style type="text/css">
#computer{
  position:absolute;
  left:600px;
  top:20px;
}
</style>
<script setup lang="ts">
import SectorBenke from "@/components/SectorBenke.vue";
import PhProgressBar from 'ph-progress-bar'
</script>
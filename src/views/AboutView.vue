<template>
  <div class="about">
    <h3>从1994年开始培养计算机人才，1999年成立计算机系,2000年西南工学院与绵阳经济技术高等专科学校合并组建成立西南科技大学后更名为计算机科学与技术学院。学院现有计算机科学与技术、软件工程2个一级学科硕士学位授权点，拥有电子信息专业硕士学位点（计算机技术领域），拥有计算机系统结构、计算机应用技术、信息安全、可视化与人机交互、领域软件工程、软件服务工程6个二级学科，拥有国防特色学科方向1个。现有软件工程、计算机科学与技术、信息安全、医学影像技术4个本科专业，其中软件工程专业为国家一流本科专业建设点、“国家卓越工程师教育培养计划”专业、四川省特色专业，计算机科学与技术专业为国家一流本科专业建设点、“四川省卓越工程师教育培养计划”专业、四川省特色专业、学校“8111品牌”专业，信息安全专业入选2021年四川省一流本科专业建设点。

      学院拥有一支学历高、经验丰富的师资队伍。现有教职工128人，其中专任教师105人,具有高级职称教师45人，其中正高职称10人，副高职称35人，有博士39人，5名教师获得海外学位，19名教师有一年以上海外学习工作经历。四川省“千人计划”1人，四川省“突贡”专家2人，四川省学术与技术带头人1人，四川省学术与技术带头人后备人选4人，绵阳市“4+3"高端成长型战略新兴产业领军人才3人。二级教授1人，硕士生导师78人(含院外)。有中国计算机学会会员的教师117人。另外，学院从董事单位聘任科研水平高、实践经验丰富的兼职教师58人。

  ！</h3>
    <img src="src/assets/computer.png" width="860" height="580"  alt="" id="computer"/>
  </div>

  <div id="bar" style="width: 500px;height: 600px"></div>


<!--  <ph-progress-bar-->
<!--      :value="0"-->
<!--      :max="100"-->
<!--      format="当前进度：v/m"-->
<!--  ></ph-progress-bar>-->
<!--  <p> demo1 </p>-->
<!--  <ph-progress-bar-->
<!--      :value="10"-->
<!--      :max="100"-->
<!--      format="进度：%"-->
<!--  ></ph-progress-bar>-->

</template>

<style>
@media (min-width: 1000px) {
  .about {
    min-height: 100vh;
    width: 600px;
    display: flex;
    align-items: center;
    color: #8e0909;
    background-image: url(src/assets/chartbackgroud.png);
  }
}
</style>
<style type="text/css">
#computer{
  position:absolute;
  left:600px;
  top:50px;
}
</style>
<script setup lang="ts">
import SectorBenke from "@/components/SectorBenke.vue";
</script>
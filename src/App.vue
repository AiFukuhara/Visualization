<template>
  <!--页眉-->
  <div class="home">
    <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
router.push("/homepage")
// router.push("/about")
</script>

<style>

</style>

<template>
  <div class="three-container" ref="threeTarget"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TEngine } from "./three/TEngine";
import { objects } from "./three/TBasicObject";
import { lightList } from "./three/TLight";
import { helperList } from "./three/THelper";
const threeTarget = ref();

onMounted(() => {
  const tEngine = new TEngine(threeTarget.value);
  tEngine.addObjects(...objects, ...lightList, ...helperList);
});
</script>
<style scoped>
.three-container {
  width: 100%;
  height: 100%;
}
</style>

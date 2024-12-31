<!--
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:48:53
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-29 12:49:06
-->
<template>
  <div class="custom-node">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const title = ref("自定义节点标题")
const description = ref("自定义节点描述")
</script>

<style scoped>
.custom-node {
  border: 1px solid #000;
  padding: 10px;
  background-color: #fff;
}
</style>


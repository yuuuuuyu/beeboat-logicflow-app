<!--
 * @Description: 
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-01-02 21:59:29
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-02 22:00:16
-->
<script setup lang="ts">
import { useNodeBase } from "../hook/index"
const { Graph, Node, data, selectedToClassName } = useNodeBase()
</script>
<template>
  <div class="node-list-parent" :class="selectedToClassName">
    <div class="node-list-component-content" :style="data?.styles">
      {{ data.label }}
    </div>
  </div>
</template>
<style scoped>
.node-list-parent {
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: relative;
}

.node-list-component-content {
  background: #73b923;
  width: 100%;
  height: 100%;
  color: #333;
  font-size: 14px;
}
.node-list-selected:after {
  content: "Select";
  position: absolute;
  font-size: 12px;
  line-height: 12px;
  padding: 1px 2px 2px;
  background: #fa6ba9;
  border-radius: 5px;
  top: -18px;
  right: 4px;
  color: #fff;
}
</style>


<!--
 * @Description: 
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-01-02 21:59:29
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-03 17:49:34
-->
<template>
  <!-- <div class="node-list-parent" :class="selectedToClassName">
    <div class="node-list-component-content" :style="data?.styles">
      {{ data.label }}
    </div>
  </div> -->
  <div class="node-container">
    <div class="node-item__icon"></div>
    <div class="node-item__name">变量赋值</div>
    <div class="node-item__tips"></div>
    <div class="node-item__option"></div>
  </div>
</template>
<script setup lang="ts">
import { useNodeBase } from "../hook/index"
const { Graph, Node, data, selectedToClassName } = useNodeBase()

const openOption = e => {
  e.preventDefault()
}
</script>
<style scoped lang="scss">
.node-container {
  width: 200px;
  height: 50px;
  background-color: #fff;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .node-item__icon {
    width: 34px;
    height: 34px;
    background-color: red;
    margin-right: 8px;
    background: url("https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original")
      center/cover no-repeat;
  }
  .node-item__name {
    height: 100%;
    flex: 1;
    margin-right: 8px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: #333;
    font-size: 12px;
  }
  .node-item__tips {
    width: 16px;
    height: 16px;
    background-color: red;
    margin-right: 8px;
    background: url("https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ")
      no-repeat center center / 100% 100%;
  }
  .node-item__option {
    width: 3px;
    height: 15px;
    margin: 0 8px;
    background-color: red;
    cursor: pointer;
    background: url("https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*tFw7SIy-ttQAAAAAAAAAAAAADtOHAQ/original")
      no-repeat center center / 100% 100%;
  }
}

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


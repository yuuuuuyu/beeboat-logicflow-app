<!--
 * @Description: 
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 08:32:49
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-02 22:08:50
-->
<template>
  <el-drawer
    class="btp-logicflow-drawer"
    :direction="direction"
    size="80%"
    v-model="drawerVisible"
    :before-close="handleClose"
  >
    <template #header>
      <div class="btp-drawer__header--title">流程编排/组件选择占位</div>
    </template>
    <template #default>
      <div class="container">
        <div class="app-stencil" ref="stencilRef" />
        <div class="app-container" ref="blfRef"></div>
      </div>
      <TeleportContainer />
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button type="primary" :icon="Check" @click="confirmClick"
          >保存</el-button
        >
        <el-button type="info" plain :icon="CopyDocument" @click="confirmClick"
          >复制</el-button
        >
        <el-button type="info" plain :icon="DocumentAdd" @click="confirmClick"
          >粘贴</el-button
        >
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch, defineComponent } from "vue"
import { ElMessageBox } from "element-plus"
import type { DrawerProps } from "element-plus"
import { Check, CopyDocument, DocumentAdd } from "@element-plus/icons-vue"

import BtpLogicFlow from "./index"

// 用于自定义节点
import { getTeleport } from "@antv/x6-vue-shape"
const TeleportContainer = getTeleport()

const blfRef = ref<HTMLDivElement>()
const stencilRef = ref<HTMLDivElement>()
const blf = ref<BtpLogicFlow>()

const emit = defineEmits(["update:value"])
const props = defineProps({
  value: {
    type: Boolean,
  },
})
const drawerVisible = ref(props.value)
const direction = ref<DrawerProps["direction"]>("rtl")
const confirmClick = () => {
  const a = blf.value?.toJSON()
  console.log(a)
}
const handleClose = () => {
  emit("update:value", false)
}

const data = {
  nodes: [
    {
      id: "node1",
      shape: "rect",
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: "hello",
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: "node2",
      shape: "rect",
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: "world",
      attrs: {
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: "edge",
      source: "node1",
      target: "node2",
      label: "x6",
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    },
  ],
}
// ------------------------------
watch(
  () => props.value,
  value => {
    drawerVisible.value = value
    if (value) {
      nextTick(() => {
        blf.value = new BtpLogicFlow(
          {
            container: blfRef.value,
            stencilContainer: stencilRef.value,
          },
          data
        )
      })
    }
  },
  {
    immediate: false,
    deep: true,
  }
)
// ------------------------------
</script>

